import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../hooks/use-theme';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background after scrolling 100px
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu after navigation
    }
  };

  const navigationItems = [
    { id: 'vsl', label: 'Video', tooltip: 'Watch transformation stories' },
    { id: 'about', label: 'About', tooltip: 'Learn about Coach Abhiram' },
    { id: 'transformations', label: 'Results', tooltip: 'See real transformations' },
    { id: 'features', label: 'Programs', tooltip: 'Discover our fitness programs' },
    { id: 'pricing', label: 'Pricing', tooltip: 'Find your path' },
    { id: 'contact', label: 'Contact', tooltip: 'Start your transformation' },
    { id: 'instagram', label: 'Instagram', tooltip: 'Follow the journey' },
    { id: 'faq', label: 'FAQ', tooltip: 'Get answers to common questions' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled 
          ? 'shadow-lg' 
          : ''
      } ${theme === 'dark' 
          ? 'bg-zinc-900/75 border-b border-electric-blue/20' 
          : 'bg-slate-50/90 border-b border-amber-gold/20'}`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className={`${theme === 'dark' ? 'text-electric-blue' : 'text-amber-gold'} font-bold text-xl md:text-2xl tracking-wider`}>
              themight
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`${theme === 'dark' 
                      ? 'text-gray-300 hover:text-electric-blue' 
                      : 'text-gray-700 hover:text-amber-gold'
                    } transition-colors font-bold text-base lg:text-lg py-2 px-2 rounded-md hover:bg-white/10`}
                  >
                    {item.label}
                  </button>
                  {/* Stylish Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`${theme === 'dark' 
                      ? 'bg-electric-blue' 
                      : 'bg-amber-gold'
                    } text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap`}>
                      {item.tooltip}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent ${
                        theme === 'dark' ? 'border-b-electric-blue' : 'border-b-amber-gold'
                      }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center ml-4">
            <div className={`p-1.5 rounded-full ${
              theme === 'dark' 
                ? 'bg-zinc-800/80' 
                : 'bg-white/90 shadow-sm'
            }`}>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className={`p-1.5 rounded-full ${
              theme === 'dark' 
                ? 'bg-zinc-800/80' 
                : 'bg-white/90 shadow-sm'
            }`}>
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'} ml-2`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu, toggle based on menu state */}
        {menuOpen && (
          <div className={`md:hidden py-4 px-2 rounded-b-lg animate-fade-in ${
            theme === 'dark' 
              ? 'bg-zinc-900/95 border-t border-electric-blue/20' 
              : 'bg-slate-50/95 border-t border-amber-gold/20'
          } backdrop-blur-md`}>
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-electric-blue hover:bg-black/20' 
                      : 'text-gray-700 hover:text-amber-gold hover:bg-amber-gold/10'
                  } transition-colors font-bold py-3 px-4 rounded-md text-left text-base`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className={`w-full text-center py-4 rounded-md text-base font-bold mt-4 ${
                  theme === 'dark'
                    ? 'bg-electric-blue text-zinc-900 hover:bg-electric-blue/90'
                    : 'bg-amber-gold text-slate-900 hover:bg-amber-gold/90'
                }`}
              >
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
