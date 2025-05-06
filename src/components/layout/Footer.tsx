
import React from "react";
import { Link } from "react-router-dom";
import { Globe, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white mt-16 py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">WhisperForms</h3>
            <p className="text-slate-300 max-w-md">
              The most powerful free WordPress form builder - no paywalls, 
              no upsells, just powerful forms with reliable delivery.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-slate-200">Our Sister Sites</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://maintainhq.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <Globe size={16} />
                    MaintainHQ
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wonkypixel.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <Globe size={16} />
                    WonkyPixel
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://whispermail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <Globe size={16} />
                    WhisperMail
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} WhisperForms. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/whisperforms" className="text-slate-400 hover:text-white">
                  WhisperForms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
