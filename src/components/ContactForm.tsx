import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '../hooks/use-theme';

const ContactForm = () => {
  const { theme } = useTheme();
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
        <section
          ref={sectionRef}
          className={`block lg:hidden seamless-section min-h-[90vh] max-h-[120vh] flex items-center justify-center ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-black'
              : 'bg-gradient-to-br from-slate-50 via-white to-emerald-50'
          } relative overflow-hidden`}
        >
          {/* Mobile Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: `url('/lovable-uploads/pic 2.png')`,
            }}
          ></div>

          <div className="relative z-10 w-full flex justify-center items-center">
            {/* Mobile Form Container - Compact and themed */}
            <div
              className={`max-w-xs w-full mx-auto ${
                theme === 'dark'
                  ? 'bg-zinc-900/95 border border-zinc-700'
                  : 'bg-white/95 border border-emerald-100'
              } rounded-xl shadow-xl p-4`}
            >
              <div className="mb-2 text-center">
                <h3
                  className={`text-lg font-bold font-formom ${
                    theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'
                  }`}
                >
                  Start Your <span className={theme === 'dark' ? 'text-amber-gold' : 'text-amber-gold'}>Transformation</span>
                </h3>
                <p
                  className={`text-xs font-helvetica mt-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Unlock your best self with Abhiram's proven coaching system.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-2">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="mobile-firstName" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>First Name *</Label>
                    <Input
                      id="mobile-firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile-lastName" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Last Name *</Label>
                    <Input
                      id="mobile-lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    />
                  </div>
                </div>
                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="mobile-email" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Email *</Label>
                    <Input
                      id="mobile-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile-phone" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Phone *</Label>
                    <Input
                      id="mobile-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    />
                  </div>
                </div>
                {/* Age & Goal */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="mobile-age" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Age *</Label>
                    <select
                      id="mobile-age"
                      name="age"
                      required
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="18-25">18-25</option>
                      <option value="26-35">26-35</option>
                      <option value="36-45">36-45</option>
                      <option value="46-55">46-55</option>
                      <option value="56+">56+</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="mobile-goal" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Goal *</Label>
                    <select
                      id="mobile-goal"
                      name="goal"
                      required
                      value={formData.goal}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="strength">Strength</option>
                      <option value="endurance">Endurance</option>
                      <option value="overall-fitness">Overall Fitness</option>
                      <option value="body-toning">Body Toning</option>
                    </select>
                  </div>
                </div>
                {/* Fitness Level & Frequency */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="mobile-fitnessLevel" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Level *</Label>
                    <select
                      id="mobile-fitnessLevel"
                      name="fitnessLevel"
                      required
                      value={formData.fitnessLevel}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="mobile-workoutFrequency" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Frequency *</Label>
                    <select
                      id="mobile-workoutFrequency"
                      name="workoutFrequency"
                      required
                      value={formData.workoutFrequency}
                      onChange={handleChange}
                      className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue'
                          : 'bg-white border-emerald-200 focus:ring-strong-green'
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="2-3-times">2-3/week</option>
                      <option value="4-5-times">4-5/week</option>
                      <option value="6-7-times">6-7/week</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>
                </div>
                {/* Message */}
                <div>
                  <Label htmlFor="mobile-message" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Message</Label>
                  <textarea
                    id="mobile-message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your fitness journey..."
                    className={`w-full px-2 py-2 text-xs rounded-lg focus:ring-2 focus:border-transparent resize-none ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue placeholder:text-gray-400'
                        : 'bg-white border-emerald-200 focus:ring-strong-green'
                    }`}
                  />
                </div>
                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-xs font-bold py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    theme === 'dark'
                      ? 'bg-gradient-electric-to-amber text-black hover:bg-gradient-amber-to-electric'
                      : 'bg-gradient-to-r from-strong-green to-amber-gold hover:from-amber-gold hover:to-strong-green text-white'
                  }`}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'START TRANSFORMATION'}
                </button>
              </form>
            </div>
          </div>
        </section>  
        
        {/* Desktop Section - Completely Separate */}
        <section className={`hidden lg:block seamless-section ${theme === 'dark' ? 'soft-blush' : 'soft-lavender'}`}>
          <div className="w-full py-12">
            <div className="text-center mb-10">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-formom ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Build Your{' '}
                <span className={theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}>Legacy: </span>
              </h2>
              <p className={`text-lg max-w-2xl mx-auto font-helvetica ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Join thousands who've transformed their lives with our proven fitness system.
              </p>
            </div>
            <div className={`grid lg:grid-cols-2 min-h-[500px] max-h-[90%] max-w-6xl mx-auto ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'} rounded-3xl shadow-2xl overflow-hidden`}>
              {/* Left side - Image */}
              <div className="relative">
                <img
                  src="/lovable-uploads/Regis form.png"
                  alt="Abhiram Nair fitness transformation coach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Right side - Form */}
              <div className={`p-6 lg:p-8 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'} flex flex-col justify-center`}>
                <div className="mb-6 text-center">
                  <h3 className={`text-xl font-bold mb-2 font-helvetica ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Start Your <span className="text-electric-blue">Transformation</span>
                  </h3>
                  <p className={`text-sm font-helvetica ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Fill out the form below and let's begin your journey together.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                            : 'border border-electric-blue-200 focus:ring-electric-blue-400'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                            : 'border border-electric-blue-200 focus:ring-electric-blue-400'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                          : 'border border-electric-blue-200 focus:ring-electric-blue-400'
                      }`}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                            : 'border border-electric-blue-200 focus:ring-electric-blue-400'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="age" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        Age *
                      </Label>
                      <select
                        id="age"
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                          theme === 'dark' 
                            ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                            : 'border border-electric-blue-200 bg-white focus:ring-electric-blue-400'
                        }`}
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
                    <Label htmlFor="goal" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Primary Fitness Goal *
                    </Label>
                    <select
                      id="goal"
                      name="goal"
                      required
                      value={formData.goal}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                          : 'border border-electric-blue-200 bg-white focus:ring-electric-blue-400'
                      }`}
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
                    <Label htmlFor="fitnessLevel" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Current Fitness Level *
                    </Label>
                    <select
                      id="fitnessLevel"
                      name="fitnessLevel"
                      required
                      value={formData.fitnessLevel}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                          : 'border border-electric-blue-200 bg-white focus:ring-electric-blue-400'
                      }`}
                    >
                      <option value="">Select Your Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="workoutFrequency" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Workout Frequency *
                    </Label>
                    <select
                      id="workoutFrequency"
                      name="workoutFrequency"
                      required
                      value={formData.workoutFrequency}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                          : 'border border-electric-blue-200 bg-white focus:ring-electric-blue-400'
                      }`}
                    >
                      <option value="">How often can you workout?</option>
                      <option value="2-3-times">2-3 times per week</option>
                      <option value="4-5-times">4-5 times per week</option>
                      <option value="6-7-times">6-7 times per week</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Message (Optional)
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness journey..."
                      className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-transparent resize-none ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                          : 'border border-electric-blue-200 focus:ring-electric-blue-400'
                      }`}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
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

