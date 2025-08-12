import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/use-theme';

const words = [
  { text: '+ RESPECT', color: 'text-strong-green' },
  { text: '+ CONFIDENCE', color: 'text-strong-green' },
  { text: '+ FITNESS', color: 'text-strong-green' },
  { text: '+ HAPPINESS', color: 'text-strong-green' },
];

const AnimatedHeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Handle word rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
        
        // Trigger pulse effect when new word appears
        setPulseEffect(true);
        setTimeout(() => setPulseEffect(false), 800);
      }, 600);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];

  return (
    <div className="flex flex-col space-y-4">
      {/* Mobile view (devices smaller than laptop) */}
      <div className="md:hidden">
        {/* Animated word container with highlight effect */}
        <div 
          ref={textContainerRef}
          className="relative h-10 min-w-[200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`absolute inset-0 flex items-center justify-start font-bold text-lg transition-all duration-500 
              ${isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}
          >
            <div className="relative group">
              <span 
                className={`${currentWord.color} font-extrabold relative z-10 
                  ${pulseEffect ? 'scale-110' : 'scale-100'} 
                  ${isHovered ? 'scale-105' : ''} 
                  transition-all duration-300`}
              >
                {currentWord.text}
              </span>
              
              {/* Highlight glow effect */}
              <div className={`absolute -inset-1 rounded-md 
                ${theme === 'dark' 
                  ? `bg-strong-green/20 ${isHovered ? 'bg-strong-green/40' : ''}` 
                  : `bg-strong-green/15 ${isHovered ? 'bg-strong-green/30' : ''}`
                } 
                blur-sm z-0 
                ${pulseEffect || isHovered ? 'opacity-100' : 'opacity-0'} 
                transition-all duration-500`}></div>
            </div>
          </div>
        </div>
        
        {/* Equals and BETTER YOU with shimmer effect */}
        <div 
          className="flex items-center mt-3 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-white'} relative 
            ${isHovered ? 'scale-105' : ''} transition-transform duration-300`}>
            =
          </span>
          
          <div className="relative ml-2 overflow-hidden">
            <span className={`font-bold text-lg text-white relative z-10 
              ${isHovered ? 'scale-105' : ''} transition-all duration-300`}>
              BETTER YOU
            </span>
            
            {/* Animated shimmer effect */}
            <div className={`absolute inset-0 w-[200%] -translate-x-full bg-gradient-to-r 
              from-transparent 
              via-${isHovered ? 'white/40' : 'white/20'} 
              to-transparent 
              animate-shimmer-slow z-0`}></div>
          </div>
        </div>
      </div>

      {/* Desktop view (laptop and larger) */}
      <div className="hidden md:flex flex-col space-y-2">
        {/* Animated word container with enhanced effects */}
        <div 
          className="relative h-10 min-w-[200px]" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`absolute inset-0 flex items-center justify-start font-bold text-2xl transition-all duration-500 
              ${isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}
          >
            <div className="relative">
              <span 
                className={`${currentWord.color} font-extrabold relative z-10 
                  ${pulseEffect ? 'scale-110' : 'scale-100'} 
                  ${isHovered ? 'scale-105' : ''} 
                  transition-all duration-300`}
              >
                {currentWord.text}
              </span>
            </div>
          </div>
        </div>
        
        {/* Equals sign and BETTER YOU with enhanced effects */}
        <div 
          className="flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-white'} relative
            ${isHovered ? 'scale-105' : ''} transition-transform duration-300`}>
            =
          </span>
          
          <div className="relative ml-2 overflow-hidden">
            <span className={`font-bold text-2xl text-white relative z-10
              ${isHovered ? 'scale-105' : ''} transition-all duration-300`}>
              BETTER YOU
            </span>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroText;