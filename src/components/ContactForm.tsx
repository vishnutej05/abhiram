
import React, { useState, useRef, useEffect } from 'react';

const ContactForm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    fitnessGoal: '',
    fitnessLevel: '',
    workoutFrequency: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Free Consultation - Online Fitness Coach India";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          fitnessGoal: '',
          fitnessLevel: '',
          workoutFrequency: '',
          message: '',
        });
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-br from-baby-powder to-bone">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-battleship-gray mb-6">
            Ready To{' '}
            <span className="text-burnt-sienna">
              Transform?
            </span>
          </h2>
          <p className="text-xl text-battleship-gray max-w-3xl mx-auto">
            Start your fitness transformation journey today with India's leading online fitness coach
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-baby-powder rounded-3xl shadow-2xl overflow-hidden border border-ash-gray/30">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/41b2886b-aeb4-4b4a-9015-82acd652f90d.png"
              alt="Fitness transformation coach"
              className="w-full h-full object-cover min-h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-battleship-gray/20 to-transparent"></div>
          </div>
          
          {/* Right side - Form */}
          <div className="p-12 bg-baby-powder">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-battleship-gray mb-8 text-center">
                Start Your Transformation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-battleship-gray mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-battleship-gray mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-battleship-gray mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-battleship-gray mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-battleship-gray mb-2">
                    Age *
                  </label>
                  <select
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                  >
                    <option value="">Select Age Range</option>
                    <option value="18-25">18-25 years</option>
                    <option value="26-35">26-35 years</option>
                    <option value="36-45">36-45 years</option>
                    <option value="46-55">46-55 years</option>
                    <option value="55+">55+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-battleship-gray mb-2">
                    Primary Fitness Goal *
                  </label>
                  <select
                    name="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                  >
                    <option value="">Select Your Goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="strength">Build Strength</option>
                    <option value="endurance">Improve Endurance</option>
                    <option value="overall-fitness">Overall Fitness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-battleship-gray mb-2">
                    Current Fitness Level *
                  </label>
                  <select
                    name="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                  >
                    <option value="">Select Your Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-battleship-gray mb-2">
                    Workout Frequency *
                  </label>
                  <select
                    name="workoutFrequency"
                    value={formData.workoutFrequency}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                  >
                    <option value="">How often can you workout?</option>
                    <option value="2-3">2-3 times per week</option>
                    <option value="4-5">4-5 times per week</option>
                    <option value="6-7">6-7 times per week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-battleship-gray mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-ash-gray/50 rounded-lg focus:ring-2 focus:ring-burnt-sienna focus:border-transparent transition-all duration-300 bg-baby-powder"
                    placeholder="Tell us about your fitness journey..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-matte text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'START MY TRANSFORMATION'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
