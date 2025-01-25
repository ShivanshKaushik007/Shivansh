"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Hult Prize Website",
    title: "project 1",
    desription:
      " The Hult Prize IET Lucknow website is a hub for event details, registrations, updates, and resources, showcasing the mission to inspire social change through student entrepreneurship.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
      { name : "React.js"}
    ],
    image: "/assets/thumb1.png ",
    live: "https://hult-iet-lko.vercel.app/",
    github: "https://github.com/PhantomPhreak007/hult",
  },
  {
    num: "02",
    category: "FinEasy",
    title: "project 2",
    desription:
      "FinEasy is a user-friendly financial management app designed to simplify budgeting, track expenses, and manage savings. It offers intuitive tools like automated expense categorization, personalized budget recommendations, and visual insights, empowering users to achieve their financial goals effortlessly. ",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
    ],
    image: "/assets/thumb2.png ",
    live: "",
    github: "https://github.com/PhantomPhreak007/FinEasy",
  },
  {
    num: "03",
    category: "Swift Chat App",
    title: "project 3",
    desription:
      " Swift Chat is a real-time messaging app offering fast, secure, and seamless communication. With features like instant messaging, voice and video calls, group chats, and end-to-end encryption, it ensures a smooth and private user experience for staying connected anytime, anywhere. ",
    stack: [
      { name: "Vite" },
      { name: "Tailwind.css" },
      { name: "Socket.io" },
      { name: "MongoDB" },
      { name: "Node.js" },
    ],
    image: "/assets/thumb3.png ",
    live: "",
    github: "https://github.com/PhantomPhreak007/client",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline  ">
                {project.num}
              </div>
              {/* projects category */}
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize  ">
                {project.category} 
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.desription}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <div className=" bg-white/5 w-[70px] h-[70px] rounded-full flex justify-center items-center  group">
                    <BsArrowUpRight className="text-white  text-3xl group-hover:text-accent" />
                  </div>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <div className=" bg-white/5 w-[70px] h-[70px] rounded-full flex justify-center items-center  group">
                    <BsGithub className="text-white  text-3xl group-hover:text-accent" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]  ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[265px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      {/* image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
