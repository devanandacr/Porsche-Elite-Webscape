
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";

const NotFound = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        isVideoPlaying={isVideoPlaying}
        toggleVideoPlay={() => setIsVideoPlaying(!isVideoPlaying)}
        openMenu={() => setIsMenuOpen(true)}
      />
      
      <MainMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      
      <main className="pt-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center py-16">
          <h1 className="text-8xl font-bold mb-4 dark:text-white">404</h1>
          <p className="text-xl mb-8 dark:text-gray-300">Page not found</p>
          <p className="max-w-md mx-auto mb-8 text-gray-600 dark:text-gray-400">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex justify-center">
            <Link
              to="/"
              className="button-primary"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
