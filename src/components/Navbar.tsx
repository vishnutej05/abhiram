
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-bold text-2xl text-stone-50 drop-shadow-lg">
            ABHIRAM NAIR
          </div>
          
          <div className="hidden md:flex space-x-10">
            <button 
              onClick={() => scrollToSection('about')} 
              className="transition-colors font-medium relative group text-stone-50 hover:text-green-400 drop-shadow-lg"
              title="Learn about Coach Abhiram"
            >
              ABOUT
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-stone-800 text-stone-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Learn about Coach Abhiram
              </div>
            </button>
            <button 
              onClick={() => scrollToSection('transformations')} 
              className="transition-colors font-medium relative group text-stone-50 hover:text-green-400 drop-shadow-lg"
              title="See transformation results"
            >
              RESULTS
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-stone-800 text-stone-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                See transformation results
              </div>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="transition-colors font-medium relative group text-stone-50 hover:text-green-400 drop-shadow-lg"
              title="View training programs"
            >
              PROGRAMS
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-stone-800 text-stone-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                View training programs
              </div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-matte text-base"
            >
              GET STARTED
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-50 drop-shadow-lg">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-stone-800/95 backdrop-blur-md border border-stone-50/10 rounded-2xl mt-4 mb-4">
            <div className="px-6 pt-4 pb-6 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-stone-50 font-medium hover:bg-stone-50/10 rounded-xl transition-colors">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('transformations')} className="block w-full text-left px-4 py-3 text-stone-50 font-medium hover:bg-stone-50/10 rounded-xl transition-colors">
                RESULTS
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-3 text-stone-50 font-medium hover:bg-stone-50/10 rounded-xl transition-colors">
                PROGRAMS
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full btn-matte text-center text-base py-3">
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
