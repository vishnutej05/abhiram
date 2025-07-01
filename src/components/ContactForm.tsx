
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    fitnessGoal: '',
    experience: '',
    timeCommitment: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    fitnessGoal: '',
    experience: '',
    timeCommitment: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Start Your Transformation - Online Fitness Coach India";
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

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      age: '',
      fitnessGoal: '',
      experience: '',
      timeCommitment: ''
    };

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.fitnessGoal) newErrors.fitnessGoal = 'Fitness goal is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.timeCommitment) newErrors.timeCommitment = 'Time commitment is required';

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to your fitness transformation journey. We'll contact you within 24 hours!",
      });
      
      setFormData({ name: '', email: '', phone: '', age: '', fitnessGoal: '', experience: '', timeCommitment: '' });
      setErrors({ name: '', email: '', phone: '', age: '', fitnessGoal: '', experience: '', timeCommitment: '' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to{' '}
            <span className="text-orange-500">
              Transform?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your dream physique. Join India's leading fitness transformation journey!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="lg:order-1 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/7ab35640-7c93-4304-8d32-e539ba5808c0.png"
                alt="Fitness transformation programs - All our offers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Form */}
          <div className="lg:order-2">
            <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="age" className="block text-sm font-bold text-gray-700 mb-3">
                      Age *
                    </label>
                    <select
                      id="age"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg ${
                        errors.age ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your age</option>
                      <option value="18-25">18-25 years</option>
                      <option value="26-35">26-35 years</option>
                      <option value="36-45">36-45 years</option>
                      <option value="46+">46+ years</option>
                    </select>
                    {errors.age && <p className="text-red-500 text-sm mt-2">{errors.age}</p>}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="fitnessGoal" className="block text-sm font-bold text-gray-700 mb-3">
                    Primary Fitness Goal *
                  </label>
                  <select
                    id="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={(e) => handleInputChange('fitnessGoal', e.target.value)}
                    className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg ${
                      errors.fitnessGoal ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your primary goal</option>
                    <option value="weight-loss">Weight Loss & Fat Burn</option>
                    <option value="muscle-gain">Muscle Gain & Strength</option>
                    <option value="body-recomposition">Body Recomposition</option>
                    <option value="general-fitness">General Fitness & Health</option>
                  </select>
                  {errors.fitnessGoal && <p className="text-red-500 text-sm mt-2">{errors.fitnessGoal}</p>}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-bold text-gray-700 mb-3">
                      Fitness Experience *
                    </label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg ${
                        errors.experience ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Beginner (0-6 months)</option>
                      <option value="intermediate">Intermediate (6 months - 2 years)</option>
                      <option value="advanced">Advanced (2+ years)</option>
                    </select>
                    {errors.experience && <p className="text-red-500 text-sm mt-2">{errors.experience}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="timeCommitment" className="block text-sm font-bold text-gray-700 mb-3">
                      Time Commitment *
                    </label>
                    <select
                      id="timeCommitment"
                      value={formData.timeCommitment}
                      onChange={(e) => handleInputChange('timeCommitment', e.target.value)}
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-lg ${
                        errors.timeCommitment ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Time you can dedicate</option>
                      <option value="30-min">30 minutes/day</option>
                      <option value="45-min">45 minutes/day</option>
                      <option value="1-hour">1 hour/day</option>
                      <option value="90-min">90+ minutes/day</option>
                    </select>
                    {errors.timeCommitment && <p className="text-red-500 text-sm mt-2">{errors.timeCommitment}</p>}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">What happens next?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      Personal consultation call within 24 hours
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      Custom fitness and nutrition plan creation
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      Begin your transformation journey immediately
                    </li>
                  </ul>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  🚀 Start My Transformation Now
                </button>
              </form>
              
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">
                  🔒 Your information is secure and will never be shared. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
