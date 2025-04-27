
import { MapPin } from "lucide-react";

const areas = [
  "London",
  "Berkshire",
  "Buckinghamshire",
  "Surrey",
  "Hampshire",
  "Oxfordshire",
  "West Sussex",
  "East Sussex"
];

const AreasMap = () => {
  return (
    <div id="areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-plumbing-darkgray">Areas We Cover</h2>
          <div className="h-1 w-20 bg-plumbing-blue mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our plumbing services are available throughout Southampton and surrounding areas.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Service Locations</h3>
              <ul className="grid grid-cols-2 gap-2">
                {areas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <MapPin size={16} className="text-plumbing-blue mr-2" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              {/*<div className="mt-6 p-4 bg-blue-100 rounded">
                <h4 className="font-medium text-plumbing-darkgray">Main Office</h4>
                <p className="text-gray-600">
                  123 Plumbing Street<br />
                  Southampton, SO11 2RT<br />
                  United Kingdom
                </p>
              </div>*/}
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow h-96">
              {/* Google Maps iframe - replace with your actual location */}
              <iframe
                title="Business Location"
                className="w-full h-full"
                src="https://www.google.com/maps?q=50.9097,-1.4044&z=13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasMap;
