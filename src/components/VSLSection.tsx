
const VSLSection = () => {
  return (
    <section id="vsl" className="py-20 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-block bg-green-700 text-stone-50 px-6 py-2 rounded-full font-semibold text-sm mb-6">
            👀 WATCH THIS FIRST
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6">
            See How Others Got{' '}
            <span className="text-green-400">
              Transformed
            </span>
          </h2>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto">
            Watch real transformation stories from India's leading online fitness coach
          </p>
        </div>
        
        {/* YouTube Video */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-600">
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
            className="btn-matte text-xl"
          >
            Start Your Fitness Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
