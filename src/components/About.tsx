import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Clock, value: "24/7", label: "Concierge Service" },
  { icon: Star, value: "5★", label: "Guest Rating" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Grand Haven</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 1999, Grand Haven Hotel has been synonymous with luxury, comfort, and exceptional service. 
            Located in the heart of the city, we pride ourselves on creating unforgettable experiences for our guests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to excellence extends beyond our luxurious accommodations. From our award-winning 
            restaurant to our state-of-the-art fitness center and spa, every detail is designed to ensure 
            your stay is nothing short of extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
