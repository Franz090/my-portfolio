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
    <div className="md:px-10 sm:px-10 xl:px-28 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-1">
          <div className="pt-2 relative flex justify-center items-center w-100 h-100 md:w-600 md:h-400 lg:w-4/7">
            <Carousel data={data.slides} /> 
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <p className="p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vero repellendus illo praesentium veniam impedit reprehenderit, magnam quo. Et, vero. Enim quam a autem ab officiis praesentium pariatur iste dignissimos aliquam culpa amet, nihil, deserunt odit dolores, ducimus minus illum totam inventore in nesciunt? Optio tenetur blanditiis fugiat! Natus, minus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
