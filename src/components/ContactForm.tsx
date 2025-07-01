
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
    weight: '',
    height: '',
    fitnessGoal: '',
    experience: '',
    timeCommitment: '',
    currentActivity: '',
    motivation: '',
    dietPreference: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    height: '',
    fitnessGoal: '',
    experience: '',
    timeCommitment: '',
    currentActivity: '',
    motivation: '',
    dietPreference: ''
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
      weight: '',
      height: '',
      fitnessGoal: '',
      experience: '',
      timeCommitment: '',
      currentActivity: '',
      motivation: '',
      dietPreference: ''
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
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.height) newErrors.height = 'Height is required';
    if (!formData.fitnessGoal) newErrors.fitnessGoal = 'Fitness goal is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.timeCommitment) newErrors.timeCommitment = 'Time commitment is required';
    if (!formData.currentActivity) newErrors.currentActivity = 'Current activity level is required';
    if (!formData.motivation) newErrors.motivation = 'Motivation is required';
    if (!formData.dietPreference) newErrors.dietPreference = 'Diet preference is required';

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
      
      setFormData({ 
        name: '', email: '', phone: '', age: '', weight: '', height: '',
        fitnessGoal: '', experience: '', timeCommitment: '', currentActivity: '', 
        motivation: '', dietPreference: '' 
      });
      setErrors({ 
        name: '', email: '', phone: '', age: '', weight: '', height: '',
        fitnessGoal: '', experience: '', timeCommitment: '', currentActivity: '', 
        motivation: '', dietPreference: '' 
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to{' '}
            <span className="text-orange-500">
              Transform?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your dream physique. Join India's leading fitness transformation journey!
          </p>
        </div>
        
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Image */}
          <div className="relative h-64 lg:h-auto">
            <img 
              src="/lovable-uploads/41b2886b-aeb4-4b4a-9015-82acd652f90d.png"
              alt="Fitness transformation coach Abhiram Nair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          
          {/* Right Form */}
          <div className="p-6 lg:p-8 bg-gray-50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                    Age *
                  </label>
                  <select
                    id="age"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select age</option>
                    <option value="18-25">18-25 years</option>
                    <option value="26-35">26-35 years</option>
                    <option value="36-45">36-45 years</option>
                    <option value="46+">46+ years</option>
                  </select>
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Weight (kg) *
                  </label>
                  <input
                    type="number"
                    id="weight"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.weight ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter weight in kg"
                  />
                  {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
                </div>
                
                <div>
                  <label htmlFor="height" className="block text-sm font-semibold text-gray-700 mb-2">
                    Height (cm) *
                  </label>
                  <input
                    type="number"
                    id="height"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.height ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter height in cm"
                  />
                  {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="fitnessGoal" className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Fitness Goal *
                </label>
                <select
                  id="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={(e) => handleInputChange('fitnessGoal', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                    errors.fitnessGoal ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your primary goal</option>
                  <option value="weight-loss">Weight Loss & Fat Burn</option>
                  <option value="muscle-gain">Muscle Gain & Strength</option>
                  <option value="body-recomposition">Body Recomposition</option>
                  <option value="general-fitness">General Fitness & Health</option>
                </select>
                {errors.fitnessGoal && <p className="text-red-500 text-sm mt-1">{errors.fitnessGoal}</p>}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Fitness Experience *
                  </label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select experience</option>
                    <option value="beginner">Beginner (0-6 months)</option>
                    <option value="intermediate">Intermediate (6 months - 2 years)</option>
                    <option value="advanced">Advanced (2+ years)</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>
                
                <div>
                  <label htmlFor="timeCommitment" className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Commitment *
                  </label>
                  <select
                    id="timeCommitment"
                    value={formData.timeCommitment}
                    onChange={(e) => handleInputChange('timeCommitment', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.timeCommitment ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Time available</option>
                    <option value="30-min">30 minutes/day</option>
                    <option value="45-min">45 minutes/day</option>
                    <option value="1-hour">1 hour/day</option>
                    <option value="90-min">90+ minutes/day</option>
                  </select>
                  {errors.timeCommitment && <p className="text-red-500 text-sm mt-1">{errors.timeCommitment}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="currentActivity" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Activity Level *
                  </label>
                  <select
                    id="currentActivity"
                    value={formData.currentActivity}
                    onChange={(e) => handleInputChange('currentActivity', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.currentActivity ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select activity level</option>
                    <option value="sedentary">Sedentary (Office job)</option>
                    <option value="lightly-active">Lightly Active</option>
                    <option value="moderately-active">Moderately Active</option>
                    <option value="very-active">Very Active</option>
                  </select>
                  {errors.currentActivity && <p className="text-red-500 text-sm mt-1">{errors.currentActivity}</p>}
                </div>
                
                <div>
                  <label htmlFor="dietPreference" className="block text-sm font-semibold text-gray-700 mb-2">
                    Diet Preference *
                  </label>
                  <select
                    id="dietPreference"
                    value={formData.dietPreference}
                    onChange={(e) => handleInputChange('dietPreference', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                      errors.dietPreference ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select diet preference</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                  {errors.dietPreference && <p className="text-red-500 text-sm mt-1">{errors.dietPreference}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                  What motivates you most? *
                </label>
                <select
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all ${
                    errors.motivation ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your motivation</option>
                  <option value="health">Better Health & Energy</option>
                  <option value="confidence">Improved Confidence</option>
                  <option value="strength">Getting Stronger</option>
                  <option value="appearance">Looking Better</option>
                  <option value="lifestyle">Lifestyle Change</option>
                </select>
                {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 mt-6"
              >
                🚀 Start My Transformation Now
              </button>
            </form>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                🔒 Your information is secure and will never be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
