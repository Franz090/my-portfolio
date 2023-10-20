import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactInfo()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t9yudsu', 'template_br5ubl1', form.current, 'a1HWmBwln_h1j5REX')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
 return (
    <form className="lg:w-full" ref={form} onSubmit={sendEmail}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" name="first_name" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"
          name="last_name" />
        </div>
        <div className="w-full px-3">
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email Address" name="user_email" />
        </div>
        <div className="w-full mb-6 px-3">
          <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" rows="5" placeholder="Write your message here..." name="message"></textarea>
        </div>
        <div className="flex justify-center w-full px-3">
        <input className="bg-gray-light  hover:bg-gray text-white font-bold rounded
         w-full" type="submit" value="Send" />
      </div>
      </div>
    </form>
 )
}

