
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import ModelsSection from "../components/ModelsSection";
import PreOwnedSection from "../components/PreOwnedSection";
import DiscoverSection from "../components/DiscoverSection";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };
  
  return (
    <div className="min-h-screen">
      <Header 
        isVideoPlaying={isVideoPlaying}
        toggleVideoPlay={toggleVideoPlay}
        openMenu={() => setIsMenuOpen(true)}
      />
      
      <MainMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      
      <main>
        <HeroSection 
          isVideoPlaying={isVideoPlaying} 
          toggleVideoPlay={toggleVideoPlay}
        />
        <NewsSection />
        <ModelsSection />
        <PreOwnedSection />
        <DiscoverSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
