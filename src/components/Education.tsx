import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Computer Networks",
  "Operating Systems",
  "Cyber Security Fundamentals",
  "Software Engineering",
];

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 section-gradient">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Education</h2>
          </div>

          <div className="card-gaming p-8 rounded-xl mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  B.Tech in Computer Science
                </h3>
                <p className="text-primary font-medium mb-1">
                  Specialization in Cyber Security
                </p>
                <p className="text-muted-foreground">
                  Building a strong foundation in computing and security
                </p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                <Calendar className="w-4 h-4" />
                <span>Currently Pursuing</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="font-semibold">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card-gaming p-6 rounded-xl">
            <h4 className="font-semibold text-lg mb-3">
              How This Relates to Game Development
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              My CS background provides essential skills for game development — 
              from understanding algorithms for game AI to networking knowledge 
              for multiplayer systems. Cyber security expertise is increasingly 
              valuable in gaming for anti-cheat systems, secure transactions, 
              and protecting player data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
