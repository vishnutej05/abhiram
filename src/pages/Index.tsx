
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VSLSection from '@/components/VSLSection';
import FeaturesSection from '@/components/FeaturesSection';
import TransformationsSection from '@/components/TransformationsSection';
import PricingSection from '@/components/PricingSection';
import ContactForm from '@/components/ContactForm';
import InstagramSection from '@/components/InstagramSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VSLSection />
      <FeaturesSection />
      <TransformationsSection />
      <PricingSection />
      <ContactForm />
      <InstagramSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
