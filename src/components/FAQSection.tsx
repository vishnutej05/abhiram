
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Results vary by individual, but most clients start seeing noticeable changes within 4-6 weeks of consistent training and following the nutrition plan. Significant transformations typically occur within 12 weeks."
  },
  {
    question: "Do I need gym access?",
    answer: "While gym access can be beneficial, our programs can be adapted for home workouts with minimal equipment. We'll work with whatever resources you have available."
  },
  {
    question: "What support do I get?",
    answer: "You'll receive personalized workout plans, nutrition guidance, regular check-ins, and access to our support team. Higher tier plans include video calls and more frequent communication."
  },
  {
    question: "How are the workouts customized?",
    answer: "We assess your current fitness level, goals, available equipment, and schedule to create a program that works for you. Programs are adjusted based on your progress and feedback."
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 soft-lavender">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
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
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
          >
            Get Personal Answers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
