
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "About Coach Abhiram - Best Online Fitness Coach India";
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

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* First Row - Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/f4895f09-a8e6-40b3-9cf2-a450e373330d.png"
                alt="Abhiram Nair - Online fitness transformation coach India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-green-700 text-stone-50 p-8 rounded-3xl shadow-2xl animate-bounce">
              <div className="text-3xl font-bold">#1</div>
              <div className="text-sm font-medium">COACH</div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
                Coach{' '}
                <span className="text-green-700">
                  Abhiram
                </span>
              </h2>
              <div className="h-2 w-24 bg-green-700 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-xl text-stone-700 leading-relaxed">
              <p className="font-semibold text-2xl text-stone-800">
                Lost 30kg. Built lean muscle. Now I help others achieve their best physique.
              </p>
              
              <p>
                <strong className="text-stone-800">No shortcuts. Just proven results.</strong> My holistic fitness and mindset approach has transformed 500+ lives across India through sustainable, science-based methods.
              </p>
              
              <p>
                With over 5 years of experience in fitness coaching, I've developed a systematic approach that combines personalized workout plans, nutrition guidance, and mental conditioning to create lasting transformations.
              </p>
              
              <p>
                My philosophy is rooted in building <strong className="text-green-700">natural strength</strong> - not just physical, but mental resilience that carries over into every aspect of life. Every transformation begins with understanding your unique body, lifestyle, and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Content Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="lg:order-2 relative transform hover:scale-105 transition-transform duration-500">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/eb03bd06-be35-426e-bca4-a6717a907409.png"
                alt="Abhiram Nair fitness coach transformation journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:order-1 space-y-8 animate-fade-in">
            <div className="space-y-6 text-xl text-stone-700 leading-relaxed">
              <p>
                Ready to start your <strong className="text-green-700">transformation journey?</strong>
              </p>
              
              <p>
                My approach goes beyond traditional fitness coaching. I focus on creating <strong className="text-stone-800">sustainable lifestyle changes</strong> that naturally integrate into your daily routine, making fitness a part of who you are rather than something you have to force.
              </p>
              
              <p>
                Through personalized workout and nutrition plans, I've helped hundreds achieve their dream physique using evidence-based methods that prioritize long-term health over quick fixes. Each program is carefully crafted to match your current fitness level, available time, and personal preferences.
              </p>
              
              <p>
                What sets my coaching apart is the emphasis on <strong className="text-green-700">mindset transformation</strong>. Physical change happens when your mind is aligned with your goals. I help you develop the mental tools to overcome obstacles, stay consistent, and build unshakeable confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-stone-50 p-8 rounded-2xl shadow-xl border-2 border-green-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-700 mb-3">5+</div>
                <div className="text-stone-600 font-medium">YEARS EXPERIENCE</div>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl shadow-xl border-2 border-amber-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-amber-700 mb-3">500+</div>
                <div className="text-stone-600 font-medium">TRANSFORMED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
