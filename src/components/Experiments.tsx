import { Folder, ExternalLink, Gamepad, Cog, BookOpen, SlidersHorizontal, Gamepad2, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Cog,
    title: "Game Mod Experiments",
    description:
      "Explored modding communities for games like Skyrim and GTA San Andreas. Learned how game assets work and how modifications affect gameplay.",
    tags: ["Modding", "Skyrim", "GTA San Andreas"],
    status: "Modding",
  },
  {
    icon: SlidersHorizontal,
    title: "Game Performance & Graphics Tuning",
    description:
      "Hands-on experimentation with game graphics and performance settings, including resolution scaling, textures, V-Sync, motion blur, shadows, and post-processing, to balance visual quality with smooth gameplay on constrained systems.",
    tags: ["Graphics Settings", "Optimization", "Hardware"],
    status: "Performance Tuning", 
  },
  {
    icon: Gamepad2,
    title: "Input Responsiveness & Control Testing",
    description:
      "Experimented with different control schemes, sensitivity settings, and frame rate limits to understand their impact on input latency, responsiveness, and overall gameplay feel across genres.",
    tags: ["Input Lag", "Responsiveness", "Player Feel"],
    status: "Controls", 
  },
  {
    icon: Monitor,
    title: "Low-End Hardware Gameplay Testing",
    description:
      "Tested gameplay on low-end hardware to identify performance bottlenecks and optimize settings for smoother experiences on less powerful systems.",
    tags: ["Low-End Hardware", "Performance Testing", "Optimization"],
    status: "Testing", 
  },
];

export const Experiments = () => {
  return (
    <section id="experiments" className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Folder className="w-5 h-5" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Experiments
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Learning by doing. Here are some of my explorations into game 
            development and related areas.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card-gaming p-6 rounded-xl flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiments;
