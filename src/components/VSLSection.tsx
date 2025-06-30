
const VSLSection = () => {
  return (
    <section id="vsl" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/3f243f27-59d8-41db-a834-2e7497cb3450.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            👀 Watch This First
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See How Others Got{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jacked
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch real transformation stories from people who started exactly where you are right now
          </p>
        </div>
        
        {/* Video Container */}
        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder for video */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-purple-900/50">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-lg font-semibold">Click to watch transformation stories</p>
                <p className="text-sm text-gray-300 mt-2">Real results from the best online fitness coaching program</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-70"></div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Join the fitness transformation journey that's changing lives across India</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Your Transformation Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
