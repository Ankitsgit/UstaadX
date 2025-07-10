import { Card, CardContent } from "../Ui/Card";

import { Star, Quote } from "lucide-react";
import {Avatar, AvatarFallback } from "../Ui/Avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Patel",
      role: "Computer Science Student",
      avatar: "AP",
      content:
        "I learned guitar from Kavya while teaching her Python. It's amazing how you can learn while helping others! The platform is super easy to use.",
      rating: 5,
      skills: ["Python", "Guitar"]
    },
    {
      name: "Sneha Sharma",
      role: "Design Student",
      avatar: "SS",
      content:
        "Found the perfect Spanish tutor who needed help with Figma. Win-win! Love the community here, everyone's so helpful and friendly.",
      rating: 5,
      skills: ["Figma", "Spanish"]
    },
    {
      name: "Rohan Kumar",
      role: "Freelance Developer",
      avatar: "RK",
      content:
        "As a working professional, the flexible scheduling is a lifesaver. I've learned photography and taught 3 people React.js so far!",
      rating: 5,
      skills: ["React", "Photography"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            What Our <span className="gradient-text">Ustaads</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real learners who've transformed their skills through peer exchanges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`glass-card border-0 hover:scale-105 transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mt-1" />
                  <div className="flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex space-x-2 mt-2">
                      {testimonial.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by students from</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-lg font-semibold">IIT Delhi</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="text-lg font-semibold">BITS Pilani</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="text-lg font-semibold">NIT Trichy</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="text-lg font-semibold">DU</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
