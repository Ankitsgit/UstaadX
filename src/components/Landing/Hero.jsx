import { ArrowRight, Play } from "lucide-react";
import { Button } from "../Ui/Button";
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl float-delayed"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Everyone's a{" "}
              <span className="gradient-text">Ustaad</span>{" "}
              of Something.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Learn what you love. Teach what you know — for free. Join India's fastest growing peer-to-peer skill exchange platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="btn-primary shine group text-lg px-8 py-4 h-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card text-lg px-8 py-4 h-auto hover:bg-white/90"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Skills Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>

        {/* Right content - Hero Image */}
        <div className="relative animate-slide-in-right">
          <div className="relative">
            <img 
              src={hero} 
              alt="UstaadX Skill Exchange Platform" 
              className="w-full h-auto rounded-3xl shadow-hover object-cover"
            />
            {/* Floating skill badges */}
            <div className="absolute -top-4 -left-4 glass-card px-3 py-2 rounded-xl float">
              <span className="text-sm font-medium">💻 Coding</span>
            </div>
            <div className="absolute -top-2 -right-8 glass-card px-3 py-2 rounded-xl float-delayed">
              <span className="text-sm font-medium">🎸 Guitar</span>
            </div>
            <div className="absolute -bottom-4 left-8 glass-card px-3 py-2 rounded-xl float">
              <span className="text-sm font-medium">🎨 Design</span>
            </div>
            <div className="absolute -bottom-2 -right-4 glass-card px-3 py-2 rounded-xl float-delayed">
              <span className="text-sm font-medium">🗣️ Languages</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
