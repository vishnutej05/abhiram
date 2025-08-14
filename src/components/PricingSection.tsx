import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from '../hooks/use-theme';

const PricingSection = () => {
  // State                     className="w-full font-bold py-2 mt-auto rounded-xl transition-all duration-300 text-sm bg-[hsl(142,71%,50%)] hover:opacity-90 text-black"ack expanded cards
  const [expanded, setExpanded] = React.useState<number | null>(null);

  // Max features to show before collapsing
  const MAX_FEATURES = 4;

  // Toggle expand/collapse for a card
  const handleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  // Scroll to contact form handler
  const scrollToForm = () => {
    const form = document.getElementById('contact');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { theme } = useTheme();
  const plans = [
    {
      name: "1 Month",
      duration: "1 Month",
      description: "Initial fitness consultation",
      features: [
        "Personalized workout plan",
        "Tailored nutrition plan",
        "Bi-weekly progress check-ins"
      ]
    },
    {
      name: "3 Months",
      duration: "3 Months",
      description: "Includes all 1-Month perks",
      features: [
        "Weekly text support for guidance",
        "Workout video tutorials & form guidance"
      ]
    },
    {
      name: "6 Months",
      duration: "6 Months",
      description: "Includes all 3-Month perks",
      features: [
        "Unlimited personalized workout iterations",
        "Advanced macro assessment & daily nutrition logs",
        "Weekly + priority progress check-ins",
        "Unlimited daily communication support (on-the-go texting)",
        "Habit tracking & accountability system",
        "In-app workout videos + custom form correction videos"
      ],
      popular: true
    },
    {
      name: "12 Months",
      duration: "12 Months",
      description: "Includes all 6-Month perks",
      features: [
        "Advanced behavioral-based habit coaching",
        "In-app workout videos + custom form correction videos",
        "Sleep optimization guide",
        "Exclusive e-book with basic recipes"
      ]
    }
  ];
  return (
    <div id="pricing">
      {/* Mobile & Tablet Section - Completely Separate */}
      <section className={`block lg:hidden seamless-section relative overflow-hidden pb-0 ${
        theme === 'dark' 
          ? 'bg-black/60 bg-opacity-90'
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          {/* Mobile Header */}
          <div className="text-center mb-8 animate-fade-in px-4">
            <h2 className={`text-4xl sm:text-5xl font-helvetica font-bold uppercase ${theme === 'dark' ? 'text-stone-100' : 'text-gray-900'} mb-4`}>
              SELECT THE PERFECT{' '}
              <span className={theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}>PLAN</span>
            </h2>
          </div>
          {/* Mobile Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 px-4">
            {plans.map((plan, index) => {
              const isExpanded = expanded === index;
              const showMore = plan.features.length > MAX_FEATURES && !isExpanded;
              const featuresToShow = showMore ? plan.features.slice(0, MAX_FEATURES) : plan.features;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    theme === 'dark'
                      ? 'bg-zinc-800/90 backdrop-blur-sm'
                      : 'bg-white/95 backdrop-blur-sm'
                  } rounded-2xl p-3 sm:p-5 shadow-lg transition-all duration-300 hover:shadow-xl relative ${
                    plan.popular
                      ? theme === 'dark'
                        ? 'ring-2 ring-electric-blue'
                        : 'ring-2 ring-emerald-400'
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div className={`${
                        theme === 'dark'
                          ? 'bg-[hsl(142,71%,50%)] text-black'
                          : 'bg-[hsl(142,71%,30%)] text-white'
                      } px-4 py-2 rounded-full text-sm font-bold`}>
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="text-center mb-2">
                      <div className={`font-bold text-base sm:text-lg ${
                        theme === 'dark' ? 'text-electric-blue' : 'text-emerald-600'
                      }`}>{plan.duration}</div>
                      <p className={`text-xs sm:text-sm mt-0.5 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-muted-gray'
                      }`}>{plan.description}</p>
                    </div>
                    <div className={`space-y-1 mb-3 ${plan.duration === "6 Months" && isExpanded ? "max-h-[200px] overflow-y-auto pr-2 custom-scrollbar" : ""}`}>
                      {featuresToShow.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-1.5">
                          <span className={`text-sm font-bold ${
                            theme === 'dark' ? 'text-emerald-600' : 'text-emerald-600'
                          }`}>✓</span>
                          <span className={`text-xs sm:text-sm text-left font-helvetica leading-normal ${
                            theme === 'dark' ? 'text-gray-300' : 'text-muted-gray'
                          }`}>{feature}</span>
                        </div>
                      ))}
                      {showMore && (
                        <button
                          className={`text-xs underline font-semibold mt-1 ${theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}`}
                          onClick={() => handleExpand(index)}
                        >
                          More Perks
                        </button>
                      )}
                      {isExpanded && plan.features.length > MAX_FEATURES && (
                        <>
                          {plan.features.slice(MAX_FEATURES).map((feature, featureIndex) => (
                            <div key={featureIndex + MAX_FEATURES} className="flex items-center gap-2">
                              <span className={`text-base font-bold ${
                                theme === 'dark' ? 'text-emerald-600' : 'text-emerald-600'
                              }`}>✓</span>
                              <span className={`text-sm sm:text-base text-left font-helvetica ${
                                theme === 'dark' ? 'text-gray-300' : 'text-muted-gray'
                              }`}>{feature}</span>
                            </div>
                          ))}
                          <button
                            className={`mt-2 text-xs underline font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}`}
                            onClick={() => handleExpand(index)}
                          >
                            Show Less
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={scrollToForm}
                      className={`w-4/5 font-bold py-2 mt-auto rounded-xl transition-all duration-300 text-sm ${
                        theme === 'dark'
                          ? 'bg-[hsl(142,71%,50%)] text-black hover:opacity-90'
                          : 'bg-[hsl(142,71%,30%)] hover:opacity-90 text-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Desktop Section - Completely Separate */}
      <section className={`hidden lg:block seamless-section relative overflow-hidden pb-0 ${
        theme === 'dark' 
          ? 'bg-black/60 bg-opacity-90' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          {/* Desktop Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className={`text-5xl md:text-6xl font-helvetica font-bold capitalize mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              SELECT THE PERFECT{' '}
              <span className={
                theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'
              }>
                PLAN
              </span>
            </h2>
          </div>
          {/* Desktop Plans Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => {
              const isExpanded = expanded === index;
              const showMore = plan.features.length > MAX_FEATURES && !isExpanded;
              const featuresToShow = showMore ? plan.features.slice(0, MAX_FEATURES) : plan.features;
              return (
                <div
                  key={index}
                  className={`flex flex-col justify-between h-[500px] ${
                    theme === 'dark'
                      ? 'bg-zinc-800/90 text-white'
                      : 'bg-white text-gray-900'
                  } backdrop-blur-sm rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 relative ${
                    plan.popular ? `ring-2 ${theme === 'dark' ? 'ring-electric-blue' : 'ring-emerald-400'} transform lg:scale-105` : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`${
                        theme === 'dark' ? 'bg-[hsl(142,71%,50%)] text-black' : 'bg-emerald-600 text-white'
                      } px-6 py-2 rounded-full text-base font-bold shadow-lg whitespace-nowrap`}>
                        Most Popular
                      </div>
                    </div>
                  )}
                                      <div className="space-y-6 text-center flex-1 flex flex-col">
                    <div className="space-y-2">
                      <div className={`font-bold text-2xl font-helvetica ${
                        theme === 'dark' ? 'text-white' : 'text-emerald-600'
                      }`}>{plan.duration}</div>
                      <p className={`text-sm font-helvetica ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{plan.description}</p>
                    </div>
                    <div className={`space-y-4 flex-1 ${plan.duration === "6 Months" ? "max-h-[300px] overflow-y-auto pr-2 six-month-scrollbar" : ""}`}>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <span className={`text-lg mt-0.5 ${
                            theme === 'dark' ? 'text-emerald-600' : 'text-emerald-600'
                          }`}>✓</span>
                          <span className={`text-sm text-left font-helvetica ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>{feature}</span>
                        </div>
                      ))}
                      {showMore && (
                        <button
                          className={`mt-2 text-xs underline font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}`}
                          onClick={() => handleExpand(index)}
                        >
                          More Perks
                        </button>
                      )}
                      {isExpanded && plan.features.length > MAX_FEATURES && (
                        <>
                          {plan.features.slice(MAX_FEATURES).map((feature, featureIndex) => (
                            <div key={featureIndex + MAX_FEATURES} className="flex items-center gap-3">
                              <span className={`text-xl font-bold ${
                                theme === 'dark' ? 'text-electric-blue' : 'text-mint-500'
                              }`}>✓</span>
                              <span className={`font-light text-base text-left font-helvetica ${
                                theme === 'dark' ? 'text-gray-300' : 'text-muted-gray'
                              }`}>{feature}</span>
                            </div>
                          ))}
                          <button
                            className={`mt-2 text-xs underline font-semibold ${theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}`}
                            onClick={() => handleExpand(index)}
                          >
                            Show Less
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={scrollToForm}
                      className={`w-4/5 font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 text-base ${
                        theme === 'dark' 
                          ? 'bg-[hsl(142,71%,50%)] text-black'
                          : 'bg-[hsl(142,71%,30%)] text-white'
                      } hover:opacity-90`}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};


export default PricingSection;
