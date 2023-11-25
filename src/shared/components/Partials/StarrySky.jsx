import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarrySky = () => {
  const containerRef = useRef(null);
  let scene, camera, renderer;
  let stars = [];
  let blinkingStar = null; // Reference to the star to blink
  let isStarVisible = true; // Flag to track star visibility

  const init = () => {
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

    animate();
  };

  const animate = () => {
    requestAnimationFrame(animate);

    stars.forEach((star) => {
      star.rotation.x += 0.001;
      star.rotation.y += 0.001;
    });

    renderer.render(scene, camera);
  };

  const changeStarPosition = () => {
    if (blinkingStar) {
      blinkingStar.visible = isStarVisible;
      isStarVisible = !isStarVisible;
    }

    stars.forEach((star) => {
      if (star !== blinkingStar) {
        star.position.x = Math.random() * 100 - 50;
        star.position.y = Math.random() * 100 - 50;
        star.position.z = Math.random() * 100 - 50;
      }
    });
  };

  useEffect(() => {
    init();

    const interval = setInterval(() => {
      changeStarPosition();
    }, 3500);

    blinkingStar = stars[Math.floor(Math.random() * stars.length)];

    setTimeout(() => {
      clearInterval(interval);
      blinkingStar.visible = true;
    }, 500)

    const handleWindowResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearInterval(interval);
      stars.forEach((star) => {
        scene.remove(star);
        star.geometry.dispose();
        star.material.dispose();
      });
      renderer.dispose();
    };
  }, []);


  return <div ref={containerRef} />;
};

export default StarrySky;
