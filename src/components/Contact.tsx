import { Mail, Linkedin, Github, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "anirudhgkulkarni@email.com",
    href: "mailto:anirudhgkulkarni@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anirudhgkulkarni",
    href: "https://linkedin.com/in/anirudhgkulkarni",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/anirudhgkulkarni",
    href: "https://github.com/anirudhgkulkarni",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "anirudhgkulkarni.github.io",
    href: "https://anirudhgkulkarni.github.io",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Send className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get In Touch</h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Interested in discussing game development, QA opportunities, or just 
            want to chat about games? I'd love to hear from you!
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="card-gaming p-6 rounded-xl flex items-center gap-4 text-left group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <Button
            size="lg"
            className="glow-primary bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
            asChild
          >
            <a href="mailto:anirudhgkulkarni@email.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
