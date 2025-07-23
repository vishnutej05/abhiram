import { Instagram, Mail, Phone } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-gradient-to-br from-zinc-900 to-zinc-800' : 'bg-gradient-to-br from-emerald-50 to-stone-100'} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center space-y-6">
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-stone-100' : 'text-emerald-900'} mb-2`}>themight</h3>
            <p className={`${theme === 'dark' ? 'text-stone-300' : 'text-emerald-700'} max-w-md mx-auto font-bold`}>
              Transform your body, transform your life. India's leading online fitness transformation coach.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://instagram.com/abhiramnair" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 text-white bg-gradient-to-r from-emerald-700 to-stone-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="mailto:coach@themight.com"
              className="w-10 h-10 text-white bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-emerald-700'} text-sm font-bold`}>
            © {new Date().getFullYear()} themight. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
