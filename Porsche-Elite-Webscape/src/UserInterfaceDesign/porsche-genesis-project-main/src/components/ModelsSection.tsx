
import { useState } from "react";
import ModelCard from "./ModelCard";

const ModelsSection = () => {
  const models = [
    {
      name: "911",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/models/911",
      variants: "8 variants available"
    },
    {
      name: "Taycan",
      image: "https://images.unsplash.com/photo-1619525516514-54675e0ce483?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/models/taycan",
      fuel: "Electric",
      variants: "6 variants available"
    },
    {
      name: "718",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/models/718",
      variants: "6 variants available"
    },
    {
      name: "Panamera",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/models/panamera",
      variants: "10 variants available"
    },
    {
      name: "Macan",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/models/macan",
      fuel: "Electric | Gasoline",
      description: "4-door, 5-seater, sporty compact SUV.",
      variants: "5 variants available"
    },
    {
      name: "Cayenne",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/models/cayenne",
      fuel: "Gasoline",
      description: "Up to 5-seats versatile SUV.",
      variants: "7 variants available"
    },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Our Models</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard
              key={model.name}
              name={model.name}
              image={model.image}
              link={model.link}
              fuel={model.fuel}
              description={model.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
