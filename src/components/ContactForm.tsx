
import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    goal: '',
    experience: '',
    timeline: '',
    commitment: '',
    budget: ''
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Get Started - Online Fitness Transformation Coach India";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 soft-peach">
      <div className="w-full">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready To{' '}
            <span className="text-orange-600">
              Transform?
            </span>
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start your{' '}
            <span className="text-orange-600">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your fitness transformation. Fill out the form below and let's begin your journey together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 min-h-[600px] max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/pic 2.png"
              alt="Abhiram Nair fitness transformation coach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          {/* Right side - Form */}
          <div className="p-8 lg:p-12 bg-orange-50 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="age" className="text-sm font-medium text-gray-700 mb-2 block">
                    Age *
                  </Label>
                  <select
                    id="age"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select Age Range</option>
                    <option value="18-25">18-25 years</option>
                    <option value="26-35">26-35 years</option>
                    <option value="36-45">36-45 years</option>
                    <option value="46+">46+ years</option>
                  </select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="goal" className="text-sm font-medium text-gray-700 mb-2 block">
                  Primary Fitness Goal *
                </Label>
                <select
                  id="goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                >
                  <option value="">Select Your Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Strength Building</option>
                  <option value="endurance">Endurance</option>
                  <option value="overall-fitness">Overall Fitness</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="experience" className="text-sm font-medium text-gray-700 mb-2 block">
                    Fitness Experience *
                  </Label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select Experience</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="timeline" className="text-sm font-medium text-gray-700 mb-2 block">
                    Desired Timeline *
                  </Label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select Timeline</option>
                    <option value="3-months">3 Months</option>
                    <option value="6-months">6 Months</option>
                    <option value="12-months">12 Months</option>
                    <option value="long-term">Long Term</option>
                  </select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="commitment" className="text-sm font-medium text-gray-700 mb-2 block">
                  Weekly Commitment *
                </Label>
                <select
                  id="commitment"
                  name="commitment"
                  required
                  value={formData.commitment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                >
                  <option value="">Select Commitment</option>
                  <option value="3-4-hours">3-4 hours per week</option>
                  <option value="5-6-hours">5-6 hours per week</option>
                  <option value="7-8-hours">7-8 hours per week</option>
                  <option value="9+-hours">9+ hours per week</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full btn-matte text-lg font-bold py-4"
              >
                Start My Transformation Journey
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
