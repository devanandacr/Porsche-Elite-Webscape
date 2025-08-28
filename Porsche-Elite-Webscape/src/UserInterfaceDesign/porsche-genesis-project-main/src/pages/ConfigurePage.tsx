
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";

interface ConfigOption {
  id: string;
  name: string;
  price: number;
  image?: string;
}

interface ConfigSection {
  id: string;
  name: string;
  options: ConfigOption[];
  multiple?: boolean;
}

const ConfigurePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [basePrice, setBasePrice] = useState(21126000);
  const [selectedModel, setSelectedModel] = useState("911 Carrera");
  
  // Configuration state
  const [selectedExteriorColor, setSelectedExteriorColor] = useState("white");
  const [selectedWheels, setSelectedWheels] = useState("carrera");
  const [selectedInteriorColor, setSelectedInteriorColor] = useState("black");
  
  const models = [
    { id: "911-carrera", name: "911 Carrera", price: 21126000 },
    { id: "911-carrera-s", name: "911 Carrera S", price: 24535000 },
    { id: "911-carrera-4", name: "911 Carrera 4", price: 25789000 },
    { id: "911-carrera-4s", name: "911 Carrera 4S", price: 28353000 },
  ];
  
  const exteriorColors = [
    { id: "white", name: "White", price: 0, image: "https://via.placeholder.com/50/ffffff" },
    { id: "black", name: "Black", price: 0, image: "https://via.placeholder.com/50/000000" },
    { id: "guards-red", name: "Guards Red", price: 175000, image: "https://via.placeholder.com/50/ff0000" },
    { id: "gentian-blue", name: "Gentian Blue", price: 175000, image: "https://via.placeholder.com/50/0000ff" },
    { id: "gt-silver", name: "GT Silver", price: 175000, image: "https://via.placeholder.com/50/cccccc" }
  ];
  
  const wheels = [
    { id: "carrera", name: "Carrera wheels", price: 0, image: "https://via.placeholder.com/80" },
    { id: "carrera-s", name: "Carrera S wheels", price: 245000, image: "https://via.placeholder.com/80" },
    { id: "carrera-classic", name: "Carrera Classic wheels", price: 320000, image: "https://via.placeholder.com/80" },
    { id: "rs-spyder", name: "RS Spyder Design wheels", price: 403000, image: "https://via.placeholder.com/80" }
  ];
  
  const interiorColors = [
    { id: "black", name: "Black", price: 0, image: "https://via.placeholder.com/50/000000" },
    { id: "bordeaux-red", name: "Bordeaux Red", price: 175000, image: "https://via.placeholder.com/50/800000" },
    { id: "slate-gray", name: "Slate Gray", price: 175000, image: "https://via.placeholder.com/50/708090" }
  ];
  
  // Calculate total price
  const getSelectedColorPrice = () => {
    const color = exteriorColors.find(color => color.id === selectedExteriorColor);
    return color ? color.price : 0;
  };
  
  const getSelectedWheelsPrice = () => {
    const wheel = wheels.find(wheel => wheel.id === selectedWheels);
    return wheel ? wheel.price : 0;
  };
  
  const getSelectedInteriorPrice = () => {
    const interior = interiorColors.find(interior => interior.id === selectedInteriorColor);
    return interior ? interior.price : 0;
  };
  
  const totalPrice = basePrice + getSelectedColorPrice() + getSelectedWheelsPrice() + getSelectedInteriorPrice();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header 
        isVideoPlaying={isVideoPlaying}
        toggleVideoPlay={() => setIsVideoPlaying(!isVideoPlaying)}
        openMenu={() => setIsMenuOpen(true)}
      />
      
      <MainMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Link to="/models" className="text-black dark:text-white flex items-center">
              <ChevronLeft className="h-5 w-5 mr-2" />
              <span>Back to Models</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Car preview */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h1 className="text-3xl font-bold mb-4 dark:text-white">{selectedModel}</h1>
              <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt={selectedModel} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                <button className="aspect-square bg-gray-200 dark:bg-gray-700 rounded">
                  <img 
                    src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Front view" 
                    className="w-full h-full object-cover rounded"
                  />
                </button>
                <button className="aspect-square bg-gray-200 dark:bg-gray-700 rounded">
                  <img 
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Side view" 
                    className="w-full h-full object-cover rounded"
                  />
                </button>
                <button className="aspect-square bg-gray-200 dark:bg-gray-700 rounded">
                  <img 
                    src="https://images.unsplash.com/photo-1544381341-8dda11802f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Rear view" 
                    className="w-full h-full object-cover rounded"
                  />
                </button>
                <button className="aspect-square bg-gray-200 dark:bg-gray-700 rounded">
                  <img 
                    src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Interior view" 
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              </div>
            </div>
            
            {/* Configuration and price */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold dark:text-white">Total Price</h2>
                  <div className="text-2xl font-bold dark:text-white">{formatPrice(totalPrice)}</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Including GST & other taxes</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 dark:text-white">Select Model</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {models.map(model => (
                      <button
                        key={model.id}
                        className={`py-2 px-3 border rounded text-sm ${
                          selectedModel === model.name 
                            ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black" 
                            : "border-gray-300 dark:border-gray-600 dark:text-gray-300"
                        }`}
                        onClick={() => {
                          setSelectedModel(model.name);
                          setBasePrice(model.price);
                        }}
                      >
                        {model.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-3 dark:text-white">Exterior Color</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {exteriorColors.map(color => (
                      <button
                        key={color.id}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedExteriorColor === color.id 
                            ? "border-black dark:border-white" 
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color.id }}
                        onClick={() => setSelectedExteriorColor(color.id)}
                        aria-label={`Select ${color.name} color`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    + {formatPrice(getSelectedColorPrice())}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-3 dark:text-white">Wheels</h3>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {wheels.map(wheel => (
                      <button
                        key={wheel.id}
                        className={`p-1 border rounded ${
                          selectedWheels === wheel.id 
                            ? "border-black dark:border-white" 
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                        onClick={() => setSelectedWheels(wheel.id)}
                      >
                        <img 
                          src={wheel.image} 
                          alt={wheel.name} 
                          className="w-full h-auto"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    + {formatPrice(getSelectedWheelsPrice())}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-3 dark:text-white">Interior Color</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {interiorColors.map(color => (
                      <button
                        key={color.id}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedInteriorColor === color.id 
                            ? "border-black dark:border-white" 
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color.id }}
                        onClick={() => setSelectedInteriorColor(color.id)}
                        aria-label={`Select ${color.name} interior`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    + {formatPrice(getSelectedInteriorPrice())}
                  </p>
                </div>
                
                <div className="pt-4 space-y-4">
                  <button className="w-full py-3 px-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors">
                    Save Configuration
                  </button>
                  <button className="w-full py-3 px-4 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                    Send to Porsche Centre
                  </button>
                  <button className="w-full py-3 px-4 bg-transparent text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors">
                    Download Summary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ConfigurePage;
