import { Carousel } from "../components/Resume/carousel";
import React, { useState, useEffect } from 'react';

import pic1 from "../assets/images/carousel/1.png";
import pic2 from "../assets/images/carousel/2.png";
import pic3 from "../assets/images/carousel/3.png";
import pic4 from "../assets/images/carousel/4.png";
import pic5 from "../assets/images/carousel/5.png";
import pic6 from "../assets/images/carousel/6.png";
import pic7 from "../assets/images/carousel/7.png";
import pic8 from "../assets/images/carousel/8.png";

const ResumePage = () => {
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [showText, setShowText] = useState(false);
  

  useEffect(() => {
    const storedShowText = localStorage.getItem('showText');
  
    if (storedShowText === 'true') {
      setShowText(true);
    }
  }, []);
  

  const handleMouseEnter = () => {
    setIsCarouselHovered(true);
  
    setShowText(false);
  };

  const handleMouseLeave = () => {
    setIsCarouselHovered(false);
   
    setShowText(true);
    localStorage.setItem('showText', 'true');
  };

 
 
 
  
  const data = {
    slides: [
      { src: pic1, alt: "Image 1 for carousel" },
      { src: pic2, alt: "Image 2 for carousel" },
      { src: pic3, alt: "Image 3 for carousel" },
      { src: pic4, alt: "Image 4 for carousel" },
      { src: pic5, alt: "Image 5 for carousel" },
      { src: pic6, alt: "Image 6 for carousel" },
      { src: pic7, alt: "Image 7 for carousel" },
      { src: pic8, alt: "Image 8 for carousel" },
    ],
  };
  const responsibilities = [
    "Creating the user interface (UI) design for adding, viewing, and printing data through Excel on the official website. I also handle hosting and deployment using local network hosting.",
    "We utilized the system to encode and view data for both accounts payable and non-accounts payable.",
  ];

  return (
    <div className="md:px-10 sm:px-10 xl:px-36 pb-8 pt-7 ">
      <h1 className="lg:text-[27px] md:text-[27px] sm:text-[27px] text-2xl mb-5 tracking-wide capitalize font-semibold ">
        Working Experience
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5 resume-element-1">
        <div className="col-span-1 md:col-span-1  p-4 resume resume-border  ">
       

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
                  Municipality of Santa Cruz Laguna at the Office of Municipal
                  Treasury - Internship
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
                  {responsibilities.map((item, index) => (
                    <li key={index}> {item} </li>
                  ))}
                </ul>
               
                 
              </div> 
          </div>
            </div> 
        </div>
        <div className="col-span-1 md:col-span-1   p-4 resume resume-border">
          {/* Add border class and padding class */}
           
         
    
        
           
                <div 
                className="relative overflow-hidden flex justify-center items-center w-100 h-100 md:w-600 md:h-400 lg:w-4/7"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  opacity: isCarouselHovered ? '1' : '0.5',
                  transition: 'opacity 0.5s ease', // Add transition property
                  position: 'relative', // Set position to relative
                }}>
                  
          <>
          <div className="absolute top-0 left-0 w-full h-1/4"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/4"></div>
          </>
         
                  {showText && (
                  <h1 className="absolute top-16 lg:top-12 md:top-7 text-2xl mb-2 text-gray-custom font-semibold text-custom-gray tracking-wide antialiased" >
                   Internship Highlights</h1>
                   )}
                   <Carousel data={data.slides} />
                   {showText && (
                   <p className="absolute bottom-14 lg:bottom-12 md:bottom-7 text-sm mb-2 text-gray-custom  text-center font-bold tracking-wide antialiased text-custom-gray ">Explore the highlights of my impactful project and contributions during my internship experience. </p>
                   )}
          </div> 
        </div>
      </div>

      <h1 className='lg:text-[27px] md:text-[27px] sm:text-[27px] text-2xl mb-5 tracking-wide capitalize font-semibold'>
        Educational Background
      </h1>
      <div  className='grid grid-cols-1 lg:grid-cols-2 gap-4 resume-element-2'>

        <div className="col-span-1 md:col-span-1 p-4 resume resume-border">
       
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
        <div className="col-span-1 md:col-span-1  p-4 resume resume-border">
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
    </div>
  );
};
export default ResumePage;
