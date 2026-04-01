import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteBanner from "@/components/QuoteBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BuyBook from "@/components/BuyBook";
import Contact from "@/components/Contact";
import GridLines from "@/components/GridLines";

export default function Home() {
  return (
    <>
      <GridLines />
      <Navbar />
      <Hero />
      <QuoteBanner />
      <Testimonials />
      <Services />
      <About />
      <BuyBook />
      <Contact />
      
      <footer style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--background)' }}>
        <p className="brand-font" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Healing<span className="text-accent">.</span></p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.05em' }}>© 2026 Healing Consultancy. All rights reserved.</p>
      </footer>
    </>
  );
}
