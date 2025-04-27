
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);  // Start loading
    console.log("in HandleSubmit");
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyDeTC9AD25HehScBgzVMFXNFKGx1yS5voRFwONeQZClBvxNQ9eNplEubqaiFLxE8Bo/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });
  
      const result = await response.json();
  
      if (result.result === 'success') {
        alert("Thank you for your message! We'll get back to you soon - hello.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting the form. Please try again later.");
    } finally {
      setLoading(false);  // Stop loading
    }
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:555-123-4567";
  };

  const handleWhatsAppContact = () => {
    window.location.href = "https://wa.me/+447837976571";
  };

  return (
    <div id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-plumbing-darkgray">Contact Us</h2>
          <div className="h-1 w-20 bg-plumbing-blue mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any plumbing services or inquiries. We're here to help 24/7.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="123-456-7899" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your plumbing needs..." 
                  rows={4}
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-plumbing-blue hover:bg-plumbing-skyblue"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-plumbing-darkgray">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-plumbing-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">07837976571</p>
                    <Button 
                      onClick={handleEmergencyCall}
                      className="mt-2 bg-plumbing-emergency hover:bg-red-700 text-white text-sm px-3 py-1"
                    >
                      Emergency Call
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MessageCircle size={20} className="text-plumbing-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <p className="text-gray-600">07837976571</p>
                    <Button 
                      onClick={handleWhatsAppContact}
                      variant="outline"
                      className="mt-2 border-plumbing-blue text-plumbing-blue hover:bg-plumbing-blue hover:text-white text-sm px-3 py-1"
                    >
                      WhatsApp Us
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-plumbing-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@tbc.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-plumbing-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      123 Plumbing Street<br />
                      Southampton, SO11 2RT<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
