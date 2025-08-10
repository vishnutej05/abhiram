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
    <section id="vsl" className={`pt-4 pb-8 md:pt-6 md:pb-12 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-zinc-900 bg-opacity-95' 
        : 'bg-white'
    }`}>
      <div className="relative z-10 w-full flex flex-col items-center justify-center mx-auto px-0 sm:px-2 lg:px-4 text-center pt-4">
        {/* YouTube Video */}
        <div className={`aspect-video max-w-4xl w-full max-h-[400px] md:max-h-[480px] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl flex justify-center items-center ${
          theme === 'dark' 
            ? '' 
            : ''
        }`} style={{ background: 'none', marginBottom: '1.5rem' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/I3BpkCYIts4"
            title="Online fitness transformation coach India - Abhiram Nair journey"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ maxHeight: '550px', display: 'block' }}
          ></iframe>
        </div>
        <button 
          onClick={scrollToForm}
          className={`mt-10 text-base font-bold w-full max-w-xs mx-auto py-2 px-6 rounded-xl shadow-lg font-helvetica transition-all duration-300 hover:scale-105 active:scale-95 ${
            theme === 'dark'
              ? 'bg-[hsl(142,71%,50%)] text-black'
              : 'bg-[hsl(142,71%,30%)] text-white'
          } hover:opacity-90`}
        >
          <span className="relative z-10">Start Your Fitness Journey Today</span>
        </button>
      </div>
    </section>
  );
};

export default VSLSection;
