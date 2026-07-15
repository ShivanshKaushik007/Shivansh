import SpotlightCard from "@/components/ui/SpotlightCard";

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

const About = () => {
  return (
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
  );
};

export default About;
