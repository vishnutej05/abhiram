import { useTheme } from '../hooks/use-theme';

const VSLSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="vsl" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gradient-to-br from-slate-50 to-stone-100'}`}>
      {/* Background with backdrop filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-zinc-900/90' : 'bg-white/60'} backdrop-blur-sm`}></div>
      </div>
      {/* Top gradient for seamless transition */}
      <div className={`absolute top-0 left-0 right-0 h-24 ${theme === 'dark' ? 'bg-gradient-to-b from-zinc-900/90 to-transparent' : 'bg-gradient-to-b from-white/90 to-transparent'} z-[1]`}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12"> 
          <h1 className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} opacity-0`} style={{animation: "fadeIn 1.5s ease-in-out 0.8s forwards"}}>
            👀 Watch my story
          </h1>
          <p className={`mt-6 text-lg leading-8 ${theme === 'dark' ? 'text-stone-300' : 'text-gray-800'} opacity-0`} style={{animation: "fadeIn 1.5s ease-in-out 1.1s forwards"}}>
            Learn how I discovered my passion for fitness and helping others transform their lives.
          </p>
        </div>
        
        {/* YouTube Video */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className={`aspect-video rounded-3xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'border-4 border-zinc-700/50' : 'border-4 border-white/80'}`}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/I3BpkCYIts4"
              title="Online fitness transformation coach India - Abhiram Nair journey"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-xl px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 font-helvetica"
          >
            Start Your Fitness Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
