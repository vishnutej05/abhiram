
import { CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Personalized Workout Plan",
      description: "Custom-designed training programs tailored to your fitness level, goals, and schedule",
      icon: "💪"
    },
    {
      title: "Best Physique Coaching",
      description: "Expert guidance to build your dream body with proven muscle-building strategies",
      icon: "🏆"
    },
    {
      title: "Complete Nutrition Plan",
      description: "Science-based nutrition strategies for sustainable fat loss and muscle gain",
      icon: "🥗"
    },
    {
      title: "Custom Meal Plans",
      description: "Delicious, easy-to-prepare meals that fit your lifestyle and preferences",
      icon: "🍽️"
    },
    {
      title: "Muscle Gain Protocols",
      description: "Advanced techniques to maximize lean muscle growth and strength gains",
      icon: "⚡"
    },
    {
      title: "Fat Loss & Overall Health",
      description: "Holistic approach to body recomposition and long-term wellness",
      icon: "❤️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You Get With{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Premium Coaching
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need for a complete fitness transformation journey, 
            backed by proven science and personalized for your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="text-green-500 w-5 h-5" />
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Ready to Start Your Transformation?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join India's most successful online fitness program and get the personalized support you deserve
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Claim Your Spot Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
