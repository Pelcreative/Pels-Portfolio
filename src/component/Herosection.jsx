import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from "../assets/Pels_creative.png";
import certi from "../assets/certi.pdf";
import CV from "../assets/Akinyemi Pelumi CV.pdf";

const Herosection = () => {
  const [mobilenav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobilenav);
  };
  return (
    <section id="home" className="relative h-screen bg-cover bg-center bg-[url('/bck.png')] text-white">
      <div className=" z-0 absolute inset-0  bg-opacity-70"></div>

      <nav className="absolute top-0 z-20 lg:flex w-full  justify-between items-center px-10 py-8 hidden ">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-36 sm:w-44 md:w-60 h-auto"
          />
        </div>
        <div>
          <ul className="flex text-lg font-semibold gap-9 transition-all duration-200">
            <Link to="about" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white">About</li>
            </Link>
            <Link to="skill" smooth={true} duration={500}>
            <li className="text-gray-400 hover:text-white">Skills</li>
            </Link>
            <Link to="service" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white">Service</li>
            </Link>
            {/* <Link to="testimonial" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white">Testimonials</li>
            </Link> */}
          </ul>
        </div>
        <div>
          <a href={certi}  className="ring-1 ring-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200">
            Certification
          </a>
        </div>
      </nav>

      <nav className="absolute top-0 z-20 flex w-full justify-between items-center px-5 py-4 lg:selection:hidden lg:hidden">
        <img
            src="src/assets/Pels_creative.png"
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
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40  "></div>

      {/* Content */}
      <div className="relative text-center z-10 px-6">
        <p className="text-gray-300 text-lg">
          Hello <span className="text-blue-400 font-semibold">User</span>, I'm
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-2 leading-none "> PELUMI </h1>

         <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mt-1 leading-none "> AKINYEMI  </h1>


        <p className="text-gray-400 text-lg mt-4 tracking-wide mb-5">
          Full-Stack Developer
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 ">
          <a
            href="src/assets/Akinyemi Pelumi CV.pdf"
            className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"
          >
            Download CV
          </a>
          <a
            href={CV}
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  
  

   


      {mobilenav && (
        <sidebar className=" z-[500] top-20
         absolute h-fit  right-0 w-5/6 lg:hidden flex flex-col bg-[#1b1448] ">
          <div>
            <ul className="flex flex-col text-lg font-semibold  transition-all duration-200">
              <Link to="about" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white border-b-2 border-white px-6 py-2">
                About
              </li>
              </Link>
              <Link to="skill" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Skills
              </li>
              </Link>
              <Link to="service" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Services
              </li>
              </Link>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Certification
              </li>
            </ul>
          </div>
        </sidebar>
      )}
    </section>
  );
};

export default Herosection;
