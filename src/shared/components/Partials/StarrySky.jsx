const throttle = (func, limit) => {
  let inThrottle = false;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
import React, { useEffect, useRef,useState } from 'react';
import * as THREE from 'three';

const StarrySky = () => {
  const containerRef = useRef(null);
  let scene, camera, renderer;
  let stars = [];
  let blinkingStar = null; // Reference to the star to blink
  let isStarVisible = true; // Flag to track star visibility
  const [isSkyVisible, setIsSkyVisible] = useState(false);

  const changeSkyPosition = () => {
    // Change the camera position after 3 seconds
    setTimeout(() => {
      camera.position.x = Math.random() * 100 - 50;
      camera.position.y = Math.random() * 100 - 50;
      camera.position.z = Math.random() * 100 - 50;
    }, 3000);
  };

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
    changeSkyPosition();
    animate();
    setTimeout(() => {
      setIsSkyVisible(true);
    }, 2000);
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
    }, 3000);

    blinkingStar = stars[Math.floor(Math.random() * stars.length)];

    setTimeout(() => {
      clearInterval(interval);
      blinkingStar.visible = true;
    }, 500)
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Calculate normalized device coordinates (-1 to 1) from cursor position
      const mouseX = (clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(clientY / window.innerHeight) * 2 + 1;

      // Update camera position based on cursor movement
      camera.position.x = mouseX * 50;
      camera.position.y = mouseY * 50;

      camera.lookAt(scene.position); // Keep camera focused on the scene center
    };

    // Event listener for cursor movement
    const handleMouseMoveThrottled = throttle(handleMouseMove, 100); // Throttle the mousemove event

    window.addEventListener('mousemove', handleMouseMoveThrottled);

    const handleWindowResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('mousemove', handleMouseMoveThrottled);
      clearInterval(interval);
      stars.forEach((star) => {
        scene.remove(star);
        star.geometry.dispose();
        star.material.dispose();
      });
      renderer.dispose();
    };
  }, []);


  return <div ref={containerRef}  style={{
    opacity: isSkyVisible ? 1 : 0, // Apply opacity based on visibility
    transition: 'opacity 1s', // Transition effect
  }} />;
};

export default StarrySky;
