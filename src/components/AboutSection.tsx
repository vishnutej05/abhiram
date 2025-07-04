
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-red-500/25">
              <img 
                src="/lovable-uploads/f4895f09-a8e6-40b3-9cf2-a450e373330d.png"
                alt="Abhiram Nair - Online fitness transformation coach India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-black">#1</div>
              <div className="text-sm font-bold">COACH</div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                COACH{' '}
                <span className="text-red-500">
                  ABHIRAM
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-orange-600"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p className="font-semibold">
                Lost 30kg. Built lean muscle. Now I help others do the same.
              </p>
              
              <p>
                <strong className="text-white">No BS. No shortcuts. Just results.</strong> My proven system has transformed 500+ bodies across India.
              </p>
              
              <p>
                Ready to get <strong className="text-red-500">JACKED?</strong>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-2xl border border-red-500/30">
                <div className="text-3xl font-black text-red-500 mb-2">5+</div>
                <div className="text-gray-400 font-bold">YEARS</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl border border-orange-500/30">
                <div className="text-3xl font-black text-orange-500 mb-2">500+</div>
                <div className="text-gray-400 font-bold">TRANSFORMED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
