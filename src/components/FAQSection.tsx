
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is this different from other online fitness programs?",
      answer: "My approach combines personalized workout and nutrition plans with ongoing 24/7 support through WhatsApp. Unlike generic programs, every aspect is tailored to your specific goals, lifestyle, and preferences. Plus, you get direct access to me for guidance throughout your transformation journey."
    },
    {
      question: "Can I really see results in 90 days?",
      answer: "Absolutely! With proper adherence to the personalized plan, most clients see significant changes within the first 4 weeks. The 90-day program is designed for complete body recomposition - whether your goal is muscle gain, fat loss, or overall fitness improvement."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Perfect! I specialize in working with beginners and creating sustainable fitness habits. Your workout plan will start at your current fitness level and progressively advance. I'll guide you through proper form, technique, and help build your confidence every step of the way."
    },
    {
      question: "Do I need expensive equipment or gym membership?",
      answer: "Not necessarily! I can design effective workout plans for home workouts, gym settings, or minimal equipment setups. During our consultation, we'll discuss your available resources and create a plan that works with your situation."
    },
    {
      question: "How does the nutrition plan work with Indian food?",
      answer: "As an Indian coach, I understand our food culture completely. Your meal plans will include delicious Indian dishes that support your goals - from dal and sabzi to healthy versions of your favorite foods. No boring, bland meals here!"
    },
    {
      question: "What kind of support do I get during the program?",
      answer: "You'll have direct WhatsApp access to me for questions, progress updates, and motivation. Plus weekly check-ins, progress reviews, and plan adjustments as needed. Think of me as your personal fitness mentor, not just a program provider."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 soft-sage">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Get answers to common questions about the fitness transformation program
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-br from-amber-100 to-orange-150 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-700 to-orange-700 text-stone-50 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Personal Answers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
