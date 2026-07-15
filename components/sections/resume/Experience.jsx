import { ScrollArea } from "@/components/ui/scroll-area";
import SpotlightCard from "@/components/ui/SpotlightCard";

const experience = {
  title: "My experience",
  description:
    "Here is a summary of my professional experience and internships.",
  items: [
    {
      company: "PanScience Innovations, Lucknow",
      position: "PSI High Agency Fellowship",
      duration: "May 2026 - Jun 2026",
    },
    {
      company: "Minitaka, Remote",
      position: "Software Engineer Intern",
      duration: "Nov 2025 - Feb 2026",
    },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed mb-4">
        {experience.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-1">
          {experience.items.map((item, index) => {
            return (
              <li key={index}>
                <SpotlightCard
                  className="p-6 h-[184px] rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-all duration-300 hover:scale-[1.02]"
                  spotlightColor="rgba(0, 255, 153, 0.08)"
                  borderColor="rgba(0, 255, 153, 0.2)"
                >
                  <span className="text-accent font-mono text-sm">{item.duration}</span>
                  <h3 className="text-xl font-bold max-w-[280px] min-h-[60px] text-center lg:text-left text-white mt-1">
                    {item.position}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60 text-sm leading-none">{item.company}</p>
                  </div>
                </SpotlightCard>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
