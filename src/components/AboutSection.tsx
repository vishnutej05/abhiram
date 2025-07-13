
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame } from 'lucide-react';

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/d6cb65c9-c5ed-4d79-a325-366956fdbd1a.png",
      title: "The Spark",
      subtitle: "Every legend begins with a single decision",
      year: "2019",
      description: "Started with a dream and determination",
      icon: Flame,
      color: "from-emerald-600 to-stone-600",
      motivationalText: "The journey of a thousand miles begins with a single step"
    },
    {
      id: 2,
      image: "/lovable-uploads/a2120b02-0b55-4ff2-ac59-a3ef49df1ed7.png",
      title: "The Grind",
      subtitle: "Where discipline meets dedication",
      year: "2021",
      description: "Consistency became the foundation",
      icon: Zap,
      color: "from-stone-600 to-emerald-600",
      motivationalText: "Success is the sum of small efforts repeated daily"
    },
    {
      id: 3,
      image: "/lovable-uploads/dd520506-8312-4484-a9fb-754cbb9305cc.png",
      title: "The Transformation",
      subtitle: "From vision to reality",
      year: "2024",
      description: "Achieved what once seemed impossible",
      icon: Trophy,
      color: "from-emerald-600 to-teal-600",
      motivationalText: "Your body can stand almost anything. It's your mind you have to convince"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        const scrolled = Math.max(0, windowHeight - rect.top);
        const progress = Math.min(scrolled / sectionHeight, 1);
        setScrollProgress(progress);
        
        // Update active stage based on scroll progress
        const stageIndex = Math.floor(progress * transformationJourney.length);
        setActiveStage(Math.min(stageIndex, transformationJourney.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transformationJourney.length]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            With years of experience in fitness and nutrition, I&apos;ve helped hundreds of clients achieve their dream
            physique and maintain it.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-emerald-600 via-emerald-700 to-stone-600 rounded-full transition-all duration-1000 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Journey Stages */}
          {transformationJourney.map((stage, index) => {
            const IconComponent = stage.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeStage >= index;
            
            return (
              <div key={stage.id} className="relative mb-32">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full border-4 border-white shadow-xl transition-all duration-700 ${
                    isActive 
                      ? `bg-gradient-to-r ${stage.color} scale-110` 
                      : 'bg-gray-300 scale-90'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent 
                        size={24} 
                        className={`transition-all duration-500 ${
                          isActive ? 'text-white' : 'text-gray-500'
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                {/* Content Layout - Image and Text on opposite sides */}
                <div className="grid grid-cols-2 gap-16 items-center">
                  {/* Left Side */}
                  <div className={`${isLeft ? 'flex justify-end' : 'flex justify-start'}`}>
                    {isLeft ? (
                      // Image on left for odd stages (2019, 2024)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-6 py-3 rounded-full text-base font-bold text-white bg-gradient-to-r ${stage.color} mb-4`}>
                          {stage.year}
                        </div>

                        {/* Image Container */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Floating Number */}
                          <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                            <span className="text-3xl font-bold text-gray-800">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Content on left for even stages (2021)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-4xl font-serif font-bold text-gray-800 mb-3">
                          {stage.title}
                        </h3>
                        <h4 className="text-xl font-inter text-gray-600 mb-4 font-helvetica">
                          {stage.subtitle}
                        </h4>
                        <p className="text-lg text-gray-500 mb-6 font-helvetica">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-emerald-50 to-stone-50 p-6 rounded-lg border-l-4 border-emerald-400">
                          <p className="text-base italic text-gray-700 font-inter font-helvetica">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className={`${isLeft ? 'flex justify-start' : 'flex justify-end'}`}>
                    {isLeft ? (
                      // Content on right for odd stages (2019, 2024)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-4xl font-serif font-bold text-gray-800 mb-3">
                          {stage.title}
                        </h3>
                        <h4 className="text-xl font-inter text-gray-600 mb-4 font-helvetica">
                          {stage.subtitle}
                        </h4>
                        <p className="text-lg text-gray-500 mb-6 font-helvetica">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-emerald-50 to-stone-50 p-6 rounded-lg border-l-4 border-emerald-400">
                          <p className="text-base italic text-gray-700 font-inter font-helvetica">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Image on right for even stages (2021)
                      <div className={`w-full max-w-md transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-6 py-3 rounded-full text-base font-bold text-white bg-gradient-to-r ${stage.color} mb-4`}>
                          {stage.year}
                        </div>

                        {/* Image Container */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Floating Number */}
                          <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                            <span className="text-3xl font-bold text-gray-800">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Section */}
        {/* <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Lives Transformed", icon: Heart },
              { number: "5+", label: "Years of Excellence", icon: Star },
              { number: "100%", label: "Dedication", icon: Trophy }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-dm-sans font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-inter">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Final Inspiration */}
        <div className="mt-6 text-center animate-fade-in">
          <div className="max-w-5xl mx-auto rounded-3xl p-12 text-gray-900">
            <blockquote className="text-5xl font-serif font-light italic leading-relaxed mb-8">
              "I wasn't born with a perfect physique. Every muscle, every achievement, every transformation story you see today was built through consistency, discipline, and an unwavering belief in the process."
            </blockquote>
            <cite className="text-2xl font-inter opacity-90 font-helvetica">— Abhiram Nair</cite>
            
            {/* <div className="mt-8 flex justify-center">
              <ChevronDown className="w-8 h-8 animate-bounnpmce" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
