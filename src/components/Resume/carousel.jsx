import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false); // State to control transition

  const nextSlide = () => {
    if (slide < data.length - 1) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  const goToSlide = (index) => {
    // Disable transition temporarily
    setDisableTransition(true);
    setTimeout(() => {
      setSlide(index);
      // Re-enable transition after a short delay
      setTimeout(() => {
        setDisableTransition(false);
      }, 300); // Adjust the delay to match your CSS transition duration
    }, 10); // A very short delay to prevent immediate transition
  };

  useEffect(() => {
    const slideWidth = 800 / data.length;
    const slideContainer = document.getElementById("slide-container");
    if (slideContainer) {
      // Apply transition if it's not disabled
      if (!disableTransition) {
        slideContainer.style.transition = "transform 0.3s ease-in-out";
      } else {
        // Remove transition temporarily
        slideContainer.style.transition = "none";
      }
      slideContainer.style.transform = `translateX(-${slide * slideWidth}%)`;
    }
  }, [slide, data, disableTransition]);

  return (
    <div className="carousel relative">
      <div className="relative">
        <div id="slide-container" className="slide-container">
          {data.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="slide"
            />
          ))}
        </div>
        {slide > 0 && ( 
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow opacity-70" />
          </div>
        )}
        {slide < data.length - 1 && ( 
          <div className="absolute right-11 top-1/2 transform -translate-y-1/2">
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow opacity-70" />
          </div>
        )}
      </div>
      <div className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => goToSlide(idx)}
          ></button>
        ))}
      </div>
      <div className="image-number top-3 right-5 text-[0.9rem] font-light antialiased absolute  px-2  text-gray-700 image-count  opacity-70 rounded-md">
        {`${slide + 1}/${data.length}`}
        </div>
    </div>
  );
};