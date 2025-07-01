
import { Instagram } from 'lucide-react';

const InstagramSection = () => {
  const instagramPosts = [
    { id: 1, type: 'transformation' },
    { id: 2, type: 'workout' },
    { id: 3, type: 'nutrition' },
    { id: 4, type: 'motivation' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Follow The{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Daily fitness transformation updates and motivation from India's leading online fitness coach
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group shadow-lg"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-600 group-hover:text-purple-600 transition-colors">
                <Instagram className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://instagram.com/abhiramnair" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            Follow @AbhiramNair
          </a>
          <p className="text-gray-600 mt-4 font-medium">Join 50K+ on their fitness transformation journey</p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
