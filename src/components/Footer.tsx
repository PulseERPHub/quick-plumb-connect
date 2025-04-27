
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-plumbing-darkgray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">South Coast Plumbers</h3>
            <p className="text-gray-300 mb-4">
              Professional plumbing services for residential properties in Southampton and in areas up to 200 miles.
            </p>
            {/*<div className="flex space-x-4">
              <a href="#" className="text-white hover:text-plumbing-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-plumbing-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-plumbing-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>*/}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Emergency Repairs</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Taps & Faucets</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Shower Plumbing</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Toilet Repairs</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Radiator Services</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/#reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/#areas" className="text-gray-300 hover:text-white transition-colors">Coverage Areas</Link></li>
              <li><Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone onclick="window.location.href='tel:07837976571'" size={18} className="mr-3 text-plumbing-blue mt-1" />
                <span>07837976571</span>
              </li>
              <li className="flex items-start" onclick="window.location.href='tel:07837976571'">
                <MessageCircle onclick="window.location.href='https://wa.me/+447837976571'" size={18} className="mr-3 text-plumbing-blue mt-1" />
                <span>07837976571 (WhatsApp)</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-plumbing-blue mt-1" />
                <span>info@tbc.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} South Coast Plumbers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
