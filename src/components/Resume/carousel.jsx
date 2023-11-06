import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);
  
    const nextSlide = () => {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
  
    const prevSlide = () => {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };
  
    return (
      <div className="carousel relative">
        <div className="relative flex items-center">
          <img
            src={data[slide].src}
            alt={data[slide].alt}
            className="slide"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 ">
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow" />
          </div>
          <div className="absolute right-11 top-1/2 transform -translate-y-1/2">
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow" />
          </div>
        </div>
        <div className="indicators absolute bottom-1  flex ">
            {data.map((_, idx) => {
                return (
                <button 
                key={idx}
                className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}>
            </button>
    );
  })}
</div>
      </div>
    );
  };
  