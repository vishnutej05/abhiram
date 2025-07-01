import { useEffect } from 'react';

const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/4d6fcca9-a196-4eea-bec3-0e9f8b7cfa56.png)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-20 md:py-24">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-8">
            <h2 className="text-white font-bold text-2xl">
              <span className="text-white">the</span>
              <span className="text-orange-400">might</span>
            </h2>
          </div>

          {/* Hero Content */}
          <div className="text-white space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase tracking-wide">
                Hi, I'm <span className="text-orange-400">Abhiram</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl">
                founder of themight and your online fitness coach based in Kochi, Kerala. 
                I help real people achieve real, lasting change — using a mix of mental coaching, 
                science-backed strategies, and purpose-driven guidance.
              </p>
              <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl">
                Whether you're just starting out or ready for a serious transformation, 
                I'm here to help you unlock your full potential — inside and out.
              </p>
            </div>
            
            <div>
              <button 
                onClick={scrollToForm}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm md:text-base text-gray-300 font-medium tracking-wide">TRANSFORMED</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-sm md:text-base text-gray-300 font-medium tracking-wide">SUCCESS RATE</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm md:text-base text-gray-300 font-medium tracking-wide">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
