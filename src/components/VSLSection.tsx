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
    <section id="vsl" className={`pt-6 pb-16 md:pt-8 md:pb-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-zinc-800 border border-zinc-700' 
        : 'bg-white'
    }`}>
      {/* Top gradient for seamless transition - enhanced height */}
      <div className={`absolute top-0 left-0 right-0 h-40 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-zinc-900 to-transparent' 
          : 'bg-gradient-to-b from-white to-transparent'
      } z-[1]`}></div>
      
      {/* Subtle divider that fades at edges */}
      <div className="absolute top-0 left-0 right-0 z-[2]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent"></div>
        </div>
      </div>
      
      {/* Bottom gradient for seamless transition */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-zinc-900 to-transparent' 
          : 'bg-gradient-to-t from-slate-50 to-transparent'
      } z-[1]`}></div>
      
      <div className="relative z-10 w-full mx-auto px-0 sm:px-2 lg:px-4 text-center pt-8">
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
        <div className="relative w-full px-2 md:px-4 lg:px-0 lg:max-w-[95%] xl:max-w-[90%] mx-auto mb-12">
          <div className={`aspect-video rounded-xl md:rounded-3xl overflow-hidden shadow-2xl ${
            theme === 'dark' 
              ? 'border-2 md:border-4 border-zinc-700/50' 
              : 'border-2 md:border-4 border-slate-200'
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
        
        <div className="pt-8 md:pt-10">
          <button 
            onClick={scrollToForm}
            className={`btn-primary text-base font-bold w-full max-w-xs mx-auto py-3 px-6 rounded-full shadow-lg font-helvetica transition-all duration-300 hover:scale-105 active:scale-95 group ${
              theme === 'dark' ? '' : 'text-white'
            }`}
          >
            <span className="relative z-10">Start Your Fitness Journey Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
