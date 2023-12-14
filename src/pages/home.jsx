import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useAnimationStore from '../store/useAnimationStore';
import myimg from '../assets/images/my-profile.png';


function HomePage() {
  const [index, setIndex] = useState(0);
  const [completedAnimations, setCompletedAnimations] = useState(0);
  const [frontendAnimation, setFrontendAnimation] = useState(false);
  const [shineLight, setShineLight] = useState(false); 

  const { startAnimation, setStartAnimation, stopAnimation, setIsJumping,homeLinkClicked, showImage, setShowImage,setCurrentPage} = useAnimationStore();
 
  const developerText = 'DEVELOPER';

  const imageSpring = useSpring({
    opacity: showImage ? 1 : 0,
    transform: showImage ? 'translateY(0)' : 'translateY(-100%)', // Change translateY value
    config: { duration: 800 },
  });
  useEffect(() => {
    setCurrentPage('/');
  }, [setCurrentPage]);

  useEffect(() => {
    // Set a delay to show the image after a certain time
    const showImageTimeout = setTimeout(() => {
      setShowImage(true);
    }, 500);

    return () => clearTimeout(showImageTimeout);
  }, []);

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');
    if (!hasReloaded) {
      setStartAnimation(false);
      localStorage.setItem('hasReloaded', 'true');
    } else {
      setStartAnimation(true);
    }

    const animationTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    return () => {
      clearTimeout(animationTimer);
    };
  }, []); // Run this effect only once on initial render

  const slideHideProps = useSpring({
    from: { opacity: 1, transform: 'translateX(0)' },
    to: { opacity: 0, transform: 'translateX(-100%)' },
    config: { duration: 800 },
    delay: 500, // Adjust the delay as needed
  });

  const slideShowProps = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 800 },
    delay: 600, // Adjust the delay as needed
  });

  const jumpProps = useSpring({
    from: { y: 0 },
    to: { y: 30 },
    reset: true,
    reverse: true,
    config: { duration: 100 },
    delay: index === 0 ? 2000 : 0,
    onRest: () => {
      if (startAnimation && completedAnimations < developerText.length - 1) {
        setIndex((i) => (i + 1) % developerText.length);
        setCompletedAnimations((count) => count + 1);
        setIsJumping(true); // Trigger jump animation using Zustand
      } else {
        setIsJumping(false); // Reset jump animation using Zustand
      }
    },
  });

  const shouldJump = (i) => {
    const jumpingIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
      jumpingIndices.includes(i) &&
      !homeLinkClicked &&
      useAnimationStore.getState().isJumping // Read isJumping state from Zustand
    );
  };
  useEffect(() => {
    if (stopAnimation || useAnimationStore.getState().homeLinkClicked) {
      setIsJumping(false); // Reset Zustand state for jumping animation
    }
  }, [index, startAnimation, stopAnimation]);
  
  useEffect(() => {
    setFrontendAnimation(true); // Start the animation after the component mounts
  
    // Stop the animation after 3 seconds
    const stopAnimationTimeout = setTimeout(() => {
      setFrontendAnimation(true);
    }, 3000);
  
    return () => {
      clearTimeout(stopAnimationTimeout);
    };
  }, []);

  useEffect(() => {
    setFrontendAnimation(true); // Start the animation after the component mounts

    // Add shining light effect by toggling the state at intervals
    const shiningInterval = setInterval(() => {
      setShineLight((prev) => !prev);
    }, 1000); // Change the interval duration as needed

    return () => {
      clearInterval(shiningInterval);
    };
  }, []);

  const frontendSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-50px)',
      filter: 'drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))',
    },
    to: {
      opacity: frontendAnimation ? 1 : 0,
      transform: frontendAnimation ? 'translateY(0)' : 'translateY(50px)',
      filter: shineLight ? 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.8))' : 'drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))',
    },
    config: { duration: 800 },
  });


  const isHomeLinkClickedAgain = homeLinkClicked && window.location.pathname === '/';

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:mt-6 md:mt-12">
      <div className="col-span-1 flex flex-col justify-center items-center">
      {showImage && (
      <animated.img
          src={myimg}
          alt="Description of the image"
          className="my-profile  lg:right-[-67px] xl:w-4/7 lg:w-[128rem] relative"
          style={imageSpring}
        />
        )}
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center relative xl:right-[54px] lg:top-[85px]">
        <div className="text-center sm:text-center lg:pb-44 md:pb-3 lg:mt-12 md:mb-9 sm:mb-6">
        <animated.h1
            className='font-montserrat font-semibold xl:text-7xl md:text-4xl text-4xl lg:text-left md:text-[3.8rem] lg:text-7xl md:pb-4 sm:pb-2 lg:pb-5 xl:tracking-[.2em] tracking-[.2em] lg:tracking-[.1em]'
            style={isHomeLinkClickedAgain ? {} : frontendSpring} // Apply animation only if not home link clicked again
          >
            FRONTEND
          </animated.h1>
          <h2 className="font-montserrat font-thin lg:text-5xl md:text-4xl sm:text-1xl lg:text-left text-2xl lg:tracking-[.32em] xl:tracking-[.45em] md:tracking-[.45em] tracking-[.45em]">
        {developerText.split('').map((letter, i) => (
          <animated.span
            key={i}
            style={{
              display: 'inline-block',
              opacity: stopAnimation ? 1 : startAnimation ? slideShowProps.opacity : slideHideProps.opacity,
    transform: stopAnimation
      ? 'none'
      : startAnimation
      ? slideShowProps.transform
      : slideHideProps.transform.to((x) =>
          shouldJump(i) && letter !== 'D' ? `translateX(${x}px)` : 'translateX(0)'
        ),
            }}
          >
          <animated.span
            style={{
              display: 'inline-block',
              transform: jumpProps.y.to((y) =>
                shouldJump(i) && letter !== 'D' && i === index ? `translateY(${y}px)` : 'translateY(0)'
              ),
            }}
          >
            {letter}
          </animated.span>
        </animated.span>
      ))}
    </h2>
          
          <p className='xl:w-4/6 lg:w-3/4  font-light tracking-[.2em]  uppercase text-custom-gray lg:text-left md:text-center text-sm lg:text-[.85em] md:text-[.87em] md:mr-4 relative lg:left-1 md:left-4 md:pt-3 pb-6 md:pb-0 lg:text-1xl lg:leading-6 lg:pt-6 pt-3 subpixel-antialiased'> As a web-focused front-end developer, I'm eager to join your team and grow my skills in simplifying complex problems and creating great web designs.</p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;