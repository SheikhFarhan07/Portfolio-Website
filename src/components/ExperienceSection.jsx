import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Reliance Industries Ltd.",
      period: "Jun. 2025 - Jul. 2025",
      description: [
        "Analyzed GE Frame 9E gas turbine PLC/DCS logs using data-driven techniques to understand start-up, shutdown, and barring gear behavior.",
        "Explored how industrial automation data can be leveraged for AI based monitoring and fault analysis.",
        "Studied interlock and safety logic with an emphasis on data reliability for process optimization.",
        "Developed a cross-domain perspective combining mechanical engineering with software-driven automation.",
      ],
      tags: ["AI for Industrial Systems", "Power Plant Systems", "Predictive Analysis", "PLC/DCS"],
    },
    {
      title: "Executive",
      company: "Training Placement and Corporate Relations Cell, LNMIIT Jaipur",
      period: "Apr. 2025 - Present",
      description: [
        "Coordinated placement drives by managing recruiter communication, student coordination, and scheduling.",
        "Managed placement related data and documentation to support shortlisting and interview workflows.",
        "Gained experience in handling high responsibility operations under strict timelines.",
      ],
      tags: ["Teamwork", "Professional Responsibility", "Data Operations"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="container max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          {/* <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div> */}
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:translate-x-2 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Left Border Accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-primary to-primary/50 rounded-l-lg"></div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3 text-left">
                  <div className="mt-1 shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                    >
                        <span className="text-primary">▹</span>
                        <span>{item}</span>
                    </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs md:text-sm bg-primary/10 text-primary border border-primary/30 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};