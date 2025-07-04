
import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    goal: '',
    fitnessLevel: '',
    workoutFrequency: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'age', 'goal', 'fitnessLevel', 'workoutFrequency'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create a form element to submit via hidden iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbwyQr2m1AjowhaQyT0sANynaU-XnA_qe6lgZ4qXvSwThyZAuNMi7kKuugW-1aGRXagXSQ/exec'; // Replace with your actual script ID
      form.target = 'hidden-iframe';
      form.style.display = 'none';

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Create hidden iframe if it doesn't exist
      let iframe = document.getElementById('hidden-iframe') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden-iframe';
        iframe.name = 'hidden-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Submit the form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Set success after a short delay
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Show success toast
        toast({
          title: "Success!",
          description: "Your information has been submitted successfully. We'll get back to you soon!",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          goal: '',
          fitnessLevel: '',
          workoutFrequency: '',
          message: ''
        });
      }, 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
      
      // Show error toast
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact">
      <>
        {/* Mobile Section - Completely Separate */}
        <section ref={sectionRef} className="block lg:hidden seamless-section soft-peach relative overflow-hidden">
        {/* Mobile Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('/lovable-uploads/pic 2.png')`,
          }}
        ></div>
        
        <div className="relative z-10 px-4 py-12">
          {/* Mobile Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transform Your{' '}
              <span className="text-orange-600">Body & Mind</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto">
              Ready to unlock your full potential? Join thousands who've transformed their lives.
            </p>
          </div>
          
          {/* Mobile Form Container */}
          <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Start Your Transformation
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Fill out the form below and let's begin your journey together.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mobile-firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                    First Name *
                  </Label>
                  <Input
                    id="mobile-firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="mobile-lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                    Last Name *
                  </Label>
                  <Input
                    id="mobile-lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="mobile-email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="mobile-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <Label htmlFor="mobile-phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="mobile-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <Label htmlFor="mobile-age" className="text-sm font-medium text-gray-700 mb-2 block">
                  Age *
                </Label>
                <select
                  id="mobile-age"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                >
                  <option value="">Select Age Range</option>
                  <option value="18-25">18-25 years</option>
                  <option value="26-35">26-35 years</option>
                  <option value="36-45">36-45 years</option>
                  <option value="46-55">46-55 years</option>
                  <option value="56+">56+ years</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="mobile-goal" className="text-sm font-medium text-gray-700 mb-2 block">
                  Primary Fitness Goal *
                </Label>
                <select
                  id="mobile-goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                >
                  <option value="">Select Your Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Strength Building</option>
                  <option value="endurance">Endurance</option>
                  <option value="overall-fitness">Overall Fitness</option>
                  <option value="body-toning">Body Toning</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="mobile-fitnessLevel" className="text-sm font-medium text-gray-700 mb-2 block">
                  Current Fitness Level *
                </Label>
                <select
                  id="mobile-fitnessLevel"
                  name="fitnessLevel"
                  required
                  value={formData.fitnessLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                >
                  <option value="">Select Your Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="mobile-workoutFrequency" className="text-sm font-medium text-gray-700 mb-2 block">
                  Workout Frequency *
                </Label>
                <select
                  id="mobile-workoutFrequency"
                  name="workoutFrequency"
                  required
                  value={formData.workoutFrequency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                >
                  <option value="">How often can you workout?</option>
                  <option value="2-3-times">2-3 times per week</option>
                  <option value="4-5-times">4-5 times per week</option>
                  <option value="6-7-times">6-7 times per week</option>
                  <option value="daily">Daily</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="mobile-message" className="text-sm font-medium text-gray-700 mb-2 block">
                  Message (Optional)
                </Label>
                <textarea
                  id="mobile-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness journey..."
                  className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? 'SUBMITTING...' : 'START MY TRANSFORMATION'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Desktop Section - Completely Separate */}
      <section className="hidden lg:block seamless-section soft-peach">
        <div className="w-full py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your{' '}
              <span className="text-orange-600">
                Body & Mind
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands who've transformed their lives with our proven fitness system.
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
            <div className="p-8 lg:p-12 bg-white-50 flex flex-col justify-center">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Start Your Transformation
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and let's begin your journey together.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
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
                      <option value="46-55">46-55 years</option>
                      <option value="56+">56+ years</option>
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
                    <option value="body-toning">Body Toning</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fitnessLevel" className="text-sm font-medium text-gray-700 mb-2 block">
                      Current Fitness Level *
                    </Label>
                    <select
                      id="fitnessLevel"
                      name="fitnessLevel"
                      required
                      value={formData.fitnessLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                    >
                      <option value="">Select Your Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="workoutFrequency" className="text-sm font-medium text-gray-700 mb-2 block">
                      Workout Frequency *
                    </Label>
                    <select
                      id="workoutFrequency"
                      name="workoutFrequency"
                      required
                      value={formData.workoutFrequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                    >
                      <option value="">How often can you workout?</option>
                      <option value="2-3-times">2-3 times per week</option>
                      <option value="4-5-times">4-5 times per week</option>
                      <option value="6-7-times">6-7 times per week</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                    Message (Optional)
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness journey..."
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-matte text-lg font-bold py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'START MY TRANSFORMATION'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
    </div>
  );
};

export default ContactForm;
