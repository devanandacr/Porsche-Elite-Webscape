
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";

interface ModelSpec {
  label: string;
  value: string;
}

interface ModelVariant {
  id: string;
  name: string;
  image: string;
  fuel: string;
  price: number;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    drivetrain: string;
  };
}

const ModelDetailPage = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample data for model details
  const modelDetails = {
    '911': {
      name: '911',
      description: 'The Porsche 911 - the iconic sports car that has defined driving excellence for generations.',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      heroImage: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      variants: [
        {
          id: '911-carrera',
          name: '911 Carrera',
          image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          fuel: 'Gasoline',
          price: 21126000,
          specs: {
            power: '394 PS',
            acceleration: '4.1s (0-100 km/h)',
            topSpeed: '294 km/h',
            drivetrain: 'Rear Wheel Drive'
          }
        },
        {
          id: '911-carrera-4-gts',
          name: '911 Carrera 4 GTS',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          fuel: 'Gasoline',
          price: 28353000,
          specs: {
            power: '541 PS',
            acceleration: '3.0s (0-100 km/h)',
            topSpeed: '312 km/h',
            drivetrain: 'All Wheel Drive'
          }
        }
      ]
    },
    'taycan': {
      name: 'Taycan',
      description: 'The Porsche Taycan - all-electric performance that lives up to the Porsche name.',
      image: 'https://images.unsplash.com/photo-1619525516514-54675e0ce483?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      heroImage: 'https://images.unsplash.com/photo-1619525516514-54675e0ce483?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      variants: [
        {
          id: 'taycan',
          name: 'Taycan',
          image: 'https://images.unsplash.com/photo-1619525516514-54675e0ce483?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          fuel: 'Electric',
          price: 15200000,
          specs: {
            power: '408 PS',
            acceleration: '5.4s (0-100 km/h)',
            topSpeed: '230 km/h',
            drivetrain: 'Rear Wheel Drive'
          }
        },
        {
          id: 'taycan-turbo-s',
          name: 'Taycan Turbo S',
          image: 'https://images.unsplash.com/photo-1607603750909-408f3898b1ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          fuel: 'Electric',
          price: 24200000,
          specs: {
            power: '761 PS',
            acceleration: '2.8s (0-100 km/h)',
            topSpeed: '260 km/h',
            drivetrain: 'All Wheel Drive'
          }
        }
      ]
    }
  };
  
  // Fallback to 911 if modelId doesn't exist
  const modelData = modelDetails[modelId as keyof typeof modelDetails] || modelDetails['911'];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="min-h-screen">
      <Header 
        isVideoPlaying={isVideoPlaying}
        toggleVideoPlay={() => setIsVideoPlaying(!isVideoPlaying)}
        openMenu={() => setIsMenuOpen(true)}
      />
      
      <MainMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      
      <main className="pt-16">
        {/* Hero Image */}
        <div className="relative h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src={modelData.heroImage} 
              alt={`Porsche ${modelData.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 py-16">
              <h1 className="text-6xl font-bold text-white mb-4">The {modelData.name}</h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">{modelData.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={`/configure/${modelId}`}
                  className="button-primary"
                >
                  Configure
                </Link>
                <Link 
                  to="/find-vehicles"
                  className="button-outline"
                >
                  Find {modelData.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Available Models Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 dark:text-white">Which {modelData.name} would you like to configure?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modelData.variants.map((variant: ModelVariant) => (
                <div key={variant.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-semibold rounded-full">New</span>
                        <h3 className="text-2xl font-bold mt-2 dark:text-white">{variant.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">From {formatPrice(variant.price)} incl. VAT</p>
                      </div>
                      
                      <div className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded">
                        {variant.fuel}
                      </div>
                    </div>
                    
                    <div className="aspect-[16/9] bg-white dark:bg-gray-700 rounded mb-6 overflow-hidden">
                      <img 
                        src={variant.image} 
                        alt={variant.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Power</p>
                        <p className="font-semibold dark:text-white">{variant.specs.power}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Acceleration</p>
                        <p className="font-semibold dark:text-white">{variant.specs.acceleration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Top speed</p>
                        <p className="font-semibold dark:text-white">{variant.specs.topSpeed}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Drivetrain</p>
                        <p className="font-semibold dark:text-white">{variant.specs.drivetrain}</p>
                      </div>
                    </div>
                    
                    <div>
                      <Link 
                        to={`/configure/${modelId}/${variant.id}`} 
                        className="w-full py-3 bg-black text-white dark:bg-white dark:text-black text-center block hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                      >
                        Configure
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-6 dark:text-white">Need help choosing a model?</p>
              <Link 
                to="/compare-models" 
                className="inline-flex items-center button-outline dark:border-white dark:text-white"
              >
                Compare Models
              </Link>
            </div>
          </div>
        </section>
        
        {/* Technical Specifications */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 dark:text-white">Technical Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-20">
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Engine</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Type</dt>
                    <dd className="font-semibold dark:text-white">Twin-turbocharged Boxer 6</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Displacement</dt>
                    <dd className="font-semibold dark:text-white">3.0 liters</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Max. power (PS)</dt>
                    <dd className="font-semibold dark:text-white">385 PS @ 6,500 rpm</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Max. torque</dt>
                    <dd className="font-semibold dark:text-white">450 Nm @ 1,950–5,000 rpm</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Performance</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Top speed</dt>
                    <dd className="font-semibold dark:text-white">293 km/h</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">0 - 100 km/h</dt>
                    <dd className="font-semibold dark:text-white">4.2 s</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">0 - 160 km/h</dt>
                    <dd className="font-semibold dark:text-white">9.0 s</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">0 - 200 km/h</dt>
                    <dd className="font-semibold dark:text-white">13.7 s</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Fuel Consumption / Emissions</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Urban (l/100 km)</dt>
                    <dd className="font-semibold dark:text-white">13.2</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Extra-urban (l/100 km)</dt>
                    <dd className="font-semibold dark:text-white">7.7</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Combined (l/100 km)</dt>
                    <dd className="font-semibold dark:text-white">9.6</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">CO2 emissions (g/km)</dt>
                    <dd className="font-semibold dark:text-white">218</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Body</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Length</dt>
                    <dd className="font-semibold dark:text-white">4,519 mm</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Width</dt>
                    <dd className="font-semibold dark:text-white">1,852 mm</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Height</dt>
                    <dd className="font-semibold dark:text-white">1,298 mm</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
                    <dt className="text-gray-600 dark:text-gray-400">Wheelbase</dt>
                    <dd className="font-semibold dark:text-white">2,450 mm</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Ready to make the {modelData.name} yours?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to={`/configure/${modelId}`}
                className="button-primary py-3 px-8"
              >
                Configure Your Own
              </Link>
              <Link 
                to="/find-dealer"
                className="button-outline py-3 px-8 dark:border-white dark:text-white"
              >
                Find a Dealer
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModelDetailPage;
