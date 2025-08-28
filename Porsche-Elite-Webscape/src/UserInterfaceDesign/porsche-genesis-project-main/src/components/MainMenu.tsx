
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  title: string;
  submenu?: { title: string; link: string }[];
  onClick?: () => void;
}

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuItem = ({ title, submenu, onClick }: MenuItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (submenu && submenu.length > 0) {
      setIsExpanded(!isExpanded);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <div
        className={`menu-item ${isExpanded ? "bg-white/10" : ""}`}
        onClick={handleClick}
      >
        <span className="text-lg">{title}</span>
        {submenu && submenu.length > 0 && (
          <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
        )}
      </div>
      
      {submenu && submenu.length > 0 && (
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-0"}`}>
          {submenu.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="block py-2 px-10 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              onClick={onClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MainMenu = ({ isOpen, onClose }: MainMenuProps) => {
  return (
    <div className={`main-menu ${isOpen ? "open" : ""}`}>
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="overflow-y-auto h-[calc(100%-4rem)]">
        <MenuItem
          title="Models"
          submenu={[
            { title: "911", link: "/models/911" },
            { title: "718", link: "/models/718" },
            { title: "Taycan", link: "/models/taycan" },
            { title: "Panamera", link: "/models/panamera" },
            { title: "Macan", link: "/models/macan" },
            { title: "Cayenne", link: "/models/cayenne" },
          ]}
          onClick={onClose}
        />
        
        <MenuItem
          title="Vehicle Purchase"
          submenu={[
            { title: "Configure", link: "/configure" },
            { title: "Compare Models", link: "/compare-models" },
            { title: "Find New and Pre-owned Vehicles", link: "/find-vehicles" },
            { title: "Saved Vehicles", link: "/saved-vehicles" },
            { title: "E-Mobility & E-Performance", link: "/e-mobility" },
          ]}
          onClick={onClose}
        />
        
        <MenuItem
          title="Services"
          submenu={[
            { title: "Factory Delivery", link: "/services/factory-delivery" },
            { title: "Genuine Accessories", link: "/services/accessories" },
            { title: "Individualisation", link: "/services/individualization" },
            { title: "Approved Pre-owned Cars & Warranty", link: "/services/pre-owned" },
            { title: "Service & Maintenance", link: "/services/maintenance" },
            { title: "Classic Service & Parts", link: "/services/classic" },
            { title: "Lifestyle Fashion & Accessories", link: "/services/lifestyle" },
          ]}
          onClick={onClose}
        />
        
        <MenuItem
          title="Experience"
          submenu={[
            { title: "Motorsport", link: "/experience/motorsport" },
            { title: "Porsche Experience - Driving & Track", link: "/experience/driving-track" },
            { title: "Porsche Communities", link: "/experience/communities" },
            { title: "Golf Sports", link: "/experience/golf" },
            { title: "Christophorus Magazine", link: "/experience/magazine" },
            { title: "Visit the Porsche Museum", link: "/experience/museum" },
          ]}
          onClick={onClose}
        />
        
        <MenuItem
          title="Find a Dealer"
          submenu={[
            { title: "Dealer Locator", link: "/find-dealer" },
            { title: "Service Centers", link: "/service-centers" },
          ]}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default MainMenu;
