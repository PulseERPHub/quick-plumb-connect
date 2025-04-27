
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Emergency Repairs",
    description: "24/7 emergency plumbing services for urgent issues like burst pipes, flooding, and major leaks.",
    features: ["Available 24/7", "Rapid response", "No hidden fees"]
  },
  {
    title: "Taps & Faucets",
    description: "Installation, repair and replacement of all types of taps and faucets for kitchens and bathrooms.",
    features: ["Fix dripping taps", "Replace washers", "Install new fixtures"]
  },
  {
    title: "Shower & Toilets",
    description: "Comprehensive shower & toilets plumbing services including installation, repair, and upgrades.",
    features: ["Fix low pressure", "Fix running water", "Install new systems"]
  },
  {
    title: "Blocks",
    description: "Fast and efficient unblocking services including unblocking toilets, drainage systems, showers and sinks.",
    features: ["Unblock toilets", "Clear draingage pipes", "Unblock sinks"]
  },
  {
    title: "Radiator Services",
    description: "Expert radiator installation, bleeding, balancing, and replacement services.",
    features: ["Bleed radiators", "Fix cold spots", "Install new units"]
  },
  {
    title: "Maintenance",
    description: "Regular maintenance services to prevent issues and ensure your plumbing system runs efficiently.",
    features: ["Annual check-ups", "Preventive care", "System optimization"]
  }
];

const Services = () => {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-plumbing-darkgray">Our Services</h2>
          <div className="h-1 w-20 bg-plumbing-blue mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of plumbing services to meet all your residential needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-plumbing-blue">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
