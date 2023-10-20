import React, { useEffect } from 'react';
import myProfileImage from '../../assets/images/my-profile.png';
import useImageStore from '../../store/useImageStore';

const LazyImage = () => {
  const isLoading = useImageStore((state) => state.isLoading);
  const setIsLoading = useImageStore((state) => state.setIsLoading);
  const imageLoaded = useImageStore((state) => state.imageLoaded); 
  const setImageLoaded = useImageStore((state) => state.setImageLoaded); 

  useEffect(() => {
    const image = new Image();
    image.src = myProfileImage;

    image.onload = () => {
      setIsLoading(false);
      setImageLoaded(true); // Set the imageLoaded state to true when the image has loaded
    };
  }, [setIsLoading, setImageLoaded]);

  return (
    <div className={`my-profile  xl:right-[-90px] lg:right-[-39px] xl:w-4/7 lg:w-9xl  relative`}>
      {isLoading && <div className='pb-2 text-center text-gray-light font-extralight font-roboto'>Loading...</div>}
      {imageLoaded && (
        <img
          src={myProfileImage}
          alt="myProfile"
        />
      )}
    </div>
  );
};

export default LazyImage;