import { Instagram, Mail } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`border-t ${
      theme === 'dark' 
        ? 'bg-zinc-900 border-zinc-800' 
        : 'bg-slate-50 border-slate-200'
    } py-8`}>
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
