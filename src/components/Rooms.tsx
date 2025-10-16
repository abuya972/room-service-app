import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomStandard from "@/assets/room-standard.jpg";

const rooms = [
  {
    id: 1,
    title: "Standard Room",
    description: "Comfortable and cozy room perfect for a relaxing stay",
    price: "$150",
    image: roomStandard,
  },
  {
    id: 2,
    title: "Deluxe Room",
    description: "Spacious room with premium amenities and city views",
    price: "$250",
    image: roomDeluxe,
  },
  {
    id: 3,
    title: "Executive Suite",
    description: "Ultimate luxury with separate living area and panoramic views",
    price: "$450",
    image: roomSuite,
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Rooms</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully designed rooms, each offering the perfect blend of comfort and elegance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">{room.title}</h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{room.price}/night</span>
                  <Button variant="secondary">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
