
import { useState } from 'react';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);

  const transformations = [
    {
      name: "Rahul S.",
      age: 28,
      location: "Mumbai",
      beforeImg: "/lovable-uploads/pic1.png",
      afterImg: "/lovable-uploads/pic 2.png",
      results: "Lost 15kg, Gained Muscle",
      timeframe: "4 months",
      testimonial: "The personalized approach completely transformed my body and confidence. Best investment ever!",
    },
    {
      name: "Priya M.",
      age: 32,
      location: "Delhi", 
      beforeImg: "/lovable-uploads/pic 3.png",
      afterImg: "/lovable-uploads/pic 4.png",
      results: "Toned Body, +10kg Strength",
      timeframe: "3 months",
      testimonial: "The guidance was game-changing. I finally found a sustainable approach to fitness!",
    },
    {
      name: "Arjun K.",
      age: 25,
      location: "Bangalore",
      beforeImg: "/lovable-uploads/pic 2.png",
      afterImg: "/lovable-uploads/pic1.png",
      results: "Shredded 20kg, Built Lean Muscle",
      timeframe: "5 months",
      testimonial: "Abhiram's coaching style is perfect. He made fitness enjoyable and sustainable for me!",
    },
    {
      name: "Sneha R.",
      age: 29,
      location: "Pune",
      beforeImg: "/lovable-uploads/pic 3.png",
      afterImg: "/lovable-uploads/pic 4.png",
      results: "Fat Loss + Strength Gains",
      timeframe: "6 months",
      testimonial: "Amazing transformation journey! The meal plans and workouts were perfectly tailored.",
    },
    {
      name: "Vikram D.",
      age: 34,
      location: "Chennai",
      beforeImg: "/lovable-uploads/pic1.png",
      afterImg: "/lovable-uploads/pic 2.png",
      results: "Complete Body Recomposition",
      timeframe: "8 months",
      testimonial: "Life-changing experience! Not just physical transformation but mental strength too.",
    }
  ];

  return (
    <section className="seamless-section soft-blush relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/pic 2.png')`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-dm-sans font-bold text-soft-gray mb-6 leading-tight">
            Real Transformations
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-2xl mx-auto">
            See how our clients achieved their fitness transformation journey with personalized coaching
          </p>
        </div>

        {/* Featured Transformation */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Before/After Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <img 
                  src={transformations[activeTransformation].beforeImg}
                  alt={`${transformations[activeTransformation].name} before transformation`}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg">BEFORE</span>
                </div>
              </div>
              <div className="relative group">
                <img 
                  src={transformations[activeTransformation].afterImg}
                  alt={`${transformations[activeTransformation].name} after transformation`}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-mint-500 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg">AFTER</span>
                </div>
              </div>
            </div>

            {/* Transformation Details */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-3xl font-dm-sans font-bold text-soft-gray mb-2">
                  {transformations[activeTransformation].name}
                </h3>
                <p className="text-muted-gray font-inter font-medium">
                  {transformations[activeTransformation].age} years • {transformations[activeTransformation].location}
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-xl font-dm-sans font-bold text-coral-500">
                  {transformations[activeTransformation].results}
                </div>
                <div className="text-muted-gray font-inter font-medium">
                  Timeline: {transformations[activeTransformation].timeframe}
                </div>
              </div>

              <blockquote className="text-lg italic text-muted-gray font-inter font-light border-l-4 border-coral-400 pl-6 bg-white/50 p-4 rounded-r-lg shadow-md">
                "{transformations[activeTransformation].testimonial}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Transformation Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {transformations.map((transformation, index) => (
            <div 
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white rounded-2xl p-4 shadow-xl ${
                activeTransformation === index ? 'ring-4 ring-coral-400 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onClick={() => setActiveTransformation(index)}
            >
              <div className="grid grid-cols-2 gap-2 mb-4">
                <img 
                  src={transformation.beforeImg}
                  alt={`${transformation.name} before`}
                  className="w-full h-20 object-cover rounded-lg"
                />
                <img 
                  src={transformation.afterImg}
                  alt={`${transformation.name} after`}
                  className="w-full h-20 object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h4 className="font-dm-sans font-bold text-soft-gray mb-1">{transformation.name}</h4>
                <p className="text-sm text-muted-gray font-inter font-medium">{transformation.results}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;