import React from 'react';
import myProfileImage from '../../assets/images/my-profile.png';


const LazyImage = () => {
  return (
    <img
      src={myProfileImage}
      alt="myProfile"
      className="my-profile h-100 w-auto xl:right-[-90px] lg:right-[-39px] relative"
    />
  );
};

export default LazyImage;