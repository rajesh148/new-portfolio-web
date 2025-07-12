import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "DevMates (Personal Project)",
      location: "Remote",
      duration: "May 2024 – Present",
      type: "Project",
      description:
        "Built DevMates, a MERN stack social networking platform tailored for developers. Focused on clean UI/UX, secure authentication, and real-time interactions.",
      achievements: [
        "Designed and built responsive UI with Tailwind CSS",
        "Integrated JWT-based secure authentication and authorization",
        "Implemented real-time notifications and a smart discovery system",
        "Boosted user connection rate by 40% through interactive UX features",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      current: true,
    },
    {
      id: 2,
      title: "IT Analyst",
      company: "Tata Consultancy Services",
      location: "Chennai, India",
      duration: "Nov 2021 – June 2025",
      type: "Full-time",
      description:
        "Worked on high-impact client projects involving web portals, story editors, and PWAs using React.js. Led performance tuning, component reusability, and accessibility improvements.",
      achievements: [
        "Reduced load time by 35% using lazy loading, useMemo, and useCallback in “What’s Your Story” project",
        "Built a scalable SDG content portal with code-splitting and performance enhancements",
        "Delivered a Redux Toolkit-based PWA improving TTI by 30% (TATA NEU)",
        "Mentored junior developers and participated in technical reviews",
      ],
      technologies: [
        "React.js",
        "Redux Toolkit",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Agile",
      ],
      current: false,
    },
    {
      id: 3,
      title: "Associate Software Analyst",
      company: "PurpleTalk India Pvt Ltd",
      location: "Hyderabad, India",
      duration: "Jun 2019 – Oct 2021",
      type: "Full-time",
      description:
        "Worked on mobile and web games, contributing to Unity-based game development and building a central web portal using React.js.",
      achievements: [
        "Developed mobile games including Hoops Class, Kiddo Box, and Pool Champs using Unity 3D and C#",
        "Created a responsive web portal to host all games with React.js",
        "Streamlined user experience and unified cross-platform access",
        'Received "Spark Award" for exceptional contributions and innovation',
      ],
      technologies: ["Unity 3D", "C#", "React.js", "JavaScript", "HTML", "CSS"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey across companies and projects, building
            scalable products and growing as a full stack developer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10">
                  {exp.current && (
                    <div className="w-2 h-2 rounded-full bg-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-8 pl-16 md:pl-0"
                      : "md:pl-8 pl-16 md:pr-0"
                  }`}
                >
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6 card-hover">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={20} className="text-primary" />
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            exp.current
                              ? "bg-green-500/10 text-green-500 border border-green-500/20"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {exp.current ? "Current" : exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <h4 className="text-lg text-primary font-medium">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">25+</div>
            <div className="text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-muted-foreground">Tech Stack Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-muted-foreground">Company Contributions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
