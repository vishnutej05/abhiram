
import { CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "CUSTOM WORKOUTS",
      description: "Brutal training designed for your goals",
      icon: "💪"
    },
    {
      title: "NUTRITION WARFARE",
      description: "Eat right, get jacked",
      icon: "🥗"
    },
    {
      title: "MUSCLE BUILDING",
      description: "Pack on serious size",
      icon: "⚡"
    },
    {
      title: "FAT DESTROYER",
      description: "Shred unwanted weight",
      icon: "🔥"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            WHAT YOU{' '}
            <span className="text-red-500">
              GET
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                <CheckCircle className="text-red-500 w-4 h-4" />
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 text-lg font-black hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 transition-all duration-300"
          >
            CLAIM YOUR SPOT
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
