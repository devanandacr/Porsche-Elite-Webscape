
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ModelCardProps {
  name: string;
  image: string;
  link: string;
  fuel?: string;
  description?: string;
}

const ModelCard = ({ name, image, link, fuel, description }: ModelCardProps) => {
  return (
    <div className="model-card group card-hover">
      <Link to={link} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`Porsche ${name}`}
          className="w-full h-full object-cover"
        />
        
        <div className="model-card-overlay group-hover:opacity-100">
          <h3 className="text-xl md:text-2xl font-bold text-white">The {name}.</h3>
          
          {(fuel || description) && (
            <div className="mt-2">
              {fuel && (
                <span className="inline-block px-2 py-1 bg-white/10 text-white text-xs rounded mr-2">
                  {fuel}
                </span>
              )}
              
              {description && (
                <p className="text-sm text-white/90 mt-1">{description}</p>
              )}
            </div>
          )}
          
          <div className="mt-4 flex items-center">
            <span className="text-white underline-offset-4 group-hover:underline">Explore</span>
            <ChevronRight className="h-4 w-4 text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ModelCard;
