import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/use-theme';
import AnimatedHeroText from './AnimatedHeroText';

const HeroSection = () => {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Function to scroll to contact form
  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set page title and trigger animations on mount
  useEffect(() => {
    document.title = "Abhiram Nair - Transform Your Body | Online Fitness Coach India";
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Set viewport height variable for responsive spacing
  useEffect(() => {
    const setVhVariable = () => {
      // Set smaller spacing for iPhone SE and similar sized devices (375x667)
      if (window.innerWidth === 375 && window.innerHeight === 667) {
        document.documentElement.style.setProperty('--hero-spacing', '4vh');
      } else {
        document.documentElement.style.setProperty('--hero-spacing', '8vh');
      }
    };
    
    setVhVariable();
    window.addEventListener('resize', setVhVariable);
    
    return () => window.removeEventListener('resize', setVhVariable);
  }, []);

  // Mobile Component (displays on screens below laptop size)
  const MobileHeroSection = () => (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/lovable-uploads/herom2.png)" }}
      >
        {/* Overlay for text readability */}
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-black/85 via-charcoal/80 to-black/75' 
            : 'bg-gradient-to-b from-black/80 via-charcoal/70 to-black/65'
        }`}></div>
      </div>
      
      {/* Content container - centered with reduced spacing */}
      <div className="relative z-10 h-full flex flex-col justify-center">
       <div className="px-[5%] sm:px-[8%]" style={{ rowGap: 'var(--hero-spacing, 8vh)', display: 'flex', flexDirection: 'column' }}>
          {/* Main headline with tight spacing */}
          <div className="space-y-1"> {/* Reduced from space-y-2 */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight font-helvetica uppercase text-white">
              <span className="block opacity-0" style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 0.3s forwards" : "none"}}>
                IT'S TIME TO 
              </span>
              <span className={`block ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} opacity-0`} 
                style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 0.6s forwards" : "none"}}>
                UPGRADE
              </span>
              <span className="block opacity-0" 
                style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 0.9s forwards" : "none"}}>
                YOURSELF
              </span>
            </h1>
          </div>
          
          {/* Introduction with minimal margin */}
          <div className="space-y-6 opacity-0" style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 1.2s forwards" : "none"}}>
            <p className="font-medium text-2xl text-white">
              This is <span className={`font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                Abhiram,
              </span> <br/>Founder of themight
            </p>
            <p className="text-xl font-medium text-white py-1 rounded-sm">
              Transform your body with India's leading<br/>
              online fitness transformation coach
            </p>
          </div>
          
          {/* Animated text */}
          <div className="text-left w-full opacity-0" style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 1.5s forwards" : "none"}}>
            <AnimatedHeroText />
          </div>
          
          {/* CTA Button */}
          <div className="opacity-0" style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 1.8s forwards" : "none"}}>
            <button 
              onClick={scrollToForm}
              className="btn-primary text-base font-bold w-full max-w-xs mx-auto py-3 px-4 rounded-xl shadow-lg font-helvetica
                transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Your Fitness Journey Today
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade for smooth transition */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-black to-transparent' 
          : 'bg-gradient-to-t from-slate-900/50 to-transparent'
      } z-10`}></div>
    </div>
  );
  
  // Desktop Component (displays on laptop screens and larger)
  const DesktopHeroSection = () => (
    <div className="relative h-screen w-full overflow-hidden pt-26">
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat hidden md:block"
        style={{
          backgroundImage: 'url(/lovable-uploads/hero2.png)',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          transition: 'opacity 0.5s ease-in-out',
          opacity: 1
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-black/80 via-charcoal/80 to-black/60' 
            : 'bg-gradient-to-r from-black/60 via-charcoal/60 to-black/60'
        }`}></div>
      </div>
      
      {/* Left-aligned content container */}
      <div className="relative mt-10 z-10 w-full h-full flex flex-col justify-center">
        <div className="container mx-auto px-8 xl:px-12">
          <div className='max-w-6xl'>
            {/* Main headline - bold and dramatic */}
            <h1 className="text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight font-helvetica uppercase text-white">
              <span className="block opacity-0" style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 0.3s forwards" : "none"}}>
                IT'S TIME FOR YOU TO 
              </span>
              <span className={` ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} opacity-0`}
                style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 0.6s forwards" : "none"}}>
                UPGRADE 
              </span> <span className=" opacity-0" 
                style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 0.9s forwards" : "none"}}>
                 YOURSELF
              </span>
            </h1>
            
            {/* Introduction with larger text */}
            <div className="space-y-3 lg:mt-16 mb-10 opacity-0" 
              style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 1.2s forwards" : "none"}}>
              <p className="text-3xl font-bold text-white">
                This is <span className={`font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                  Abhiram,
                </span> Founder of themight
              </p>
              <p className="text-xl lg:text-2xl font-medium text-white rounded-sm inline-block">
                Transform your body with India's leading online fitness transformation coach
              </p>
            </div>
            
            {/* Animated text */}
            <div className="mt-6 opacity-0" 
              style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 1.5s forwards" : "none"}}>
              <AnimatedHeroText />
            </div>
            
            {/* CTA Button */}
            <div className="mt-12 opacity-0" 
              style={{animation: isLoaded ? "fadeIn 1.5s ease-in-out 1.8s forwards" : "none"}}>
              <button 
                onClick={scrollToForm}
                className="btn-primary text-xl font-bold px-10 py-5 rounded-xl shadow-xl 
                  transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-black to-transparent' 
          : 'bg-gradient-to-t from-slate-900/40 to-transparent'
      } z-10`}></div>
    </div>
  );

  return (
    <>
      {/* Only show the mobile section below laptop breakpoint */}
      <section className="lg:hidden">
        <MobileHeroSection />
      </section>
      
      {/* Only show desktop section on laptop screens and above */}
      <section className="hidden lg:block">
        <DesktopHeroSection />
      </section>
    </>
  );
};

export default HeroSection;