
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "The Kickstart",
      duration: "1 Month",
      description: "Perfect for testing the waters and getting started",
      features: [
        "Personalized workout plan",
        "Basic nutrition guidance", 
        "Weekly check-ins",
        "App access"
      ]
    },
    {
      name: "The Glow Up", 
      duration: "3 Months",
      description: "Most popular - Where the magic happens",
      features: [
        "Everything in The Kickstart",
        "Complete meal plans",
        "Bi-weekly video calls",
        "Progress analysis",
        "24/7 support"
      ],
      popular: true
    },
    {
      name: "The Beast Mode",
      duration: "6 Months", 
      description: "Complete body recomposition and lifestyle change",
      features: [
        "Everything in The Glow Up",
        "Advanced training protocols",
        "Custom macro cycling",
        "Monthly body analysis",
        "Mindset coaching"
      ]
    },
    {
      name: "The Ultimate Flex",
      duration: "12 Months", 
      description: "The complete transformation journey for serious results",
      features: [
        "Everything in The Beast Mode",
        "VIP priority support",
        "Quarterly goal reassessment",
        "Lifestyle maintenance plan",
        "Exclusive community access"
      ]
    }
  ];

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="seamless-section soft-peach relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/06d11a55-82ca-4851-9fa2-88213d67ed1d.png')`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose your{' '}
            <span className="text-orange-600">
              Journey
            </span>
          </h2>
          <p className="text-lg text-muted-gray font-inter font-light max-w-2xl mx-auto">
            Select the perfect plan for your fitness transformation journey
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl relative ${
                plan.popular ? 'ring-4 ring-coral-400 transform lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-coral-500 text-white px-6 py-2 rounded-full text-sm font-dm-sans font-bold shadow-lg">
                    ✨ Most Popular
                  </div>
                </div>
              )}

              <div className="space-y-6 text-center">
                <div className="space-y-3">
                  <h3 className="text-2xl font-dm-sans font-bold text-soft-gray">{plan.name}</h3>
                  <div className="text-coral-500 font-dm-sans font-bold text-lg">{plan.duration}</div>
                  <p className="text-muted-gray font-inter font-light text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <span className="text-mint-500 text-lg font-bold">✓</span>
                      <span className="text-muted-gray font-inter font-light text-sm text-left">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToForm}
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white font-dm-sans font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-muted-gray font-inter font-light mb-6">
            100% satisfaction guarantee - Not satisfied in the first 30 days? Get a full refund.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-gray font-inter font-light">
            <div>💳 Secure Payment</div>
            <div>📱 Instant Access</div>
            <div>🎯 Results Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;