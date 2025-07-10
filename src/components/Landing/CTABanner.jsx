import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-16 rounded-3xl border-0 animate-fade-in-up">
          <div className="mb-6">
            <Sparkles className="h-12 w-12 mx-auto text-accent mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to become an <span className="gradient-text">Ustaad</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of learners and teachers exchanging skills every day.
              Your next skill is just a conversation away!
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mb-8 py-6 border-y border-border/50">
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Skills Available</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">100K+</div>
              <div className="text-sm text-muted-foreground">Sessions Completed</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-accent shine group text-lg px-8 py-4 h-auto"
            >
              Join UstaadX Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card text-lg px-8 py-4 h-auto hover:bg-white/90"
            >
              Already have an account? Login
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Free to join • No credit card required • Start learning immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
