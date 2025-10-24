import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import { RiCloseLargeFill } from "react-icons/ri";

const Herosection = () => {
  const [mobilenav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobilenav);
  };
  return (
    <section className="relative h-screen bg-cover bg-center bg-[url('/bck.png')] text-white">
      <div className=" z-0 absolute inset-0  bg-opacity-70"></div>

      <nav className="absolute top-0 z-20 lg:flex w-full  justify-between items-center px-10 py-8 hidden ">
        <div>
          <img
            src="public/Pels_creative.png"
            alt="Logo"
            className="w-60 h-auto"
          />
        </div>
        <div>
          <ul className="flex text-lg font-semibold gap-9 transition-all duration-200">
            <Link to="about" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white">About</li>
            </Link>

            <li className="text-gray-400 hover:text-white">Portfolio</li>
            <Link to="service" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white">Service</li>
            </Link>
            <Link to="testimonial" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white">Testimonials</li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="ring-1 ring-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200">
            Let's connect
          </button>
        </div>
      </nav>

      <nav className="absolute top-0 z-20 flex w-full justify-between items-center px-5 py-4 lg:selection:hidden lg:hidden">
        <img
            src="public/Pels_creative.png"
            alt="Logo"
            className="w-60 h-auto"
        />

        <div
          onClick={toggleMobileNav}
          className="p-3 z-[600] border-2 border-blue-800 rounded-md text-xl text-blue-800"
        >
          {mobilenav ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </div>
      </nav>

    <section
      className="relative flex items-center justify-center
        h-screen bg-cover bg-center text-white flex-col  "
      style={{
        backgroundImage:
          "/bck.png",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50  mt-5"></div>

      {/* Content */}
      <div className="relative text-center z-10 px-6">
        <p className="text-gray-300 text-lg">
          Hello <span className="text-blue-400 font-semibold">User</span>, I'm
        </p>

        <h1 className="text-8xl md:text-7xl font-bold mt-2"> PELUMI </h1>

         <h1 className="text-8xl md:text-7xl font-extrabold mt-1"> AKINYEMI  </h1>


        <p className="text-gray-400 text-lg mt-4 tracking-wide mb-5">
          Full-Stack Developer
        </p>

        <div className="mt-8 flex justify-center gap-4 ">
          <a
            href="#cv"
            className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  
  

   


      {mobilenav && (
        <sidebar className=" z-[500] top-20
         absolute h-fit  right-0 w-4/6 lg:hidden flex flex-col bg-[#1b1448] ">
          <div>
            <ul className="flex flex-col text-lg font-semibold  transition-all duration-200">
              <li className="text-gray-400 hover:text-white border-b-2 border-white px-6 py-2">
                About
              </li>

              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Portfolio
              </li>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Services
              </li>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Testimonials
              </li>
            </ul>
          </div>
        </sidebar>
      )}
    </section>
  );
};

export default Herosection;
