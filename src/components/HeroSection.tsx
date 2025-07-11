import { useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = "Abhiram Nair - Transform Your Body | Online Fitness Coach India";
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/30"></div>
      </div>
      
      {/* Mobile Background Image (hidden on desktop) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url(/lovable-uploads/hero%20sec%20mobile.png)", // Use correct file name and URL encoding for spaces
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50"></div>
      </div>

      {/* Content - Different layouts for mobile and desktop */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-20">
        {/* Mobile Content (centered, stacked) */}
        <div className="md:hidden min-h-screen flex flex-col justify-center">
          <div className="text-white space-y-8 animate-fade-in text-center -mt-16">
            <div className="space-y-6">
              <h1 className="mt-5 text-3xl font-bold leading-tight uppercase tracking-tight font-formom">
                Hi, I'm <span className="text-emerald-400 tracking-wide block mt-2">Abhiram</span>
              </h1>
              <p className="text-lg text-gray-200 font-medium leading-relaxed mx-auto px-2 max-w-sm font-helvetica">
                Founder of themight and your online fitness coach based in Kochi, Kerala. I help real people achieve real, lasting change.
              </p>
            </div>
            
            <div className="pt-6">
              <button 
                onClick={scrollToForm}
                className="btn-matte text-lg font-bold w-full max-w-xs mx-auto py-4 rounded-full shadow-lg font-helvetica"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
            
            {/* Stats - Card Style for Mobile */}
            <div className="grid grid-cols-3 gap-3 pt-8 max-w-sm mx-auto">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-emerald-400 mb-1 font-formom">500+</div>
                <div className="text-xs text-gray-300 font-medium font-helvetica">TRANSFORMED</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-red-400 mb-1 font-formom">95%</div>
                <div className="text-xs text-gray-300 font-medium font-helvetica">SUCCESS RATE</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-emerald-400 mb-1 font-formom">24/7</div>
                <div className="text-xs text-gray-300 font-medium font-helvetica">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Content (left-aligned) */}
        <div className="hidden md:block max-w-6xl">
          <div className="text-[#E6D9C4] space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] uppercase tracking-tight font-formom">
                Your body deserves<span className="text-[#B0E0E6] font-extrabold tracking-wide"> better.</span>
                <br />
                So do<span className="text-[#C97C5D] font-extrabold"> you.</span>
              </h1>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 font-medium font-helvetica">
                  Hi, I'm <span className="text-emerald-600 font-semibold">Abhiram</span> — Founder of themight
                </p>
                <p className="text-xl lg:text-2xl text-white font-semibold leading-tight max-w-3xl font-helvetica">
                  Transform your body with India's leading online fitness transformation coach
                </p>
              </div>
            </div>
            
            <div>
              <button 
                onClick={scrollToForm}
                className="btn-matte text-xl font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-emerald-500/20 font-helvetica"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-emerald-600 mb-2 font-formom">500+</div>
                <div className="text-sm text-gray-300 font-medium font-helvetica">TRANSFORMED</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-red-400 mb-2 font-formom">95%</div>
                <div className="text-sm text-gray-300 font-medium font-helvetica">SUCCESS RATE</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-emerald-600 mb-2 font-formom">24/7</div>
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
