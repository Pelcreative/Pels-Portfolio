import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaBootstrap,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

import { motion } from "framer-motion";

// Skill items
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <FaMobileAlt className="text-cyan-400" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
  { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
];

// Heading animation
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Skill card animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SkillsSection = () => {
  return (
    <section
      id="skill"
      className=" bg-[#0a192f] text-white py-16 px-6 overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headingVariants}
      >
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-400">Technologies & Tools I Use</p>
      </motion.div>

      {/* Skill Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(0, 200, 255, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center justify-center bg-[#142336] hover:bg-[#1b2e49] transition-all duration-300 p-5 rounded-2xl border border-gray-700 shadow-md group relative"
          >
            {/* Neon Glow Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-cyan-500/20 opacity-0 blur-2xl group-hover:opacity-100 transition-all duration-500"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Icon */}
            <motion.div
              className="text-4xl mb-3 relative z-10"
              whileHover={{ rotate: 5, transition: { duration: 0.2 } }}
            >
              {skill.icon}
            </motion.div>

            {/* Label */}
            <p className="font-semibold text-sm text-gray-200 relative z-10">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
