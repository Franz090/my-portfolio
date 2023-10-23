import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactInfo() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when sending starts
  
    emailjs.sendForm('service_t9yudsu', 'template_br5ubl1', form.current, 'a1HWmBwln_h1j5REX')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setLoading(false); // Set loading to false when the message is sent
  
        // Reset the form and clear input values
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setLoading(false); // Set loading to false in case of an error
      });
  };

 return (
    <form className="lg:w-full " ref={form} onSubmit={sendEmail}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label className="  text-custom-gray  lg:text-[17px] block capitalize mb-2  leading-tight tracking-widest font-roboto" htmlFor="grid-first-name" >
            First Name
          </label>
          <input className="leading-tight pt-3 pb-3  w-full bg-primary-450 text-custom-gray border border-gray-400 rounded  focus:outline-none focus:bg-primary-450 focus:border-gray-500 " id="grid-first-name" type="text" name="first_name" autoComplete="given-name"   />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="  text-custom-gray  lg:text-[17px] block capitalize mb-2  leading-tight tracking-widest font-roboto" htmlFor="grid-last-name">
            Last Name
          </label>
          <input className="leading-tight pt-3 pb-3  w-full bg-primary-450 text-custom-gray border border-gray-400 rounded  focus:outline-none focus:bg-primary-450 focus:border-gray-500" id="grid-last-name" type="text" name="last_name" autoComplete="family-name"  />
        </div>
        <div className="w-full px-3 pt-5">
          <label className="  text-custom-gray  lg:text-[17px] block capitalize mb-2  leading-tight tracking-widest font-roboto" htmlFor="grid-email" >
            Email Address
          </label>
          <input className="leading-tight pt-3 pb-3  w-full bg-primary-450 text-custom-gray border border-gray-400 rounded  focus:outline-none focus:bg-primary-450 focus:border-gray-500" id="grid-email" type="email" name="user_email" autoComplete="email"  placeholder="yourname@example.com"/>
        </div>
        <div className="w-full px-3 pt-5">
          <label className="  text-custom-gray  lg:text-[17px] block capitalize mb-2  leading-tight tracking-widest font-roboto" htmlFor="grid-message">
            Message
          </label>
          <textarea 
          className="leading-tight pt-3 pb-3  w-full bg-primary-450 text-custom-gray border border-gray-400 rounded  focus:outline-none focus:bg-primary-450 focus:border-gray-500"
          id="grid-message"
          placeholder="Write your message here..."
          rows="5"
          name="message"
          autoComplete="message"
          />
        </div>
      </div>
      <div className="flex justify-center w-full ">
      <input
          className="  font-montserrat leading-tight pt-3 pb-3 font-semibold  tracking-wider hover:bg-zinc-500 text-white rounded w-full bg-zinc-600  shadow-lg   shadow-gray-700/50"
          type="submit"
          value={loading ? "Loading..." : "Submit"}
          disabled={loading} 
        />
      </div>
    </form>
 )
}
