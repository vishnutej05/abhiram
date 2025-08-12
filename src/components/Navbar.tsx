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
      const isScrolled = window.scrollY > 1100;
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
    // Special case for hero section
    if (id === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMenuOpen(false);
      return;
    }
    
    // Try with the original ID first
    const element = document.getElementById(id);
    
    // If not found, try alternative IDs for problematic sections
    let targetElement = element;
    if (!targetElement && id === 'about') {
      // Try common alternative IDs for the about section
      const alternativeIds = ['about-section', 'aboutSection', 'about-me'];
      for (const altId of alternativeIds) {
        const alt = document.getElementById(altId);
        if (alt) {
          targetElement = alt;
          break;
        }
      }
    }
    
    if (targetElement) {
      // Use a more reliable scrolling method with offset
      const yOffset = -80; // Adjust based on navbar height
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      setMenuOpen(false); // Close menu after navigation
    } else {
      console.error(`Could not find section with ID "${id}" or its alternatives`);
    }
  };

  const navigationItems = [
    { id: 'vsl', label: 'Video', tooltip: 'Watch transformation stories' },
    { id: 'about', label: 'About', tooltip: 'Learn about Coach Abhiram' },
    { id: 'transformations', label: 'Results', tooltip: 'See real transformations' },
    // { id: 'features', label: 'Programs', tooltip: 'Discover our fitness programs' },
    { id: 'pricing', label: 'Pricing', tooltip: 'Find your path' },
    { id: 'contact', label: 'Contact', tooltip: 'Start your transformation' },
    { id: 'instagram', label: 'Instagram', tooltip: 'Follow the journey' },
    { id: 'faq', label: 'FAQ', tooltip: 'Get answers to common questions' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-transparent ${
      scrolled 
        ? 'shadow-lg' 
        : ''
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo - Updated to scroll to hero section */}
        <div className="flex-shrink-0">
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/lovable-uploads/themight MAIN LOGO SVG.png" 
              alt="themight logo" 
              className={`h-7 md:h-10 w-auto transition-all duration-300 ${
                theme === 'dark' 
                  ? 'invert brightness-200' // Always light in dark theme
                  : scrolled 
                    ? 'invert-0' // Dark logo when scrolled in light theme
                    : 'invert brightness-200' // Light logo at top in light theme
              }`}
            />
          </div>
        </div>
        
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:block flex-1">
        <div className="flex items-center justify-center space-x-6 lg:space-x-8">
          {navigationItems.map((item) => (
          <div key={item.id} className="relative group">
            <button 
            onClick={() => scrollToSection(item.id)}
            className={`transition-colors font-bold text-base lg:text-lg py-2 px-2 rounded-md hover:bg-white/10 ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-electric-blue' 
                : scrolled 
                  ? 'text-gray-800 hover:text-strong-green' 
                  : 'text-gray-300 hover:text-strong-green'
            }`}
            >
            {item.label}
            </button>
            {/* Stylish Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className={`${theme === 'dark' 
              ? 'bg-electric-blue' 
              : 'bg-strong-green'
            } text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap`}>
              {item.tooltip}
              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent ${
              theme === 'dark' ? 'border-b-electric-blue' : 'border-b-strong-green'
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
          className={`ml-2 ${
            theme === 'dark' 
              ? 'text-gray-300 hover:text-white' 
              : scrolled 
                ? 'text-gray-800 hover:text-black' 
                : 'text-gray-300 hover:text-white'
          }`}
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
        <div className={`md:hidden py-4 px-2 rounded-b-lg animate-fade-in bg-transparent backdrop-blur-md`}>
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-colors font-bold py-3 px-4 rounded-md text-left text-base ${
            theme === 'dark'
              ? 'text-gray-300 hover:text-electric-blue hover:bg-black/20' 
              : scrolled
                ? 'text-gray-800 hover:text-strong-green hover:bg-strong-green/10'
                : 'text-gray-300 hover:text-strong-green hover:bg-strong-green/10'
            }`}
          >
            {item.label}
          </button>
          ))}
          <button 
          onClick={() => scrollToSection('contact')}
          className={`w-full text-center py-4 rounded-md text-base font-bold mt-4 ${
            theme === 'dark'
            ? 'bg-electric-blue text-zinc-900 hover:bg-electric-blue/90'
            : 'bg-strong-green text-white hover:bg-strong-green/90'
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
