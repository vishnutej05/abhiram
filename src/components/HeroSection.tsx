import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
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
    <section className="relative min-h-screen flex items-center justify-start overflow-x-hidden">
      {/* Desktop Background Image (hidden on mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat hidden md:block"
        style={{
          backgroundImage: 'url(/lovable-uploads/heroSec.png)',
          backgroundPosition: 'center 50%',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/30"></div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/60"></div>
      </div>

      {/* Content - Different layouts for mobile and desktop */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-20">
        {/* Mobile Content (centered, stacked) */}
        <div className="md:hidden min-h-screen flex flex-col justify-center">
          <div className="text-white space-y-10 text-center -mt-16">
            <div className="space-y-8 animate-fade-in">
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight font-serif">
                Transform Your
                <span className="text-emerald-400 block mt-3 animate-fade-in [animation-delay:200ms]">Body & Mind</span>
              </h1>
              <p className="text-lg text-gray-200 font-medium leading-relaxed mx-auto px-2 max-w-sm font-helvetica opacity-0 animate-fade-in [animation-delay:400ms] [animation-fill-mode:forwards]">
                Hi, I'm <span className="text-emerald-400">Abhiram</span>, your online fitness coach based in Kochi. I help real people achieve real, lasting change.
              </p>
            </div>
            
            <div className="pt-6 opacity-0 animate-fade-in [animation-delay:600ms] [animation-fill-mode:forwards]">
              <button 
                onClick={scrollToForm}
                className="relative overflow-hidden btn-matte text-lg font-bold w-full max-w-xs mx-auto py-4 px-6 rounded-full shadow-lg font-helvetica transition-all duration-300 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 group"
              >
                <span className="relative z-10">Start Your Fitness Journey Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
            
            {/* Stats - Card Style for Mobile */}
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto opacity-0 animate-fade-in [animation-delay:800ms] [animation-fill-mode:forwards]">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:bg-black/60">
                <div className="text-2xl font-bold text-emerald-400 mb-1 font-serif">500+</div>
                <div className="text-xs text-gray-300 font-medium font-helvetica">TRANSFORMED</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:bg-black/60">
                <div className="text-2xl font-bold text-red-400 mb-1 font-serif">95%</div>
                <div className="text-xs text-gray-300 font-medium font-helvetica">SUCCESS RATE</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:bg-black/60">
                <div className="text-2xl font-bold text-emerald-400 mb-1 font-serif">24/7</div>
                <div className="text-xs text-gray-300 font-medium font-helvetica">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Content (left-aligned) */}
        <div className="hidden md:block max-w-6xl">
          <div className="text-[#E6D9C4] space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight font-serif uppercase">
                <span className="opacity-70 inline">YOUR BODY DESERVES </span>
                <span
                  className={`text-[#B0E0E6] font-extrabold tracking-wide inline transition-opacity duration-[7000ms] ${showAnimatedWords ? 'fade-in-only' : 'opacity-0'}`}
                >
                  BETTER.
                </span>
                <span className="opacity-70 inline"> SO DO </span>
                <span
                  className={`text-[#b0e0e6] font-extrabold inline transition-opacity duration-[7000ms] ${showAnimatedWords ? 'fade-in-only' : 'opacity-0'}`}
                >
                  YOU.
                </span>
              </h1>
              <div className="space-y-3">
                <p className="text-2xl text-gray-300 font-bold font-helvetica">
                  Hi, I'm <span className="text-emerald-600 font-semibold">Abhiram,</span> Founder of themight
                </p>
                <p className="text-lg lg:text-xl text-gray-300 font-light leading-tight max-w-3xl font-helvetica">
                  Transform your body with India's leading <br /> online fitness transformation coach
                </p>
              </div>
            </div>
            
            <div>
              <button 
                onClick={scrollToForm}
                className="relative overflow-hidden btn-matte text-xl font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 group"
              >
                <span className="relative z-10">Start Your Fitness Journey Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-emerald-600 mb-2 font-serif">500+</div>
                <div className="text-sm text-gray-300 font-medium font-helvetica">TRANSFORMED</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-red-400 mb-2 font-serif">95%</div>
                <div className="text-sm text-gray-300 font-medium font-helvetica">SUCCESS RATE</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-emerald-600 mb-2 font-serif">24/7</div>
                <div className="text-sm text-gray-300 font-medium font-helvetica">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;