import React from 'react';
import myProfile from '../assets/images/my-profile.png';

function HomePage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:mt-1  md:mt-12">
      <div className="col-span-1 flex flex-col justify-center items-center ">
        <img src={myProfile} alt="myProfile" className='my-profile h-100 w-auto relative  xl:right-[-90px] lg:right-[-40px]' />
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center relative xl:right-[54px] lg:top-[85px] ">
        <div className="text-center sm:text-center lg:pb-44 md:pb-3 lg:mt-12 md:mb-9 sm:mb-6"> 
        <h1 className="font-semibold font-montserrat xl:text-7xl text-4xl lg:text-left md:text-6xl md:pb-8 sm:pb-2 xl:pb-5 tracking-wider">FRONTEND</h1>
        <h2 className="font-montserrat font-light lg:text-5xl md:text-5xl sm:text-1xl lg:text-left text-2xl xl:tracking-[.45em] md:tracking-[.45em] tracking-[.45em]">DEVELOPER</h2>
        <p className='font-montserrat font-normal uppercase text-sm text-quaternary lg:text-left md:text-center xl:mr-36 md:mr-4 relative lg:left-1 md:left-4 md:pt-3 pb-6 md:pb-0 lg:text-1xl lg:leading-6 lg:pt-6  pt-3'>As a front-end developer with a passion for web design and a knack for simplifying complex problems, I'm eager to join your team and expand my programming skills.</p>
  </div>
</div>
    </section>
  );
}

export default HomePage;