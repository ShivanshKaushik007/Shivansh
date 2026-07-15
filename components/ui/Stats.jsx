"use client";

import CountUp from "react-countup";
import SpotlightCard from "./SpotlightCard";

const stats = [
  {
    num: 4,
    text: "years of experience",
  },
  {
    num: 6,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 309,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-16 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <SpotlightCard
                key={index}
                className="p-6 flex flex-col md:flex-row items-center justify-center xl:justify-start gap-4 transition-all duration-300 hover:scale-[1.02]"
                spotlightColor="rgba(0, 255, 153, 0.08)"
                borderColor="rgba(0, 255, 153, 0.2)"
              >
                <div className="flex items-center gap-4">
                  <CountUp
                    end={item.num}
                    duration={4}
                    delay={1.5}
                    className="text-4xl xl:text-5xl font-extrabold text-accent"
                  />
                  <p
                    className={`${
                      item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/70 text-sm xl:text-base capitalize`}
                  >
                    {item.text}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
