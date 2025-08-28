
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "The new Porsche 911 GT3 RS - Consistently Light",
      date: "May 12, 2025",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/news/new-911-gt3-rs"
    },
    {
      title: "Porsche Ventures invests in sustainable mobility solutions",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/news/porsche-ventures-mobility"
    },
    {
      title: "Porsche Taycan Cross Turismo: Experience the electric adventure",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1607603750909-408f3898b1ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/news/taycan-cross-turismo"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
          Latest Updates from Porsche
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Stay informed about the latest news, upcoming events, and announcements from the Porsche universe.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div 
              key={item.title} 
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Link to={item.link} className="block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
                  <div className="flex items-center text-black dark:text-white">
                    <span className="hover:underline underline-offset-4">Read more</span>
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
