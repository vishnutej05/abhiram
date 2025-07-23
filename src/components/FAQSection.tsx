
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const faqs = [
  {
    question: "How quickly will I see real progress?",
    answer: "Every transformation is unique, but most clients notice positive changes within 3-4 weeks. The real magic happens around week 8-12 when everything clicks together - your strength, confidence, and mindset align."
  },
  {
    question: "Can I train effectively without a gym?",
    answer: "Absolutely! Some of our most impressive transformations happened with home setups. We design programs around your available space and equipment - what matters most is consistency and the right guidance."
  },
  {
    question: "What level of support can I expect?",
    answer: "You're never alone in this journey. From detailed workout plans and nutrition strategies to regular progress reviews and motivational support - we're here to guide you every step of the way."
  },
  {
    question: "How do you create my personal program?",
    answer: "We start with a deep dive into your goals, lifestyle, and current fitness level. Your program evolves with you - adjusting as you get stronger, as your schedule changes, and as your confidence grows."
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { theme } = useTheme();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className={`py-20 ${theme === 'dark' ? 'soft-sage' : 'soft-lavender'}`}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl ${theme === 'dark' ? 'text-stone-100' : 'text-gray-900'}`}>Frequently asked questions</h2>
        <p className={`mt-6 text-lg leading-8 ${theme === 'dark' ? 'text-stone-300' : 'text-muted-foreground'}`}>
          Find answers to common questions about our transformation programs and coaching services.
        </p>
      </div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-serif font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600" />
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
          <p className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-600'} mb-6`}>Still have questions?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${theme === 'dark' ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-emerald-600 hover:bg-emerald-700'} text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300`}
          >
            Get Personal Answers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
