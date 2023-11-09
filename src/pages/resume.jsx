import { Carousel } from "../components/Resume/carousel";
import pic1 from "../assets/images/carousel/1.png"; 
import pic2 from "../assets/images/carousel/2.png"; 
import pic3 from "../assets/images/carousel/3.png"; 
import pic4 from "../assets/images/carousel/4.png"; 
import pic5 from "../assets/images/carousel/5.png"; 
import pic6 from "../assets/images/carousel/6.png"; 
import pic7 from "../assets/images/carousel/7.png"; 
import pic8 from "../assets/images/carousel/8.png";

const ResumePage = () => {
  const data = {
    "slides": [
      {
        "src": pic1,
        "alt": "Image 1 for carousel"
      },
      {
        "src": pic2,
        "alt": "Image 2 for carousel"
      },
      {
        "src": pic3,
        "alt": "Image 3 for carousel"
      },
      {
        "src": pic4,
        "alt": "Image 4 for carousel"
      },
      {
        "src": pic5,
        "alt": "Image 5 for carousel"
      },
      {
        "src": pic6,
        "alt": "Image 6 for carousel"
      },
      {
        "src": pic7,
        "alt": "Image 7 for carousel"
      },
      {
        "src": pic8,
        "alt": "Image 8 for carousel"
      },
    ]
  };

  return (
    <div className="md:px-10 sm:px-10 xl:px-36 pb-8 pt-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-1">
          <h1 className="text-[27px] mb-5 tracking-wide capitalize font-semibold ">Working Experience</h1>
         <div className="resume resume-border px-5">
          <h2 className="text-lg mt-5 mb-2 text-blue-custom font-bold tracking-wide antialiased">Front-End Developer</h2>
          <div className="m-0 justify-between">
            <div className="m- row-auto leading-7 ">
              <p className="text-md antialiased font-normal">Municipality of Santa Cruz Laguna at the Office of Municipal Treasury - Internship</p>
            </div>
            <div className="m-1 text-custom-gray mt-4">
              <p>February 2023 - May 2023 | Front End Developer</p>
              <p>Santa Cruz, Laguna</p>
            </div>
            <hr className="my-4 border-t-1 border-custom-gray" />
            
          
          </div>

          
          
          </div>
        
        </div>
        <div className="col-span-1 md:col-span-1 lg:pt-11">
          <div className="pt-4 relative flex justify-center items-center w-100 h-100 md:w-600 md:h-400 lg:w-4/7">
            <Carousel data={data.slides} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;