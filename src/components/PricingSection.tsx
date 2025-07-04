
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/a795f6ea-7927-4bac-bc1c-5ffcda5ff920.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            CHOOSE YOUR{' '}
            <span className="text-red-500">
              WEAPON
            </span>
          </h2>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all">
            <h3 className="text-xl font-black text-white mb-4">STARTER</h3>
            <div className="mb-4">
              <span className="text-2xl text-gray-500 line-through">₹8,000</span>
              <span className="text-3xl font-black text-white ml-2">₹4,999</span>
            </div>
            <div className="space-y-3 mb-6">
              {["Basic workout plan", "Nutrition guide", "Email support"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-red-500 w-4 h-4" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-gray-800 text-white py-3 font-bold hover:bg-gray-700 transition-colors">
              CHOOSE STARTER
            </button>
          </div>

          {/* Popular Package */}
          <div className="bg-gradient-to-b from-red-900/50 to-orange-900/50 p-6 rounded-2xl border-2 border-red-500 relative transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-600 text-white px-4 py-1 text-sm font-black">
                MOST POPULAR
              </div>
            </div>
            
            <h3 className="text-xl font-black text-white mb-4">BEAST MODE</h3>
            <div className="mb-4">
              <span className="text-2xl text-gray-400 line-through">₹15,000</span>
              <span className="text-4xl font-black text-white ml-2">₹9,999</span>
            </div>
            <div className="space-y-3 mb-6">
              {["Custom workout plan", "Meal plans", "24/7 WhatsApp support", "Progress tracking"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-red-500 w-4 h-4" />
                  <span className="text-white text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 font-black hover:shadow-lg hover:shadow-red-500/25 transition-all">
              GET BEAST MODE
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all">
            <h3 className="text-xl font-black text-white mb-4">ELITE</h3>
            <div className="mb-4">
              <span className="text-2xl text-gray-500 line-through">₹25,000</span>
              <span className="text-3xl font-black text-white ml-2">₹19,999</span>
            </div>
            <div className="space-y-3 mb-6">
              {["Complete transformation", "1-on-1 coaching", "Supplement plan", "Mindset coaching"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500 w-4 h-4" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-orange-600 text-white py-3 font-bold hover:bg-orange-700 transition-colors">
              GO ELITE
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4 font-semibold">
            🚨 LIMITED SPOTS • ONLY 10 NEW CLIENTS PER MONTH
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
