
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TransformationsSection = () => {
  const transformations = [
    {
      name: "Rajesh K.",
      result: "Lost 13kg, Built Muscle",
      testimonial: "Best online fitness coaching experience! Got jacked transformation in 6 months.",
      location: "Mumbai"
    },
    {
      name: "Priya S.",
      result: "Body Recomposition Success",
      testimonial: "Holistic fitness and mindset approach changed my life completely.",
      location: "Delhi"
    },
    {
      name: "Arjun P.",
      result: "Gained 8kg Muscle",
      testimonial: "Muscle gain and fat loss program delivered incredible results.",
      location: "Bangalore"
    },
    {
      name: "Sneha M.",
      result: "Lost 15kg Fat",
      testimonial: "Personalized workout and nutrition plan made all the difference.",
      location: "Chennai"
    }
  ];

  return (
    <section id="transformations" className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join hundreds who transformed their bodies with our online fitness transformation coaching
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {transformations.map((transformation, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="aspect-[3/4] bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm font-semibold">BEFORE</span>
                      </div>
                      <div className="aspect-[3/4] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400 text-sm font-semibold">AFTER</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{transformation.name}</h3>
                        <div className="text-blue-400 font-medium text-sm">{transformation.result}</div>
                        <div className="text-gray-400 text-xs">{transformation.location}</div>
                      </div>
                      
                      <blockquote className="text-gray-300 italic text-sm">
                        "{transformation.testimonial}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
          <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
        </Carousel>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Transformation Coach Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
