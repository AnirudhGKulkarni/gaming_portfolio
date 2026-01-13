import { ArrowDown, Gamepad2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="container relative z-10 px-4 text-center">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl border border-white/5 animate-bounce">
              <img src="ani.png" alt="ani" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Anirudha G Kulkarni</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
            <Gamepad2 className="w-4 h-4" />
            <span>Gaming Enthusiast</span>
            <Gamepad2 className="w-4 h-4" />
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about gaming, curious about game building, and eager to explore 
            the world of game development and quality assurance. Currently pursuing 
            B.Tech in Computer Science with a specialization in Cyber Security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="glow-primary bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                >
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  View My Gaming Resume
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-5xl w-[90vw] p-0 overflow-hidden">
                <div className="p-4 bg-secondary/5 border-b">
                  <DialogTitle>My Gaming Resume</DialogTitle>
                </div>
                <div className="w-full h-[75vh] bg-background">
                  <object
                    data="Gaming_Resume.pdf"
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <div className="p-6 text-center">
                      <p className="mb-4">Unable to display PDF in your browser.</p>
                      <a href="Gaming_Resume.pdf" target="_blank" rel="noreferrer noopener" className="underline text-primary">Open or download the resume</a>
                    </div>
                  </object>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary/50 hover:bg-primary/5 hover:text-foreground text-foreground font-semibold px-8"
              asChild
            >
              <a href="#contact" className="flex items-center text-inherit hover:text-foreground">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-20 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
