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
    <div className={`my-profile h-100 w-auto xl:right-[-90px] lg:right-[-39px] relative`}>
      {isLoading && <div className='pb-2 text-gray-light font-extralight font-roboto'>Loading...</div>}
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