
const VSLSection = () => {
  return (
    <section id="vsl" className="py-16 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/3f243f27-59d8-41db-a834-2e7497cb3450.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold text-sm mb-4">
            👀 WATCH THIS FIRST
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See How Others Got{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transformed
            </span>
          </h2>
        </div>
        
        {/* YouTube Video */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Online fitness transformation coach India - Abhiram Nair journey"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Fitness Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
