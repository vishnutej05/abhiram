import { Instagram, Mail } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`relative ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black to-black/90' 
        : 'bg-slate-50 border-t border-slate-200'
    } py-8`}>
      {theme === 'dark' && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-800"></div>
      )}
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Footer Content - Simplified */}
        <div className="flex flex-col items-center space-y-4">
          {/* Brand */}
          <div className="text-center">
            <h3 className={`text-2xl font-bold font-formom ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              themight
            </h3>
            <p className={`text-sm max-w-md mx-auto font-helvetica ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Transform your body, transform your life.
            </p>
          </div>
          
          {/* Social Links - Smaller and visible in both themes */}
          <div className="flex justify-center space-x-3 mt-2">
            <a 
              href="https://instagram.com/abhiramnair" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-electric-blue text-black'
                  : 'bg-strong-green text-white'
              }`}
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="mailto:coach@themight.com"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-amber-gold text-black'
                  : 'bg-amber-gold text-black'
              }`}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className={`text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            © {new Date().getFullYear()} themight. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
