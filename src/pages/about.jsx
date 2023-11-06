import aboutme from '../assets/images/about.png';

const AboutPage = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:flex lg:mt-1 lg:pb-10 pb-2 lg:pt-10 md:pt-3 pt-4 md:px-9  xl:px-36 lg:px-20 space-x-3">
      <div className="col-span-1 lg:flex lg:items-start lg:justify-start lg:w-8/12 flex-col">
        <h1 className="text-4xl mb-3 tracking-tight uppercase font-medium">About Me</h1>
        <h2 className="text-2xl capitalize font-light tracking-wide mb-4">I'm a Front End Developer and UI Designer</h2>
        <p className="text-custom-gray text-[16px] font-light mb-3 tracking-tight antialiased">
        My name is Francis, and my path in the realm of web development and design has been quite an extraordinary one. Throughout my journey, I've had the privilege of expanding my skills beyond just front-end development and UI design. I've always had a deep-seated passion for creating captivating and immersive digital experiences, and it has been a humbling and fulfilling experience to be able to pursue this passion in my career.
        </p>
        <p className="text-custom-gray text-[16px] font-light tracking-tight mb-3 antialiased">
            I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding, and I always strive for elegance in efficient code, whether it's in HTML, CSS, or ReactJS. Additionally, I can convert Adobe XD designs to HTML and create responsive designs.
          </p>
        <p className="text-custom-gray text-[16px] font-light tracking-tight mb-3 subpixel-antialiased">
          Here is my CV. It contains detailed information about my education,skills, work experience, and projects.
        </p>
        {/* Add the "View CV" button with oblong border radius */}
        <button className="bg-zinc-600 hover:bg-zinc-500 hover:gray-blue-600 text-white font-light py-2 px-5  rounded-full oblong-button subpixel-antialiased pt-2 pb-2 ">
          <a href="https://drive.google.com/file/d/1KIPHhD4NUwrarBw2Vdm20zKHV149VczI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV
          </a>
          </button>
      </div>
      <div className="col-span-1 lg:flex relative top-7 pb-7 lg:items-center lg:justify-center lg:w-4/7">
        <div className="hidden lg:block"> {/* Display only on large screens (lg) */}
          <img src={aboutme} alt="Example" className="w-80 h-100" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
