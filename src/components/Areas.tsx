
import { MapPin } from "lucide-react";

const areas = [
  "North London",
  "East London",
  "South London",
  "West London",
  "Central London",
  "Greater London",
  "Surrey",
  "Kent",
  "Essex",
  "Hertfordshire"
];

const AreasMap = () => {
  return (
    <div id="areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-plumbing-darkgray">Areas We Cover</h2>
          <div className="h-1 w-20 bg-plumbing-blue mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our plumbing services are available throughout London and surrounding areas.
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
              <div className="mt-6 p-4 bg-blue-100 rounded">
                <h4 className="font-medium text-plumbing-darkgray">Main Office</h4>
                <p className="text-gray-600">
                  123 Plumbing Street<br />
                  London, EC1A 1BB<br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow h-96">
              {/* Google Maps iframe - replace with your actual location */}
              <iframe
                title="Business Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4733933767!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x482f4a044ed41a8!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
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
