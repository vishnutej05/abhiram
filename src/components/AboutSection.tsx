import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';
import { useIsMobile } from '../hooks/use-mobile';

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/J1.jpg",
      title: "Day Zero",
      year: "2017",
      description: "Just a scrawny kid, tired and scared, but something inside me knew it was time. No more excuses.",
      icon: Flame,
      color: theme === 'dark' ? "from-amber-gold to-electric-blue" : "from-amber-gold to-strong-green"
    },
    {
      id: 2,
      image: "/lovable-uploads/J3.jpg",
      title: "The Grind",
      year: "2019",
      description: "Every rep hurt. Every meal mattered. I chose myself over comfort, discipline over instant gratification.",
      icon: Zap,
      color: theme === 'dark' ? "from-electric-blue to-amber-gold" : "from-strong-green to-amber-gold"
    },
    // {
    //   id: 3,
    //   image: "/lovable-uploads/J2.jpg",
    //   title: "The Breakthrough", 
    //   year: "2021",
    //   description: "Saying 'NO' became my superpower. To junk food, to excuses, to settling for less. Growth demands sacrifice.",
    //   icon: Target,
    //   color: theme === 'dark' ? "from-amber-gold to-electric-blue" : "from-amber-gold to-strong-green"
    // },
    {
      id: 4,
      image: "/lovable-uploads/J4.jpg",
      title: "The Evolution",
      year: "2025",
      description: "Not just transformed—evolved. The body changed, but the mind became unbreakable. This is just the beginning.",
      icon: Trophy,
      color: theme === 'dark' ? "from-electric-blue to-amber-gold" : "from-strong-green to-amber-gold"
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
    <section ref={sectionRef} className={`relative min-h-screen overflow-hidden ${
      theme === 'dark' 
        ? 'bg-zinc-900 bg-opacity-95' 
        : 'bg-gradient-to-br from-slate-50 via-white to-stone-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center pb-10">
          <h2 className={`capitalize font-helvetica text-4xl font-bold tracking-tight sm:text-5xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Here's how my journey<span className={theme === 'dark' ? "text-electric-blue" : "text-strong-green"}> began</span>
          </h2>
          {/* <p className={`mt-6 text-xl leading-8 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
            Here's how my journey began
          </p> */}
        </div>

        {/* Timeline Container */}
        {isMobile ? (
          // Mobile Layout - Vertical Card Stack
          <div className="space-y-6">
            {transformationJourney.map((stage, index) => {
              const IconComponent = stage.icon;
              const isActive = activeStage >= index;
              
              return (
                <React.Fragment key={stage.id}>
                  <div 
                    className={`${
                      theme === 'dark' 
                        ? 'bg-zinc-800 border border-zinc-700' 
                        : 'bg-white border border-gray-200 shadow-md'
                    } rounded-xl overflow-hidden transition-all duration-700 ${
                      isActive ? 'scale-[1.02] shadow-lg' : 'scale-100'
                    }`}
                  >
                    <div className="relative">
                      {/* Full-size Image */}
                      <div className="relative w-full overflow-hidden" style={{height: "180px"}}>
                        <img 
                          src={stage.image}
                          alt={`Abhiram's transformation - ${stage.title}`}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        
                        {/* Year Badge as a small overlay on image */}
                        <div className="absolute top-3 right-3 z-10">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            theme === 'dark' 
                              ? `bg-gradient-to-r ${stage.color} text-white` 
                              : `bg-gradient-to-r ${stage.color} text-black`
                          } shadow-lg font-bold text-xs`}>
                            {stage.year}
                          </div>
                        </div>
                        
                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <div className="flex items-center">
                            <IconComponent 
                              className={`w-4 h-4 mr-2 ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}
                              style={{ color: theme === 'dark' ? 'hsl(142, 71%, 50%)' : '' }}
                            />
                            <h3 className="text-lg font-formom font-bold text-white">
                              {stage.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content - More compact */}
                    <div className="p-3">
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                      } mb-3 font-helvetica leading-relaxed font-medium`}>
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Add journey scroll indicator after first card with improved styling */}
                  {/* {index === 0 && (
                    <div className="flex flex-col items-center py-3 my-0">
                      <div className={`flex items-center gap-2 px-5 py-2 rounded-full ${
                        theme === 'dark'
                          ? 'bg-zinc-900/90 border border-electric-blue/30 shadow-md'
                          : 'bg-white shadow-sm border border-electric-blue/20'
                      }`}>
                        <p className="text-xs text-electric-blue font-medium">
                          Keep scrolling for more
                        </p>
                        <ChevronDown className="text-electric-blue w-4 h-4 animate-bounce" />
                      </div>
                    </div>
                  )} */}
                  
                  {/* Reduced spacing and added a thin line divider between cards */}
                  {index < transformationJourney.length - 1 && (
                    <div className="flex justify-center items-center py-0">
                      <div className={`w-full h-px mx-6 ${
                        theme === 'dark'
                          ? 'bg-electric-blue/40'
                          : 'bg-electric-blue/30'
                      } rounded-full`} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          // Desktop Layout - Timeline
          <div className="relative max-w-7xl mx-auto">
            {/* Central Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'} rounded-full`}>
              <div 
                className="w-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  height: `${scrollProgress * 100}%`,
                  background: theme === 'dark' 
                    ? 'linear-gradient(to bottom, hsl(43, 96%, 65%), hsl(200, 100%, 70%), hsl(43, 96%, 65%))' 
                    : 'linear-gradient(to bottom, hsl(43, 96%, 58%), hsl(142, 71%, 30%), hsl(43, 96%, 58%))'
                }}
              />
            </div>

            {/* Journey Stages */}
            {transformationJourney.map((stage, index) => {
              const IconComponent = stage.icon;
              const isLeft = index % 2 === 0;
              const isActive = activeStage >= index;
              
              return (
                <div key={stage.id} className="relative mb-5">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full 
                      ${theme === 'dark' 
                        ? 'border-4 border-zinc-800/80' 
                        : 'border-4 border-gray-400/90'
                      } shadow-xl transition-all duration-700 hover:shadow-2xl ${
                      isActive 
                        ? `bg-gradient-to-r ${stage.color} scale-110 shadow-[0_0_15px_rgba(0,0,0,0.3)]` 
                        : theme === 'dark'
                          ? 'bg-gradient-to-br from-zinc-800 to-zinc-700 scale-90'
                          : `bg-gradient-to-br ${stage.color} scale-90`
                    }`}>
                      {/* Inner ring for added depth */}
                      <div className={`absolute inset-1 rounded-full bg-opacity-20 backdrop-blur-sm ${
                        theme === 'light' && !isActive ? 'border border-slate-300' : ''
                      }`}></div>
                      
                      {/* Icon container */}
                      <div className="w-full h-full flex items-center justify-center relative z-10">
                        <IconComponent 
                          size={40} 
                          strokeWidth={2.5}
                          fill={isActive ? "transparent" : (theme === 'dark' ? "rgba(100,200,255,0.1)" : "rgba(20,130,80,0.2)")}
                          className={`${
                            isActive 
                              ? `${theme === 'dark' ? 'text-white' : 'text-amber-gold'} filter drop-shadow-md` 
                              : theme === 'dark'
                                ? 'text-electric-blue filter drop-shadow-[0_0_3px_rgba(100,200,255,0.5)]' 
                                : 'text-strong-green/90 filter drop-shadow-[0_0_3px_rgba(20,130,80,0.8)]'
                          } transition-all duration-500`} 
                        />
                      </div>
                      
                      {/* Subtle glow effect for active nodes */}
                      {isActive && (
                        <div className={`absolute -inset-2 rounded-full opacity-20 blur-md ${
                          theme === 'dark'
                            ? 'bg-electric-blue'
                            : 'bg-strong-green'
                        }`}></div>
                      )}
                    </div>
                  </div>

                  {/* Content Layout - Image and Text on opposite sides */}
                  <div className="grid grid-cols-2 gap-16 items-center mb-3">
                    {/* Left Side */}
                    <div className={`${isLeft ? 'flex justify-end pr-4' : 'flex justify-start pl-4'}`}>
                      {isLeft ? (
                        // Image on left for odd stages
                        <div className={`w-full transform transition-all duration-1000 ${
                          isActive 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-50'
                        }`}>
                          {/* Year Badge */}
                          <div className={`inline-block px-8 py-4 rounded-full text-lg font-bold shadow-md ${
                            theme === 'dark' 
                              ? index % 2 === 0 
                                ? 'bg-gradient-to-r from-amber-gold to-electric-blue/90 border-2 border-zinc-700' 
                                : 'bg-gradient-to-r from-electric-blue to-amber-gold/90 border-2 border-zinc-700'
                              : index % 2 === 0 
                                ? 'bg-gradient-to-r from-amber-gold to-strong-green border border-gray-300' 
                                : 'bg-gradient-to-r from-strong-green to-amber-gold border border-gray-300'
                          } mb-6`}>
                            {stage.year}
                          </div>

                          {/* Image Container */}
                          <div className="relative group mb-6">
                            <div className="overflow-hidden rounded-3xl shadow-2xl h-96 w-full">
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
                        // Content on left for even stages
                        <div className={`w-full transform transition-all duration-1000 ${
                          isActive 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-50'
                        }`}>
                          <h3 className={`text-4xl font-helvetica font-bold mb-4 ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                            {stage.title}
                          </h3>
                          <p className={`text-lg ${theme === 'dark' ? 'text-stone-400' : 'text-gray-500'} mb-6 font-helvetica leading-relaxed`}>
                            {stage.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right Side */}
                    <div className={`${isLeft ? 'flex justify-start pl-4' : 'flex justify-end pr-4'}`}>
                      {isLeft ? (
                        // Content on right for odd stages
                        <div className={`w-full transform transition-all duration-1000 ${
                          isActive 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-50'
                        }`}>
                          <h3 className={`text-4xl font-helvetica font-bold mb-4 ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                            {stage.title}
                          </h3>
                          <p className={`text-lg ${theme === 'dark' ? 'text-stone-400' : 'text-gray-500'} mb-6 font-helvetica leading-relaxed`}>
                            {stage.description}
                          </p>
                        </div>
                      ) : (
                        // Image on right for even stages
                        <div className={`w-full transform transition-all duration-1000 ${
                          isActive 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-50'
                        }`}>
                          {/* Year Badge */}
                          <div className={`inline-block px-8 py-4 rounded-full text-lg font-bold shadow-md ${
                            theme === 'dark' 
                              ? index % 2 === 0 
                                ? 'bg-gradient-to-r from-amber-gold to-electric-blue/90 border-2 border-zinc-700' 
                                : 'bg-gradient-to-r from-electric-blue to-amber-gold/90 border-2 border-zinc-700'
                              : index % 2 === 0 
                                ? 'bg-gradient-to-r from-amber-gold to-strong-green border border-gray-300' 
                                : 'bg-gradient-to-r from-strong-green to-amber-gold border border-gray-300'
                          } mb-6`}>
                            {stage.year}
                          </div>

                          {/* Image Container */}
                          <div className="relative group mb-6">
                            <div className="overflow-hidden rounded-3xl shadow-2xl h-96 w-full">
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
        )}


        {/* Final Inspiration */}
        <div className="text-center animate-fade-in pt-20 max-w-5xl mx-auto">
            <blockquote className={`text-4xl font-helvetica font-light leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Don't be special,
              <span className={theme === 'dark' ? 'block italic text-electric-blue mt-0' : 'block italic text-strong-green mt-0' }>-Be stubborn.</span>
            </blockquote>
            <cite className={`text-xl opacity-90 font-helvetica ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>— Abhiram Nair</cite>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
