import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-50 to-green-100 text-soft-grey py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated to grid-cols-3 with justify-between for even spacing */}
        <div className="grid md:grid-cols-3 gap-12 justify-between">
          {/* Brand Section */}
          <div className="space-y-6 max-w-md">
            <div>
              <h3 className="text-2xl font-bold mb-4">Abhiram Nair</h3>
              <p className="text-soft-grey leading-relaxed">
                India's leading online fitness transformation coach, helping you achieve your dream physique 
                through personalized coaching and proven methods.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/abhiramnair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:coach@abhiramnair.com"
                className="w-12 h-12 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919876543210"
                className="w-12 h-12 text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="ml-12 space-y-8">
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-soft-grey">coach@abhiramnair.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-soft-grey">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-soft-grey">Mumbai, India</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-grey-400 hover:text-blue-600 transition-colors"
              >
                About Coach
              </button>
              <button 
                onClick={() => document.getElementById('transformations')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-grey-400 hover:text-blue-600 transition-colors"
              >
                Success Stories
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-grey-400 hover:text-blue-600 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-grey-400 hover:text-blue-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Abhiram Nair Fitness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
