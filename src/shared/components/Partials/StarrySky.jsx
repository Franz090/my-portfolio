import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import useSkyVisible from '../../../store/useSkyVisibleStore';
import useDarkModeHook from '../../../hooks/useDarkmodehook'; 

const StarrySky = () => {
  const containerRef = useRef(null);
  let scene, camera, renderer;
  let stars = [];

  const { setIsSkyVisible } = useSkyVisible();
  const { isDarkMode } = useDarkModeHook();

  const init = () => {
    if (!isDarkMode) {
      return;
    }
    // Create scene
    scene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute'; // Set position to fixed
    renderer.domElement.style.top = '0'; // Cover the entire viewport
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    containerRef.current.appendChild(renderer.domElement);

    const starGeometry = new THREE.SphereGeometry(0.05, 24, 24); // Decrease the radius value to make stars smaller
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfffafa });

    for (let i = 0; i < 200; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.x = Math.random() * 100 - 50;
      star.position.y = Math.random() * 100 - 50;
      star.position.z = Math.random() * 100 - 50;
      stars.push(star);
      scene.add(star);
    }
    animateStars();
    setTimeout(() => {
      setIsSkyVisible(true);
    }, 2000);
  };

  const animateStars = () => {
    stars.forEach((star) => {
      star.rotation.x += 0.001;
      star.rotation.y += 0.001;

      star.position.x += Math.random() * 0.1 - 0.05;
      star.position.y += Math.random() * 0.1 - 0.05;
      star.position.z += Math.random() * 0.1 - 0.05;

      // Wrap star positions to keep them within a certain range
      if (star.position.x < -50 || star.position.x > 50) {
        star.position.x = Math.random() * 100 - 50;
      }
      if (star.position.y < -50 || star.position.y > 50) {
        star.position.y = Math.random() * 100 - 50;
      }
      if (star.position.z < -50 || star.position.z > 50) {
        star.position.z = Math.random() * 100 - 50;
      }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(animateStars);
  };

  useEffect(() => {
    init();

    return () => {
      stars.forEach((star) => {
        scene.remove(star);
        star.geometry.dispose();
        star.material.dispose();
      });
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [isDarkMode]);

  return (
    <div
    ref={containerRef}
    style={{
      opacity: isDarkMode ? 1 : 0, // Show only if in dark mode
      transition: 'opacity 1s', // Transition effect (if needed)
    }}
  />
  );
};

export default StarrySky;