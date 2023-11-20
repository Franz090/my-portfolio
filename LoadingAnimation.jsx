import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import useDarkModeHook from './src/hooks/useDarkmodehook'; 

const LoadingAnimation = () => {
  const containerRef = useRef(null);
  const renderer = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const animationRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { isDarkMode } = useDarkModeHook('loadingAnimation'); 

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.current.domElement);

    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.current.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: isDarkMode ? 0x333333 : 0xffffff }); // Adjust color based on dark mode
    const cube = new THREE.Mesh(geometry, material);
    scene.current.add(cube);

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.current.render(scene.current, camera.current);
    };

    const simulateLoading = () => {
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              animate();
            }, 1000);
          }
          return Math.min(newProgress, 100);
        });
      }, 30);
    };

    simulateLoading();

    return () => {
      cancelAnimationFrame(animationRef.current);
      if (container && renderer.current) {
        container.removeChild(renderer.current.domElement);
      }
    };
  }, [isDarkMode]);

  return (
    <div className={`flex justify-center items-center h-screen ${isDarkMode ? 'dark-theme' : 'light-theme'}`} ref={containerRef}>
      <div className="loading-container">
        <div className="progress-wrapper">
          <progress
            className={`loading-progress ${isDarkMode ? 'dark-mode-progress' : 'light-mode-progress'} ${
              loadingProgress > 10 && loadingProgress <= 50 ? 'medium-progress' : loadingProgress > 50 ? 'high-progress' : ''
            }`}
            value={loadingProgress}
            max={100}
          ></progress>
          <p className={`loading-text text-center font-montserrat subpixel-antialiased ${isDarkMode ? 'dark-text' : 'light-text'}`}>
            Loading {loadingProgress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
