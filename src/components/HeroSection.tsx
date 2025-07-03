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
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        {/* Mobile Content (centered, stacked) */}
        <div className="md:hidden">
          <div className="text-white space-y-6 animate-fade-in text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight uppercase tracking-tight">
                Hi, I'm <span className="text-orange-400 tracking-wide block mt-1">Abhiram</span>
              </h1>
              <p className="text-base text-gray-200 font-medium leading-relaxed mx-auto px-2">
                Founder of themight and your online fitness coach based in Kochi, Kerala.
                I help real people achieve real, lasting change — using a mix of mental coaching, science-backed strategies, and purpose-driven guidance.
              </p>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={scrollToForm}
                className="btn-matte text-lg font-bold w-full py-4 rounded-full shadow-lg"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
            
            {/* Stats - Card Style for Mobile */}
            <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-white/10">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-orange-400 mb-1">500+</div>
                <div className="text-xs text-gray-300 font-medium">TRANSFORMED</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-red-400 mb-1">95%</div>
                <div className="text-xs text-gray-300 font-medium">SUCCESS RATE</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-xs text-gray-300 font-medium">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Content (left-aligned) */}
        <div className="hidden md:block max-w-6xl">
          <div className="text-[#E6D9C4] space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] uppercase tracking-tight">
                Your body deserves<span className="text-[#BACDB0] font-extrabold"> better.</span>
                <br />
                So do<span className="text-[#C97C5D] font-extrabold"> you.</span>
              </h1>
              <div className="space-y-3">
                <p className="text-lg text-gray-300 font-medium">
                  Hi, I'm <span className="text-[orange-400] font-semibold">Abhiram</span> — Founder of themight
                </p>
                <p className="text-xl lg:text-2xl text-white font-semibold leading-tight max-w-3xl">
                  Transform your body with India's leading online fitness transformation coach
                </p>
              </div>
            </div>
            
            <div>
              <button 
                onClick={scrollToForm}
                className="btn-matte text-xl font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-orange-500/20"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm text-gray-300 font-medium">TRANSFORMED</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-red-400 mb-2">95%</div>
                <div className="text-sm text-gray-300 font-medium">SUCCESS RATE</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300 font-medium">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
