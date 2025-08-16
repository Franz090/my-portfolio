import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useAnimationStore from '../store/useAnimationStore';
import myimg from '../assets/images/my-profile.png';

function HomePage() {
  const [frontendAnimation, setFrontendAnimation] = useState(false);
  const [showShineEffect, setShowShineEffect] = useState(true);

  const { showImage, setShowImage, setCurrentPage, animateParagraph } = useAnimationStore();

  // Headline text
  const headlineText = 'FRONTEND DEVELOPER';
  const subHeadlineText = 'QUALITY ASSURANCE ENGINEER';

  // Image animation
  const imageSpring = useSpring({
    opacity: showImage ? 1 : 0,
    transform: showImage ? 'translateY(0)' : 'translateY(-40%)',
    config: { duration: 500 },
  });

  useEffect(() => {
    setCurrentPage('/');
    const showImageTimeout = setTimeout(() => setShowImage(true), 2000);
    setFrontendAnimation(true);

    return () => clearTimeout(showImageTimeout);
  }, []);

  // Shine animation for "FRONTEND DEVELOPER"
  const shineLightProps = useSpring({
    from: { textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' },
    to: async (next) => {
      while (true) {
        await next({ textShadow: '0 0 40px rgba(255, 255, 255, 0.9)', config: { duration: 600 } });
        await next({ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', config: { duration: 600 } });
      }
    },
  });

  // Frontend headline spring
  const frontendSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: frontendAnimation ? 1 : 0, transform: frontendAnimation ? 'translateY(0)' : 'translateY(50px)' },
    config: { duration: 600 },
  });

  // Paragraph fade
  const paragraphSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
    immediate: !animateParagraph,
  });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:mt-6 md:mt-12">
      {/* Left - Profile Image */}
      <div className="col-span-1 flex flex-col justify-center items-center">
        {showImage && (
          <animated.img
            src={myimg}
            alt="Profile"
            className="md:w-100 md:h-auto my-profile lg:right-[-67px] xl:w-4/7 lg:w-[128rem] relative"
            style={imageSpring}
          />
        )}
      </div>

      {/* Right - Text Section */}
      <div className="col-span-1 flex flex-col justify-center items-center lg:items-start relative xl:right-[54px] lg:top-[85px]">
        <div className="text-center lg:text-left sm:text-center md:text-center w-full">
          {/* Headline */}
          <animated.h1
            className="font-extrabold lg:text-[50px] md:text-6xl sm:text-5xl text-[40px] tracking-wider leading-tight"
            style={frontendSpring}
          >
            <animated.span style={showShineEffect ? shineLightProps : {}}>
              {headlineText}
            </animated.span>
          </animated.h1>

          {/* Subheadline */}
          <h2 className="font-medium lg:text-4xl md:text-3xl sm:text-2xl text-xl text-gray-400 uppercase tracking-[.25em] mt-2">
            {subHeadlineText}
          </h2>

          {/* Paragraph */}
          <animated.p
            className="xl:w-4/6 lg:w-3/4 font-normal uppercase text-custom-gray lg:text-[.99em] md:text-[.99em] sm:text-[.99em] text-sm mt-4 lg:mt-6 leading-6 antialiased tracking-tight mx-auto lg:mx-0"
            style={paragraphSpring}
          >
            As a web-focused front-end developer and QA engineer, I’m eager to join your team and grow my skills in simplifying complex problems and creating seamless web experiences.
          </animated.p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;