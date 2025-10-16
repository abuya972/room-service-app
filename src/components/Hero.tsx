import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      <div className="relative z-10 text-center text-primary-foreground px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to Grand Haven
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience luxury and comfort in the heart of the city
        </p>
        <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
          Explore Our Rooms
        </Button>
      </div>
    </section>
  );
};

export default Hero;
