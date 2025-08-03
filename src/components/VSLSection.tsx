import { useTheme } from '../hooks/use-theme';

const VSLSection = () => {
  const { theme } = useTheme();

  const scrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="vsl" className={`pt-10 pb-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-charcoal-900 to-black/70' 
        : 'bg-gradient-to-br from-slate-900 via-black to-zinc-900'
    }`}>
      {/* Background with backdrop filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-black/90 backdrop-blur-sm' 
            : 'bg-black/80 backdrop-blur-sm'
        }`}></div>
      </div>
      {/* Top gradient for seamless transition - enhanced height */}
      <div className={`absolute top-0 left-0 right-0 h-40 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-transparent' 
          : 'bg-gradient-to-b from-slate-900 to-transparent'
      } z-[1]`}></div>
      
      {/* Subtle divider that fades at edges */}
      <div className="absolute top-0 left-0 right-0 z-[2]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
        </div>
      </div>
      
      {/* Bottom gradient for seamless transition */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-black via-charcoal-900/90 to-transparent' 
          : 'bg-gradient-to-t from-slate-900 to-transparent'
      } z-[1]`}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
        {/* <div className="mb-12"> 
          <h1 
            className={`font-helvetica text-3xl font-bold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'} opacity-0`} 
            style={{
              animation: "fadeIn 1.5s ease-in-out 0.8s forwards",
              color: theme === 'dark' ? 'hsl(142, 71%, 50%)' : ''
            }}
          >
            👀 Watch my story
          </h1>
          <p className={`mt-6 text-lg leading-8 ${theme === 'dark' ? 'text-stone-300' : 'text-gray-800'} opacity-0`} style={{animation: "fadeIn 1.5s ease-in-out 1.1s forwards"}}>
            Learn how I discovered my passion for fitness and helping others transform their lives.
          </p>
        </div>
         */}
        {/* YouTube Video */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className={`aspect-video rounded-3xl overflow-hidden shadow-2xl ${
            theme === 'dark' 
              ? 'border-4 border-zinc-700/50' 
              : 'border-4 border-zinc-800/30'
          }`}>
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
        
        <div className="pt-2">
          <button 
            onClick={scrollToForm}
            className={`btn-primary text-base font-bold w-full max-w-xs mx-auto py-3 px-4 rounded-full shadow-lg font-helvetica transition-all duration-300 hover:scale-105 active:scale-95 group`}
          >
            <span className="relative z-10">Start Your Fitness Journey Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
