import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/use-theme';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0);
  const mobileCarouselRef = useRef(null);
  const { theme } = useTheme();

  const transformations = [
    {
      name: "Ajay",
      age: 28,
      location: "Creator",
      beforeImg: "/testimonials/Ajay/b.jpg",
      afterImg: "/testimonials/Ajay/a.jpg",
      results: "Complete body transformation",
      timeframe: "4 months",
      testimonial: "As a food consultant, maintaining my own fitness seemed impossible. Abhiram's approach changed everything - now I practice what I preach and inspire my clients daily.",
    },
    {
      name: "Akshay",
      age: 32,
      location: "IT Professional", 
      beforeImg: "/testimonials/Akshay/b.JPG",
      afterImg: "/testimonials/Akshay/a.JPG",
      results: "Enhanced Athletic Performance",
      timeframe: "5 months",
      testimonial: "The transformation wasn't just physical - my cricket performance improved dramatically, and hiking became effortless. This program delivers results that translate to real life.",
    },
    {
      name: "Alok",
      age: 24,
      location: "IT Professional",
      beforeImg: "/testimonials/Alok/b.png",
      afterImg: "/testimonials/Alok/a.jpg",
      results: "Mental & Physical Transformation",
      timeframe: "6 months",
      testimonial: "Abhiram taught me that fitness is a mindset, not just workouts. The mental strength I gained has transformed every aspect of my life beyond the gym.",
    },
    {
      name: "Ashwath",
      age: 25,
      location: "IT Professional",
      beforeImg: "/testimonials/Ashwath/b.JPG",
      afterImg: "/testimonials/Ashwath/a.JPG",
      results: "Strength & Functional Fitness",
      timeframe: "4 months",
      testimonial: "Outstanding program that delivered exactly what I wanted - serious strength gains and functional fitness that carries over to everything I do.",
    },
    {
      name: "Karavi",
      age: 28,
      location: "Musician",
      beforeImg: "/testimonials/Karavi/b.JPG",
      afterImg: "/testimonials/Karavi/a.JPG",
      results: "Complete Body Transformation",
      timeframe: "5 months",
      testimonial: "The program perfectly balanced my creative lifestyle with fitness goals. I found an approach that works with my irregular schedule and delivers lasting results.",
    },
    {
      name: "Nabeel",
      age: 27,
      location: "IT Professional",
      beforeImg: "/testimonials/Nabeel/b.JPG",
      afterImg: "/testimonials/Nabeel/a.JPG",
      results: "Lean & Strong Physique",
      timeframe: "4 months",
      testimonial: "What I love about Abhiram's approach is the clarity - no complicated theories, just proven methods that work. The results speak for themselves.",
    },
    {
      name: "Rahul",
      age: 29,
      location: "Assistant Professor",
      beforeImg: "/testimonials/Rahul/b.jpeg",
      afterImg: "/testimonials/Rahul/a.png",
      results: "7kg Muscle Gain",
      timeframe: "6 months",
      testimonial: "Finally cracked the code on gaining muscle! The nutrition guidance made everything click, and I added over 7kg of solid muscle mass.",
    },
    {
      name: "Vinod",
      age: 32,
      location: "Professional",
      beforeImg: "/testimonials/Vinod/b.JPG",
      afterImg: "/testimonials/Vinod/a.JPG",
      results: "Lost 10kg Fat, Gained 5kg Muscle",
      timeframe: "7 months",
      testimonial: "Complete body recomposition - lost 10kg of fat while gaining 5kg of muscle. This program transformed not just my body, but my entire relationship with fitness.",
    }
  ];

  // Calculate pagination
  const cardsPerPage = 3; // Changed to show 3 cards per page with navigation in 4th position
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
      <section className={`block lg:hidden seamless-section ${
        theme === 'dark' 
          ? 'bg-zinc-800 border border-zinc-700' // Replace gradient with solid color to eliminate diagonal lines
          : 'soft-blush'
      } relative overflow-hidden`}>
        {/* Background overlay for dark theme - create subtle gradient effect here instead */}
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 to-zinc-800/20 backdrop-blur-[1px]"></div>
        )}
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 relative z-10">
          {/* Mobile Header Section */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 leading-tight font-helvetica ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Meet the people who took a chance to {' '} <span className={
                theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'
              }> upgrade themselves </span>
            </h2>
            <div className={`h-2 w-20 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-electric-blue' : 'bg-emerald-600'
            }`}></div>
          </div>

          {/* Mobile Carousel */}
          <div className="mb-2">
            <div className={`relative overflow-hidden rounded-2xl shadow-xl mx-4 sm:mx-8 ${
              theme === 'dark' ? 'bg-zinc-800' : 'bg-white'
            }`}>
              <div className="relative h-64 sm:h-80">
                {/* Carousel Images */}
                <div 
                  ref={mobileCarouselRef}
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ 
                    transform: `translateX(-${mobileCarouselIndex * 100}%)`
                  }}
                >
                  {transformations.map((transformation, index) => (
                    <div key={index} className="min-w-full h-full flex">
                      <div className="w-1/2 relative">
                        <img 
                          src={transformation.beforeImg}
                          alt={`${transformation.name} before`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="text-black px-2 py-1 rounded-full text-xs font-bold bg-white shadow-md">BEFORE</span>
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        <img 
                          src={transformation.afterImg}
                          alt={`${transformation.name} after`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                          <span className="text-black px-2 py-1 rounded-full text-xs font-bold bg-white shadow-md">AFTER</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2 sm:px-4">
                  <button
                    className={`rounded-full p-2 shadow-xl z-10 transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => setMobileCarouselIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1))}
                    aria-label="Previous transformation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className={`rounded-full p-2 shadow-xl z-10 transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => setMobileCarouselIndex((prev) => (prev + 1) % transformations.length)}
                    aria-label="Next transformation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Mobile Transformation Info */}
              <div className={`p-4 sm:p-6 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-zinc-800 to-zinc-900' 
                  : 'bg-gradient-to-r from-emerald-50 to-stone-50'
              }`}>
                <div className="text-center space-y-2 sm:space-y-3">
                  <h3 className={`text-lg sm:text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {transformations[mobileCarouselIndex].name}
                  </h3>
                  <div className={`flex justify-center space-x-3 text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  } font-helvetica`}>
                    <span className={`px-2 py-1 rounded-full shadow text-xs sm:text-sm ${
                      theme === 'dark' ? 'bg-zinc-700 text-gray-200' : 'bg-white text-gray-700'
                    }`}>
                      {transformations[mobileCarouselIndex].age} years
                    </span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className={`text-sm sm:text-lg font-bold font-helvetica ${
                      theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'
                    }`}>
                      {transformations[mobileCarouselIndex].testimonial}
                    </div>
                    <div className={`text-xs sm:text-sm font-medium font-helvetica ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Timeline: {transformations[mobileCarouselIndex].timeframe}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Carousel Indicators */}
              <div className="py-3 flex justify-center">
                <div className="flex space-x-2">
                  {transformations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setMobileCarouselIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        mobileCarouselIndex === index 
                          ? theme === 'dark'
                            ? "w-8 bg-electric-blue"
                            : "w-8 bg-emerald-600"
                          : "w-2.5 bg-gray-400 hover:bg-gray-600"
                      }`}
                      aria-label={`Go to transformation ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Section - Original Layout */}
      <section className={`hidden lg:block relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-zinc-900 bg-opacity-95'
          : 'soft-blush'
      }`}>
        {/* Desktop Background Image with overlay for dark theme */}
        {theme === 'dark' && (
          <div className="bg-zinc-900 bg-opacity-95"></div>
        )}
        
        <div className="max-w-7xl mx-auto pt-20 pb-10 px-8 relative z-10 capitalize">
          {/* Desktop Header Section */}
          <div className="text-start mb-12 animate-fade-in">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-3 leading-tight font-helvetica ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Meet the people who took a chance to <br/> {' '} <span className={
                theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'
              }> Upgrade Themselves </span>
            </h2>
            {/* <div className={`h-2 w-24 rounded-full ${
              theme === 'dark' ? 'bg-electric-blue' : 'bg-emerald-600'
            }`}></div> */}
            {/* <p className={`mt-3 leading-relaxed font-semibold text-xl max-w-2xl font-helvetica ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Meet the people who took a chance to upgrade themselves
            </p> */}
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
                    className="w-full h-64 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg bg-white`}>BEFORE</span>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={transformations[activeTransformation].afterImg}
                    alt={`${transformations[activeTransformation].name} after transformation`}
                    className="w-full h-64 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3">
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg bg-white`}>AFTER</span>
                  </div>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h3 className={`text-2xl font-dm-sans font-bold mb-2 font-formom ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {transformations[activeTransformation].name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className={`text-gray-700 leading-relaxed font-helvetica ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Duration: {transformations[activeTransformation].timeframe}
                  </div>
                </div>

                <blockquote className={`text-base italic leading-relaxed font-light pl-4 p-3 rounded-r-lg shadow-md font-helvetica ${
                  theme === 'dark'
                    ? 'border-l-4 border-electric-blue bg-zinc-800/70 text-gray-200'
                    : 'border-l-4 border-emerald-600 bg-white/50 text-gray-700'
                }`}>
                  "{transformations[activeTransformation].testimonial}"
                </blockquote>
                </div>
              </div>
            </div>

            {/* Desktop Transformation Gallery - Compact */}
            <div className="relative max-w-7xl mx-auto">
              {/* Gallery Header */}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 font-helvetica uppercase ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  MORE SUCCESS STORIES
                </h3>
                <div className={`h-1 w-16 rounded-full mx-auto ${
                  theme === 'dark'
                    ? 'bg-gradient-electric-to-amber' 
                    : 'bg-gradient-to-r from-emerald-700 to-emerald-800'
                }`}></div>
              </div>

              {/* Compact Sliding Gallery Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl px-10">
                {/* Left Arrow - Positioned at extreme left */}
                <button
                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-700 rounded-full p-2 shadow-xl z-10 transition-all duration-300 hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-gradient-electric-to-amber hover:bg-gradient-amber-to-electric'
                      : 'text-white bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900'
                  }`}
                  onClick={goToPrevPage}
                  aria-label="Previous transformations"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow - Positioned at extreme right */}
                <button
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 rounded-full p-2 shadow-xl z-10 transition-all duration-300 hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-gradient-electric-to-amber hover:bg-gradient-amber-to-electric'
                      : 'bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white'
                  }`}
                  onClick={goToNextPage}
                  aria-label="Next transformations"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentPage * 100}%)`
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className={`min-w-full py-6 px-4 ${
                      theme === 'dark' ? 'bg-zinc-900/80' : 'bg-white/70'
                    }`}>
                      <div className="grid grid-cols-3 gap-6">
                        {/* Show 3 transformation cards */}
                        {transformations.slice(pageIndex * cardsPerPage, (pageIndex * cardsPerPage) + cardsPerPage).map((transformation, index) => {
                          const actualIndex = pageIndex * cardsPerPage + index;
                          return (
                            <div 
                              key={actualIndex}
                              className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl 
                              rounded-xl shadow-lg flex flex-col h-[200px] group ${
                                theme === 'dark' 
                                  ? 'bg-gradient-to-br from-zinc-800 to-zinc-900 hover:from-zinc-900 hover:to-zinc-800'
                                  : 'soft-blush'
                              } ${
                                activeTransformation === actualIndex 
                                  ? theme === 'dark'
                                    ? 'ring-3 ring-electric-blue shadow-xl scale-105'
                                    : 'ring-3 ring-emerald-600 shadow-xl scale-105'
                                  : 'hover:shadow-xl'
                              }`}
                              onClick={() => setActiveTransformation(actualIndex)}
                            >
                              <div className="relative h-[120px] p-2">
                                <div className="grid grid-cols-2 gap-2 h-full">
                                  <div className={`relative rounded-lg overflow-hidden border-2 ${
                                    theme === 'dark' ? 'border-zinc-700' : 'border-gray-200'
                                  }`}>
                                    <img 
                                      src={transformation.beforeImg}
                                      alt={`${transformation.name} before`}
                                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                  </div>
                                  <div className={`relative rounded-lg overflow-hidden border-2 ${
                                    theme === 'dark' ? 'border-zinc-700' : 'border-gray-200'
                                  }`}>
                                    <img 
                                      src={transformation.afterImg}
                                      alt={`${transformation.name} after`}
                                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={`text-center p-3 flex flex-col justify-center h-[90px] space-y-1 ${
                                theme === 'dark' ? 'border-t border-zinc-700' : 'border-t border-gray-100'
                              }`}>
                                <h4 className={`font-bold text-base transition-colors font-helvetica ${
                                  theme === 'dark'
                                    ? 'text-white group-hover:text-electric-blue'
                                    : 'text-gray-900 group-hover:text-emerald-700'
                                }`}>
                                  {transformation.name}
                                </h4>
                                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} font-helvetica`}>
                                  {transformation.timeframe}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Page Indicators - Centered below the cards */}
                      <div className="flex justify-center mt-6">
                        <div className="flex space-x-2">
                          {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentPage(index)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                currentPage === index 
                                  ? theme === 'dark'
                                    ? "w-6 bg-gradient-electric-to-amber shadow-lg" 
                                    : "w-6 bg-gradient-to-r from-emerald-700 to-emerald-800 shadow-lg "
                                    : "w-2 bg-gray-600 hover:bg-gray-800"
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default TransformationsSection;
