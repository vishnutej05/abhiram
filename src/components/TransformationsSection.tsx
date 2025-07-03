import { useState } from 'react';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

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
    },
    {
      name: "Meera P.",
      age: 27,
      location: "Hyderabad",
      beforeImg: "/lovable-uploads/pic 3.png",
      afterImg: "/lovable-uploads/pic 4.png",
      results: "Lost 12kg, Gained Definition",
      timeframe: "3.5 months",
      testimonial: "My energy levels have skyrocketed since starting this program. The results speak for themselves!",
    },
    {
      name: "Karthik N.",
      age: 31,
      location: "Kolkata",
      beforeImg: "/lovable-uploads/pic 2.png",
      afterImg: "/lovable-uploads/pic1.png",
      results: "Gained 8kg Lean Muscle",
      timeframe: "5 months",
      testimonial: "As a hardgainer, I never thought I could build this much muscle. The program was life-changing!",
    },
    {
      name: "Anjali T.",
      age: 26,
      location: "Ahmedabad",
      beforeImg: "/lovable-uploads/pic 4.png",
      afterImg: "/lovable-uploads/pic 3.png",
      results: "Complete Body Toning",
      timeframe: "4 months",
      testimonial: "I'm finally confident in my own skin. This program helped me achieve what years of gym couldn't.",
    },
    {
      name: "Suresh K.",
      age: 33,
      location: "Jaipur",
      beforeImg: "/lovable-uploads/pic1.png",
      afterImg: "/lovable-uploads/pic 2.png",
      results: "Lost 18kg, Improved Health",
      timeframe: "6 months",
      testimonial: "My doctor is amazed at the improvement in all my health markers. Worth every penny!",
    },
    {
      name: "Divya M.",
      age: 29,
      location: "Lucknow",
      beforeImg: "/lovable-uploads/pic 3.png",
      afterImg: "/lovable-uploads/pic 4.png",
      results: "Postpartum Transformation",
      timeframe: "7 months",
      testimonial: "After having my baby, I thought I'd never get back in shape. This program proved me wrong!",
    }
  ];

  // Calculate pagination
  const cardsPerPage = 4; // Changed from 5 to 4 cards per page
  const totalPages = Math.ceil(transformations.length / cardsPerPage);
  const displayedTransformations = transformations.slice(
    currentPage * cardsPerPage, 
    (currentPage * cardsPerPage) + cardsPerPage
  );

  // Navigation functions
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section className="seamless-section soft-blush relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/transform.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}  
      ></div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-start mb-20 animate-fade-in">
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Real {' '} <span className="text-orange-600"> Transformations </span>
          </h2>

          <div className="h-2 w-24 bg-orange-400 rounded-full"></div>

          <p className="mt-4 text-gray-700 leading-relaxed font-semibold text-2xl max-w-2xl">
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
                <h3 className="text-3xl font-dm-sans font-bold text-gray-900 mb-2">
                  {transformations[activeTransformation].name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {transformations[activeTransformation].age} years • {transformations[activeTransformation].location}
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-xl font-dm-sans font-bold text-coral-500">
                  {transformations[activeTransformation].results}
                </div>
                <div className="text-gray-700 leading-relaxed">
                  Timeline: {transformations[activeTransformation].timeframe}
                </div>
              </div>

              <blockquote className="text-lg italic text-gray-700 leading-relaxed font-light border-l-4 border-coral-400 pl-6 bg-white/50 p-4 rounded-r-lg shadow-md">
                "{transformations[activeTransformation].testimonial}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Transformation Gallery - Square cards with navigation */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left navigation button */}
          <button 
            className="absolute -left-4 md:left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-20 bg-white hover:bg-gray-100 text-coral-500 hover:text-coral-600 rounded-full p-3 shadow-lg transition-all duration-300"
            onClick={goToPrevPage}
            aria-label="Previous transformations"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Transformation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16">
            {displayedTransformations.map((transformation, index) => {
              const actualIndex = currentPage * cardsPerPage + index;
              return (
                <div 
                  key={actualIndex}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                  bg-white rounded-2xl shadow-xl flex flex-col w-full h-[300px] 
                  ${activeTransformation === actualIndex ? 'ring-4 ring-coral-400 shadow-2xl' : 'hover:shadow-xl'}`}
                  onClick={() => setActiveTransformation(actualIndex)}
                >
                  <div className="grid grid-cols-2 gap-3 h-[210px] p-4">
                    <div className="relative rounded-lg overflow-hidden h-full">
                      <img 
                        src={transformation.beforeImg}
                        alt={`${transformation.name} before`}
                        className="w-full h-full object-cover"
                      />
                      {/* Removed BEFORE label */}
                    </div>
                    <div className="relative rounded-lg overflow-hidden h-full">
                      <img 
                        src={transformation.afterImg}
                        alt={`${transformation.name} after`}
                        className="w-full h-full object-cover"
                      />
                      {/* Removed AFTER label */}
                    </div>
                  </div>
                  <div className="text-center p-4 border-t border-gray-100 flex flex-col justify-center h-[90px]">
                    <h4 className="font-dm-sans font-bold text-soft-gray mb-2 line-clamp-1">{transformation.name}</h4>
                    <p className="text-sm text-muted-gray font-inter font-medium line-clamp-2">{transformation.results}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right navigation button */}
          <button 
            className="absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-8 z-20 bg-white hover:bg-gray-100 text-coral-500 hover:text-coral-600 rounded-full p-3 shadow-lg transition-all duration-300"
            onClick={goToNextPage}
            aria-label="Next transformations"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Page indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentPage === index ? "w-6 bg-coral-500" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;