
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/f4895f09-a8e6-40b3-9cf2-a450e373330d.png"
                alt="Abhiram Nair - Online fitness transformation coach India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">#1</div>
              <div className="text-sm font-medium">COACH</div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Coach{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Abhiram
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p className="font-semibold">
                Lost 30kg. Built lean muscle. Now I help others achieve their best physique.
              </p>
              
              <p>
                <strong className="text-gray-900">No shortcuts. Just proven results.</strong> My holistic fitness and mindset approach has transformed 500+ lives across India through personalized workout and nutrition plans.
              </p>
              
              <p>
                Ready to start your <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">transformation journey?</strong>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-gray-600 font-medium">YEARS EXPERIENCE</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-600 font-medium">TRANSFORMED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
