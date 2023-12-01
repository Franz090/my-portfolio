import React, { useEffect, useState } from 'react';
import ErrorBoundary from '../shared/components/Partials/ErrorBoundary';
import { Suspense } from 'react';
import LazyImage from '../components/Home/LazyImage';
import { motion } from 'framer-motion';

function HomePage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000); // Wait for 2 seconds before starting the animation

    return () => clearTimeout(animationTimer);
  }, []);

  useEffect(() => {
    if (startAnimation && !animationComplete) {
      const animationTimeout = setTimeout(() => {
        setAnimationComplete(true);
        setStartAnimation(false);
      }, 1800); // Duration of animation in milliseconds (adjust as needed)

      return () => clearTimeout(animationTimeout);
    }
  }, [startAnimation, animationComplete]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:mt-11 md:mt-12">
      <div className="col-span-1 flex flex-col justify-center items-center">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyImage />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center relative xl:right-[54px] lg:top-[85px]">
        <div className="text-center sm:text-center lg:pb-44 md:pb-3 lg:mt-12 md:mb-9 sm:mb-6">
          <h1 className='font-montserrat font-semibold xl:text-7xl md:text-4xl text-4xl lg:text-left md:text-[3.8rem] lg:text-7xl md:pb-4 sm:pb-2 lg:pb-5 xl:tracking-[.2em] tracking-[.2em] lg:tracking-[.1em] '>
            FRONTEND
          </h1>
          <motion.h2
            className="font-montserrat font-thin lg:text-5xl md:text-4xl sm:text-1xl lg:text-left text-2xl lg:tracking-[.32em] xl:tracking-[.45em] md:tracking-[.45em] tracking-[.45em]"
            initial={{ y: 0 }}
            animate={startAnimation ? { y: [0, -5, 0], transition: { duration: 0.6, repeat: Infinity } } : {}}
          >
            {['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'].map((letter, index) => (
              <motion.span
                key={index}
                style={{ display: 'inline-block' }}
                initial={{ y: 0 }}
                animate={
                  startAnimation
                    ? {
                        y: [-5, 0, -5],
                        transition: { duration: 0.6, repeat: Infinity, delay: index * 0.1 },
                      }
                    : {}
                }
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <p className='xl:w-4/6 lg:w-3/4  font-light tracking-[.2em]  uppercase text-custom-gray lg:text-left md:text-center text-sm lg:text-[.85em] md:text-[.87em] md:mr-4 relative lg:left-1 md:left-4 md:pt-3 pb-6 md:pb-0 lg:text-1xl lg:leading-6 lg:pt-6 pt-3 subpixel-antialiased'> As a web-focused front-end developer, I'm eager to join your team and grow my skills in simplifying complex problems and creating great web designs.</p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;