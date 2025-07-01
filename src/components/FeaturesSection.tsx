
import { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  
  const features = [
    {
      title: "Personalized Workout Plan",
      description: "Custom exercise routines tailored to your fitness level and goals",
      icon: "💪"
    },
    {
      title: "Best Physique",
      description: "Achieve your dream body with proven transformation methods",
      icon: "🏆"
    },
    {
      title: "Nutrition Guidance",
      description: "Complete meal plans and nutrition coaching for optimal results",
      icon: "🥗"
    },
    {
      title: "Meal Planning",
      description: "Structured meal plans that fit your lifestyle and preferences",
      icon: "📋"
    },
    {
      title: "Muscle Gain Program",
      description: "Build lean muscle mass with strategic training protocols",
      icon: "🔥"
    },
    {
      title: "Fat Loss & Health",
      description: "Sustainable fat loss strategies for overall health improvement",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[90%] mx-auto ">
        <div className="text-center mb-16 p-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You{' '}
            <span className="text-orange-600">
              Get
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete fitness transformation journey with personalized workout and nutrition plan
          </p>
        </div>
        
        {/* Desktop View - Animated Cards */}
        <div className="hidden md:block overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentCard * (100 / 3)}%)` }}
          >
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile View - Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
