
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-amber-50 px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
              Welcome to WhisperForms
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              A powerful WordPress forms plugin that integrates with WhisperMail and MaintainHQ.
              Build beautiful forms without paywalls or restrictions.
            </p>
            <Link to="/whisperforms">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-300/30 transition-all hover:shadow-orange-500/40">
                <Sparkles className="mr-1" /> Explore WhisperForms
              </Button>
            </Link>
          </div>
          
          <div className="mt-20 text-center px-4 w-full">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">WhisperForms Features:</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Unlimited Forms", 
                "Drag-and-Drop Builder", 
                "WhisperMail Integration", 
                "MaintainHQ Integration",
                "Custom Post Type Support",
                "Email Marketing Integrations",
                "Payment Processing",
                "Advanced Form Logic",
                "100% Free - No Paywalls"
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-lg px-5 py-3 border-l-4 border-orange-500 hover:shadow-lg transition-all hover:scale-105 transform duration-200"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
