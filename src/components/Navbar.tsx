
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-gray-900">
            ABHIRAM NAIR
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('transformations')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Results
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-white/95 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('transformations')} className="block px-3 py-2 text-gray-700 font-medium">
                Results
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-gray-700 font-medium">
                Programs
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mx-3 text-center font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
