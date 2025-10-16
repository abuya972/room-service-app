import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Dining from "@/components/Dining";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Rooms />
      <Dining />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
