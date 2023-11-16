import React, { useState, useEffect } from "react";


export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  useEffect(() => {
    let interval;

    if (isMouseOver) {
      interval = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [slide, isMouseOver, data.length]);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };
  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setSlide(0); // Reset slide to 0 when mouse leaves
  };

  return (
    <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="slide-container">
        {data.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`slide ${slide !== index ? 'slide-hidden' : ''}`}
            style={{
              transform: `translateX(-${slide * 100}%) rotateY(${(index - slide) * 45}deg)`
            }}
          />
        ))}
      </div>
    </div>
  );
};
