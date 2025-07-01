
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-black text-xl text-white tracking-wider">
            ABHIRAM NAIR
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('transformations')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
              RESULTS
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">
              PROGRAMS
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded font-black hover:shadow-lg hover:shadow-red-500/25 transition-all">
              GET STARTED
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-red-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-300 font-semibold">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('transformations')} className="block px-3 py-2 text-gray-300 font-semibold">
                RESULTS
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-gray-300 font-semibold">
                PROGRAMS
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded mx-3 text-center font-black">
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
