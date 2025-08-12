import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { useTheme } from '../hooks/use-theme';
import AnimatedHeroText from './AnimatedHeroText'; // Import the new animated component

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const [showAnimatedWords, setShowAnimatedWords] = useState(false);
  
  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = "Abhiram Nair - Transform Your Body | Online Fitness Coach India";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimatedWords(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-start overflow-x-hidden mb-0 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-charcoal-900 to-black/70' 
        : 'bg-transparent'
    }`}>
      {/* Desktop Background Image (hidden on mobile) */}
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
      
      {/* Mobile Background Image (hidden on desktop) */}
      <div 
        className="absolute inset-0 bg-cover md:hidden"
        style={{
          backgroundImage: "url(/lovable-uploads/herom2.png)",
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-black/80 via-charcoal/90 to-black/85' 
            : 'bg-gradient-to-b from-slate-900/90 via-black/75 to-black/65'
        }`}></div>
      </div>
      
      {/* Bottom fade-out gradient for seamless transition to next section */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-black to-transparent' 
          : 'bg-gradient-to-t from-slate-700/50 to-transparent'
      } z-10`}></div>

      {/* Content - Different layouts for mobile and desktop */}
      <div className={`relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-3 md:pt-20 ${theme !== 'dark' ? 'text-shadow-md' : ''}`}>
        {/* Mobile Content (centered, stacked) */}
        <div className="md:hidden min-h-screen flex flex-col justify-center">
          <div className={`space-y-8 text-start`}>
            <div className="space-y-1">
              <h1 className={`text-4xl font-bold leading-[1.1] tracking-tight font-helvetica uppercase opacity-0 ${theme === 'dark' ? 'text-white' : 'text-white'}`} style={{animation: "fadeIn 1.5s ease-in-out 0.3s forwards"}}>
                IT'S TIME TO <br/><span className={`mt-1 ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} opacity-0`} style={{
                  animation: "fadeIn 1.5s ease-in-out 0.6s forwards",
                }}>UPGRADE</span>
                <span className="block mt-1 opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 0.9s forwards"}}>YOURSELF</span>
              </h1>
            </div>
            
            {/* Mobile Content (tighter spacing) */}
            <div className="space-y-1 mt-6 mb-2">
              <p className={`opacity-0 font-medium text-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`} style={{animation: "fadeIn 1.5s ease-in-out 1.0s forwards"}}>
                This is <span className={`font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>Abhiram,</span> <br/>Founder of themight
              </p>
              <p className={`opacity-0 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-white'} bg-gradient-to-r from-black/70 to-transparent py-1 rounded`} style={{animation: "fadeIn 1.5s ease-in-out 1.3s forwards"}}>
                Transform your body with India's leading<br/>online fitness transformation coach
              </p>
            </div>
            
            <div className="text-left w-full opacity-0 mt-1" style={{animation: "fadeIn 1.5s ease-in-out 1.6s forwards"}}>
              <AnimatedHeroText />
            </div>
            
            <div className="pt-2 opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 1.9s forwards"}}>
              <button 
                onClick={scrollToForm}
                className={`btn-primary text-base font-bold w-full max-w-xs mx-auto py-3 px-4 rounded-xl shadow-lg font-helvetica transition-all duration-300 hover:scale-105 active:scale-95 group`}
              >
                <span className="relative z-10">Start Your Fitness Journey Today</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Content (left-aligned) */}
        <div className="hidden md:block max-w-6xl">
          <div>
            <h1 className={`mb-24 text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight font-helvetica uppercase opacity-0 ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`} style={{animation: "fadeIn 1.5s ease-in-out 0.3s forwards"}}>
              IT'S TIME FOR YOU TO <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                UPGRADE
              </span> YOURSELF.
            </h1>
            <div className="space-y-3 mb-5">
              <p
                className={`text-3xl font-bold font-helvetica opacity-0 text-white`}
                style={{ animation: "fadeIn 1.5s ease-in-out 1.0s forwards" }}
              >
                This is{" "}
                <span className={`font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                  Abhiram,
                </span>{" "}
                Founder of themight
              </p>
              <p
                className={`pt-2 text-xl lg:text-2xl font-medium leading-tight max-w-3xl font-helvetica opacity-0 bg-gradient-to-r from-black/60 to-transparent py-1 rounded ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
                style={{ animation: "fadeIn 1.5s ease-in-out 1.5s forwards" }}
              >
                Transform your body with India's leading
                <br />
                online fitness transformation coach
              </p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <div className="opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 1.8s forwards"}}>
                <AnimatedHeroText />
              </div>
              <div className="opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 2.7s forwards"}}>
                <button 
                  onClick={scrollToForm}
                  className="btn-primary text-xl font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Start Your Fitness Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;