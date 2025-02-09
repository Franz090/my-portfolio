import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useAnimationStore from '../store/useAnimationStore';
import myimg from '../assets/images/my-profile.png';


function HomePage() {
  const [index, setIndex] = useState(0);
  const [completedAnimations, setCompletedAnimations] = useState(0);
  const [frontendAnimation, setFrontendAnimation] = useState(false);
  const [showShineEffect, setShowShineEffect] = useState(true);
  const [shineVisibility, setShineVisibility] = useState(true);
 

  const { startAnimation, setStartAnimation, stopAnimation, setIsJumping,homeLinkClicked, showImage, setShowImage,setCurrentPage,isHomePageClickedAgain, setIsHomePageClickedAgain,animateParagraph, setAnimateParagraph} = useAnimationStore();
 
  const developerText = 'DEVELOPER';

  const imageSpring = useSpring({
    opacity: showImage ? 1 : 0,
    transform: showImage ? 'translateY(0)' : 'translateY(-40%)', // Change translateY value
    config: { duration: 500 },
  });
  useEffect(() => {
    setCurrentPage('/');
  }, [setCurrentPage]);

  useEffect(() => {
    // Set a delay to show the image after a certain time
    const showImageTimeout = setTimeout(() => {
      setShowImage(true);
    }, 5000);

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
    config: { duration: 500 },
    delay: 500, // Adjust the delay as needed
  });

  const slideShowProps = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 },
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
    // Logic to set frontendAnimation to true
    setFrontendAnimation(true); // For example, based on a timeout or event
  }, []);
  const frontendSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-50px)',
    },
    to: {
      opacity: frontendAnimation ? 1 : 0,
      transform: frontendAnimation ? 'translateY(0)' : 'translateY(50px)',
     
    },
    config: { duration: 500 },
  });

const shineLightProps = useSpring({
  from: {
    textShadow: '0 0 10px rgba(255, 255, 255, 0.8)', // Initial text shadow
  },
  to: async (next) => {
    while (true) {
      await next({
        textShadow: '0 0 40px rgba(255, 255, 255, 0.8)', // Increase shadow to create shine effect
        config: { duration: 500 },
      });
      await next({
        textShadow: '0 0 10px rgba(255, 255, 255, 0.8)', // Revert back to the initial shadow
        config: { duration: 500 },
      });
    }
  },
});
useEffect(() => {
  if (useAnimationStore.getState().homeLinkClicked && window.location.pathname === '/') {
    setIsHomePageClickedAgain(true);
    setAnimateParagraph(false);
    setShowShineEffect(false); // Stop the shine effect when homepage link is clicked again
  } else {
    setIsHomePageClickedAgain(false);
    setAnimateParagraph(true); 
    setShowShineEffect(true); // Ensure shine effect is active otherwise
  }
}, [useAnimationStore.getState().homeLinkClicked]);
useEffect(() => {
  const shineEffectTimeout = setTimeout(() => {
    setShineVisibility(false); // Set intermediate state to gradually stop the shine effect
  }, 2600);

  return () => {
    clearTimeout(shineEffectTimeout);
  };
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    if (shineVisibility) {
      setShowShineEffect((prev) => !prev); // Toggle setShowShineEffect to gradually stop visibility
    } else {
      clearInterval(interval);
    }
  }, 500); // Adjust the interval duration as needed

  return () => {
    clearInterval(interval);
  };
}, [shineVisibility]);

const paragraphSpring = useSpring({
  from: { opacity: 0, transform: 'translateY(40px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
  config: { duration: 800 },
  immediate: !animateParagraph, // Apply condition to stop animation if animateParagraph is false
});


  const isHomeLinkClickedAgain = homeLinkClicked && window.location.pathname === '/';

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:mt-6 md:mt-12">
      <div className="col-span-1 flex flex-col justify-center items-center">
      {showImage && (
      <animated.img
          src={myimg}
          alt="Description of the image"
          className="md:w-100 md:h-auto my-profile lg:right-[-67px] xl:w-4/7 lg:w-[128rem] relative"
          style={imageSpring}
        />
        )}
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center relative xl:right-[54px] lg:top-[85px]">
        <div className="text-center sm:text-center lg:pb-44 md:pb-3 lg:mt-12 md:mb-9 sm:mb-6">
        <animated.h1
            className='font-semibold lg:text-left lg:text-[78px] md:text-7xl  sm:text-7xl text-[50px] galaxy-front md:pb-3 sm:pb-3 lg:pb-3 pb-1 xl:tracking-[.2em] tracking-[.2em] lg:tracking-[.1em]'
            style={isHomeLinkClickedAgain ? {} : frontendSpring} // Apply animation only if not home link clicked again
          >
             <animated.span
              style={{
                ...(showShineEffect && !isHomePageClickedAgain ? shineLightProps : {}),
              }}
            >
              FRONTEND
            </animated.span>
          </animated.h1>
          <h2 className=" font-normal lg:text-5xl md:text-5xl sm:text-5xl text-3xl lg:text-left  lg:tracking-[.32em] md:tracking-[.45em] tracking-[.48em] galaxy-dev">
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
          
    <animated.p
            className='xl:w-4/6 lg:w-3/4 font-normal uppercase text-custom-gray lg:text-left md:text-center  lg:text-[.99em] md:text-[.99em] sm:text-[.99em] text-sm  md:mr-4 relative lg:left-1 md:left-4 md:pt-3 pb-6 md:pb-0 lg:text-1xl lg:leading-6 lg:pt-6 pt-3 antialiased tracking-tight'
            style={paragraphSpring}
          >
            As a web-focused front-end developer, I'm eager to join your team and grow my skills in simplifying complex problems and creating great web designs.
          </animated.p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;