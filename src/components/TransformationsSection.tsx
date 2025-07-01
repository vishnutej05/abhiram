
import { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TransformationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const transformations = [
    {
      name: "Rajesh K.",
      result: "Lost 13kg, Built Muscle",
      testimonial: "Best online fitness coaching experience! Got jacked transformation in 6 months with personalized workout and nutrition plan.",
      location: "Mumbai",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    },
    {
      name: "Priya S.",
      result: "Body Recomposition Success",
      testimonial: "Holistic fitness and mindset approach changed my life completely. Amazing transformation coach journey!",
      location: "Delhi",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    },
    {
      name: "Arjun P.",
      result: "Gained 8kg Muscle",
      testimonial: "Muscle gain and fat loss program delivered incredible results. Best fitness transformation journey ever!",
      location: "Bangalore",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    },
    {
      name: "Sneha M.",
      result: "Lost 15kg Fat",
      testimonial: "Personalized workout and nutrition plan made all the difference in my body recomposition goals.",
      location: "Chennai",
      beforeImage: "placeholder",
      afterImage: "placeholder"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Real Results - Online Fitness Transformation Coach India";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play for mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % transformations.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section ref={sectionRef} id="transformations" className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real{' '}
            <span className="text-orange-500">
              Results
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Join hundreds who transformed their bodies with our online fitness transformation coaching
          </p>
        </div>
        
        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {transformations.map((transformation, index) => (
                <CarouselItem key={index}>
                  <div className="bg-gray-800 p-12 rounded-3xl border border-gray-700 hover:border-orange-500/50 transition-all duration-500 shadow-2xl">
                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                      <div className="aspect-[3/4] bg-gray-700 rounded-2xl flex items-center justify-center shadow-xl">
                        <div className="text-center">
                          <span className="text-gray-400 text-lg font-semibold block mb-2">BEFORE</span>
                          <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto"></div>
                        </div>
                      </div>
                      <div className="aspect-[3/4] bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl flex items-center justify-center shadow-xl">
                        <div className="text-center">
                          <span className="text-orange-400 text-lg font-semibold block mb-2">AFTER</span>
                          <div className="w-32 h-32 bg-orange-600/30 rounded-full mx-auto"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{transformation.name}</h3>
                        <div className="text-orange-400 font-semibold text-lg mb-1">{transformation.result}</div>
                        <div className="text-gray-400">{transformation.location}</div>
                      </div>
                      
                      <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                        "{transformation.testimonial}"
                      </blockquote>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-orange-600 hover:border-orange-600 -left-16" />
            <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-orange-600 hover:border-orange-600 -right-16" />
          </Carousel>
        </div>

        {/* Mobile Single Card with Auto-play */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="aspect-[3/4] bg-gray-700 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-semibold">BEFORE</span>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-orange-400 text-sm font-semibold">AFTER</span>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{transformations[currentIndex].name}</h3>
                  <div className="text-orange-400 font-semibold">{transformations[currentIndex].result}</div>
                  <div className="text-gray-400 text-sm">{transformations[currentIndex].location}</div>
                </div>
                
                <blockquote className="text-gray-300 italic text-sm">
                  "{transformations[currentIndex].testimonial}"
                </blockquote>
              </div>
            </div>
            
            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Transformation Coach Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
