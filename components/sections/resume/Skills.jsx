import SpotlightCard from "@/components/ui/SpotlightCard";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaJava,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

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

const Skills = () => {
  return (
    <>
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
    </>
  );
};

export default Skills;
