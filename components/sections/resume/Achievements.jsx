import { ScrollArea } from "@/components/ui/scroll-area";
import SpotlightCard from "@/components/ui/SpotlightCard";

const achievements = {
  title: "My Achievements",
  description:
    "Some of my notable accomplishments and recognitions in hackathons and competitions.",
  items: [
    {
      title: "NEC IIT Bombay Finalist",
      competition: "IIT Bombay",
      description:
        "Qualified as a finalist in India's biggest Entrepreneurial Challenge among 600+ teams.",
    },
    {
      title: "4th Position - Hack with UP Hackathon",
      competition: "Hack with UP",
      description:
        "Developed PhysioGo, an AI-based physiotherapy platform for smart recommendations and online bookings, competing among 430+ teams.",
    },
  ],
};

const Achievements = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{achievements.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed mb-4">
        {achievements.description}
      </p>
      <ScrollArea className="h-auto">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-1">
          {achievements.items.map((item, index) => {
            return (
              <li key={index}>
                <SpotlightCard
                  className="p-6 h-auto min-h-[220px] rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-all duration-300 hover:scale-[1.02]"
                  spotlightColor="rgba(0, 255, 153, 0.08)"
                  borderColor="rgba(0, 255, 153, 0.2)"
                >
                  <h3 className="text-xl font-bold text-center lg:text-left text-white mt-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 mb-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-accent text-sm leading-none font-semibold">
                      {item.competition}
                    </p>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed text-center lg:text-left">
                    {item.description}
                  </p>
                </SpotlightCard>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Achievements;
