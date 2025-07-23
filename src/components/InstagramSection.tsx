
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
      imageUrl: '/placeholder.svg',
      caption: 'Amazing transformation results from our fitness coaching program!',
      likes: '1.2K',
      postUrl: 'https://www.instagram.com/coachpotate/'
    },
    { 
      id: 'fallback_2', 
      type: 'workout', 
      label: 'Workout Tips',
      imageUrl: '/placeholder.svg',
      caption: 'Daily workout motivation and tips for better fitness results.',
      likes: '856',
      postUrl: 'https://www.instagram.com/coachpotate/'
    },
    { 
      id: 'fallback_3', 
      type: 'nutrition', 
      label: 'Nutrition Guide',
      imageUrl: '/placeholder.svg',
      caption: 'Healthy meal prep ideas for sustainable weight loss.',
      likes: '943',
      postUrl: 'https://www.instagram.com/coachpotate/'
    },
    { 
      id: 'fallback_4', 
      type: 'motivation', 
      label: 'Daily Motivation',
      imageUrl: '/placeholder.svg',
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
      <section ref={sectionRef} className={`block lg:hidden seamless-section ${theme === 'dark' ? 'soft-peach' : 'soft-lavender'} relative overflow-hidden`}>
        {/* Mobile Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-emerald-300 to-stone-300 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-8 w-16 h-16 bg-gradient-to-br from-stone-300 to-emerald-300 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/4 left-6 w-24 h-24 bg-gradient-to-br from-emerald-300 to-stone-300 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 px-4 py-16">
          {/* Mobile Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Instagram className={`w-10 h-10 ${theme === 'dark' ? 'text-emerald-500' : 'text-emerald-700'}`} />
              <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-stone-100' : 'text-gray-900'} font-formom`}>
                Join The{' '}
                <span className={theme === 'dark' ? 'text-emerald-500' : 'text-emerald-700'}>Journey</span>
              </h2>
            </div>
            <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'} max-w-sm mx-auto leading-relaxed font-helvetica`}>
              {posts.length > 0 
                ? `Latest posts from @coachpotate on Instagram (${posts.length} posts)` 
                : 'Daily transformation updates & motivation from your fitness coach'
              }
            </p>
          </div>
          
          {/* Mobile Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12 max-w-sm mx-auto">
            {displayPosts.slice(0, 4).map((post, index) => (
              <div 
                key={post.id}
                onClick={() => handlePostClick(post.postUrl || 'https://www.instagram.com/coachpotate/')}
                className="aspect-[9/16] bg-gradient-to-br from-emerald-100 to-stone-200 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
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
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-700 group-hover:text-emerald-700 transition-colors relative p-3">
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                    <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                      {post.label || 'Instagram Post'}
                    </span>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl"></div>
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
              className="inline-flex items-center gap-3 bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-formom"
            >
              <Instagram className="w-6 h-6" />
              Follow @CoachPotate
            </a>
            <p className="text-gray-700 mt-4 font-medium text-sm sm:text-base font-helvetica">
              {posts.length > 0 
                ? 'Latest transformation updates and daily motivation' 
                : 'Join 50K+ transforming their lives'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Section - Completely Separate */}
      <section className={`hidden lg:block seamless-section ${theme === 'dark' ? 'soft-peach' : 'soft-lavender'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <Instagram className="w-12 h-12 text-emerald-700" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-formom">
                Follow The{' '}
                <span className="text-emerald-700">
                  Journey
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-helvetica">
              {posts.length > 0 
                ? 'Latest fitness transformations and daily motivation from @coachpotate' 
                : 'Daily fitness transformation updates and motivation from India\'s leading online fitness coach'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {displayPosts.slice(0, 4).map((post, index) => (
              <div 
                key={post.id}
                onClick={() => handlePostClick(post.postUrl || 'https://www.instagram.com/coachpotate/')}
                className="aspect-[9/16] bg-gradient-to-br from-emerald-100 to-stone-200 rounded-3xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer group relative"
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
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-700 group-hover:text-emerald-700 transition-colors relative">
                    <Instagram className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold text-center px-4">
                      {post.label || 'Instagram Post'}
                    </span>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-3xl"></div>
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
              className="inline-flex items-center gap-4 bg-stone-800 hover:bg-stone-700 text-white px-12 py-5 rounded-full text-2xl font-bold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-formom"
            >
              <Instagram className="w-8 h-8" />
              Follow @CoachPotate
            </a>
            <p className="text-gray-700 mt-6 font-medium text-lg font-helvetica">
              {posts.length > 0 
                ? 'Daily transformation updates • Join the fitness community' 
                : 'Join 50K+ on their fitness transformation journey'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramSection;
