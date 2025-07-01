
const VSLSection = () => {
  return (
    <section id="vsl" className="py-20 bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/lovable-uploads/3f243f27-59d8-41db-a834-2e7497cb3450.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 font-black text-sm mb-4">
            👀 WATCH THIS FIRST
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            SEE HOW OTHERS GOT{' '}
            <span className="text-red-500">
              JACKED
            </span>
          </h2>
        </div>
        
        {/* YouTube Video */}
        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-500/25">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Fitness Transformation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 text-lg font-black hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
          >
            GET YOUR PLAN
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
