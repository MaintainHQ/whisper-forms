
import React from "react";
import { Link } from "react-router-dom";
import { Globe, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-orange-900 text-white mt-16 py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-300 text-transparent bg-clip-text">WhisperForms</h3>
            <p className="text-orange-200 max-w-md">
              The most powerful free WordPress form builder - no paywalls, 
              no upsells, just powerful forms with reliable delivery.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-orange-200">Our Sister Sites</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://maintainhq.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-200 hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <span className="bg-orange-800 p-1.5 rounded-full group-hover:bg-orange-700 transition-colors">
                      <Globe size={16} />
                    </span>
                    MaintainHQ
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wonkypixel.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-200 hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <span className="bg-orange-800 p-1.5 rounded-full group-hover:bg-orange-700 transition-colors">
                      <Globe size={16} />
                    </span>
                    WonkyPixel
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://whispermail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-200 hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <span className="bg-orange-800 p-1.5 rounded-full group-hover:bg-orange-700 transition-colors">
                      <Globe size={16} />
                    </span>
                    WhisperMail
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-orange-300 text-sm">
            © {currentYear} WhisperForms. Made with <Heart size={14} className="inline text-pink-400" /> for WordPress users.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/" className="text-orange-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/whisperforms" className="text-orange-300 hover:text-white transition-colors">
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
