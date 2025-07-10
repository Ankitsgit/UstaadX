import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageSquare,
  Calendar,
  Users,
  Coins,
  Heart,
  Shield,
  Zap,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Connect instantly with your skill exchange partners through our built-in messaging system",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Book sessions that work for everyone with our intelligent calendar integration",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Users,
      title: "Perfect Matching",
      description: "Our AI finds the best skill exchange partners based on your interests and availability",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Coins,
      title: "Token Rewards",
      description: "Earn tokens for teaching and use them to access premium features and courses",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Join a supportive community of learners and teachers helping each other grow",
      gradient: "from-red-500/20 to-rose-500/20"
    },
    {
      icon: Shield,
      title: "Safe & Verified",
      description: "All users are verified and our platform ensures safe, respectful interactions",
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Quick Sessions",
      description: "Learn or teach in bite-sized 30-60 minute sessions that fit your schedule",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with learners and teachers from around the world, anytime",
      gradient: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Why Choose <span className="gradient-text">UstaadX</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built the most comprehensive peer-to-peer learning platform with features designed for the modern learner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`glass-card border-0 hover:scale-105 transition-all duration-300 animate-fade-in-up stagger-${(index % 4) + 1} group`}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-heading">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-16 glass-card p-8 rounded-3xl border-0 text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 gradient-text">
              🚀 Free Forever
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Core features of UstaadX will always be free. No hidden charges, no premium walls.
              Just pure peer-to-peer learning at its finest.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2 text-red-500" />
                Made with ❤️ in India
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                Safe & Secure
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-500" />
                Community First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
