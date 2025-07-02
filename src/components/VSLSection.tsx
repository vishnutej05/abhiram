
const VSLSection = () => {
  return (
    <section id="vsl" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm mb-6">
            👀 WATCH THIS FIRST
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See How Others Got{' '}
            <span className="text-blue-400">
              Transformed
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Watch real transformation stories from India's leading online fitness coach
          </p>
        </div>
        
        {/* YouTube Video */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-600">
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
        
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Fitness Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
