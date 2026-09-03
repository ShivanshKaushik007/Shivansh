const experience = {
  title: "My experience",
  description:
    "A timeline of the roles, teams, and projects that have shaped my work.",
  items: [
    {
      company: "Institute of Engineering and Technology",
      employment: "Full-time · 1 yr 5 mos",
      location: "Lucknow, Uttar Pradesh, India",
      roles: [
        { position: "Coordinator", duration: "May 2026 - Present · 5 mos" },
        { position: "Representative", duration: "May 2025 - Apr 2026 · 1 yr" },
      ],
    },
    {
      company: "ECell IET Lucknow",
      employment: "Full-time · 2 yrs 1 mo",
      roles: [
        { position: "Technical Head", duration: "Apr 2026 - Present · 6 mos" },
        { position: "Technical Lead", duration: "Mar 2025 - Mar 2026 · 1 yr 1 mo" },
        {
          position: "Web Developer",
          duration: "Sep 2024 - Apr 2025 · 8 mos",
          location: "Lucknow, Uttar Pradesh, India · On-site",
          category: "Software Development",
        },
      ],
    },
    {
      company: "HULT Prize IET Lucknow",
      employment: "Full-time",
      roles: [
        {
          position: "Web Developer",
          duration: "Oct 2024 - Present · 2 yrs",
          location: "Lucknow, Uttar Pradesh, India · On-site",
          category: "Software Development",
        },
      ],
    },
    {
      company: "Minitaka",
      employment: "Internship",
      roles: [
        {
          position: "Software Engineer Intern",
          duration: "Nov 2025 - Feb 2026 · 4 mos",
          location: "Bengaluru, Karnataka, India · Remote",
        },
      ],
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
      <div>
        <ul className="relative space-y-8 py-2 pl-2 before:absolute before:bottom-5 before:left-[7px] before:top-8 before:w-px before:bg-white/15">
          {experience.items.map((item, itemIndex) => (
            <li key={item.company} className="relative pl-8">
              <div className="mb-5">
                <span className="absolute -left-10 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-white/80 bg-primary text-[10px] font-bold text-white shadow-[0_0_0_4px_rgba(255,255,255,0.1)]">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                <h4 className="text-lg font-semibold text-white">{item.company}</h4>
                <p className="text-sm text-white/55">{item.employment}</p>
                {item.location && <p className="text-sm text-white/45">{item.location}</p>}
              </div>
              <ol className="space-y-6">
                {item.roles.map((role) => (
                  <li key={`${item.company}-${role.position}`} className="relative">
                    <h5 className="text-base font-semibold text-white">{role.position}</h5>
                    <p className="text-sm text-accent/80">{role.duration}</p>
                    {role.location && <p className="text-sm text-white/55">{role.location}</p>}
                    {role.category && (
                      <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/75">
                        <span className="h-2 w-2 rotate-45 border border-accent" />
                        {role.category}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
