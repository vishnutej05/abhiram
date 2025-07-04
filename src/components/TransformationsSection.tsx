
const TransformationsSection = () => {
  const transformations = [
    {
      name: "Rajesh K.",
      result: "Lost 13kg, Built Muscle",
      testimonial: "BEAST MODE activated!"
    },
    {
      name: "Priya S.",
      result: "Body Recomposition",
      testimonial: "Finally got the physique I wanted."
    },
    {
      name: "Arjun P.",
      result: "Gained 8kg Muscle",
      testimonial: "Got absolutely JACKED."
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            REAL{' '}
            <span className="text-red-500">
              RESULTS
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Placeholder for before/after images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="aspect-[3/4] bg-gray-800 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-bold">BEFORE</span>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-red-400 text-sm font-bold">AFTER</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-black text-white">{transformation.name}</h3>
                  <div className="text-red-500 font-bold text-sm">{transformation.result}</div>
                </div>
                
                <blockquote className="text-gray-300 italic text-sm">
                  "{transformation.testimonial}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 text-lg font-black hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
          >
            START YOUR TRANSFORMATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
