import { Folder, ExternalLink, Gamepad, Cog, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Gamepad,
    title: "First Unity Project",
    description:
      "A simple 2D platformer created while learning Unity basics. Implemented basic player movement, jumping mechanics, and collision detection.",
    tags: ["Unity", "C#", "2D", "Learning"],
    status: "Completed",
  },
  {
    icon: Cog,
    title: "Game Mod Experiments",
    description:
      "Explored modding communities for games like Skyrim and GTA V. Learned how game assets work and how modifications affect gameplay.",
    tags: ["Modding", "Asset Editing", "Community"],
    status: "Ongoing",
  },
  {
    icon: BookOpen,
    title: "Game Design Document",
    description:
      "Created a comprehensive GDD for a concept puzzle-adventure game. Documented mechanics, level progression, and player experience flow.",
    tags: ["Documentation", "Game Design", "Planning"],
    status: "Completed",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Folder className="w-5 h-5" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Projects & Experiments
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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              More projects coming as I continue learning!
            </p>
            <Button
              variant="outline"
              className="border-border hover:border-primary/50 hover:bg-primary/5"
              asChild
            >
              <a
                href="https://github.com/anirudhgkulkarni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
