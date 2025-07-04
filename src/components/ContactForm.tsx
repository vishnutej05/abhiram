
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    goal: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      goal: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

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

    if (!formData.goal.trim()) {
      newErrors.goal = 'Goal is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Create a hidden form and submit it to avoid CORS issues
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://script.google.com/macros/s/AKfycbz9w6IDFDj88SOF2HKYmOYgTUOzX2MDaBCNvD8YhwgJT8ROgl8uVmyYTKJabt3ANo38/exec';
        form.target = 'hidden_iframe';

        // Create hidden iframe
        const iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        
        // Add event listener to iframe to check for response
        iframe.onload = () => {
          try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              const responseText = iframeDoc.body.innerText;
              console.log('Response from Google Apps Script:', responseText);
              
              // Try to parse the response
              try {
                const response = JSON.parse(responseText);
                if (response.result !== 'success') {
                  console.error('Script error:', response.error);
                  toast({
                    title: "Script Error",
                    description: `Google Apps Script error: ${response.error || 'Unknown error'}`,
                    variant: "destructive",
                  });
                }
              } catch (parseError) {
                console.log('Non-JSON response:', responseText);
              }
            }
          } catch (error) {
            console.log('Could not read iframe response (expected due to CORS)');
          }
        };
        
        document.body.appendChild(iframe);

        // Add form fields
        const fields = [
          { name: 'name', value: formData.name },
          { name: 'email', value: formData.email },
          { name: 'phone', value: formData.phone },
          { name: 'goal', value: formData.goal }
        ];

        console.log('Submitting form data:', fields);

        fields.forEach(field => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = field.name;
          input.value = field.value;
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();

        // Clean up
        setTimeout(() => {
          document.body.removeChild(form);
          document.body.removeChild(iframe);
        }, 1000);

        toast({
          title: "Registration Successful! 🎉",
          description: "Welcome to your fitness transformation journey. We'll contact you within 24 hours!",
        });
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', goal: '' });
        setErrors({ name: '', email: '', phone: '', goal: '' });

      } catch (err) {
        console.error('Submission error:', err);
        toast({
          title: "Submission Error",
          description: "There was a problem submitting the form. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/f33dcdcd-1e3a-474e-9f33-e075851661a6.png)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transform?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take the first step towards your dream physique. Fill out the form below and let's start your fitness transformation journey today!
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
             <div>
                <label htmlFor="goal" className="block text-sm font-semibold text-gray-700 mb-2">
                  Goal*
                </label>
                <input
                  type="text"
                  id="goal"
                  value={formData.goal}
                  onChange={(e) => handleInputChange('goal', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    errors.goal ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your goal"
                />
                {errors.goal && <p className="text-red-500 text-sm mt-1">{errors.goal}</p>}
              </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Personal consultation call within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Custom fitness and nutrition plan creation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Begin your transformation journey immediately
                </li>
              </ul>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🚀 Start My Transformation Now
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              🔒 Your information is secure and will never be shared. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
