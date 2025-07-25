import '../styles/features-animation.css';
import { useTheme } from '../hooks/use-theme';

const FeaturesSection = () => {
  const { theme } = useTheme();
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
    <div id="features">
      <>
        {/* Mobile & Tablet Section - Completely Separate */}
        <section className="lg:hidden seamless-section soft-lavender relative pt-2 flex flex-col">
        {/* Mobile Background Image */}
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('/lovable-uploads/features 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div> */}
        
        <div className="w-full mx-auto relative z-10 flex flex-col flex-1">
          {/* Mobile Header Section - Simplified */}
          <div className="text-center px-4 sm:px-8 py-6 animate-fade-in">
            <h2 className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Everything you need to <span className="text-electric-blue-500">transform</span>
            </h2>
            <p className={`mt-6 text-lg leading-8 ${theme === 'dark' ? 'text-white' : 'text-muted-foreground'}`}>
              Get access to everything you need to transform your body and mind. From personalized workout plans to nutrition
              guidance, we&apos;ve got you covered.
            </p>
          </div>
          
          {/* Mobile Feature Cards - Spacious Design */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8 pb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[120px] sm:min-h-[140px] flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl mb-3 text-center">{feature.icon}</div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 text-center leading-tight font-serif">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Section - Completely Separate */}
      <section className="hidden lg:flex seamless-section soft-lavender relative pt-10 flex-col">
        {/* Desktop Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/features 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: '',
          }}
        ></div>
        
        <div className="w-full mx-auto relative z-10 flex flex-col flex-1">
          {/* Desktop Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-center animate-fade-in" style={{ minHeight: 0, marginBottom: 0 }}>
            <div className="hidden md:block w-1/2"></div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-16 md:pl-10 py-8">
              <h2 className="text-4xl lg:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4 leading-tight text-center font-serif">
                What You
                <span className="text-electric-blue-600"> Get</span>
              </h2>

              <div className="h-2 w-24 bg-electric-blue-600 rounded-full ml-2"></div>

              <div className="ml-2 text-lg text-gray-700 leading-relaxed font-semibold max-w-3xl text-left space-y-2 mt-4 font-helvetica">
                <p>Unlock your full potential with support tailored to your unique goals. Here's what you'll get:</p>
                
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                  <li><span className="text-emerald-700 font-bold">Personalized fitness programs</span> based on your goals and lifestyle</li>
                  <li><span className="text-emerald-700 font-bold">Expert nutrition guidance</span> for sustainable health and performance</li>
                  <li><span className="text-emerald-700 font-bold">Proven workout plans</span> designed to drive real, lasting results</li>
                  <li><span className="text-emerald-700 font-bold">Sustainable fat loss</span> and <span className="text-emerald-700 font-bold">muscle gain</span> strategies that work</li>
                  <li>A <span className="text-emerald-700 font-bold">healthier lifestyle</span> backed by coaching and science</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Desktop Continuous Scrolling Animation */}
          <div className="overflow-hidden p-3 pb-5 font-helvetica ">
            <div className="flex animate-slide">
              {/* First set of feature cards */}
              {features.map((feature, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4 min-w-[350px]">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-600'}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {features.map((feature, index) => (
                <div key={`duplicate-${index}`} className="w-1/3 flex-shrink-0 px-4 min-w-[350px]">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-600'}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </>
    </div>
  );
};

export default FeaturesSection;
