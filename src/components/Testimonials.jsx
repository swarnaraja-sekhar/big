import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const allTestimonials = [
    {
      id: 1,
      quote: "Implementation was seamless and the results were immediate. Our team is more productive than ever.",
      name: "Michael Thompson",
      role: "Project Manager",
      company: "Integrity Adjusting",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      highlight: true
    },
    {
      id: 2,
      quote: "The clean data export feature allowed us to finally visualize our estimating KPIs in PowerBI. A game changer.",
      name: "Amanda Foster",
      role: "Analytics Lead",
      company: "ClaimFlow",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      highlight: true
    },
    {
      id: 3,
      quote: "The peace of mind knowing every draw schedule complies with carrier guidelines is worth every penny.",
      name: "Lisa Johnson",
      role: "Finance Manager",
      company: "Elite Roofing",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      highlight: false
    },
    {
      id: 4,
      quote: "Professional reports that look like they took hours to format, generated in seconds right in the platform. Incredible tool.",
      name: "David Chen",
      role: "Operations Director",
      company: "BuildPro Services",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      highlight: false
    },
    {
      id: 5,
      quote: "We've reduced our administrative overhead by 40% in just two months. The ROI is absolutely undeniable.",
      name: "Sarah Jenkins",
      role: "VP of Operations",
      company: "Apex Restoration",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      highlight: false
    },
    {
      id: 6,
      quote: "Finally, a platform that doesn't feel like it was built in 2005. The speed and fluidity are incredible.",
      name: "Marcus Reid",
      role: "Lead Estimator",
      company: "Vanguard Estimates",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      highlight: true
    }
  ];

  // Split into two columns
  const col1 = [allTestimonials[0], allTestimonials[2], allTestimonials[4]];
  const col2 = [allTestimonials[1], allTestimonials[3], allTestimonials[5]];

  // Duplicate for infinite scroll
  const scrollingCol1 = [...col1, ...col1];
  const scrollingCol2 = [...col2, ...col2];

  const TestimonialCard = ({ data }) => (
    <div className={`flex flex-col p-8 rounded-3xl transition-all duration-300 light-theme-glow-card ${
      data.highlight 
        ? 'highlight bg-[#0b0a10] border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]' 
        : 'normal bg-[#13131c] border border-slate-800 shadow-md hover:border-slate-700'
    }`}>
      <Quote className={`w-8 h-8 mb-6 ${data.highlight ? 'text-purple-400' : 'text-purple-500/50'}`} />
      <p className={`text-lg leading-relaxed mb-8 flex-grow ${data.highlight ? 'text-white' : 'text-slate-300'}`}>
        "{data.quote}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={data.image} alt={data.name} className={`w-12 h-12 rounded-full border-2 ${data.highlight ? 'border-purple-500/30' : 'border-slate-700'}`} />
          <div className="flex flex-col">
            <span className="text-white font-bold">{data.name}</span>
            <span className="text-slate-400 text-sm">{data.role}</span>
            <span className="text-slate-500 text-xs">{data.company}</span>
          </div>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="testimonials" className="w-full flex flex-col items-center mt-32 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10 light-theme-glow-bg"></div>

      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Clients
        </h2>
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl font-light">
          See how businesses are saving time, reducing errors, and achieving more with our AI-powered automation.
        </p>
      </div>

      {/* Viewport for scrolling */}
      <div className="relative w-full max-w-6xl h-[800px] px-6 md:px-0 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
          
          {/* Column 1 - Scrolls Down */}
          <div className="relative h-full overflow-hidden hidden md:block">
            <div className="flex flex-col gap-6 animate-scroll-down absolute top-0 w-full">
              {scrollingCol1.map((item, idx) => (
                <TestimonialCard key={`col1-${idx}`} data={item} />
              ))}
            </div>
          </div>

          {/* Fallback Column 1 for Mobile (No absolute positioning/animation on mobile for better UX) */}
          <div className="md:hidden flex flex-col gap-6">
            {col1.map((item, idx) => (
              <TestimonialCard key={`mobile-col1-${idx}`} data={item} />
            ))}
          </div>

          {/* Column 2 - Scrolls Up */}
          <div className="relative h-full overflow-hidden hidden md:block pt-12">
            <div className="flex flex-col gap-6 animate-scroll-up absolute top-0 w-full">
              {scrollingCol2.map((item, idx) => (
                <TestimonialCard key={`col2-${idx}`} data={item} />
              ))}
            </div>
          </div>

          {/* Fallback Column 2 for Mobile */}
          <div className="md:hidden flex flex-col gap-6">
            {col2.map((item, idx) => (
              <TestimonialCard key={`mobile-col2-${idx}`} data={item} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}