
import { CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Personalized Workout Plan",
      description: "Custom training designed for your fitness transformation journey",
      icon: "💪"
    },
    {
      title: "Best Physique Nutrition",
      description: "Holistic fitness and mindset approach to body recomposition",
      icon: "🥗"
    },
    {
      title: "Muscle Gain Program",
      description: "Proven muscle gain and fat loss program for real results",
      icon: "⚡"
    },
    {
      title: "Fat Loss Coaching",
      description: "Best online fitness coaching for sustainable transformation",
      icon: "🔥"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your body with our comprehensive online fitness coaching program
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-[slide_20s_linear_infinite] gap-6">
            {[...features, ...features].map((feature, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="text-blue-600 w-4 h-4" />
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Your Personalized Workout and Nutrition Plan
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
