import { Instagram, ExternalLink, Heart, RefreshCw } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useInstagramPosts } from '../hooks/useInstagramPosts';
import { useTheme } from '../hooks/use-theme';

const InstagramSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { posts, loading, error, refreshPosts, isConfigured } = useInstagramPosts();
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Follow The Journey - Online Fitness Coach India";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback posts when API is not available
  const fallbackPosts = [
    { 
      id: 'fallback_1', 
      type: 'transformation', 
      label: 'Before & After',
      imageUrl: '/instagram/transformation.jpg',
      caption: 'Amazing transformation results from our fitness coaching program!',
      likes: '1.2K',
      postUrl: 'https://www.instagram.com/coachpotate/'
    },
    { 
      id: 'fallback_2', 
      type: 'workout', 
      label: 'Workout Tips',
      imageUrl: '/instagram/workout.jpg',
      caption: 'Daily workout motivation and tips for better fitness results.',
      likes: '856',
      postUrl: 'https://www.instagram.com/coachpotate/'
    },
    { 
      id: 'fallback_3', 
      type: 'nutrition', 
      label: 'Nutrition Guide',
      imageUrl: '/instagram/nutrition.jpg',
      caption: 'Healthy meal prep ideas for sustainable weight loss.',
      likes: '943',
      postUrl: 'https://www.instagram.com/coachpotate/'
    },
    { 
      id: 'fallback_4', 
      type: 'motivation', 
      label: 'Daily Motivation',
      imageUrl: '/instagram/motivation.jpg',
      caption: 'Stay motivated on your fitness journey with daily inspiration.',
      likes: '721',
      postUrl: 'https://www.instagram.com/coachpotate/'
    }
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  const handlePostClick = (postUrl: string) => {
    window.open(postUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="instagram">
      {/* Mobile Section - Completely Separate */}
      <section 
        ref={sectionRef} 
        className={`block lg:hidden seamless-section ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-zinc-900 to-zinc-800' 
            : 'bg-gradient-to-br from-slate-50 to-slate-100'
        } relative overflow-hidden`}
      >
        {/* Mobile Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-10 left-10 w-20 h-20 rounded-full blur-xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-electric-blue to-amber-gold' 
              : 'bg-gradient-to-br from-strong-green to-amber-gold'
          }`}></div>
          <div className={`absolute top-1/3 right-8 w-16 h-16 rounded-full blur-lg ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-amber-gold to-electric-blue' 
              : 'bg-gradient-to-br from-amber-gold to-strong-green'
          }`}></div>
          <div className={`absolute bottom-1/4 left-6 w-24 h-24 rounded-full blur-xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-electric-blue to-amber-gold' 
              : 'bg-gradient-to-br from-strong-green to-amber-gold'
          }`}></div>
        </div>
        
        <div className="relative z-10 px-4 py-12">
          {/* Mobile Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-3">
              <Instagram className={theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} size={28} />
              <h2 className={`text-2xl sm:text-3xl font-bold font-formom ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Join The{' '}
                <span className={theme === 'dark' ? 'text-electric-blue' : 'text-amber-gold'}>Journey</span>
              </h2>
            </div>
            <p className={`text-sm sm:text-base max-w-sm mx-auto leading-relaxed font-helvetica ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Daily transformation updates & motivation from your fitness coach
            </p>
          </div>
          
          {/* Mobile Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 max-w-sm mx-auto">
            {displayPosts.slice(0, 4).map((post, index) => (
              <div 
                key={post.id}
                onClick={() => handlePostClick(post.postUrl || 'https://www.instagram.com/coachpotate/')}
                className={`aspect-square rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer group relative ${
                  theme === 'dark' 
                    ? 'bg-zinc-800' 
                    : 'bg-white'
                }`}
              >
                {posts.length > 0 && post.imageUrl && post.imageUrl !== '/placeholder.svg' ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={post.imageUrl} 
                      alt={post.altText || post.caption || 'Instagram post'} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Heart className="w-3 h-3" />
                        <span className="text-xs font-semibold">{post.likes || '0'}</span>
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </div>
                      <p className="text-xs leading-tight line-clamp-2">
                        {post.caption?.substring(0, 60) || 'View on Instagram'}...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center p-3 ${
                    theme === 'dark'
                      ? 'text-gray-300 group-hover:text-electric-blue'
                      : 'text-gray-700 group-hover:text-strong-green'
                  } transition-colors relative`}>
                    <Instagram size={32} className="mb-2" />
                    <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                      {post.label || 'Instagram Post'}
                    </span>
                    <div className={`absolute inset-0 ${
                      theme === 'dark'
                        ? 'group-hover:bg-zinc-700/50'
                        : 'group-hover:bg-gray-100/70'
                    } transition-colors rounded-xl`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile CTA */}
          <div className="text-center">
            <a 
              href="https://www.instagram.com/coachpotate/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-formom ${
                theme === 'dark'
                  ? 'bg-gradient-electric-to-amber text-black hover:bg-gradient-amber-to-electric'
                  : 'bg-gradient-to-r from-strong-green to-amber-gold hover:from-amber-gold hover:to-strong-green text-white'
              }`}
            >
              <Instagram size={16} />
              Follow @CoachPotate
            </a>
            <p className={`mt-3 font-medium text-xs sm:text-sm font-helvetica ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Join 50K+ transforming their lives
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Section - Completely Separate */}
      <section className={`hidden lg:block seamless-section ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-zinc-900 to-zinc-800' 
          : 'bg-gradient-to-br from-slate-50 to-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-4">
              <Instagram size={36} className={theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} />
              <h2 className={`text-3xl md:text-4xl font-bold font-formom ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Follow The{' '}
                <span className={theme === 'dark' ? 'text-electric-blue' : 'text-amber-gold'}>
                  Journey
                </span>
              </h2>
            </div>
            <p className={`text-lg max-w-3xl mx-auto font-helvetica ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Daily fitness transformation updates and motivation from India's leading online fitness coach
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {displayPosts.slice(0, 4).map((post, index) => (
              <div 
                key={post.id}
                onClick={() => handlePostClick(post.postUrl || 'https://www.instagram.com/coachpotate/')}
                className={`aspect-square rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer group relative ${
                  theme === 'dark' 
                    ? 'bg-zinc-800' 
                    : 'bg-white'
                }`}
              >
                {posts.length > 0 && post.imageUrl && post.imageUrl !== '/placeholder.svg' ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={post.imageUrl} 
                      alt={post.altText || post.caption || 'Instagram post'} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-3 mb-2">
                        <Heart className="w-5 h-5" />
                        <span className="text-lg font-bold">{post.likes || '0'}</span>
                        <ExternalLink className="w-5 h-5 ml-auto" />
                      </div>
                      <p className="text-sm leading-relaxed line-clamp-3">
                        {post.caption?.substring(0, 100) || 'View this amazing post on Instagram'}...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center ${
                    theme === 'dark'
                      ? 'text-gray-300 group-hover:text-electric-blue'
                      : 'text-gray-700 group-hover:text-strong-green'
                  } transition-colors relative`}>
                    <Instagram size={48} className="mb-3" />
                    <span className="text-base font-semibold text-center px-4">
                      {post.label || 'Instagram Post'}
                    </span>
                    <div className={`absolute inset-0 ${
                      theme === 'dark'
                        ? 'group-hover:bg-zinc-700/50'
                        : 'group-hover:bg-gray-100/70'
                    } transition-colors rounded-xl`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.instagram.com/coachpotate/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 rounded-full hover:scale-[1.02] transition-all duration-300 shadow-lg font-formom"
            >
              <Instagram size={24} />
              Follow @CoachPotate
            </a>
            <p className={`mt-4 font-medium text-base font-helvetica ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Join 50K+ on their fitness transformation journey
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramSection;
