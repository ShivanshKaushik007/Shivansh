"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";
import { FaReact } from "react-icons/fa";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*Image*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] 
      xl:w-[498px] xl:h-[498px] absolute  "
        >
          <FaReact className="px-[100px] mx-[20px] w-[270px] h-[270px] 
      xl:w-[460px] xl:h-[498px]  text-accent " />
        </motion.div>

        {/*circle*/}
        <motion.svg
          className="w-[300px] xl:w-[506px] xl:h-[506px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25","16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
            }}
            transition={{
              duration:15,
              repeat:Infinity,
              repeatType:"reverse",
            }}
          />
           <motion.circle
            cx="253"
            cy="253"
            r="240"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25","16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
            }}
            transition={{
              duration:18,
              repeat:Infinity,
              repeatType:"reverse",
            }}
          />
          <motion.circle
            cx="253"
            cy="253"
            r="230"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25","16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
            }}
            transition={{
              duration:21,
              repeat:Infinity,
              repeatType:"reverse",
            }}
          />
          <motion.circle
            cx="253"
            cy="253"
            r="220"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25","16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
            }}
            transition={{
              duration:24,
              repeat:Infinity,
              repeatType:"reverse",
            }}
          />
          <motion.circle
            cx="253"
            cy="253"
            r="210"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25","16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
            }}
            transition={{
              duration:27,
              repeat:Infinity,
              repeatType:"reverse",
            }}
          />
          <motion.circle
            cx="253"
            cy="253"
            r="200"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25","16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
            }}
            transition={{
              duration:30,
              repeat:Infinity,
              repeatType:"reverse",
            }}
          />
        </motion.svg>
        </motion.div>
    </div>
  );
};

export default Photo;
