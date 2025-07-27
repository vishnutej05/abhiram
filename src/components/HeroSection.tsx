import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { useTheme } from '../hooks/use-theme';

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
    <section className={`relative min-h-screen flex items-center justify-start overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-charcoal-900 to-black/70' 
        : 'bg-gradient-to-br from-white via-slate-50 to-stone-50'
    }`}>
      {/* Desktop Background Image (hidden on mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat hidden md:block mt-8"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'url(/lovable-uploads/hero1.png)' 
            : 'url(/lovable-uploads/heroSec.png)',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-black/95 via-charcoal/90 to-black/70' 
            : 'bg-gradient-to-r from-white/60 via-white/40 to-transparent'
        }`}></div>
      </div>
      
      {/* Mobile Background Image (hidden on desktop) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url(/lovable-uploads/hero%20sec%20mobile.png)",
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-black/95 via-charcoal/85 to-black/70' 
            : 'bg-gradient-to-b from-white/50 via-white/40 to-white/20'
        }`}></div>
      </div>

      {/* Content - Different layouts for mobile and desktop */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-3 md:pt-20">
        {/* Mobile Content (centered, stacked) */}
        <div className="md:hidden min-h-screen flex flex-col justify-center">
          <div className={`space-y-8 text-center mt-4`}>
            <div className="space-y-1">
              <h1 className={`text-4xl font-bold leading-[1.1] tracking-tight font-serif uppercase opacity-0 text-white`} style={{animation: "fadeIn 1.5s ease-in-out 0.3s forwards"}}>
                IT'S TIME FOR<br/>YOU TO <span className={`mt-1 ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} opacity-0`} style={{animation: "fadeIn 1.5s ease-in-out 0.6s forwards"}}>UPGRADE</span>
                <span className="block mt-1 opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 0.9s forwards"}}>YOURSELF</span>
              </h1>
            </div>
            
            {/* Mobile Content (centered, stacked) */}
            <div className="space-y-3 mt-12 mb-4">
              <p className={`opacity-0 font-medium text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} style={{animation: "fadeIn 1.5s ease-in-out 1.0s forwards"}}>
                Hi, I'm <span className={`font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>Abhiram,</span> Founder of themight
              </p>
              <p className={`opacity-0 text-lg ${theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}`} style={{animation: "fadeIn 1.5s ease-in-out 1.3s forwards"}}>
                Transform your body with India's leading<br/>online fitness transformation coach
              </p>
            </div>
            
            <div className="mt-4 opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 1.6s forwards"}}>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center">
                  <span className="text-sm font-bold">RESPECT</span>
                  <span className="text-lg font-bold mx-2">&bull;</span>
                  <span className="text-sm font-bold">CONFIDENCE</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-sm font-bold">HEALTH</span>
                  <span className="text-lg font-bold mx-2">&bull;</span>
                  <span className="text-sm font-bold">RELATIONSHIPS</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2 opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 1.9s forwards"}}>
              <button 
                onClick={scrollToForm}
                className={`btn-primary text-base font-bold w-full max-w-xs mx-auto py-3 px-4 rounded-full shadow-lg font-helvetica transition-all duration-300 hover:scale-105 active:scale-95 group`}
              >
                <span className="relative z-10">Start Your Fitness Journey Today</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Content (left-aligned) */}
        <div className="hidden md:block max-w-6xl">
          <div className={`space-y-12`}>
            <h1 className={`text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight font-serif uppercase opacity-0 ${
              theme === 'dark' ? 'text-white' : 'text-zinc-800'
            }`} style={{animation: "fadeIn 1.5s ease-in-out 0.3s forwards"}}>
              IT'S TIME FOR YOU TO <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} font-black`}>
                UPGRADE
              </span> YOURSELF.
            </h1>
            <div className="space-y-3">
                <p className={`text-3xl font-bold font-helvetica opacity-0 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`} style={{animation: "fadeIn 1.5s ease-in-out 1.0s forwards"}}>
                  Hi, I'm <span className={`font-semibold ${
                    theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'
                  }`}>Abhiram,</span> Founder of themight
                </p>
                <p className={`text-xl lg:text-2xl font-light leading-tight max-w-3xl font-helvetica opacity-0 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`} style={{animation: "fadeIn 1.5s ease-in-out 1.5s forwards"}}>
                  Transform your body with India's leading <br /> online fitness transformation coach
                </p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <div className={`flex flex-row justify-start items-center space-x-6 text-2xl font-extrabold font-helvetica ${
                theme === 'dark' ? 'text-white' : 'text-zinc-800'
              }`}>
                <span className="opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 1.8s forwards"}}> <span className='opacity-80'>RESPECT</span></span>
                <span className="text-3xl font-extrabold mx-4 opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 1.9s forwards"}}>&bull;</span>
                <span className="opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 2.0s forwards"}}><span className='opacity-80'>CONFIDENCE</span></span>
                <span className="text-3xl font-extrabold mx-4 opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 2.1s forwards"}}>&bull;</span>
                <span className="opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 2.2s forwards"}}><span className='opacity-80'>HEALTH</span></span>
                <span className="text-3xl font-extrabold mx-4 opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 2.3s forwards"}}>&bull;</span>
                <span className="opacity-0" style={{animation: "fadeIn 0.8s ease-in-out 2.4s forwards"}}><span className='opacity-80'>RELATIONSHIPS</span></span>
              </div>
              <div className="opacity-0" style={{animation: "fadeIn 1.5s ease-in-out 2.7s forwards"}}>
                <button 
                  onClick={scrollToForm}
                  className="btn-primary text-xl font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
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