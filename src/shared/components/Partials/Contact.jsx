import React, {  useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import ContactInfo from '../../../components/Contact/ContactInfo';
import useContactAnimationStore from '../../../store/useContactAnimationStore';

const Contact = () => {
  const { showText, animateText, setShowText, setAnimateText } = useContactAnimationStore();
  

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const contactText = document.getElementById('contact');
      const scrollPosition = window.scrollY + window.innerHeight;
      const contactPosition = contactText.offsetTop + contactText.offsetHeight / 2;

      if (scrollPosition > contactPosition && animateText) {
        setShowText(true);
        setAnimateText(false); // Disable further animations
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animateText, setShowText, setAnimateText]);

 

  const contactInfoAnimation = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateX(0)' : 'translateX(-20%)',
    config: {
      duration: 500 // Duration in milliseconds (0.5 seconds)
    }
  });

  const contactMeAnimation = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0)' : 'translateY(-20px)',
    config: {
      duration: 500// Duration in milliseconds (0.5 seconds)
    }
  });

  const contactFormAnimation = useSpring({
    opacity: showText ? 1 : 0,
   
    transform: showText ? 'translateY(0)' : 'translateY(20%)', // Slide from bottom (100% of its height)
    config: {
      duration: 500
    }
  });


  return (
    <>
      <div id="contact" className='md:px-10 sm:px-10 xl:px-32' > 
      <h6 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold font-montserrat text-center text-custom-gray tracking-tight lg:mb-0 mb-[-20px]">
          <animated.span style={contactMeAnimation}>Contact Me</animated.span>
        </h6>

 
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 lg:pt-11 pt-7 ">
         
        <animated.div style={contactInfoAnimation} className='col-span-1'>
          <h2 className='capitalize font-montserrat  text-custom-gray tracking-tight leading-10 font-semibold text-justify  pb-5 lg:w-3/4 lg:text-[24px] md:text-[24px] sm:text-[24px] text-2xl lg:pt-0 pt-4'>Contact Information</h2>
            <div className='flex pb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 text-custom-gray ">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
              <div className='flex flex-col items-start pb-2 '>
            <span className="text-custom-gray  tracking-widest  font-roboto font-semibold ml-5 leading-tightest md:text-[17px] sm:text-[17px] lg:text-[17px] text-1xl">Phone Number</span>
             <span className="ml-5  text-custom-gray tracking-tight lg:text-[16px] md:text-[16px] sm:text-[16px] text-sm font-light antialiased	">+63 0951 602 7781</span>
             </div>
            </div>
            <div className='flex pb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 text-custom-gray">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
              <div className='flex flex-col items-start pb-2'>
            <span className="text-custom-gray  tracking-widest   font-roboto font-semibold ml-5 leading-tightest md:text-[17px] sm:text-[17px] lg:text-[17px] text-1xl">Email</span>
             <span className="ml-5  text-custom-gray tracking-tight lg:text-[16px] md:text-[16px] sm:text-[16px] text-sm  font-light antialiased	">francisoblepias7@gmail.com</span>
             </div>
            </div>
            <div className='flex pb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 text-custom-gray">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
              <div className='flex flex-col items-start pb-2 '>
            <span className="text-custom-gray  tracking-widest md:text-[17px] sm:text-[17px] lg:text-[17px] text-1xl font-roboto font-semibold ml-5 leading-tightest">Address</span>
             <span className="ml-5  text-custom-gray tracking-tight lg:text-[16px] md:text-[16px] sm:text-[16px] text-sm  font-light antialiased	">Zamora St. Santo Angel Sur, Santa Cruz Laguna</span>
             </div>
         </div> 
            </animated.div>
         
         
          <div className="lg:col-span-2 col-span-1">  
         
          <animated.div style={contactFormAnimation}>
          <ContactInfo />
        </animated.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;