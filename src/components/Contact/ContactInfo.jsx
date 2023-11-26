import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactInfo() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    user_email: false,
    message: false,
  });
  const [inputValues, setInputValues] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // New state variable

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    const hasErrors = Object.keys(errors).reduce((hasError, field) => {
      if (formData.get(field) === '' || errors[field]) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
        return true;
      }
      return hasError;
    }, false);
  
    if (hasErrors) {
      setFormSubmitted(true);
      return;
    }
  
    setLoading(true);
  
    emailjs
      .sendForm('service_t9yudsu', 'template_br5ubl1', form.current, 'a1HWmBwln_h1j5REX')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setLoading(false);
        setSuccess(true);
  
        // Reset the form, clear errors, and input values
        form.current.reset();
        setInputValues({
          first_name: '',
          last_name: '',
          user_email: '',
          message: '',
        });
        setErrors({
          first_name: false,
          last_name: false,
          user_email: false,
          message: false,
        });
  
        // Reset the formSubmitted state to false
        setFormSubmitted(false);
      });
  };
  const closeSuccessAlert = () => {
    const alert = document.getElementById('alert-1');
    if (alert) {
      alert.classList.add('alert-fade-out');
      setTimeout(() => {
        setSuccess(false);
      }, 1000); // Closing animation duration remains the same
    }
  };

  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(closeSuccessAlert, 4000); // Show for 5 seconds
      return () => clearTimeout(timeoutId);
    }
  }, [success]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'user_email') {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+\s*$/.test(value); // Updated regex
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: !isEmailValid,
      }));
    } else if (name === 'first_name' || name === 'last_name') {
      const isLetterOnly = /^[A-Za-z ]+$/.test(value); // Allow spaces
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: !isLetterOnly,
      }));
    } else if (name === 'message') {
      // Allow any character, including spaces
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false, // Always mark as valid
      }));
    }
  };
  return (
    <form className="lg:w-full pb-6 relative" ref={form} onSubmit={sendEmail}>

      

      
      <div className="flex flex-wrap -mx-3 mb-6 mt-[-30px] lg:mt-[-0px] ">
        <div className="w-full md:w-1/2 px-3 lg:pt-1 pt-5">
          <label className="text-custom-gray lg:text-[17px] block capitalize mb-2 leading-tight tracking-widest font-roboto" htmlFor="grid-first-name">
            First Name
          </label>  
          <input
          className={`leading-tight pt-3 pb-3 w-full bg-primary-450 text-custom-gray border ${
          (formSubmitted && !errors.first_name) ? 'border-green-400 focus:border-green-400' :
           (formSubmitted && errors.first_name) ? 'border-red-400 focus:border-red-500' :
           'border-gray-400'} rounded focus:bg-primary-450 focus:shadow-sm focus:border-gray-300 focus:shadow-gray-200/50 focus:ring-0`}
            id="grid-first-name"
            type="text"
            name="first_name"
            onChange={handleInputChange}
            value={inputValues.first_name}
            autoComplete="given-name"
            />
           {(formSubmitted && errors.first_name) && <p className="text-red-500 mt-1 italic text-sm">Please enter your first name.</p>}
           {formSubmitted && !errors.first_name && <p className="text-green-500 mt-1 italic text-sm">
         Your first name is valid.
      </p>}
        </div>

        <div className="w-full md:w-1/2 px-3 lg:pt-1 pt-5">
          <label className="text-custom-gray lg:text-[17px] block capitalize mb-2 leading-tight tracking-widest font-roboto" htmlFor="grid-last-name">
            Last Name
          </label>
          <input
            className={`leading-tight pt-3 pb-3 w-full bg-primary-450 text-custom-gray border ${
              (formSubmitted && !errors.last_name) ? 'border-green-400 focus:border-green-400' :
              (formSubmitted && errors.last_name) ? 'border-red-400 focus:border-red-500' :
              'border-gray-400'} rounded focus:bg-primary-450 focus:shadow-sm focus:border-gray-300 focus:shadow-gray-200/50 focus:ring-0`}
            id="grid-last-name"
            type="text"
            name="last_name"
            onChange={handleInputChange} // Add this line
            value={inputValues.last_name} // Add this line
            autoComplete="family-name"
            
          />
          {(formSubmitted && errors.last_name) && <p className="text-red-500 mt-1 italic  text-sm">Please enter your last name.</p>}
          {formSubmitted && !errors.last_name && <p className="text-green-500 mt-1 italic text-sm">
         Your last name is valid.
         </p>}
        </div>

        <div className="w-full px-3 pt-5">
          <label className="text-custom-gray lg:text-[17px] block capitalize mb-2 leading-tight tracking-widest font-roboto" htmlFor="grid-email">
            Email Address
          </label>
          <input
          className={`leading-tight pt-3 pb-3 w-full bg-primary-450 text-custom-gray border ${
         (formSubmitted && !errors.user_email) ? 'border-green-400 focus:border-green-400' :
         (formSubmitted && errors.user_email) ? 'border-red-400 focus:border-red-500' :
    'border-gray-400'} rounded focus:bg-primary-450 focus:shadow-sm focus:border-gray-300 focus:shadow-gray-200/50 focus:ring-0`}
         id="grid-email"
         name="user_email"
         placeholder="yourname@example.com"
         onChange={handleInputChange}
         value={inputValues.user_email}
        autoComplete="email"
        />
          {(formSubmitted && errors.user_email) && <p className="text-red-500 mt-1 italic  text-sm">Please enter your valid email address.</p>}
          {formSubmitted && !errors.user_email && <p className="text-green-500 mt-1 italic text-sm">
            Your email is valid.
      </p>}
        </div>

        <div className="w-full px-3 pt-5">
          <label className="text-custom-gray lg:text-[17px] block capitalize mb-2 leading-tight tracking-widest font-roboto" htmlFor="grid-message">
            Message
          </label>
          <textarea
          className={`resize-y leading-tight pt-3 pb-3 w-full bg-primary-450 text-custom-gray border ${
          (formSubmitted && inputValues.message.trim() !== '' && !errors.message) ? 'border-green-400 focus:border-green-400' :
          (formSubmitted && inputValues.message.trim() === '') ? 'border-red-400 focus:border-red-500' :'border-gray-400'} rounded focus:bg-primary-450 focus:shadow-sm focus:border-gray-300 focus:ring-0`}
          id="grid-message"
          placeholder="Leave a comment..."
          rows="5"
          name="message"
          onChange={handleInputChange}
          value={inputValues.message}
          autoComplete="off"
          />
          {formSubmitted && inputValues.message.trim() === '' && <p className="text-red-500 mt-1 italic text-sm">Message is required.</p>}
          {formSubmitted && !errors.message && inputValues.message.trim() !== '' && (
          <p className="text-green-500 mt-1 italic text-sm">
            Your message is valid.
            </p>
            )}
        </div>
      </div>
      <div className="flex justify-center w-full ">
      <button
      id="submit-button"
    type="submit"
    className={`font-montserrat leading-tight mb-3 pt-3 pb-3 font-light  hover:bg-zinc-500 text-white rounded w-full bg-zinc-600 shadow-lg hover:shadow-gray-700/50 ${
      loading ? 'loading-button' : ''
    }`}
    disabled={loading}
  >
    {loading ? (
      <div className="loading-container ">
        
        <div className="mr-2">Sending Message</div>
        <div className="loader"></div>

      </div>
    ) : (
      <div className=" text-white font-light  text-center subpixel-antialiased">
      Submit
      </div>
    )}
  </button>
  
      </div>
      <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 w-full text-center">
      {success && (
        <div className="flex items-center justify-center p-2 mb-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800" role="alert" id="alert-1">
          <div className="text-center">
            <span className="font-semibold text-custom-gray">Your submission was successful!</span>
          </div>
        </div>
      )}
    </div>
    </form>
  );
}
