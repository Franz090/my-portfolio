import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

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
    setSlide(index);
  };

  useEffect(() => {
    const slideWidth = 800 / data.length;
    document.getElementById("slide-container").style.transform = `translateX(-${slide * slideWidth}%)`;
  }, [slide, data]);

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
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow" />
          </div>
        )}
        {slide < data.length - 1 && ( 
          <div className="absolute right-11 top-1/2 transform -translate-y-1/2">
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow" />
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
    </div>
  );
};