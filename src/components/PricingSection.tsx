
import { useEffect, useRef } from 'react';

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Transformation Programs - Online Fitness Coach India";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Kickstart",
      duration: "3 Months",
      features: [
        "Personalized workout plan",
        "Basic nutrition guidance",
        "Weekly check-ins",
        "WhatsApp support",
        "Exercise form videos"
      ],
      popular: false
    },
    {
      name: "Transform",
      duration: "6 Months",
      features: [
        "Advanced workout programs",
        "Detailed meal plans",
        "Bi-weekly progress reviews",
        "24/7 chat support",
        "Supplement guidance",
        "Body composition tracking"
      ],
      popular: true
    },
    {
      name: "Master",
      duration: "8 Months",
      features: [
        "Elite training protocols",
        "Custom nutrition coaching",
        "Weekly video calls",
        "Priority support access",
        "Advanced tracking tools",
        "Mindset coaching sessions",
        "Recipe database access"
      ],
      popular: false
    },
    {
      name: "Champion",
      duration: "12 Months",
      features: [
        "Complete lifestyle transformation",
        "1-on-1 monthly consultations",
        "Holistic fitness and mindset approach",
        "VIP support channel",
        "Competition prep training",
        "Long-term maintenance planning",
        "Exclusive community access",
        "Lifetime plan updates"
      ],
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(/lovable-uploads/f33dcdcd-1e3a-474e-9f33-e075851661a6.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="text-orange-600">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized workout and nutrition plan programs designed for every fitness transformation journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-orange-500 shadow-orange-100' 
                  : 'border-gray-200 hover:border-orange-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-orange-600 font-semibold text-lg">{plan.duration}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold">✓</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-orange-50 text-gray-900 hover:text-orange-600 border-2 border-transparent hover:border-orange-300'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Not sure which program is right for you?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
