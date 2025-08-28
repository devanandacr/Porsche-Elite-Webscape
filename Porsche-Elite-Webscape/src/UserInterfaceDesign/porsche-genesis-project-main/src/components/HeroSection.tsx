
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  isVideoPlaying: boolean;
  toggleVideoPlay: () => void;
}

const HeroSection = ({ isVideoPlaying, toggleVideoPlay }: HeroSectionProps) => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const taglines = [
    "Choose boldly.",
    "Drive extraordinarily.",
    "Experience perfection.",
    "Unleash performance."
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.porsche.com/porsche/international/models/taycan/taycan-models/taycan-cross-turismo/homepage-banner/video/porsche-taycancrossturismo-banner-032021.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-start justify-center h-full">
        <div className="w-full md:w-2/3 space-y-6">
          <div className="h-28">
            {taglines.map((tagline, index) => (
              <h1 
                key={tagline} 
                className={`tagline absolute transition-opacity duration-1000 ${
                  currentTaglineIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {tagline}
              </h1>
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              to="/models/panamera"
              className="button-outline"
            >
              Discover the Panamera 4S E-Hybrid
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-between items-center px-8">
        <button 
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth"
            });
          }}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
        
        <button 
          onClick={toggleVideoPlay} 
          className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
        >
          {isVideoPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
