import { useState } from "react";
import { Gamepad2, Swords, Map, Users, Sparkles, Compass } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const genres = [
  {
    icon: Swords,
    name: "Action RPGs",
    games: ["Mafia series", "Watch Dogs", "Far Cry series"],
    insight: "Love the deep combat systems and how difficulty creates meaningful progression",
  },
  {
    icon: Map,
    name: "Open World",
    games: ["GTA Games", "Mafia series", "Skyrim"],
    insight: "Fascinated by how vast worlds maintain player engagement and discovery",
  },
  {
    icon: Compass,
    name: "Adventure",
    games: ["Tomb Raider", "L.A Noire", "Assassin's Creed series"],
    insight: "Interested in world design, exploration mechanics, and narrative progression",
  },
  {
    icon: Sparkles,
    name: "Story-Driven",
    games: ["Assassin's Creed series", "GTA San Andreas", "Red Dead Redemption 1"],
    insight: "Appreciate how narrative and gameplay mechanics blend seamlessly and also the endings",
  },
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
            Gaming goes beyond entertainment for me, offering insight into player experience, system design, and interactive worlds
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
          {/* Additional Games Played (expandable by genre) */}
          <div className="mt-8">
            <div className="card-gaming p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Additional Games Played</h3>

              <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
                I have played 40+ games across multiple genres. The games shown above are a curated selection highlighting my interests and experience.
              </p>

              <GamesAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Accordion component and trigger implementation */
const GamesAccordion = () => {
  const [open, setOpen] = useState(false);

  const gameCategories = [
    {
      title: "Action / Open World",
      games: [
        "Assassin’s Creed (I, II, Brotherhood, Revelations, III, Black Flag, Freedom Cry, Rogue, Unity, Syndicate)",
        "GTA III",
        "GTA Vice City",
        "GTA San Andreas",
        "GTA V",
        "Red Dead Redemption",
        "Mafia 1",
        "Mafia 2",
        "Sleeping Dogs",
        "Watch Dogs",
        "Far Cry 2",
        "Far Cry 3",
        "Far Cry 4",
      ],
    },
    {
      title: "Stealth / Tactical / Narrative",
      games: ["Hitman Series", "Dishonored", "Alien: Isolation", "L.A. Noire"],
    },
    {
      title: "Shooter / Action",
      games: ["Project IGI", "Project IGI 2", "BioShock"],
    },
    {
      title: "RPG / Sandbox",
      games: ["The Elder Scrolls V: Skyrim", "Minecraft"],
    },
    {
      title: "Adventure / Action-Adventure",
      games: ["Tomb Raider", "Scarface", "The Godfather", "Murdered: Soul Suspect"],
    },
    {
      title: "Strategy / Simulation / Sports",
      games: ["Age of Empires III", "Cricket 07"],
    },
  ];

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded px-1"
          aria-expanded={open}
          aria-controls="games-accordion"
        >
          View full game list (by genre)
        </button>
      </div>

      <div id="games-accordion" className={`mt-4 ${open ? "" : "hidden"}`}>
        <Accordion type="single" collapsible>
          {gameCategories.map((cat) => (
            <AccordionItem key={cat.title} value={cat.title}>
              <AccordionTrigger className="px-0">
                  <div className="flex w-full items-center justify-between">
                    <span>{cat.title}</span>
                  </div>
              </AccordionTrigger>

              <AccordionContent>
                <ul className="flex flex-wrap gap-2" aria-label={`${cat.title} games`}>
                  {cat.games.map((g) => (
                    <li
                      key={g}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
