import { Gamepad2, Swords, Map, Users, Sparkles } from "lucide-react";

const genres = [
  {
    icon: Swords,
    name: "Action RPGs",
    games: ["Dark Souls Series", "Elden Ring", "The Witcher 3"],
    insight: "Love the deep combat systems and how difficulty creates meaningful progression",
  },
  {
    icon: Map,
    name: "Open World",
    games: ["GTA V", "Red Dead Redemption 2", "Skyrim"],
    insight: "Fascinated by how vast worlds maintain player engagement and discovery",
  },
  {
    icon: Users,
    name: "Multiplayer / Competitive",
    games: ["Valorant", "CS2", "Apex Legends"],
    insight: "Interested in game balance, matchmaking systems, and anti-cheat mechanisms",
  },
  {
    icon: Sparkles,
    name: "Story-Driven",
    games: ["The Last of Us", "God of War", "Horizon Zero Dawn"],
    insight: "Appreciate how narrative and gameplay mechanics blend seamlessly",
  },
];

const engines = [
  { name: "Unity", status: "Exploring" },
  { name: "Unreal Engine", status: "Learning" },
  { name: "Godot", status: "Curious" },
];

export const GamingInterests = () => {
  return (
    <section id="gaming" className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Gaming Interests</h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Gaming isn't just a hobby for me — it's a study in interactive design, 
            player psychology, and technical excellence. Here's what I love to play 
            and why.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {genres.map((genre, index) => (
              <div
                key={genre.name}
                className="card-gaming p-6 rounded-xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <genre.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{genre.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {genre.games.map((game) => (
                        <span
                          key={game}
                          className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                        >
                          {game}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic">
                      "{genre.insight}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Game Engines */}
          <div className="card-gaming p-8 rounded-xl">
            <h3 className="font-semibold text-xl mb-6">
              Game Engines I'm Interested In
            </h3>
            <div className="flex flex-wrap gap-4">
              {engines.map((engine) => (
                <div
                  key={engine.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50 border border-border"
                >
                  <span className="font-medium">{engine.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {engine.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
