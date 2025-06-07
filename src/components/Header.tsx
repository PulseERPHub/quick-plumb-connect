import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const handleEmergencyCall = () => {
  window.location.href = "tel:07435252374";
  if (typeof window.gtag !== "undefined") {
    window.gtag?.("event", "conversion", {
      send_to: "AW-17040574932/HvpDCKXIotUaENSTyr0_",
    });
  }
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-plumbing-blue">
            South Coast Plumbing
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="font-medium hover:text-plumbing-blue transition-colors"
          >
            Home
          </Link>
          <Link
            to="/#services"
            className="font-medium hover:text-plumbing-blue transition-colors"
          >
            Services
          </Link>
          {/*<Link to="/#reviews" className="font-medium hover:text-plumbing-blue transition-colors">Reviews</Link> */}
          <Link
            to="/#areas"
            className="font-medium hover:text-plumbing-blue transition-colors"
          >
            Coverage
          </Link>
          <Link
            to="/#contact"
            className="font-medium hover:text-plumbing-blue transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            onClick={handleEmergencyCall}
            variant="outline"
            className="hidden md:flex items-center gap-2 border-plumbing-blue text-plumbing-blue hover:bg-plumbing-blue hover:text-white"
          >
            <Phone size={18} />
            <span>07435252374</span>
          </Button>
          <Button
            onClick={handleEmergencyCall}
            className="bg-plumbing-emergency hover:bg-red-700 text-white font-bold"
          >
            Emergency Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
