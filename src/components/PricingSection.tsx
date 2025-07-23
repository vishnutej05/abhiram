
import { Button } from "@/components/ui/button";
import { useTheme } from '../hooks/use-theme';

const PricingSection = () => {
  const { theme } = useTheme();
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
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="pricing">
      {/* Mobile & Tablet Section - Completely Separate */}
      <section className={`block lg:hidden seamless-section ${theme === 'dark' ? 'soft-sky' : 'soft-blush'} relative overflow-hidden`}>
        {/* Mobile Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('/lovable-uploads/06d11a55-82ca-4851-9fa2-88213d67ed1d.png')`,
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          {/* Mobile Header */}
          <div className="text-center mb-8 animate-fade-in px-4">
            <h2 className={`text-4xl sm:text-5xl font-serif font-bold ${theme === 'dark' ? 'text-stone-100' : 'text-gray-900'} mb-4`}>
              Find your{' '}
              <span className={theme === 'dark' ? 'text-emerald-500' : 'text-emerald-700'}>Path</span>
            </h2>
            <p className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-stone-300' : 'text-muted-gray'} font-light max-w-xl mx-auto`}>
              Select the perfect plan for your transformation
            </p>
          </div>

          {/* Mobile Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 px-4 sm:px-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl relative ${
                  plan.popular ? 'ring-2 ring-emerald-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      ✨ Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-4 text-center">
                  <div className="space-y-2">
                    {/* <h3 className="text-xl sm:text-2xl font-serif font-bold text-soft-gray">{plan.name}</h3> */}
                    <div className="text-emerald-600 font-bold text-lg sm:text-xl">{plan.duration}</div>
                    <p className="text-muted-gray text-sm sm:text-base">{plan.description}</p>
                  </div>

                  <div className="space-y-2">
                    {plan.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <span className="text-mint-500 text-base font-bold">✓</span>
                        <span className="text-muted-gray text-sm sm:text-base text-left font-helvetica">{feature}</span>
                      </div>
                    ))}
                    {plan.features.length > 3 && (
                      <div className="text-emerald-600 text-sm font-medium font-helvetica">
                        +{plan.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  <Button 
                    onClick={scrollToForm}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all duration-300 text-base sm:text-lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="text-center animate-fade-in">
            <p className="text-muted-gray text-base mb-4 font-helvetica">
              100% satisfaction guarantee
            </p>
            <div className="flex justify-center space-x-4 text-sm text-muted-gray font-helvetica">
              <div>💳 Secure</div>
              <div>📱 Instant</div>
              <div>🎯 Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Section - Completely Separate */}
      <section className={`hidden lg:block seamless-section ${theme === 'dark' ? 'soft-sky' : 'soft-blush'} relative overflow-hidden`}>
        {/* Desktop Background Image */}
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/06d11a55-82ca-4851-9fa2-88213d67ed1d.png')`,
          }}
        ></div> */}
        
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          {/* Desktop Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Find your{' '}
              <span className="text-emerald-700">
                Path
              </span>
            </h2>
            <p className="text-xl text-muted-gray font-light max-w-2xl mx-auto">
              Select the perfect plan for your fitness transformation journey
            </p>
          </div>

          {/* Desktop Plans Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl relative ${
                  plan.popular ? 'ring-4 ring-emerald-400 transform lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-600 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg whitespace-nowrap">
                      ✨ Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-6 text-center">
                  <div className="space-y-3">
                    {/* <h3 className="text-2xl font-serif font-bold text-soft-gray">{plan.name}</h3> */}
                    <div className="text-emerald-600 font-bold text-xl font-helvetica">{plan.duration}</div>
                    <p className="text-muted-gray font-light text-base font-helvetica">{plan.description}</p>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <span className="text-mint-500 text-xl font-bold">✓</span>
                        <span className="text-muted-gray font-light text-base text-left font-helvetica">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={scrollToForm}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-dm-sans font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Footer */}
          <div className="text-center animate-fade-in">
            <p className="text-muted-gray font-inter font-light mb-6 text-lg">
              100% satisfaction guarantee - Not satisfied in the first 30 days? Get a full refund.
            </p>
            <div className="flex justify-center space-x-8 text-base text-muted-gray font-inter font-light">
              <div>💳 Secure Payment</div>
              <div>📱 Instant Access</div>
              <div>🎯 Results Guaranteed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
