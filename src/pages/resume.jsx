import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';


const ResumePage = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const workingExperienceAnimation = useSpring({
    opacity: showExperience ? 1 : 0,
    transform: showExperience ? 'translateY(0)' : 'translateY(30px)',
    config: { duration: 800 },
  });

  useEffect(() => {
    // Logic to handle showing educational background on scroll down
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const educationSection = document.getElementById('education');
      if (educationSection && scrollPosition > educationSection.offsetTop) {
        setShowEducation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // React Spring animation setup
  const educationAnimation = useSpring({
    opacity: showEducation ? 1 : 0,
    transform: showEducation ? 'translateY(0)' : 'translateY(30px)',
    config: { duration: 800 },
  });




 
  const stayVisibleWorkExperience = () => {
    setShowExperience(true);
  };

  // Run the function to keep the work experience content visible
  useEffect(() => {
    stayVisibleWorkExperience();
  }, []);
 
  
  
  const responsibilities1 = [
   " Created the user interface (UI) design for adding, viewing, and printing data via Excel on the official website. I also handled hosting and deployment using local network hosting.",
  "Utilized the system to encode and view data for both accounts payable and non-accounts payable.",
  "Collaborated with the backend developer to streamline the process and ensure seamless integration with the front-end functionality.",
   "Designed wireframes using Figma, which were then reviewed and approved by the supervisor. Once the functionality and features were confirmed, we proceeded with the implementation of the system."
  ];
  const responsibilities2 = [
    "Created detailed user stories to outline project requirements, ensuring a clear understanding of the business process and website flow. Additionally, developed wireframes to represent the user interface design.",
    "As an Anaplan Model Builder, I developed backend models, configuring the necessary functions, and then collaborated with the front-end team to publish and design the model in the UX interface.",
    "Utilized unit testing to ensure the system built was functioning correctly, identifying and correcting any errors or issues in the data calculations.",
    "Participated in User Acceptance Testing (UAT), ensuring the system met user requirements and expectations. I assisted in evaluating the build's performance and collaborated with the team on revisions when necessary."
  ];

  return (
    <div className="md:px-10 sm:px-10 xl:px-36  pb-12 pt-7 ">
    <animated.div style={workingExperienceAnimation}>
      <h1 className="lg:text-[27px] md:text-[27px] sm:text-[27px] text-2xl mb-5 tracking-wide capitalize font-semibold ">
        Working Experience
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5 resume-element-1">
        <div className="col-span-1 md:col-span-1  p-4 resume resume-border mb-7  ">
       

          {/* Add border class and padding class */}
          <div className="px-5 ">
      
         
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
           

          <h2 className='text-md mb-[-17px] mt-[-20px] text-blue-custom font-bold tracking-wide antialiased'>
              Front-End Web Developer
            </h2>
       
            <div className="m-0 justify-between">
              <div className="m- row-auto leading-7 ">
            
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
             
                <p className="text-md antialiased font-normal">
                  Municipality of Santa Cruz Laguna  - Internship
                </p>
               
              </div>
              <div className="m-1 text-custom-gray mt-4">
             
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
           
                <p className="text-md">February 2023 - May 2023 | Front End Developer</p>     
             
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
              
                <p className="text-md">Santa Cruz, Laguna</p>
              
           
              </div>
             
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
             
              <hr className="my-1 mt-[-10px] mb-[-10px] border-t-1 border-gray-800" />
            
              
              <div className="text-custom-gray">
            
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
             
                <p className="text-md antialiased ">
                  An official website has been developed to facilitate data
                  record evaluation. It includes features for encoding all data,
                  adding, viewing, printing, and creating backups through Excel
                  in case of important data loss, for both accounts payable and
                  non-accounts payable records.
                </p>
              
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-2"></div>
           
                <b className="text-md ">Responsibilities</b>
          
               
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
            
                
                <ul className="list-disc pl-5 ml-4 mt-[-13px] text-md">
                  {responsibilities1.map((item, index) => (
                    <li key={index}> {item} </li>
                  ))}
                </ul>
               
                 
              </div> 
          </div>
            </div> 
        </div>
        <div className="col-span-1 md:col-span-1  p-4 resume resume-border mb-7  ">
          {/* Add border class and padding class */}
          <div className="px-5 ">
      
         
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
       

      <h2 className='text-md mb-[-17px] mt-[-20px] text-blue-custom font-bold tracking-wide antialiased'>
            Junior Software Developer
        </h2>
   
        <div className="m-0 justify-between">
          <div className="m- row-auto leading-7 ">
        
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
         
            <p className="text-md antialiased font-normal">
              Malaya Tech Consulting Inc. - Full Time 
              
            </p>
            
          </div>
          <div className="m-1 text-custom-gray mt-4">
         
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
       
            <p className="text-md">June 2024 - December 2024 | Junior Developer</p>     
         
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
          
            <p className="text-md">Taguig, Philippines</p>
          
       
          </div>
         
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
         
          <hr className="my-1 mt-[-10px] mb-[-10px] border-t-1 border-gray-800" />
        
          
          <div className="text-custom-gray">
        
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
         
            <p className="text-md antialiased ">
            Malaya Tech Consulting's mission is to improve your processes through user-centric systems and build great solutions to solve your business problems. The products are designed for small to medium-sized companies to optimize their performance.
            </p>
          
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-2"></div>
       
            <b className="text-md ">Responsibilities</b>
      
           
      <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
        
            
            <ul className="list-disc pl-5 ml-4 mt-[-13px] text-md">
              {responsibilities2.map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            </ul>
           
             
          </div> 
      </div>
         </div>
         
         
        
        </div>
        
      </div>
      </animated.div>
   <animated.div style={educationAnimation}>
      <h1 className='lg:text-[27px] md:text-[27px] sm:text-[27px] text-2xl mb-5 tracking-wide capitalize font-semibold'>
        Educational Background
      </h1>
      <div  className='grid grid-cols-1 lg:grid-cols-2 gap-4 resume-element-2'>

        <div id="education" className="col-span-1 md:col-span-1 p-4 resume resume-border mb-7">
       
          <div className="px-5">
       
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
           
            <h2 className="text-md  mb-[-10px] mt-[-20px] font-bold tracking-wide antialiased">
              Bachelor's/College Degree in Information Technology
            </h2>
            
            <div className="m-0 justify-between">
              <div className="m-1 text-custom-gray mt-4">
           
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
             
                <p>Laguna State Polytechnic University</p>    
                
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
              
                <p>Santa Cruz, Laguna</p>
              
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
             
                <p>2019 - 2023</p>
            
              </div>
            </div>
           
          </div>
        </div>
        <div className="col-span-1 md:col-span-1  p-4 resume resume-border mb-7">
          {/* Add border class and padding class */}
          <div className="px-5">
            
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-5"></div>
             
            <h2 className="text-md mb-[-10px] mt-[-20px]  font-bold tracking-wide antialiased">
            Technical-Vocational Livelihood - Information and Communication Technology Technology
            </h2>
          
            <div className="m-0 justify-between">
              <div className="m-1 text-custom-gray mt-4">
               
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
           
                <p className="text-md">AMA Santa Cruz Campus</p>
            
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
            
                <p className="text-md">Santa Cruz, Laguna</p>
           
          <div className=" bg-custom-gray rounded-full dark:bg-gray-600 mb-1"></div>
            
                <p className="text-md">2017 - 2019</p>
            
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      </animated.div>
    </div>
  );
};
export default ResumePage;
