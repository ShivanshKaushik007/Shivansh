import { ScrollArea } from "@/components/ui/scroll-area";
import SpotlightCard from "@/components/ui/SpotlightCard";

const positions = {
  title: "Positions of Responsibility",
  description:
    "Roles I have undertaken to develop leadership and organizational skills.",
  items: [
    {
      organization: "Training and Placement Cell",
      position: "Coordinator",
      description:
        "Serving as Placement Coordinator for 1200+ students, leading placement operations and spearheading development of the Placement Cell website.",
    },
    {
      organization: "Hult Prize IET Lucknow",
      position: "Technical Head",
      description:
        "Developed the website of Hult Prize IET Lucknow and coordinated the organization of various events under this Competition.",
    },
    {
      organization: "E-Cell IET Lucknow",
      position: "Technical Head",
      description:
        "Developed the website of E-cell IET Lucknow and conducted various engaging entrepreneurial events.",
    },
  ],
};

const Positions = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{positions.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed mb-4">
        {positions.description}
      </p>
      <ScrollArea className="h-[450px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-1">
          {positions.items.map((item, index) => {
            return (
              <li key={index}>
                <SpotlightCard
                  className="p-6 h-auto min-h-[220px] rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-all duration-300 hover:scale-[1.02]"
                  spotlightColor="rgba(0, 255, 153, 0.08)"
                  borderColor="rgba(0, 255, 153, 0.2)"
                >
                  <h3 className="text-xl font-bold text-center lg:text-left text-white mt-1">
                    {item.position}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 mb-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-accent text-sm leading-none font-semibold">
                      {item.organization}
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

export default Positions;
