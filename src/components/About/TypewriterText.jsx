import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [blink, setBlink] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    let currentText = '';

    const blinkInterval = setInterval(() => {
      setBlink((prevBlink) => !prevBlink);
    }, 500); // Adjust blinking speed (milliseconds)

    const textInterval = setInterval(() => {
      if (currentText !== texts[index]) {
        currentText += texts[index][currentText.length];
        setDisplayText(currentText);
      } else {
        clearInterval(textInterval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayText('');
        }, 1000); // Delay before showing the next text
      }
    }, 100); // Adjust speed here (milliseconds per letter)

    return () => {
      clearInterval(textInterval);
      clearInterval(blinkInterval);
    };
  }, [index, texts]);

  const blinkAnimation = useSpring({
    opacity: blink ? 1 : 0,
    config: { duration: 200 }, // Adjust duration as needed
  });

  useEffect(() => {
    const storedBlink = localStorage.getItem('blinkState');
    if (storedBlink !== null) {
      setBlink(JSON.parse(storedBlink));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blinkState', blink);
  }, [blink]);

  return (
    <>
      <span>{displayText}</span>
      <animated.span style={blinkAnimation}>|</animated.span>
    </>
  );
};

export default TypewriterText;