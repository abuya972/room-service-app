import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import diningImage from "@/assets/dining.jpg";
import { Utensils, Coffee, Wine } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Breakfast",
    description: "Start your day with our continental breakfast buffet",
    time: "7:00 AM - 11:00 AM",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Experience gourmet cuisine prepared by our master chefs",
    time: "12:00 PM - 10:00 PM",
  },
  {
    icon: Wine,
    title: "Bar & Lounge",
    description: "Relax with premium cocktails and wines",
    time: "5:00 PM - 12:00 AM",
  },
];

const Dining = () => {
  return (
    <section id="dining" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Dining Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in culinary excellence with our world-class dining options
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={diningImage} 
              alt="Fine Dining" 
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                      <p className="text-muted-foreground mb-2">{service.description}</p>
                      <p className="text-sm text-accent font-semibold">{service.time}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">View Full Menu</Button>
        </div>
      </div>
    </section>
  );
};

export default Dining;
