"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaJava,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "I have given my contact info below please do contact me if you have a relevant project for me .",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shivansh Kaushik",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7599188181",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "shivanshkaushik1237",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "shivanshkaushik1237@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// education data
const education = {
  title: "My education",
  description:
    "Here is some details about my education I am Undergrad Student at IET lucknow pursuing Engineering in Computer Science.",
  items: [
    {
      institution: "De paul School",
      degree: "Highschool",
      duration: "2020",
    },
    {
      institution: "De paul School",
      degree: "Intermediate",
      duration: "2022",
    },
    {
      institution: "Institute of Engineering & Technology ,Lucknow",
      degree: "B.Tech. (Computer Science Engineering)",
      duration: "2023-2027",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I have completed the Tech-stack shown below at Intermediate level and have advance level in Java .",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
  ],
};

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-24"
    >
      <div className="container mx-auto px-6 xl:px-12">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education" className="w-full text-left justify-start">Education</TabsTrigger>
            <TabsTrigger value="skills" className="w-full text-left justify-start">Skills</TabsTrigger>
            <TabsTrigger value="about" className="w-full text-left justify-start">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed mb-4">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-1">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <SpotlightCard
                            className="p-6 h-[184px] rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-all duration-300 hover:scale-[1.02]"
                            spotlightColor="rgba(0, 255, 153, 0.08)"
                            borderColor="rgba(0, 255, 153, 0.2)"
                          >
                            <span className="text-accent font-mono text-sm">{item.duration}</span>
                            <h3 className="text-xl font-bold max-w-[280px] min-h-[60px] text-center lg:text-left text-white mt-1">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 text-sm leading-none">{item.institution}</p>
                            </div>
                          </SpotlightCard>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] mb-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-1">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <SpotlightCard
                        className="p-6 h-[130px] flex flex-col justify-center items-center gap-3 transition-all duration-300 hover:scale-[1.03]"
                        spotlightColor="rgba(0, 255, 153, 0.08)"
                        borderColor="rgba(0, 255, 153, 0.2)"
                      >
                        <div className="text-5xl text-accent transition-all duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-xs uppercase font-semibold text-white/50 tracking-widest mt-1">
                          {skill.name}
                        </span>
                      </SpotlightCard>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>

            {/* About me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed mb-4">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto xl:mx-0 p-1">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}>
                        <SpotlightCard
                          className="p-4 flex flex-row items-center gap-4 transition-all duration-300 hover:scale-[1.01]"
                          spotlightColor="rgba(0, 255, 153, 0.06)"
                          borderColor="rgba(0, 255, 153, 0.15)"
                        >
                          <div className="text-white/60 text-xs font-semibold uppercase tracking-wider w-[120px] border-r border-white/10 pr-2 text-left">
                            {item.fieldName}
                          </div>
                          <div className="text-sm xl:text-base text-accent font-semibold flex-1 text-left truncate">
                            {item.fieldValue}
                          </div>
                        </SpotlightCard>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
