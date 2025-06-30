
const TransformationsSection = () => {
  const transformations = [
    {
      name: "Rajesh Kumar",
      age: 28,
      location: "Mumbai",
      before: "85kg → 72kg",
      result: "Lost 13kg, Gained Muscle",
      testimonial: "Abhiram's personalized approach changed my life. The nutrition plan was easy to follow and the results speak for themselves!"
    },
    {
      name: "Priya Sharma",
      age: 32,
      location: "Delhi",
      before: "68kg → 58kg",
      result: "Body Recomposition",
      testimonial: "Amazing transformation coach! I finally achieved the lean, toned physique I always wanted with his holistic fitness program."
    },
    {
      name: "Arjun Patel",
      age: 25,
      location: "Bangalore",
      before: "70kg → 78kg",
      result: "Gained 8kg Muscle",
      testimonial: "Best online fitness coaching in India! The muscle gain program was exactly what I needed to get jacked."
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the incredible results our clients achieve through dedicated coaching and proven methods
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700"
            >
              {/* Placeholder for before/after images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Before</span>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                  <span className="text-blue-400 text-sm">After</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{transformation.name}</h3>
                  <p className="text-gray-400">{transformation.age} years • {transformation.location}</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl">
                  <div className="text-white font-semibold">{transformation.before}</div>
                  <div className="text-blue-100 text-sm">{transformation.result}</div>
                </div>
                
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "{transformation.testimonial}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to write your own success story?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
