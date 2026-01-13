import { Gamepad2, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <Gamepad2 className="w-5 h-5 text-primary" />
            <span className="text-gradient">AGK</span>
          </a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" /> by Anirudh G Kulkarni
          </p>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
