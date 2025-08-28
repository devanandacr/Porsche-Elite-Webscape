
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface DiscoverCardProps {
  title: string;
  image: string;
  link: string;
}

const DiscoverCard = ({ title, image, link }: DiscoverCardProps) => {
  return (
    <Link 
      to={link}
      className="block relative group overflow-hidden rounded-md aspect-square"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center text-white">
          <span className="group-hover:underline underline-offset-4">Learn more</span>
          <ChevronRight className="h-4 w-4 ml-2" />
        </div>
      </div>
    </Link>
  );
};

const DiscoverSection = () => {
  const cards = [
    {
      title: "E-Performance - Sustainable Mobility",
      image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/discover/e-performance"
    },
    {
      title: "Porsche Tequipment",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/discover/tequipment"
    },
    {
      title: "Porsche Exclusive Manufaktur",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/discover/exclusive-manufaktur"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Discover</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <DiscoverCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
