"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub, BsGlobe2 } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import SpotlightCard from "@/components/ui/SpotlightCard";

const projects = [
  {
    num: "01",
    category: "Swift Chat App",
    title: "project 1",
    desription:
      "Swift Chat is a real-time messaging app offering fast, secure, and seamless communication. With features like instant messaging, voice and video calls, group chats, and end-to-end encryption, it ensures a smooth and private user experience for staying connected anytime, anywhere.",
    stack: [
      { name: "Vite" },
      { name: "Tailwind" },
      { name: "Socket.io" },
      { name: "MongoDB" },
      { name: "Node.js" },
    ],
    image: "/assets/swift.png",
    live: "https://swift-qko3.onrender.com/",
    github: "https://github.com/ShivanshKaushik007/swift",
  },
  {
    num: "02",
    category: "LiveNote",
    title: "project 2",
    desription:
      "LiveNote is a real-time collaborative note-taking application inspired by Google Docs. It enables multiple users to create, edit, and share documents simultaneously with smooth, real-time updates.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Clerk" },
      { name: "ShadCN" },
      { name: "LibeBlocks" },
    ],
    image: "/assets/livenote.png",
    live: "https://livenote-tau.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/livenote",
  },
  {
    num: "03",
    category: "FinEasy",
    title: "project 3",
    desription:
      "FinEasy is a user-friendly financial management app designed to simplify budgeting, track expenses, and manage savings. It offers intuitive tools like automated expense categorization, personalized budget recommendations, and visual insights, empowering users to achieve their financial goals effortlessly.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "OpenAI-API" },
    ],
    image: "/assets/fineasy.png",
    live: "https://fin-easy.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/FinEasy",
  },
  {
    num: "04",
    category: "Hult Prize IET LKO",
    title: "project 4",
    desription:
      "The Hult Prize IET Lucknow website is a hub for event details, registrations, updates, and resources, showcasing the mission to inspire social change through student entrepreneurship.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "JavaScript" },
      { name : "React.js"}
    ],
    image: "/assets/Hult.png",
    live: "https://hult-iet-lko.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/hult",
  },
  {
    num: "05",
    category: "E-Cell IET LKO",
    title: "project 5",
    desription:
      "The E-Cell Website is a dynamic and user-friendly platform designed to showcase the initiatives, events, and vision of the Entrepreneurship Cell. Built with a modern tech stack, it serves as the digital presence of the E-Cell, engaging students, mentors, and industry leaders.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "Aceternity" },
    ],
    image: "/assets/Ecell.png",
    live: "https://e-cell-iet-lko.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/E-cell",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-6 xl:px-12">
        <div className="flex flex-col xl:flex-row xl:gap-[40px]">
          {/* Details Card */}
          <div className="w-full xl:w-[50%] flex flex-col order-2 xl:order-none mb-12 xl:mb-0">
            <SpotlightCard
              className="p-8 h-full flex flex-col justify-between gap-6"
              spotlightColor="rgba(0, 255, 153, 0.06)"
              borderColor="rgba(0, 255, 153, 0.2)"
            >
              <div className="flex flex-col gap-5">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* projects category */}
                <h2 className="text-3xl xl:text-4xl font-bold leading-none text-white capitalize">
                  {project.category} 
                </h2>
                {/* project description */}
                <p className="text-white/60 leading-relaxed text-sm xl:text-base">{project.desription}</p>
                {/* stack */}
                <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-sm xl:text-base text-accent font-mono">
                        #{item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="border-t border-white/10 my-2"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <div className="bg-white/5 border border-white/10 w-[55px] h-[55px] rounded-full flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                    <BsGlobe2 className="text-white text-xl group-hover:text-primary transition-all duration-300" />
                  </div>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <div className="bg-white/5 border border-white/10 w-[55px] h-[55px] rounded-full flex justify-center items-center group hover:bg-accent hover:border-accent transition-all duration-300">
                    <BsGithub className="text-white text-xl group-hover:text-primary transition-all duration-300" />
                  </div>
                </Link>
              </div>
            </SpotlightCard>
          </div>
          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[480px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[280px] xl:h-[400px] relative group flex justify-center items-center bg-[#1e1e24] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
                      {/* image */}
                      <div className="relative w-full h-full p-6">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain p-6 group-hover:scale-103 transition-all duration-500"
                          alt={project.category}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-4 bottom-4 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md shadow-lg"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
