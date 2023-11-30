import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import  useStarrySkyStore  from '../../../store/useStarrySkyStore'; 

let activeStarrySky = null;

const StarrySky = ({ className, visible }) => {
  const canvasRef = useRef(null);
  const { isLoaded, setIsLoaded } = useStarrySkyStore(); 
  const animationId = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, stars;

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
      camera.position.z = 1000;

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      const starGeometry = new THREE.SphereGeometry(1, 32, 32);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfffafa });

      stars = [];
      for (let i = 0; i < 1200; i++) {
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.x = (Math.random() - 0.5) * 2000;
        star.position.y = (Math.random() - 0.5) * 2000;
        star.position.z = (Math.random() - 0.5) * 2000;
        scene.add(star);
        stars.push(star);
      }

      setIsLoaded(true);
    }

    function animateStars() {
      animationId.current = requestAnimationFrame(animateStars);

      stars.forEach((star, index) => {
        star.rotation.x += 0.001;
        star.rotation.y += 0.001;
        star.position.z += index / 1000;

        if (star.position.z > 1000) {
          star.position.z = -1000;
        }
      });

      renderer.render(scene, camera);
    }

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    if (activeStarrySky && activeStarrySky !== canvasRef.current) {
      cancelAnimationFrame(animationId.current);
      activeStarrySky = null;
    }

    activeStarrySky = canvasRef.current;

    init();
    animateStars();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId.current);
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [visible, setIsLoaded]);

  const canvasStyle = {
    transition: 'opacity 2s',
    opacity: isLoaded && visible ? 1 : 0,
    pointerEvents: isLoaded && visible ? 'auto' : 'none',
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={canvasStyle}
    />
  );
};

export default StarrySky;