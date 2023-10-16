import React, { lazy, Suspense } from 'react';
import myProfile from '../assets/images/my-profile.png';

function HomePage() {
  const LazyLoad = lazy(() => import('react-lazyload'));
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:mt-1  md:mt-12">
      <div className="col-span-1 flex flex-col justify-center items-center ">
     
      <Suspense>
          <LazyLoad height={200} offset={100} once>
            <img src={myProfile} alt="myProfile" className='my-profile h-100 w-auto xl:right-[-90px] lg:right-[-39px] relative ' />
          </LazyLoad>
        </Suspense>
      
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center relative xl:right-[54px] lg:top-[85px] ">
        <div className="text-center sm:text-center lg:pb-44 md:pb-3 lg:mt-12 md:mb-9 sm:mb-6"> 
        <h1 className="font-montserrat font-semibold xl:text-7xl  text-4xl lg:text-left md:text-6xl lg:text-7xl md:pb-4 sm:pb-2 lg:pb-5 xl:tracking-wider tracking-wider lg:tracking-wide ">FRONTEND</h1>
        <h2 className="font-montserrat font-light lg:text-5xl md:text-4xl sm:text-1xl lg:text-left text-2xl xl:tracking-[.45em] md:tracking-[.45em] tracking-[.45em]">DEVELOPER</h2>
        <p className=' xl:w-4/6 lg:w-5/6 font-montserrat font-medium uppercase text-gray-light lg:text-left md:text-center  text-sm  lg:text-[.85em] md:text-[.87em]  md:mr-4 relative lg:left-1 md:left-4 md:pt-3 pb-6 md:pb-0 lg:text-1xl lg:leading-6 lg:pt-6  pt-3'> As a web-focused front-end developer, I'm eager to join your team and grow my skills in simplifying complex problems and creating great web designs.</p>
  </div>
</div>
    </section>
  );
}

export default HomePage;