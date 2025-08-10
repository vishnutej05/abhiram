import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/use-theme';

const words = [
  { text: 'RESPECT', color: 'text-green-400' },
  { text: 'CONFIDENCE', color: 'text-amber-400' },
  { text: 'HEALTH', color: 'text-blue-400' },
  { text: 'HAPPINESS', color: 'text-pink-400' }
];

const AnimatedHeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2">
      {/* Animated word container */}
      <div className="relative h-10 w-44">
        <div 
          className={`absolute inset-0 flex items-center justify-center md:justify-start font-bold text-lg md:text-2xl transition-all duration-600 
            ${isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}
        >
          <span className={`${currentWord.color} font-extrabold`}>
            {currentWord.text}
          </span>
        </div>
      </div>
      
      {/* Equals sign */}
      <div className="font-bold text-lg md:text-2xl">
        <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>=</span>
      </div>
      
      {/* BETTER YOU with pulsing effect - now with solid white color */}
      <div className={`font-bold text-lg md:text-2xl text-white animate-pulse-slow`}>
        BETTER YOU
      </div>
    </div>
  );
};

export default AnimatedHeroText;