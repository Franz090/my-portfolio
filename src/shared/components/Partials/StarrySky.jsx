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
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import useSkyVisible from '../../../store/useSkyVisibleStore'
const StarrySky = () => {
  const containerRef = useRef(null);
  let scene, camera, renderer;
  let stars = [];
  let blinkingStar = null; // Reference to the star to blink
  let isStarVisible = true; // Flag to track star visibility
  const { isSkyVisible, setIsSkyVisible } = useSkyVisible();

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
    }, 500);

    blinkingStar = stars[Math.floor(Math.random() * stars.length)];

    setTimeout(() => {
      clearInterval(interval);
      blinkingStar.visible = true;
    }, 500)
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const excludedElements = ['INPUT', 'TEXTAREA', 'BUTTON','IMG']; // Add other elements as needed
      const isExcluded = excludedElements.some(tag => event.target.tagName === tag);
      const isOutsideStarrySky = !containerRef.current.contains(event.target);
      const resumeElement1 = document.querySelector('.resume-element-1'); 
      const resumeElement2 = document.querySelector('.resume-element-2'); 

      const isInsideResume1 = resumeElement1 && resumeElement1.contains(event.target); 
      const isInsideResume2 = resumeElement2 && resumeElement2.contains(event.target); 
      
      // Check if cursor is outside the submit button
      const submitButton = document.getElementById('submit-button');
      const submitButtonRect = submitButton.getBoundingClientRect();
      const isInsideSubmitButton =
        clientX >= submitButtonRect.left &&
        clientX <= submitButtonRect.right &&
        clientY >= submitButtonRect.top &&
        clientY <= submitButtonRect.bottom;
      
      // Check if cursor is inside any FontAwesome icon
      const footerIcons = document.querySelectorAll('.border-color'); // Adjust this selector based on your FontAwesome icon class
      const isInsideIcon = Array.from(footerIcons).some(icon => icon.contains(event.target));
    
      if (!isExcluded && isOutsideStarrySky && !isInsideSubmitButton && !isInsideIcon && !isInsideResume1 && !isInsideResume2)  {
        const mouseX = (clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(clientY / window.innerHeight) * 2 + 1;
    
        // Update camera position based on cursor movement
        camera.position.x = mouseX * 50;
        camera.position.y = mouseY * 50;
    
        camera.lookAt(scene.position);
      }
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
