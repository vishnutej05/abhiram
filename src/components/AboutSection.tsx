
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame } from 'lucide-react';

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/J1.jpg",
      title: "Day 0",
      subtitle: "The beginning of everything",
      year: "2019",
      description: "Just a scrawny kid, I was tired, I was scared, but ready for change.",
      icon: Flame,
      color: "from-emerald-600 to-stone-600",
      motivationalText: "One promise: just start."
    },
    {
      id: 2,
      image: "/lovable-uploads/J2.jpg",
      title: "The Battle",
      subtitle: "Where the real work begins",
      year: "2021",
      description: "I'm not going to lie, It is hard. But I promised to put myself first in my life.",
      icon: Zap,
      color: "from-stone-600 to-emerald-600",
      motivationalText: "One day at a time- I said."
    },
    {
      id: 3,
      image: "/lovable-uploads/J3.1.jpg",
      title: "Breakthrough",
      subtitle: "The moment everything clicked",
      year: "2023",
      description: "I had to say 'NO' a lot—good and bad. Truth is, achieving means making sacrifices no one else will see.",
      icon: Target,
      color: "from-emerald-600 to-teal-600",
      motivationalText: "Its Now or Never"
    },
    {
      id: 4,
      image: "/lovable-uploads/J5.png",
      title: "The Result",
      subtitle: "No regrets, only growth",
      year: "2024",
      description: "The transformation complete, the journey continues.",
      icon: Trophy,
      color: "from-teal-600 to-emerald-600",
      motivationalText: "I don't regret any of this"
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
        <div className="mx-auto max-w-2xl lg:text-center pb-10">
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">The <span className='text-emerald-700'>Journey</span></h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Here's how my journey began
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
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
              <div key={stage.id} className="relative mb-24">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className={`w-20 h-20 rounded-full border-4 border-white shadow-xl transition-all duration-700 ${
                    isActive 
                      ? `bg-gradient-to-r ${stage.color} scale-110` 
                      : 'bg-gray-300 scale-90'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent 
                        size={28} 
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
                  <div className={`${isLeft ? 'flex justify-end pr-4' : 'flex justify-start pl-4'}`}>
                    {isLeft ? (
                      // Image on left for odd stages (2019, 2023)
                      <div className={`w-full transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r ${stage.color} mb-6`}>
                          {stage.year}
                        </div>

                        {/* Image Container - Rectangular Shape */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/5]">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Content on left for even stages (2021, 2024)
                      <div className={`w-full transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                          {stage.title}
                        </h3>
                        <h4 className="text-xl font-inter text-gray-600 mb-4 font-helvetica">
                          {stage.subtitle}
                        </h4>
                        <p className="text-lg text-gray-500 mb-6 font-helvetica leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-emerald-50 to-stone-50 p-6 rounded-2xl border-l-6 border-emerald-400">
                          <p className="text-base italic text-gray-700 font-inter font-helvetica leading-relaxed">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className={`${isLeft ? 'flex justify-start pl-4' : 'flex justify-end pr-4'}`}>
                    {isLeft ? (
                      // Content on right for odd stages (2019, 2023)
                      <div className={`w-full transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                          {stage.title}
                        </h3>
                        <h4 className="text-xl font-inter text-gray-600 mb-4 font-helvetica">
                          {stage.subtitle}
                        </h4>
                        <p className="text-lg text-gray-500 mb-6 font-helvetica leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-emerald-50 to-stone-50 p-6 rounded-2xl border-l-6 border-emerald-400">
                          <p className="text-base italic text-gray-700 font-inter font-helvetica leading-relaxed">
                            "{stage.motivationalText}"
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Image on right for even stages (2021, 2024)
                      <div className={`w-full transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        {/* Year Badge */}
                        <div className={`inline-block px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r ${stage.color} mb-6`}>
                          {stage.year}
                        </div>

                        {/* Image Container - Rectangular Shape */}
                        <div className="relative group mb-6">
                          <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[4/5]">
                            <img 
                              src={stage.image}
                              alt={`Abhiram's transformation - ${stage.title}`}
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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


        {/* Final Inspiration */}
        <div className="text-center animate-fade-in">
          <div className="max-w-5xl mx-auto rounded-3xl p-6 text-gray-900">
            <blockquote className="text-5xl font-serif font-light italic leading-relaxed mb-5">
              Don't be special, <br/>
              -Be stubborn.  
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
