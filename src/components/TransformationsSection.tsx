import { useState, useEffect } from 'react';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0);

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

  // Auto-scroll for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileCarouselIndex((prev) => (prev + 1) % transformations.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [transformations.length]);

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
    <div id="transformations">
      {/* Mobile & Tablet Section - Completely Separate */}
      <section className="block lg:hidden seamless-section soft-blush relative overflow-hidden">
        {/* Mobile Background Image */}
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('/lovable-uploads/transform.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}  
        ></div> */}
        
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          {/* Mobile Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Real <span className="text-orange-600">Transformations</span>
            </h2>
            <div className="h-2 w-20 bg-orange-400 rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-700 leading-relaxed font-semibold text-lg sm:text-xl mx-4 sm:mx-8">
              See how our clients achieved amazing results with personalized coaching
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="mb-10">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl mx-4 sm:mx-8">
              <div className="relative h-64 sm:h-80">
                {/* Carousel Images */}
                <div className="flex transition-transform duration-500 ease-in-out h-full"
                     style={{ transform: `translateX(-${mobileCarouselIndex * 100}%)` }}>
                  {transformations.map((transformation, index) => (
                    <div key={index} className="min-w-full h-full flex">
                      <div className="w-1/2 relative">
                        <img 
                          src={transformation.beforeImg}
                          alt={`${transformation.name} before`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">BEFORE</span>
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        <img 
                          src={transformation.afterImg}
                          alt={`${transformation.name} after`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">AFTER</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Transformation Info */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-orange-50 to-red-50">
                <div className="text-center space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {transformations[mobileCarouselIndex].name}
                  </h3>
                  <div className="flex justify-center space-x-3 text-sm text-gray-600">
                    <span className="bg-white px-2 py-1 rounded-full shadow text-xs sm:text-sm">
                      {transformations[mobileCarouselIndex].age} years
                    </span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-sm sm:text-lg font-bold text-orange-600">
                      {transformations[mobileCarouselIndex].results}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium">
                      Timeline: {transformations[mobileCarouselIndex].timeframe}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Carousel Indicators */}
              <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileCarouselIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      mobileCarouselIndex === index ? 'bg-orange-500 w-4 sm:w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Section - Original Layout */}
      <section className="hidden lg:block seamless-section soft-blush relative overflow-hidden">
        {/* Desktop Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/transform.png'  )`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}  
        ></div>
        
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          {/* Desktop Header Section */}
          <div className="text-start mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              Real {' '} <span className="text-orange-600"> Transformations </span>
            </h2>
            <div className="h-2 w-24 bg-orange-400 rounded-full"></div>
            <p className="mt-3 text-gray-700 leading-relaxed font-semibold text-xl max-w-2xl">
              See how our clients achieved their fitness transformation journey with personalized coaching
            </p>
          </div>

          {/* Desktop Featured Transformation */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative group">
                  <img 
                    src={transformations[activeTransformation].beforeImg}
                    alt={`${transformations[activeTransformation].name} before transformation`}
                    className="w-full h-64 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg">BEFORE</span>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={transformations[activeTransformation].afterImg}
                    alt={`${transformations[activeTransformation].name} after transformation`}
                    className="w-full h-64 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-mint-500 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg">AFTER</span>
                  </div>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h3 className="text-2xl font-dm-sans font-bold text-gray-900 mb-2">
                    {transformations[activeTransformation].name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {transformations[activeTransformation].age} years • {transformations[activeTransformation].location}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-lg font-dm-sans font-bold text-coral-500">
                    {transformations[activeTransformation].results}
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    Timeline: {transformations[activeTransformation].timeframe}
                  </div>
                </div>

                <blockquote className="text-base italic text-gray-700 leading-relaxed font-light border-l-4 border-coral-400 pl-4 bg-white/50 p-3 rounded-r-lg shadow-md">
                  "{transformations[activeTransformation].testimonial}"
                </blockquote>
                </div>
              </div>
            </div>

            {/* Desktop Transformation Gallery - Compact */}
            <div className="relative max-w-7xl mx-auto">
              {/* Gallery Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-dm-sans font-bold text-gray-900 mb-2">
                  More Success Stories
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-coral-500 to-orange-500 rounded-full mx-auto"></div>
              </div>

              {/* Compact Sliding Gallery Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="min-w-full py-6 px-4">
                      <div className="grid grid-cols-4 gap-4">
                        {transformations.slice(pageIndex * cardsPerPage, (pageIndex * cardsPerPage) + cardsPerPage).map((transformation, index) => {
                          const actualIndex = pageIndex * cardsPerPage + index;
                          return (
                            <div 
                              key={actualIndex}
                              className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl 
                              bg-white rounded-xl shadow-lg flex flex-col h-[240px] group
                              ${activeTransformation === actualIndex ? 'ring-3 ring-coral-400 shadow-xl scale-105' : 'hover:shadow-xl'}`}
                              onClick={() => setActiveTransformation(actualIndex)}
                            >
                              <div className="relative h-[150px] p-2">
                                <div className="grid grid-cols-2 gap-1 h-full">
                                  <div className="relative rounded-lg overflow-hidden">
                                    <img 
                                      src={transformation.beforeImg}
                                      alt={`${transformation.name} before`}
                                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-1 left-1">
                                      <span className="bg-red-500 text-white px-1 py-0.5 rounded text-xs font-bold">BEFORE</span>
                                    </div>
                                  </div>
                                  <div className="relative rounded-lg overflow-hidden">
                                    <img 
                                      src={transformation.afterImg}
                                      alt={`${transformation.name} after`}
                                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-1 right-1">
                                      <span className="bg-mint-500 text-white px-1 py-0.5 rounded text-xs font-bold">AFTER</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center p-3 border-t border-gray-100 flex flex-col justify-center h-[90px] space-y-1">
                                <h4 className="font-dm-sans font-bold text-gray-900 text-base group-hover:text-coral-500 transition-colors">
                                  {transformation.name}
                                </h4>
                                <p className="text-xs text-coral-600 font-semibold">
                                  {transformation.results}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {transformation.timeframe}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Navigation Controls */}
              <div className="flex justify-center items-center mt-6 space-x-4">
                {/* Left Arrow */}
                <button 
                  className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                  onClick={goToPrevPage}
                  aria-label="Previous transformations"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Indicators */}
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentPage === index 
                          ? "w-6 bg-gradient-to-r from-coral-500 to-orange-500 shadow-lg" 
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button 
                  className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                  onClick={goToNextPage}
                  aria-label="Next transformations"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default TransformationsSection;