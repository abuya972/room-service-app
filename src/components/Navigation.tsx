import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold text-primary">Grand Haven Hotel</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("rooms")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Rooms
            </button>
            <button 
              onClick={() => scrollToSection("dining")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Dining
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <Button variant="hero" size="lg">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("rooms")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Rooms
            </button>
            <button 
              onClick={() => scrollToSection("dining")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Dining
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <Button variant="hero" size="lg" className="w-full">Book Now</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
