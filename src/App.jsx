import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import HowItWorks from './components/HowItWorks';
import RealImpact from './components/RealImpact';
import Features from './components/Features';
import WhoIsItFor from './components/WhoIsItFor';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-x-clip">
      <div className="absolute inset-0 bg-[#0b0a10] bg-grid-pattern -z-20"></div>
      
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] lg:w-[800px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      {/* Put Navbar outside the max-width container so it spans the entire width and sticky works better */}
      <div className="w-full sticky top-0 z-50 bg-[#0b0a10]/80 backdrop-blur-lg border-b border-white/5">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <Navbar />
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col pb-20 pt-4">
        <Hero />
        <Transformation />
        <HowItWorks />
        <RealImpact />
        <Features />
        <WhoIsItFor />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
