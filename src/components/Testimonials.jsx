import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Implementation was seamless and the results were immediate. Our team is more productive than ever.",
      name: "Michael Thompson",
      role: "Project Manager",
      company: "Integrity Adjusting",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      delay: "0"
    },
    {
      id: 2,
      quote: "The clean data export feature allowed us to finally visualize our estimating KPIs in PowerBI. A game changer.",
      name: "Amanda Foster",
      role: "Analytics Lead",
      company: "ClaimFlow",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      delay: "100"
    },
    {
      id: 3,
      quote: "The peace of mind knowing every draw schedule complies with carrier guidelines is worth every penny.",
      name: "Lisa Johnson",
      role: "Finance Manager",
      company: "Elite Roofing",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      delay: "200"
    },
    {
      id: 4,
      quote: "Professional reports that look like they took hours to format, generated in seconds right in the platform. Incredible tool.",
      name: "David Chen",
      role: "Operations Director",
      company: "BuildPro Services",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      delay: "300"
    }
  ];

  return (
    <div id="testimonials" className="w-full flex flex-col items-center mt-32 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Clients
        </h2>
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl font-light">
          See how businesses are saving time, reducing errors, and achieving more with our AI-powered automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl relative px-6 md:px-0">
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="flex flex-col p-8 rounded-3xl bg-[#0b0a10] border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300">
            <Quote className="w-8 h-8 text-purple-400 mb-6" />
            <p className="text-white text-lg leading-relaxed mb-8 flex-grow">
              "{testimonials[0].quote}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={testimonials[0].image} alt={testimonials[0].name} className="w-12 h-12 rounded-full border-2 border-purple-500/30" />
                <div className="flex flex-col">
                  <span className="text-white font-bold">{testimonials[0].name}</span>
                  <span className="text-slate-400 text-sm">{testimonials[0].role}</span>
                  <span className="text-slate-500 text-xs">{testimonials[0].company}</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-8 rounded-3xl bg-[#13131c] border border-slate-800 shadow-md hover:border-slate-700 transition-all duration-300">
            <Quote className="w-8 h-8 text-purple-500/50 mb-6" />
            <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow">
              "{testimonials[2].quote}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={testimonials[2].image} alt={testimonials[2].name} className="w-12 h-12 rounded-full border-2 border-slate-700" />
                <div className="flex flex-col">
                  <span className="text-white font-bold">{testimonials[2].name}</span>
                  <span className="text-slate-400 text-sm">{testimonials[2].role}</span>
                  <span className="text-slate-500 text-xs">{testimonials[2].company}</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:pt-16">
          {/* Card 2 */}
          <div className="flex flex-col p-8 rounded-3xl bg-[#0b0a10] border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300">
            <Quote className="w-8 h-8 text-blue-400 mb-6" />
            <p className="text-white text-lg leading-relaxed mb-8 flex-grow">
              "{testimonials[1].quote}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={testimonials[1].image} alt={testimonials[1].name} className="w-12 h-12 rounded-full border-2 border-blue-500/30" />
                <div className="flex flex-col">
                  <span className="text-white font-bold">{testimonials[1].name}</span>
                  <span className="text-slate-400 text-sm">{testimonials[1].role}</span>
                  <span className="text-slate-500 text-xs">{testimonials[1].company}</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col p-8 rounded-3xl bg-[#13131c] border border-slate-800 shadow-md hover:border-slate-700 transition-all duration-300">
            <Quote className="w-8 h-8 text-purple-500/50 mb-6" />
            <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow">
              "{testimonials[3].quote}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={testimonials[3].image} alt={testimonials[3].name} className="w-12 h-12 rounded-full border-2 border-slate-700" />
                <div className="flex flex-col">
                  <span className="text-white font-bold">{testimonials[3].name}</span>
                  <span className="text-slate-400 text-sm">{testimonials[3].role}</span>
                  <span className="text-slate-500 text-xs">{testimonials[3].company}</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}