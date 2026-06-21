import useSmoothScroll from '../hooks/useSmoothScroll';
import EmergencyBanner from '../components/EmergencyBanner';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import Brands from '../components/Brands';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';
import BottomCTA from '../components/BottomCTA';
import Footer from '../components/Footer';

function HomePage() {
  useSmoothScroll();

  return (
    <>
      <EmergencyBanner />
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <HowItWorks />
      <Brands />
      <Pricing />
      <Reviews />
      <BottomCTA />
      <Footer />
    </>
  );
}

export default HomePage;
