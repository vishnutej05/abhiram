
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Journey",
      duration: "3 Months",
      features: ["Basic workout plan", "Nutrition guidelines", "Email support", "Progress tracking"]
    },
    {
      name: "Transformation Path",
      duration: "6 Months",
      features: ["Personalized workout plan", "Custom meal plans", "WhatsApp support", "Body recomposition focus", "Weekly check-ins"],
      popular: true
    },
    {
      name: "Beast Mode",
      duration: "8 Months",
      features: ["Complete transformation", "Advanced nutrition", "24/7 support", "Supplement guidance", "Mindset coaching"]
    },
    {
      name: "Elite Transformation",
      duration: "12 Months",
      features: ["Full lifestyle change", "1-on-1 coaching", "Holistic fitness approach", "Long-term maintenance", "Exclusive community access"]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(/lovable-uploads/a795f6ea-7927-4bac-bc1c-5ffcda5ff920.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect fitness transformation journey that fits your goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 relative transform scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {plan.duration}
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600 w-4 h-4 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            🚨 Limited Spots Available • Best Online Fitness Coaching in India
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
