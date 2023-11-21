import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProgressBar = ({ progress }) => {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  useEffect(() => {
    // Set up Three.js scene
    const container = containerRef.current;
    camera.position.z = 5;

    // Create progress bar geometry
    const progressBarGeometry = new THREE.BoxGeometry(1, 0.1, 0.1); // Width, Height, Depth
    progressBarGeometry.scale(1, 10, 1); // Scale height to 10px

    const progressBarMaterial = new THREE.MeshBasicMaterial({ color: 'blue' }); // Change color here
    const progressBarMesh = new THREE.Mesh(progressBarGeometry, progressBarMaterial);
    scene.add(progressBarMesh);

    // Set up renderer
    renderer.setSize(window.innerWidth, 5); // Adjust height and width as needed
    container.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update progress bar scale based on 'progress' prop
      progressBarMesh.scale.x = progress; // Adjust the axis depending on how you want the bar to grow

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up Three.js scene
      scene.remove(progressBarMesh);
      renderer.dispose();
    };
  }, [progress]);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }} />;
};

export default ProgressBar;
