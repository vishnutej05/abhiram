import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useTheme } from '../hooks/use-theme';

const ContactForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    struggle: '',
    previousCoaching: '',
    investmentLevel: '',
    referralSource: ''
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
    const requiredFields = ['name', 'email', 'phone', 'age', 'struggle', 'previousCoaching', 'investmentLevel', 'referralSource'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // New Google Sheets App Script deployment URL
      // You'll need to replace this with your new deployment URL after setting up the script
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzo1aYOXY5coarz5tlDytrwfCtfhIE9rtjuIFtdd_eCtfK3_uS6ejD8l3DNYjbTLBLRRA/exec';
      
      // Create a form element to submit via hidden iframe - this method avoids CORS issues
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = scriptURL;
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

      // Listen for iframe load to determine success/failure
      iframe.onload = () => {
        try {
          setSubmitStatus('success');
          setIsSubmitting(false);
          
          // Show success toast
          toast({
            title: "Success!",
            description: "Your information has been submitted successfully. We'll get back to you soon!",
            duration: 5000,
            className: `${
              theme === 'dark'
                ? 'bg-zinc-800 text-white border-electric-blue'
                : 'bg-white text-gray-900 border-strong-green'
            }`,
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            age: '',
            struggle: '',
            previousCoaching: '',
            investmentLevel: '',
            referralSource: ''
          });
        } catch (error) {
          console.error('Error processing form submission:', error);
          setSubmitStatus('error');
          setIsSubmitting(false);
          
          // Show error toast
          toast({
            title: "Error",
            description: "There was an error submitting your form. Please try again.",
            variant: "destructive",
            duration: 5000,
            className: `${
              theme === 'dark'
                ? 'bg-zinc-800 text-white border-red-500'
                : 'bg-white text-gray-900 border-red-500'
            }`,
          });
        }
      };

      // Submit the form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

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
        className: `${
          theme === 'dark'
            ? 'bg-zinc-800 text-white border-red-500'
            : 'bg-white text-gray-900 border-red-500'
        }`,
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
          className={`lg:hidden seamless-section min-h-[100vh] py-12 flex flex-col ${
            theme === 'dark'
              ? 'bg-zinc-900 bg-opacity-95'
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
          
          {/* Header Section - Larger and prominent */}
          <div className="text-center w-full px-4 mb-8 relative z-10">
            <h2 className={`text-4xl sm:text-5xl font-bold font-formom font-helvetica uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              BUILD YOUR <span className={theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}>LEGACY</span><span className={theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}></span>
            </h2>
            <p className={`mt-3 text-lg sm:text-xl font-helvetica mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-xs sm:max-w-lg`}>
              Join thousands who've transformed their lives with our proven fitness system.
            </p>
          </div>
        
          {/* Form Card - Positioned at bottom */}
          <div className="relative z-10 w-full px-4 mt-auto flex-1 flex justify-center items-center">
            {/* Mobile Form Container */}
            <div
              className={`w-full max-w-sm mx-auto ${
                theme === 'dark'
                  ? 'bg-zinc-900/95 border border-zinc-700'
                  : 'bg-white/95 border border-emerald-100'
              } rounded-xl shadow-xl p-5 sm:p-6 mb-6`}
            >
              <div className="mb-4 text-center">
                <h3
                  className={`text-xl font-bold font-formom`}
                >
                  <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                    Start Your
                  </span> <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>Transformation</span>
                </h3>
              </div>
              
              {/* Updated Mobile Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div>
                  <Label htmlFor="mobile-name" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Name *</Label>
                  <Input
                    id="mobile-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-xs rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue hover:border-electric-blue/70'
                        : 'bg-white border-emerald-100 focus:ring-strong-green hover:border-strong-green/70'
                    }`}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="mobile-email" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Email *</Label>
                    <div className="relative">
                      <Input
                        id="mobile-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-8 pr-3 py-2 text-xs rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:border-transparent ${
                          theme === 'dark'
                            ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue hover:border-electric-blue/70'
                            : 'bg-white border-emerald-100 focus:ring-strong-green hover:border-strong-green/70'
                        }`}
                        placeholder="Your email address"
                      />
                      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#aaa' : '#666'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </div>
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
                      className={`w-full px-2 py-1 text-xs rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue hover:border-electric-blue/70'
                          : 'bg-white border-emerald-100 focus:ring-strong-green hover:border-strong-green/70'
                      }`}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                {/* Age */}
                <div>
                  <Label htmlFor="mobile-age" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Age *</Label>
                  <Input
                    id="mobile-age"
                    name="age"
                    type="number"
                    required
                    min="18"
                    max="99"
                    value={formData.age}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-xs rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue hover:border-electric-blue/70'
                        : 'bg-white border-emerald-100 focus:ring-strong-green hover:border-strong-green/70'
                    }`}
                    placeholder="Your age"
                  />
                </div>

                {/* Struggle */}
                <div>
                  <Label htmlFor="mobile-struggle" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>What do you struggle the most with in fitness? *</Label>
                  <textarea
                    id="mobile-struggle"
                    name="struggle"
                    rows={3}
                    required
                    value={formData.struggle}
                    onChange={handleChange}
                    placeholder="Please share your fitness challenges..."
                    className={`w-full px-3 py-2 text-xs rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:border-transparent resize-none ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue hover:border-electric-blue/70'
                        : 'bg-white border-emerald-100 focus:ring-strong-green hover:border-strong-green/70'
                    }`}
                  />
                </div>

                {/* Previous Coaching */}
                <div>
                  <Label htmlFor="mobile-previousCoaching" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Have you worked with coaches and paid programs before? *</Label>
                  <div className="flex space-x-4 mt-1">
                    <label className={`flex items-center space-x-2 cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <input
                        type="radio"
                        name="previousCoaching"
                        value="Yes"
                        checked={formData.previousCoaching === "Yes"}
                        onChange={handleChange}
                        className={`form-radio h-4 w-4 ${
                          theme === 'dark'
                            ? 'text-electric-blue focus:ring-electric-blue'
                            : 'text-strong-green focus:ring-strong-green'
                        }`}
                      />
                      <span className="text-xs">Yes</span>
                    </label>
                    <label className={`flex items-center space-x-2 cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <input
                        type="radio"
                        name="previousCoaching"
                        value="No"
                        checked={formData.previousCoaching === "No"}
                        onChange={handleChange}
                        className={`form-radio h-4 w-4 ${
                          theme === 'dark'
                            ? 'text-electric-blue focus:ring-electric-blue'
                            : 'text-strong-green focus:ring-strong-green'
                        }`}
                      />
                      <span className="text-xs">No</span>
                    </label>
                  </div>
                </div>

                {/* Investment Level */}
                <div>
                  <Label htmlFor="mobile-investmentLevel" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    How committed are you to invest in yourself to transform your life? *
                  </Label>
                  <select
                    id="mobile-investmentLevel"
                    name="investmentLevel"
                    required
                    value={formData.investmentLevel}
                    onChange={handleChange}
                    className={`w-full px-2 py-2 text-xs rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:border-transparent appearance-none bg-no-repeat bg-right ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue hover:border-electric-blue/70'
                        : 'bg-white border-emerald-100 focus:ring-strong-green hover:border-strong-green/70'
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${theme === 'dark' ? 'white' : 'gray'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundSize: '1.25em',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="">Select your investment level</option>
                    <option value="₹0 - Just exploring, I'm not ready.">₹0 - Just exploring, I'm not ready.</option>
                    <option value="₹15,000 - Ready Looking for DIY/low cost programs.">₹15,000 - Ready Looking for DIY/low cost programs.</option>
                    <option value="₹50,000 - I'm serious, just need some clarity.">₹50,000 - I'm serious, just need some clarity.</option>
                    <option value="₹80,000+ - I'm ready to transform all out.">₹80,000+ - I'm ready to transform all out.</option>
                  </select>
                </div>

                {/* Referral Source */}
                <div>
                  <Label htmlFor="mobile-referralSource" className={`text-xs font-medium mb-1 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    How did you come across my service? *
                  </Label>
                  <select
                    id="mobile-referralSource"
                    name="referralSource"
                    required
                    value={formData.referralSource}
                    onChange={handleChange}
                    className={`w-full px-2 py-2 text-xs rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:border-transparent appearance-none bg-no-repeat bg-right ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-electric-blue hover:border-electric-blue/70'
                        : 'bg-white border-emerald-100 focus:ring-strong-green hover:border-strong-green/70'
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${theme === 'dark' ? 'white' : 'gray'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundSize: '1.25em',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="">Select referral source</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Email">Email</option>
                    <option value="YouTube">YouTube</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-xs font-bold py-2 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    theme === 'dark' 
                      ? 'bg-[hsl(142,71%,50%)] text-black' 
                      : 'bg-[hsl(142,71%,30%)] text-white'
                  } hover:opacity-90`}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'START TRANSFORMATION'}
                </button>
              </form>
            </div>
          </div>
        </section>  
        
        {/* Desktop Section - Completely Separate */}
        <section className={`hidden lg:block seamless-section ${theme === 'dark' ? 'bg-zinc-900 bg-opacity-95' : 'bg-white'}`}>
          <div className="w-full py-12">
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-formom font-helvetica ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                BUILD YOUR{' '}
                <span className={theme === 'dark' ? 'text-electric-blue' : 'text-emerald-700'}>LEGACY</span>
              </h2>
              <p className={`text-xl font-helvetica ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Join thousands who've transformed their lives with our proven fitness system.
              </p>
            </div>
            <div className={`grid lg:grid-cols-2 h-[750px] max-w-6xl mx-auto ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'} rounded-3xl shadow-2xl overflow-hidden`}>
              {/* Left side - Image */}
              <div
                className="relative h-full w-full"
                style={{
                  backgroundImage: "url('/lovable-uploads/Regis form.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '100%',
                  height: '100%',
                  width: '100%',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Right side - Form */}
              <div className={`p-3 lg:p-4 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'} flex flex-col`}>
                <div className="mb-2 text-center">
                  <h3 className={`text-2xl font-bold mb-1 font-helvetica`}>
                    <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>
                      Start Your
                    </span> <span className={`${theme === 'dark' ? 'text-electric-blue' : 'text-strong-green'}`}>Transformation</span>
                  </h3>
                </div>
                
                {/* Updated Desktop Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent border-2 transition-all duration-200 ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue hover:border-electric-blue/50' 
                          : 'border-electric-blue-100 focus:ring-electric-blue-400 hover:border-electric-blue-300'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  {/* Email */}
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
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent border-2 transition-all duration-200 ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue hover:border-electric-blue/50' 
                          : 'border-electric-blue-100 focus:ring-electric-blue-400 hover:border-electric-blue-300'
                      }`}
                      placeholder="Your email address"
                    />
                  </div>
                  
                  {/* Phone & Age */}
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
                        className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent border-2 transition-all duration-200 ${
                          theme === 'dark' 
                            ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue hover:border-electric-blue/50' 
                            : 'border-electric-blue-100 focus:ring-electric-blue-400 hover:border-electric-blue-300'
                        }`}
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="age" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        Age *
                      </Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        min="18"
                        max="99"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent border-2 transition-all duration-200 ${
                          theme === 'dark' 
                            ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue hover:border-electric-blue/50' 
                            : 'border-electric-blue-100 focus:ring-electric-blue-400 hover:border-electric-blue-300'
                        }`}
                        placeholder="Your age"
                      />
                    </div>
                  </div>
                  
                  {/* Struggle */}
                  <div>
                    <Label htmlFor="struggle" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      What do you struggle the most with in fitness? *
                    </Label>
                    <textarea
                      id="struggle"
                      name="struggle"
                      rows={2}
                      required
                      value={formData.struggle}
                      onChange={handleChange}
                      placeholder="Please share your fitness challenges in detail..."
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent resize-none border-2 transition-all duration-200 ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue hover:border-electric-blue/50' 
                          : 'border-electric-blue-100 focus:ring-electric-blue-400 hover:border-electric-blue-300'
                      }`}
                    />
                  </div>
                  
                  {/* Previous Coaching */}
                  <div>
                    <Label className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Have you worked with coaches and paid programs before? *
                    </Label>
                    <div className="flex space-x-6 mt-1">
                      <label className={`flex items-center space-x-2 cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        <input
                          type="radio"
                          name="previousCoaching"
                          value="Yes"
                          checked={formData.previousCoaching === "Yes"}
                          onChange={handleChange}
                          className={`form-radio h-5 w-5 ${
                            theme === 'dark'
                              ? 'text-electric-blue focus:ring-electric-blue'
                              : 'text-strong-green focus:ring-strong-green'
                          }`}
                          required
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className={`flex items-center space-x-2 cursor-pointer ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        <input
                          type="radio"
                          name="previousCoaching"
                          value="No"
                          checked={formData.previousCoaching === "No"}
                          onChange={handleChange}
                          className={`form-radio h-5 w-5 ${
                            theme === 'dark'
                              ? 'text-electric-blue focus:ring-electric-blue'
                              : 'text-strong-green focus:ring-strong-green'
                          }`}
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Investment Level */}
                  <div>
                    <Label htmlFor="investmentLevel" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      How committed are you to invest in yourself to transform your life? *
                    </Label>
                    <select
                      id="investmentLevel"
                      name="investmentLevel"
                      required
                      value={formData.investmentLevel}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent appearance-none bg-no-repeat bg-right ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                          : 'border border-electric-blue-200 bg-white focus:ring-electric-blue-400'
                      }`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${theme === 'dark' ? 'white' : 'gray'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundSize: '1.5em',
                        paddingRight: '2.5rem',
                      }}
                    >
                      <option value="">Select your investment level</option>
                      <option value="₹0 - Just exploring, I'm not ready.">₹0 - Just exploring, I'm not ready.</option>
                      <option value="₹15,000 - Ready Looking for DIY/low cost programs.">₹15,000 - Ready Looking for DIY/low cost programs.</option>
                      <option value="₹50,000 - I'm serious, just need some clarity.">₹50,000 - I'm serious, just need some clarity.</option>
                      <option value="₹80,000+ - I'm ready to transform all out.">₹80,000+ - I'm ready to transform all out.</option>
                    </select>
                  </div>
                  
                  {/* Referral Source */}
                  <div>
                    <Label htmlFor="referralSource" className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      How did you come across my service? *
                    </Label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      required
                      value={formData.referralSource}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent appearance-none bg-no-repeat bg-right ${
                        theme === 'dark' 
                          ? 'bg-zinc-700 border-zinc-600 text-white focus:ring-electric-blue' 
                          : 'border border-electric-blue-200 bg-white focus:ring-electric-blue-400'
                      }`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${theme === 'dark' ? 'white' : 'gray'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundSize: '1.5em',
                        paddingRight: '2.5rem',
                      }}
                    >
                      <option value="">Select referral source</option>
                      <option value="Friend/Family">Friend/Family</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Email">Email</option>
                      <option value="YouTube">YouTube</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed mt-2 mb-0"
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
