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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-lg shadow-lg' 
          : theme === 'dark' ? 'bg-zinc-900/95' : 'bg-black/50'
      }`}
      style={{
        backgroundColor: scrolled 
          ? theme === 'dark' 
            ? 'rgba(39, 39, 42, 0.95)' 
            : 'rgba(28, 28, 28, 0.95)' 
          : theme === 'dark' 
            ? 'rgba(31, 41, 55, 0.98)'
            : 'rgb(0, 0, 0)'
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl md:text-2xl tracking-wider">
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
                    className="text-gray-300 hover:text-white transition-colors font-bold text-base lg:text-lg py-2 px-2 rounded-md hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                  {/* Stylish Tooltip - Bottom positioned with orange background */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                      {item.tooltip}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-emerald-600"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center ml-4">
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white ml-2"
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
          <div className="md:hidden py-4 px-2 rounded-b-lg animate-fade-in bg-black/20 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors font-bold py-3 px-4 rounded-md hover:bg-white/10 text-left text-base"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-matte w-full text-center py-4 rounded-md text-base font-bold mt-4"
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
