import React, { useState, useEffect } from 'react';
import ContactInfo from '../../../components/Contact/ContactInfo'

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const contactPosition = contactSection.getBoundingClientRect().top;

      const triggerPoint = window.innerHeight * 0.7;

      if (contactPosition < triggerPoint) {
        setShowContact(true);
      }
     
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="contact" className={`md:px-10 sm:px-10 xl:px-32 fade-in ${showContact ? 'show' : 'hide'}`}> 
       
        <h6 className="text-4xl md:text-4xl lg:text-4xl font-semibold font-montserrat text-center text-custom-gray tracking-tight pb-1 ">Contact Me</h6>

 
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 lg:pt-11 pt-7 ">
         
          <div className='col-span-1 '>
          <h2 className='capitalize font-montserrat  text-custom-gray tracking-tight leading-10 font-semibold text-justify  pb-5 lg:w-3/4 lg:text-[24px] md:text-2xl sm:text-2xl text-2xl lg:pt-0 pt-4'>Contact Information</h2>
            <div className='flex pb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 text-custom-gray ">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
              <div className='flex flex-col items-start pb-2'>
            <span className="text-custom-gray  tracking-widest lg:text-[17px] text-[18px] font-roboto font-semibold ml-5 leading-tightest md:text-[-34px] ">Phone Number</span>
             <span className="ml-5  text-custom-gray tracking-tight lg:text-[16px] font-light antialiased	">+63 0951 602 7781</span>
             </div>
            </div>
            <div className='flex pb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 text-custom-gray">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
              <div className='flex flex-col items-start pb-2'>
            <span className="text-custom-gray  tracking-widest lg:text-[17px] text-[18px]  font-roboto font-semibold ml-5 leading-tightest">Email</span>
             <span className="ml-5  text-custom-gray tracking-tight lg:text-[16px] font-light antialiased	">francisoblepias7@gmail.com</span>
             </div>
            </div>
            <div className='flex pb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6 text-custom-gray">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
              <div className='flex flex-col items-start pb-2 '>
            <span className="text-custom-gray  tracking-widest lg:text-[17px] text-[18px] font-roboto font-semibold ml-5 leading-tightest">Address</span>
             <span className="ml-5  text-custom-gray tracking-tight lg:text-[16px] font-light antialiased	">Zamora St. Santo Angel Sur, Santa Cruz Laguna</span>
             </div>
            </div>
            
          
          </div>
          <div className="lg:col-span-2 col-span-1">  
         
          <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;