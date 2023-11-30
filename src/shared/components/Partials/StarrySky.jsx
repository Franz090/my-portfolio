import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarrySky = ({ className }) => {
  const canvasRef = useRef(null);
  let animationId = null;

  useEffect(() => {
    let scene, camera, renderer, stars;

    // Initialize Three.js scene
    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 100;

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearAlpha(0);

      // Create stars
      const starGeometry = new THREE.SphereGeometry(0.1, 10, 10);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfffafa });

      stars = [];
      for (let i = 0; i < 1000; i++) {
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.x = Math.random() * 1000 - 500;
        star.position.y = Math.random() * 1000 - 500;
        star.position.z = Math.random() * 1000 - 500;
        scene.add(star);
        stars.push(star);
      }
    }

    // Animate the stars
    function animateStars() {
      animationId = requestAnimationFrame(animateStars);

      // Rotate and update stars
      stars.forEach((star) => {
        star.rotation.x += 0.001;
        star.rotation.y += 0.001;
        star.position.z += 0.5;

        if (star.position.z > 200) {
          star.position.z = -200;
        }
      });

      renderer.render(scene, camera);
    }

    // Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    if (canvasRef.current) {
      init();
      animateStars();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      cancelAnimationFrame(animationId); // Cancel animation frame when unmounting
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose(); // Dispose of renderer resources
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={className}  />;

};

export default StarrySky;
