"use client";
import { motion } from "framer-motion";
import Experience from "./resume/Experience";
import Positions from "./resume/Positions";
import Achievements from "./resume/Achievements";
import Education from "./resume/Education";
import Skills from "./resume/Skills";
import About from "./resume/About";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:py-24"
    >
      <div className="container mx-auto px-6 xl:px-12 flex flex-col gap-16 xl:gap-24">
        <div className="w-full">
          <Experience />
        </div>

        <div className="w-full">
          <Positions />
        </div>

        <div className="w-full">
          <Achievements />
        </div>

        <div className="w-full">
          <Education />
        </div>

        <div className="w-full h-full">
          <Skills />
        </div>

        <div className="w-full text-center xl:text-left">
          <About />
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
