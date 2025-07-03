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
    <section id="features" className="seamless-section soft-blush relative pt-10 flex flex-col">
      {/* Background Image - Adjusted positioning */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/features 1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: '',
        }}
      ></div>
      
      <div className="w-full mx-auto relative z-10 flex flex-col flex-1">
        {/* Text aligned left, reduced height */}
        <div className="flex flex-col md:flex-row items-center md:items-center animate-fade-in" style={{ minHeight: 0, marginBottom: 0 }}>
          <div className="hidden md:block w-1/2"></div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-16 md:pl-10 py-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight text-center">
              What You Get
            </h2>

            <div className="h-2 w-24 bg-orange-400 rounded-full ml-2"></div>

            <div className="ml-2 text-lg text-gray-700 leading-relaxed font-semibold  max-w-3xl text-left space-y-2 mt-4">
              
              <p>Unlock your full potential with support tailored to your unique goals. Here's what you'll get:</p>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><span className=" text-coral-500 font-bold">Personalized fitness programs</span> based on your goals and lifestyle</li>
                <li><span className=" text-coral-500 font-bold">Expert nutrition guidance</span> for sustainable health and performance</li>
                <li><span className=" text-coral-500 font-bold">Proven workout plans</span> designed to drive real, lasting results</li>
                <li><span className=" text-coral-500 font-bold">Sustainable fat loss</span> and <span className=" text-coral-500 font-bold">muscle gain</span> strategies that work</li>
                <li>A <span className=" text-coral-500 font-bold">healthier lifestyle</span> backed by coaching and science</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Desktop View - Continuous Scrolling Animation */}
        <div className="hidden md:block overflow-hidden p-3  pb-5">
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
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto" style={{ marginBottom: 0, paddingBottom: 0 }}>
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
