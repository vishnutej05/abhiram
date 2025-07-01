
const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/4d6fcca9-a196-4eea-bec3-0e9f8b7cfa56.png)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                IT'S EITHER{' '}
                <span className="text-red-500">
                  NOW
                </span>
                <br />
                OR IT'S{' '}
                <span className="text-orange-500">
                  NEVER
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                GET JACKED. GET STRONG. GET RESULTS.
              </p>
            </div>
            
            <div className="space-y-6">
              <button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-5 text-xl font-black tracking-wide hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
              >
                START NOW
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-red-500">500+</div>
                <div className="text-sm text-gray-400 font-semibold">TRANSFORMED</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">95%</div>
                <div className="text-sm text-gray-400 font-semibold">SUCCESS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500">24/7</div>
                <div className="text-sm text-gray-400 font-semibold">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
