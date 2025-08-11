import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/use-theme';

const words = [
  { text: 'RESPECT +', color: 'text-green-400' },
  { text: 'CONFIDENCE +', color: 'text-amber-400' },
  { text: 'FITNESS +', color: 'text-blue-400' },
  { text: 'HAPPINESS +', color: 'text-pink-400' },
];

const AnimatedHeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 600); // Match fade-out duration
    }, 2000); // Word display duration
    
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];

  return (
    <div className="flex items-start text-left">
      {/* Mobile view (devices smaller than laptop) */}
      <div className="flex flex-wrap items-center md:hidden">
        {/* Animated word container with fixed height */}
        <div 
          ref={textContainerRef}
          className="relative h-10 min-w-[150px]"
        >
          <div 
            className={`absolute inset-0 flex items-center justify-start font-bold text-lg transition-all duration-600 
              ${isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}
          >
            <span className={`${currentWord.color} font-extrabold`}>
              {currentWord.text}
            </span>
          </div>
        </div>
        
        {/* Equals and BETTER YOU aligned for mobile */}
        <div className="flex items-center">
          <span className={`font-bold text-lg mx-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            =
          </span>
          
          <span className="font-bold text-lg text-white">
            BETTER YOU
          </span>
        </div>
      </div>

      {/* Desktop view (laptop and larger) */}
      <div className="hidden md:block">
        <div className="flex items-center">
          {/* Animated word container */}
          <div className="relative h-10 w-52">
            <div 
              className={`absolute inset-0 flex items-center justify-center md:justify-start font-bold text-2xl transition-all duration-600 
                ${isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}
            >
              <span className={`${currentWord.color} font-extrabold`}>
                {currentWord.text}
              </span>
            </div>
          </div>
          
          {/* Equals sign */}
          <div className="font-bold text-2xl">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-white'}`}>=</span>
          </div>
          
          {/* BETTER YOU with pulsing effect */}
          <div className={`font-bold text-2xl text-white ml-2`}>
            BETTER YOU
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroText;