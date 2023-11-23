import React, { useEffect } from 'react';
import myProfileImage from '../../assets/images/my-profile.png';
import useImageStore from '../../store/useImageStore';

const LazyImage = () => {
  const isLoading = useImageStore((state) => state.isLoading);
  const setIsLoading = useImageStore((state) => state.setIsLoading);
  const imageLoaded = useImageStore((state) => state.imageLoaded);
  const setImageLoaded = useImageStore((state) => state.setImageLoaded);
  const isVisible = useImageStore((state) => state.isVisible);
  const setIsVisible = useImageStore((state) => state.setIsVisible); 

  useEffect(() => {
    const image = new Image();
    image.src = myProfileImage;

    image.onload = () => {
      setIsLoading(false);
      setImageLoaded(true);
      setIsVisible(true); // Set isVisible to true when the image has loaded
    };
  }, [setIsLoading, setImageLoaded, setIsVisible]);

  return (
    <div className={`my-profile xl:right-[-90px] lg:right-[-39px] xl:w-4/7 lg:w-[128rem] relative`}>
      {isLoading && (
        <div className='pb-2 text-center text-gray-light font-extralight font-roboto'>Loading...</div>
      )}
      <div
        className={`image-container ${isVisible ? 'visible' : ''}`}
        onAnimationEnd={() => {
          if (!imageLoaded) setIsVisible(false); // Hide the image after the animation if it's not loaded
        }}
      >
        <img
          src={myProfileImage}
          alt="myProfile"
          className={`image ${isVisible ? 'visible' : ''}`}
        />
      </div>
    </div>
  );
};

export default LazyImage;