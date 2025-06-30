
import { CheckCircle, Star } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(/lovable-uploads/a795f6ea-7927-4bac-bc1c-5ffcda5ff920.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Limited Time Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Body{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In 90 Days
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get everything you need for a complete fitness transformation with personalized coaching and ongoing support
          </p>
        </div>
        
        {/* Main Pricing Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600 relative">
          {/* Popular Badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              🔥 Most Popular
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete Transformation Package</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl text-gray-500 line-through">₹15,000</span>
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹9,999</span>
              </div>
              <p className="text-gray-600">One-time payment • 90-day program</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                {[
                  "Personalized workout plan",
                  "Custom nutrition strategy",
                  "Weekly meal plans",
                  "Body recomposition guide",
                  "Progress tracking system"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">Bonus Features:</h4>
                {[
                  "24/7 WhatsApp support",
                  "Weekly progress reviews",
                  "Supplement recommendations",
                  "Mindset coaching sessions",
                  "Lifetime access to resources"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white text-center mb-8">
              <h4 className="text-lg font-semibold mb-2">🎯 90-Day Transformation Guarantee</h4>
              <p className="text-blue-100">
                Follow the program and see results or get your money back. That's how confident I am in this system.
              </p>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
              >
                Secure Your Transformation Spot
              </button>
              <p className="text-sm text-gray-500">
                💳 Secure payment • 📱 Instant access • 🔒 100% satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            🚨 <strong>Limited spots available</strong> - Only 10 new clients accepted each month for personalized attention
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>Trusted by 500+ successful transformations across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
