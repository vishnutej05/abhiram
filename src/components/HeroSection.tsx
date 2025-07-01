
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/4d6fcca9-a196-4eea-bec3-0e9f8b7cfa56.png)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase tracking-wide">
                IT'S EITHER{' '}
                <span className="text-orange-500">
                  NOW
                </span>
                <br />
                OR IT'S{' '}
                <span className="text-red-500">
                  NEVER
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl mx-auto">
                Transform your body with India's leading online fitness transformation coach
              </p>
            </div>
            
            <div className="space-y-8">
              <button 
                onClick={scrollToForm}
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Fitness Journey Today
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-sm text-gray-300 font-medium">TRANSFORMED</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">95%</div>
                <div className="text-sm text-gray-300 font-medium">SUCCESS RATE</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">24/7</div>
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
