import { GraduationCap, Award, BookOpen } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "B. Tech in Mechanical & Mechatronics Engineering",
      school: "The LNM Institute of Information Technology, Jaipur",
      period: "2024 - 2028",
      description:
        "Mechanical Undergraduate with interests in robotics and software development.",
      achievements: [
        "CGPA: 7.2/10", 
      ],
    },
    {
      icon: BookOpen,
      degree: "Class 12",
      school: "Kokilaben Dhirubhai Ambani Reliance Foundation School, Jamnagar",
      period: "2024",
      description:
        "Subjects - English, Physics, Chemistry, Mathematics, Computer Science",
      achievements: [
        "Secured 89% in CBSE Class 12 Board Exams.",
      ],
    },
    {
      icon: BookOpen,
      degree: "Class 10",
      school: "Kokilaben Dhirubhai Ambani Reliance Foundation School, Jamnagar",
      period: "2022",
      description:
        "Subjects - English, Hindi, Mathematics, Science, Social Studies",
      achievements: [
        "Secured 97% in CBSE Class 10 Board Exams.",
        "Subject Topper in Information Technology with 100/100 marks.",
      ],
    },
  ];

  return (
    <section id="education" className="relative py-20 px-4">
      <div className="container max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          {/* <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-all"></div>

                {/* Icon */}
                <div className="w-14 h-14 bg-linear-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary font-medium mb-1">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {edu.period}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {edu.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};