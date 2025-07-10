import { Card, CardContent } from "../Ui/Card";
import { UserPlus, Search, MessageCircle, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Profile",
      description: "Sign up and showcase your skills and learning goals",
      color: "text-blue-500"
    },
    {
      icon: Search,
      title: "Find Your Match",
      description: "Discover peers who want to learn what you teach",
      color: "text-green-500"
    },
    {
      icon: MessageCircle,
      title: "Connect & Chat",
      description: "Start conversations and plan your skill exchanges",
      color: "text-purple-500"
    },
    {
      icon: Calendar,
      title: "Schedule Sessions",
      description: "Book learning sessions that work for both of you",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            How <span className="gradient-text">UstaadX</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From profile to session in just 4 simple steps. Start your skill exchange journey today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className={`glass-card border-0 hover:scale-105 transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2"></div>
          <div className="flex justify-between items-center">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-3 h-3 bg-primary rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;