import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center px-6 md:px-16 py-10"
    >
      {/* Headings */}
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-400 mb-2 text-sm uppercase tracking-wide"
      >
        Get To Know
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-3xl font-semibold mb-10"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-5xl">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="bg-gradient-to-br from-blue-400 to-sky-600 rounded-2xl p-1 shadow-lg">
            <img
              src="public/whiskAbout me.jpeg"
              alt="About me"
              className="rounded-2xl object-contain"
            />
          </div>
        </motion.div>

        {/* Right: Text + Cards + Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Info Cards */}
          <div className="flex gap-6 mb-8 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-blue-500 rounded-xl p-5 flex flex-col items-center justify-center w-40 hover:bg-blue-500/10 transition"
            >
              <FaAward className="text-blue-400 text-3xl mb-2" />
              <h5 className="font-semibold">Experienced</h5>
              {/* <small className="text-gray-400">3+ Years</small> */}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-blue-500 rounded-xl p-5 flex flex-col items-center justify-center w-40 hover:bg-blue-500/10 transition"
            >
              <FaLaptopCode className="text-blue-400 text-3xl mb-2" />
              <h5 className="font-semibold">Projects</h5>
              <small className="text-gray-400">Multiple Completed</small>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-8">
       I’m a passionate and results-driven Software Developer dedicated to crafting seamless digital experiences through clean code and creative problem-solving. With hands-on experience in building, deploying, and maintaining full-stack web applications, I enjoy turning complex ideas into elegant, high-performing products.

      <br/>I’m skilled in using modern web technologies such as JavaScript, TypeScript, React, Tailwind CSS, Node.js, Express.js, MySQL, and MongoDB — leveraging them to create efficient, scalable, and user-centered solutions.

        <br/> I thrive in collaborative, fast-paced environments, working closely with teams to bring ideas to life and continuously learning to stay ahead in an ever-evolving tech landscape. My focus goes beyond writing code — I’m passionate about building products that are intuitive, accessible, and impactful, helping users achieve their goals effortlessly.
          </p>

          {/* Let's Talk Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-medium"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
