import React, { useEffect } from 'react';
import ErrorBoundary from '../shared/components/Partials/ErrorBoundary';
import { Suspense } from 'react';
import LazyImage from '../components/Home/LazyImage';
import useHomeStore from '../store/useHomeStore';

function HomePage() {
  const { shouldAnimate, checkAnimation, shineEffect, setShineEffect } = useHomeStore();

  useEffect(() => {
    checkAnimation();
  }, [checkAnimation]);

  useEffect(() => {
    if (shouldAnimate) {
      const frontendText = document.querySelector('.frontend-text');
      if (frontendText) {
        frontendText.classList.add('slide-in-animation');
        setShineEffect(true); // Enable shining effect when animation starts
      }
    }
  }, [shouldAnimate, setShineEffect]);

  const shineClass = shineEffect ? 'shine-animation' : '';

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
        <h1 className={`font-montserrat font-semibold xl:text-7xl md:text-4xl text-4xl lg:text-left md:text-[3.8rem] lg:text-7xl md:pb-4 sm:pb-2 lg:pb-5 xl:tracking-[.2em] tracking-[.2em] lg:tracking-[.1em] frontend-text ${shouldAnimate ? '' : 'slide-in-animation'} ${shineClass}`}>
          FRONTEND
          </h1>
          <h2 className="font-montserrat font-thin lg:text-5xl md:text-4xl sm:text-1xl lg:text-left text-2xl lg:tracking-[.32em] xl:tracking-[.45em] md:tracking-[.45em] tracking-[.45em]">DEVELOPER</h2>
          <p className='xl:w-4/6 lg:w-3/4  font-light tracking-[.2em]  uppercase text-custom-gray lg:text-left md:text-center text-sm lg:text-[.85em] md:text-[.87em] md:mr-4 relative lg:left-1 md:left-4 md:pt-3 pb-6 md:pb-0 lg:text-1xl lg:leading-6 lg:pt-6 pt-3 subpixel-antialiased'> As a web-focused front-end developer, I'm eager to join your team and grow my skills in simplifying complex problems and creating great web designs.</p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;