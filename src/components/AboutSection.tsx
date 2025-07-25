import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Star, Zap, Target, Trophy, Heart, Flame } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const AboutSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const transformationJourney = [
    {
      id: 1,
      image: "/lovable-uploads/J1.jpg",
      title: "Day Zero",
      subtitle: "The moment everything changed",
      year: "2017",
      description: "Just a scrawny kid, tired and scared, but something inside me knew it was time. No more excuses.",
      icon: Flame,
      color: theme === 'dark' ? "from-amber-gold to-electric-blue" : "from-amber-gold to-strong-green",
      motivationalText: "One promise: just start."
    },
    {
      id: 2,
      image: "/lovable-uploads/J3.jpg",
      title: "The Grind",
      subtitle: "Where legends are forged",
      year: "2019",
      description: "Every rep hurt. Every meal mattered. I chose myself over comfort, discipline over instant gratification.",
      icon: Zap,
      color: theme === 'dark' ? "from-electric-blue to-amber-gold" : "from-strong-green to-amber-gold",
      motivationalText: "One day at a time—that's all it takes."
    },
    {
      id: 3,
      image: "/lovable-uploads/J2.jpg",
      title: "The Breakthrough", 
      subtitle: "When everything clicks",
      year: "2019",
      description: "Saying 'NO' became my superpower. To junk food, to excuses, to settling for less. Growth demands sacrifice.",
      icon: Target,
      color: theme === 'dark' ? "from-amber-gold to-electric-blue" : "from-amber-gold to-strong-green",
      motivationalText: "It's now or never—choose greatness."
    },
    {
      id: 4,
      image: "/lovable-uploads/J4.jpg",
      title: "The Evolution",
      subtitle: "Becoming who I was meant to be",
      year: "2025",
      description: "Not just transformed—evolved. The body changed, but the mind became unbreakable. This is just the beginning.",
      icon: Trophy,
      color: theme === 'dark' ? "from-electric-blue to-amber-gold" : "from-strong-green to-amber-gold",
      motivationalText: "I don't regret any of this—and neither will you."
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
        ? 'bg-gradient-to-br from-black/95 via-zinc-900 to-zinc-900/95' 
        : 'bg-gradient-to-br from-slate-50 via-white to-stone-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center pb-10">
          <h2 className={`font-serif text-4xl font-bold tracking-tight sm:text-5xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            The <span className={theme === 'dark' ? "text-electric-blue" : "text-strong-green"}>Journey</span>
          </h2>
          <p className={`mt-6 text-xl leading-8 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
            Here's how my journey began
          </p>
        </div>

        {/* Timeline Container */}
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
              <div key={stage.id} className="relative mb-24">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className={`w-20 h-20 rounded-full 
                    ${theme === 'dark' 
                      ? 'border-4 border-zinc-800/80' 
                      : 'border-4 border-gray-400/90' // Darker border for better visibility
                    } shadow-xl transition-all duration-700 hover:shadow-2xl ${
                    isActive 
                      ? `bg-gradient-to-r ${stage.color} scale-110 shadow-[0_0_15px_rgba(0,0,0,0.3)]` 
                      : theme === 'dark'
                        ? 'bg-gradient-to-br from-zinc-800 to-zinc-700 scale-90'
                        : `bg-gradient-to-br ${stage.color} scale-90` // Darker inactive background
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
                        {/* Year Badge - Enhanced for better visibility in light theme */}
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
                      // Content on left for even stages (2021, 2024)
                      <div className={`w-full transform transition-all duration-1000 ${
                        isActive 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-50'
                      }`}>
                        <h3 className={`text-4xl font-serif font-bold mb-4 ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                          {stage.title}
                        </h3>
                        <h4 className={`text-xl font-inter ${theme === 'dark' ? 'text-stone-300' : 'text-gray-600'} mb-4 font-helvetica`}>
                          {stage.subtitle}
                        </h4>
                        <p className={`text-lg ${theme === 'dark' ? 'text-stone-400' : 'text-gray-500'} mb-6 font-helvetica leading-relaxed`}>
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className={`${
                          theme === 'dark' 
                            ? 'bg-gradient-to-r from-zinc-800 to-zinc-800/90 border-l-4 border-electric-blue' 
                            : 'bg-gradient-to-r from-white to-slate-100 border-l-4 border-strong-green/80 shadow-md'
                        } p-6 rounded-2xl`}>
                          <p className={`text-base italic ${theme === 'dark' ? 'text-white' : 'text-gray-700'} font-helvetica leading-relaxed`}>
                            <span className="text-electric-blue font-bold">"</span>{stage.motivationalText}<span className="text-electric-blue font-bold">"</span>
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
                        <h3 className={`text-4xl font-serif font-bold mb-4 ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                          {stage.title}
                        </h3>
                        <h4 className={`text-xl font-inter ${theme === 'dark' ? 'text-stone-300' : 'text-gray-600'} mb-4 font-helvetica`}>
                          {stage.subtitle}
                        </h4>
                        <p className={`text-lg ${theme === 'dark' ? 'text-stone-400' : 'text-gray-500'} mb-6 font-helvetica leading-relaxed`}>
                          {stage.description}
                        </p>

                        {/* Motivational Quote */}
                        <div className={`${
                          theme === 'dark' 
                            ? 'bg-gradient-to-r from-zinc-800 to-zinc-800/90 border-l-4 border-electric-blue' 
                            : 'bg-gradient-to-r from-white to-slate-100 border-l-4 border-strong-green/80 shadow-md'
                        } p-6 rounded-2xl`}>
                          <p className={`text-base italic ${theme === 'dark' ? 'text-white' : 'text-gray-700'} font-helvetica leading-relaxed`}>
                            <span className="text-electric-blue font-bold">"</span>{stage.motivationalText}<span className="text-electric-blue font-bold">"</span>
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
                        {/* Year Badge - Enhanced for better visibility in light theme */}
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


        {/* Final Inspiration */}
        <div className="text-center animate-fade-in mt-16">
          <div className={`max-w-5xl mx-auto rounded-3xl p-8 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-black to-zinc-900/90 shadow-xl border border-amber-gold/20' 
              : 'bg-gradient-to-r from-white to-slate-100 shadow-lg border border-strong-green/20'
          }`}>
            <blockquote className={`text-5xl font-serif font-light italic leading-relaxed mb-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Don't be special, <br/>
              <span className={theme === 'dark' ? 'text-amber-gold' : 'text-strong-green'}>-Be stubborn.</span>
            </blockquote>
            <cite className={`text-2xl font-inter opacity-90 font-helvetica ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>— Abhiram Nair</cite>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
