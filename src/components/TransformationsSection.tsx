import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/use-theme';

const TransformationsSection = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0);
  const { theme } = useTheme();

  const transformations = [
    {
      name: "Ryan",
      age: 28,
      location: "Creator",
      beforeImg: "/testimonials/Ajay/b.jpg",
      afterImg: "/testimonials/Ajay/a.jpg",
      results: "Complete body transformation",
      timeframe: "4 months",
      testimonial: "As a food consultant, maintaining my own fitness seemed impossible. Abhiram's approach changed everything - now I practice what I preach and inspire my clients daily.",
    },
    {
      name: "Marcus",
      age: 32,
      location: "IT Professional", 
      beforeImg: "/testimonials/Akshay/b.JPG",
      afterImg: "/testimonials/Akshay/a.JPG",
      results: "Enhanced Athletic Performance",
      timeframe: "5 months",
      testimonial: "The transformation wasn't just physical - my cricket performance improved dramatically, and hiking became effortless. This program delivers results that translate to real life.",
    },
    {
      name: "Jordan",
      age: 24,
      location: "IT Professional",
      beforeImg: "/testimonials/Alok/b.png",
      afterImg: "/testimonials/Alok/a.jpg",
      results: "Mental & Physical Transformation",
      timeframe: "6 months",
      testimonial: "Abhiram taught me that fitness is a mindset, not just workouts. The mental strength I gained has transformed every aspect of my life beyond the gym.",
    },
    {
      name: "Tyler",
      age: 25,
      location: "IT Professional",
      beforeImg: "/testimonials/Ashwath/b.JPG",
      afterImg: "/testimonials/Ashwath/a.JPG",
      results: "Strength & Functional Fitness",
      timeframe: "4 months",
      testimonial: "Outstanding program that delivered exactly what I wanted - serious strength gains and functional fitness that carries over to everything I do.",
    },
    {
      name: "Maya",
      age: 28,
      location: "Musician",
      beforeImg: "/testimonials/Karavi/b.JPG",
      afterImg: "/testimonials/Karavi/a.JPG",
      results: "Complete Body Transformation",
      timeframe: "5 months",
      testimonial: "The program perfectly balanced my creative lifestyle with fitness goals. I found an approach that works with my irregular schedule and delivers lasting results.",
    },
    {
      name: "Alex",
      age: 27,
      location: "IT Professional",
      beforeImg: "/testimonials/Nabeel/b.JPG",
      afterImg: "/testimonials/Nabeel/a.JPG",
      results: "Lean & Strong Physique",
      timeframe: "4 months",
      testimonial: "What I love about Abhiram's approach is the clarity - no complicated theories, just proven methods that work. The results speak for themselves.",
    },
    {
      name: "David",
      age: 29,
      location: "Assistant Professor",
      beforeImg: "/testimonials/Rahul/b.jpeg",
      afterImg: "/testimonials/Rahul/a.png",
      results: "7kg Muscle Gain",
      timeframe: "6 months",
      testimonial: "Finally cracked the code on gaining muscle! The nutrition guidance made everything click, and I added over 7kg of solid muscle mass.",
    },
    {
      name: "Chris",
      age: 32,
      location: "Professional",
      beforeImg: "/testimonials/Vinod/b.JPG",
      afterImg: "/testimonials/Vinod/a.JPG",
      results: "Lost 10kg Fat, Gained 5kg Muscle",
      timeframe: "7 months",
      testimonial: "Complete body recomposition - lost 10kg of fat while gaining 5kg of muscle. This program transformed not just my body, but my entire relationship with fitness.",
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
      <section className={`block lg:hidden seamless-section ${theme === 'dark' ? 'soft-sage' : 'soft-blush'} relative overflow-hidden`}>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight font-serif">
              Real <span className="text-emerald-700">Transformations</span>
            </h2>
            <div className="h-2 w-20 bg-emerald-600 rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-700 leading-relaxed font-semibold text-lg sm:text-xl mx-4 sm:mx-8 font-helvetica">
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
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">BEFORE</span>
                        </div>
                      </div>
                      <div className="w-1/2 relative">
                        <img 
                          src={transformation.afterImg}
                          alt={`${transformation.name} after`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                          <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold">AFTER</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Transformation Info */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-stone-50">
                <div className="text-center space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {transformations[mobileCarouselIndex].name}
                  </h3>
                  <div className={`flex justify-center space-x-3 text-sm ${theme === 'dark' ? 'text-stone-300' : 'text-gray-600'} font-helvetica`}>
                    <span className="bg-white px-2 py-1 rounded-full shadow text-xs sm:text-sm">
                      {transformations[mobileCarouselIndex].age} years
                    </span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-sm sm:text-lg font-bold text-emerald-700 font-helvetica">
                      {transformations[mobileCarouselIndex].results}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium font-helvetica">
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
                      mobileCarouselIndex === index ? 'bg-emerald-600 w-4 sm:w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Section - Original Layout */}
      <section className={`hidden lg:block seamless-section ${theme === 'dark' ? 'soft-sage' : 'soft-blush'} relative overflow-hidden`}>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight font-serif">
              Real {' '} <span className="text-emerald-700"> Transformations </span>
            </h2>
            <div className="h-2 w-24 bg-emerald-600 rounded-full"></div>
            <p className="mt-3 text-gray-700 leading-relaxed font-semibold text-xl max-w-2xl font-helvetica">
              Meet the people who took a chance to upgrade themselves
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
                    className="w-full h-80 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg">BEFORE</span>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={transformations[activeTransformation].afterImg}
                    alt={`${transformations[activeTransformation].name} after transformation`}
                    className="w-full h-80 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-dm-sans font-bold shadow-lg">AFTER</span>
                  </div>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="space-y-4 animate-fade-in">
                <div>
                  <h3 className="text-2xl font-dm-sans font-bold text-gray-900 mb-2 font-formom">
                    {transformations[activeTransformation].name}
                  </h3>
                  {/* <p className="text-gray-700 leading-relaxed font-helvetica">
                    {transformations[activeTransformation].age} years • {transformations[activeTransformation].location}
                  </p> */}
                </div>

                <div className="space-y-3">
                  {/* <div className="text-lg font-bold text-emerald-700 font-helvetica">
                    {transformations[activeTransformation].results}
                  </div> */}
                  <div className="text-gray-700 leading-relaxed font-helvetica">
                    Duration: {transformations[activeTransformation].timeframe}
                  </div>
                </div>

                <blockquote className="text-base italic text-gray-700 leading-relaxed font-light border-l-4 border-emerald-600 pl-4 bg-white/50 p-3 rounded-r-lg shadow-md font-helvetica">
                  "{transformations[activeTransformation].testimonial}"
                </blockquote>
                </div>
              </div>
            </div>

            {/* Desktop Transformation Gallery - Compact */}
            <div className="relative max-w-7xl mx-auto">
              {/* Gallery Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-helvetica">
                  More Success Stories
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-full mx-auto"></div>
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
                              soft-blush rounded-xl shadow-lg flex flex-col h-[240px] group
                              ${activeTransformation === actualIndex ? 'ring-3 ring-emerald-600 shadow-xl scale-105' : 'hover:shadow-xl'}`}
                              onClick={() => setActiveTransformation(actualIndex)}
                            >
                              <div className="relative h-[150px] p-2">
                                <div className="grid grid-cols-2 gap-2 h-full">
                                  <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                                    <img 
                                      src={transformation.beforeImg}
                                      alt={`${transformation.name} before`}
                                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-1 left-1">
                                      <span className="bg-red-500 text-white px-1 py-0.5 rounded text-xs font-bold">BEFORE</span>
                                    </div>
                                  </div>
                                  <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                                    <img 
                                      src={transformation.afterImg}
                                      alt={`${transformation.name} after`}
                                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-1 right-1">
                                      <span className="bg-emerald-600 text-white px-1 py-0.5 rounded text-xs font-bold">AFTER</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center p-3 border-t border-gray-100 flex flex-col justify-center h-[90px] space-y-1">
                                <h4 className="font-bold text-gray-900 text-base group-hover:text-emerald-700 transition-colors font-helvetica">
                                  {transformation.name}
                                </h4>
                                {/* <p className="text-xs text-emerald-700 font-semibold font-helvetica">
                                  {transformation.results}
                                </p> */}
                                <p className={`text-xs ${theme === 'dark' ? 'text-stone-400' : 'text-gray-500'} font-helvetica`}>
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
                  className="bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
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
                          ? "w-6 bg-gradient-to-r from-emerald-700 to-emerald-800 shadow-lg" 
                          : "w-2 bg-gray-600 hover:bg-gray-800"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button 
                  className="bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
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
