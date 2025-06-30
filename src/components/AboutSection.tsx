
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/f4895f09-a8e6-40b3-9cf2-a450e373330d.png"
                alt="Abhiram Nair - Online fitness transformation coach India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">#1</div>
              <div className="text-sm">Transformation Coach</div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Coach{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Abhiram
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                From struggling with my own fitness journey to becoming India's most trusted online fitness coach, 
                my transformation story began with a simple realization: <strong>sustainable results come from 
                personalized approaches, not cookie-cutter programs.</strong>
              </p>
              
              <p>
                After losing 30kg and gaining lean muscle through my proven body recomposition methods, 
                I've dedicated my life to helping others achieve their dream physique through 
                <strong>holistic fitness and mindset coaching.</strong>
              </p>
              
              <p>
                My approach combines cutting-edge nutrition science with practical workout strategies 
                that fit your lifestyle. Whether you're looking for muscle gain and fat loss or 
                complete body transformation, I'll guide you every step of the way.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
