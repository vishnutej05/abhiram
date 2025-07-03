
import { Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';

const InstagramSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const instagramPosts = [
    { id: 1, type: 'transformation', label: 'Before & After' },
    { id: 2, type: 'workout', label: 'Workout Tips' },
    { id: 3, type: 'nutrition', label: 'Nutrition Guide' },
    { id: 4, type: 'motivation', label: 'Daily Motivation' }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-stone-100 to-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <Instagram className="w-12 h-12 text-amber-700" />
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
              Follow The{' '}
              <span className="text-amber-700">
                Journey
              </span>
            </h2>
          </div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            Daily fitness transformation updates and motivation from India's leading online fitness coach
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="aspect-square bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer group shadow-2xl transform hover:rotate-3"
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-stone-700 group-hover:text-amber-800 transition-colors relative">
                <Instagram className="w-16 h-16 mb-4" />
                <span className="text-lg font-semibold text-center px-4">{post.label}</span>
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://instagram.com/abhiramnair" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-700 to-orange-700 text-stone-50 px-12 py-5 rounded-full text-2xl font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:rotate-1"
          >
            <Instagram className="w-8 h-8" />
            Follow @AbhiramNair
          </a>
          <p className="text-stone-700 mt-6 font-medium text-lg">Join 50K+ on their fitness transformation journey</p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
