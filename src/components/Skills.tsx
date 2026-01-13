import { Wrench, Brain, Code, Monitor, Settings } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Gaming Knowledge",
    skills: [
      "Game Mechanics Analysis",
      "Player Experience Understanding",
      "Genre Familiarity",
      "Game Design Principles",
    ],
  },
  {
    icon: Code,
    title: "Technical Skills",
    skills: [
      "Programming Basics (Python, C++)",
      "Microsoft Office Suite",
      "Basic Unity/Unreal",
      "Version Control (Git)",
    ],
  },
  {
    icon: Monitor,
    title: "System Knowledge",
    skills: [
      "Windows Administration",
      "PC Hardware",
      "Troubleshooting",
      "Software Installation",
    ],
  },
  {
    icon: Settings,
    title: "QA Mindset",
    skills: [
      "Bug Identification",
      "Test Case Thinking",
      "Documentation",
      "Reproducibility Focus",
    ],
  },
];

const softSkills = [
  "Attention to Detail",
  "Problem Solving",
  "Adaptability",
  "Communication",
  "Team Collaboration",
  "Critical Thinking",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 section-gradient">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Wrench className="w-5 h-5" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Skills & Learning</h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            A blend of gaming expertise, technical knowledge, and the mindset 
            needed for quality assurance in game development.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="card-gaming p-6 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="card-gaming p-8 rounded-xl">
            <h3 className="font-semibold text-xl mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-foreground font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
