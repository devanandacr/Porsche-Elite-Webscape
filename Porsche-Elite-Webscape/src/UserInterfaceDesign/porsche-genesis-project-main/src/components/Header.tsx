
import { useState, useEffect } from "react";
import { Menu, User, Pause, Play } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import PorscheLogo from "./PorscheLogo";
import { Link } from "react-router-dom";

interface HeaderProps {
  isVideoPlaying: boolean;
  toggleVideoPlay: () => void;
  openMenu: () => void;
}

const Header = ({ isVideoPlaying, toggleVideoPlay, openMenu }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-4">
            <button 
              className="text-white flex items-center space-x-2"
              onClick={openMenu}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
          
          <div className="flex-1 flex justify-center">
            <Link to="/" className="relative" aria-label="Go to homepage">
              <PorscheLogo className="h-6 sm:h-8 text-white" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link to="/login" className="text-white flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Login</span>
            </Link>
            
            <button
              className="text-white flex items-center space-x-2 sm:hidden"
              onClick={toggleVideoPlay}
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
