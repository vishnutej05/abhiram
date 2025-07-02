import { useState, useEffect } from 'react';
import '../styles/features-animation.css';

const FeaturesSection = () => {
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

  return (
    <section id="features" className="seamless-section soft-sage relative">
      
      {/* Background Image - Adjusted positioning */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/pic1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      ></div>
      
      <div className="w-full mx-auto relative section-padding z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-dm-sans font-bold text-soft-gray mb-6 leading-tight">
            What You Get
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-3xl mx-auto">
            Complete fitness transformation journey with personalized workout and nutrition plan
          </p>
        </div>
        
        {/* Desktop View - Continuous Scrolling Animation */}
        <div className="hidden md:block overflow-hidden p-3">
          <div className="flex animate-slide">
            {/* First set of feature cards */}
            {features.map((feature, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4 min-w-[350px]">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {features.map((feature, index) => (
              <div key={`duplicate-${index}`} className="w-1/3 flex-shrink-0 px-4 min-w-[350px]">
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
