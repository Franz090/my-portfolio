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
      if (formData.get(field) === '') {
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
      }, 1000); // Adjust the timeout duration to match your CSS transition duration
    }
  };

  useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(closeSuccessAlert, 10000);
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
    <form className="lg:w-full " ref={form} onSubmit={sendEmail}>
      {formSubmitted && (
      <div className="flex items-center p-2 mb-4 text-sm text-red-800 border border-red-400 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
       <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/></svg>
      <span className="sr-only">Info</span>
      <div>
      <span className="font-medium">Required Fields Error</span> Please fill in all required fields and try submitting again.
        </div>
        </div>
        )}

      {success && (
        <div className="flex items-center p-2 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert" id="alert-1">
          <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium text-green-500">Your submission was successful!</span>
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-1"
            aria-label="Close"
            onClick={closeSuccessAlert}>
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      )}

      
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
          {(formSubmitted && errors.user_email) && <p className="text-red-500 mt-1 italic  text-sm">Please enter a valid email address.</p>}
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
        <input
          className="font-montserrat leading-tight pt-3 pb-3 font-semibold tracking-wider hover:bg-zinc-500 text-white rounded w-full bg-zinc-600 shadow-lg hover:shadow-gray-700/50"
          type="submit"
          value={loading ? "Loading..." : "Submit"}
          disabled={loading}
        />
      </div>
    </form>
  );
}
