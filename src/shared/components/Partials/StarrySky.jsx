import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarrySky = ({ className }) => {
  const canvasRef = useRef(null);
  let animationId = null;

  useEffect(() => {
    let scene, camera, renderer, stars;

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
      camera.position.z = 1000; // Move the camera further for a wider view of stars

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Set background to transparent

      const starGeometry = new THREE.SphereGeometry(1, 32, 32); // Larger stars
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfffafa }); // White stars

      stars = [];
      for (let i = 0; i < 1500; i++) { // Increased number of stars
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.x = (Math.random() - 0.5) * 2000; // Spread stars in a wider range
        star.position.y = (Math.random() - 0.5) * 2000;
        star.position.z = (Math.random() - 0.5) * 2000;
        scene.add(star);
        stars.push(star);
      }
    }

    function animateStars() {
      animationId = requestAnimationFrame(animateStars);

      stars.forEach((star, index) => {
        star.rotation.x += 0.001;
        star.rotation.y += 0.001;

        // Add parallax effect for depth
        star.position.z += index / 1000;

        if (star.position.z > 1000) {
          star.position.z = -1000; // Reset stars' position when they move out of view
        }
      });

      renderer.render(scene, camera);
    }

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
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default StarrySky;
