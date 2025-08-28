
import { Link } from "react-router-dom";

const PreOwnedSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              Find your new or pre-owned Porsche.
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              A Porsche is as individual as its owner. It is always an expression of one's own personality. We help you find your personal dream vehicle from authorised Porsche Centres.
            </p>
            <Link
              to="/find-vehicles"
              className="button-primary dark:bg-white dark:text-black"
            >
              Find your Porsche
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Porsche lineup"
              className="w-full h-auto rounded-md shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOwnedSection;
