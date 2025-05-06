
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to WhisperForms</h1>
            <p className="text-xl text-gray-600 mb-8">
              A powerful WordPress forms plugin that integrates with WhisperMail and MaintainHQ.
              Build beautiful forms without paywalls or restrictions.
            </p>
            <Link to="/whisperforms">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800">
                Explore WhisperForms
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 text-center px-4">
            <h2 className="text-2xl font-semibold mb-4">WhisperForms Features:</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
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
                <div key={index} className="bg-white shadow-sm rounded-lg px-4 py-2 border border-gray-100">
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
