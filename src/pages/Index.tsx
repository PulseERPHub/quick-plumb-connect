
import AreasMap from "@/components/Areas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Hero />
        <Services />
        {/*<Reviews />*/}
        <AreasMap />
        <Contact />
      </div>
      <Footer />
      
      {/* Emergency call button moved to Hero component */}
    </div>
  );
};

export default Index;
