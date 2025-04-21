
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState("primary");

  const handleEmergencyCall = () => {
    window.location.href = "tel:555-123-4567";
  };

  const handleWhatsAppContact = () => {
    window.location.href = "https://wa.me/1555123456";
  };

  // Updated plumbing-specific image URLs from Unsplash
  const primaryImage =
    "https://images.unsplash.com/photo-1590080877777-8813fa963d9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"; // man working on pipe in wall
  const fallbackImage =
    "https://images.unsplash.com/photo-1600585154437-48fa9ac0a0e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"; // plumbing tools on workbench

  const handleImageError = () => {
    if (currentImage === "primary") {
      console.log("Primary image failed to load, switching to fallback image");
      setCurrentImage("fallback");
      setImageError(true);
    } else {
      console.log("Fallback image failed to load");
      setImageError(true);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-plumbing-darkgray">
              Fast & Reliable <span className="text-plumbing-blue">Plumbing Services</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Professional plumbing solutions for all your needs. Available 24/7 for emergency repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleEmergencyCall}
                className="bg-plumbing-emergency hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Emergency Call
              </Button>
              <Button
                onClick={handleWhatsAppContact}
                variant="outline"
                className="border-plumbing-blue text-plumbing-blue hover:bg-plumbing-blue hover:text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={currentImage === "primary" ? primaryImage : fallbackImage}
              alt="Professional plumber"
              className="rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxHeight: "400px" }}
              onError={handleImageError}
            />
          </div>
        </div>
      </div>

      {/* Emergency contact floating button for mobile */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Button
          onClick={handleEmergencyCall}
          className="bg-plumbing-emergency hover:bg-red-700 text-white font-bold h-16 w-16 rounded-full flex items-center justify-center shadow-lg animate-pulse"
        >
          <Phone size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;

