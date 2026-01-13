import { User, Lightbulb, Target, Puzzle } from "lucide-react";

const traits = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Always exploring how games work under the hood",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description: "Spotting bugs and inconsistencies comes naturally",
  },
  {
    icon: Puzzle,
    title: "Problem Solver",
    description: "Breaking down complex challenges into manageable pieces",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 section-gradient">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a B.Tech student in Computer Science with a specialization in 
                Cyber Security, but my true passion lies in the world of gaming. 
                From story-driven RPGs to competitive multiplayer games, I've spent 
                countless hours not just playing, but analyzing what makes games 
                truly engaging.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My interest in game development started when I began wondering 
                "How do they do that?" while playing my favorite games. This curiosity 
                has led me to explore game engines, mechanics, and the QA process 
                that ensures players have seamless experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that great games are born from attention to detail, 
                creative problem-solving, and a deep understanding of what players 
                want. I'm eager to contribute to this creative process, whether 
                through development or quality assurance.
              </p>
            </div>

            <div className="space-y-4">
              {traits.map((trait, index) => (
                <div
                  key={trait.title}
                  className="card-gaming p-6 rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                      <trait.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{trait.title}</h3>
                      <p className="text-muted-foreground">{trait.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
