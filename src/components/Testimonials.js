"use client";

import { Star, Quote, Play, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Simran Kaur",
    treatment: "Smile Design",
    rating: 5,
    text: "I can't stop smiling! Dr. Sharma is a magician. The veneers look so natural, nobody believes they are artificial.",
    location: "Mumbai",
    img: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 2,
    name: "Rajesh Malhotra",
    treatment: "Implants",
    rating: 5,
    text: "Painless experience. I got my implants done in just 2 sittings. Highly recommend for senior citizens.",
    location: "Delhi",
    img: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    name: "Priya Desai",
    treatment: "Root Canal",
    rating: 5,
    text: "I was very scared of the drill, but the laser treatment was silent and painless. Best clinic ever!",
    location: "Pune",
    img: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    id: 4,
    name: "Amit Verma",
    treatment: "Whitening",
    rating: 5,
    text: "Got sparkling white teeth for my wedding. The staff is very polite and the clinic is super hygienic.",
    location: "Bangalore",
    img: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className="py-12 md:py-20 bg-teal-950 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/50 px-3 py-1 rounded-full mb-4 backdrop-blur-md">
                    <Star size={12} className="text-yellow-400" fill="currentColor"/>
                    <span className="text-[10px] md:text-xs font-bold text-teal-100 uppercase tracking-wider">5-Star Reviews</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    Stories behind <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-200">Beautiful Smiles.</span>
                </h2>
            </div>

            {/* Navigation Buttons (PC Only) */}
            <div className="hidden md:flex gap-3">
               <button onClick={() => scroll("left")} className="p-4 rounded-full border border-teal-800 text-teal-100 hover:bg-teal-800 transition active:scale-95">
                  <ChevronLeft size={24}/>
               </button>
               <button onClick={() => scroll("right")} className="p-4 rounded-full border border-teal-800 text-teal-100 hover:bg-teal-800 transition active:scale-95">
                  <ChevronRight size={24}/>
               </button>
            </div>
        </div>

        {/* --- SCROLL CONTAINER --- */}
        <div 
          ref={scrollRef}
          // Mobile: pt-2 (tight) | PC: pt-8 (spacious for hover)
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pt-2 md:pt-8 pb-4 no-scrollbar"
        >
              
              {/* VIDEO CARD */}
              {/* Mobile: w-[70vw] (Compact) | PC: w-[350px] */}
              <div className="flex-shrink-0 w-[70vw] md:w-[350px] snap-center relative group">
                 {/* Mobile Height: h-[320px] | PC Height: min-h-[450px] */}
                 <div className="relative h-[320px] md:h-full md:min-h-[450px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer border-[3px] border-teal-800/50 shadow-2xl hover:border-teal-500 transition-all duration-500 group-hover:-translate-y-2">
                    <img 
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" 
                      alt="Happy Patient" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-50"></div>
                            {/* Mobile: Smaller Play Button */}
                            <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                <Play size={20} className="md:w-7 md:h-7 text-white ml-1" fill="white" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 p-5 md:p-8 w-full">
                       <h3 className="text-lg md:text-2xl font-bold text-white leading-tight mb-1">"Confidence Back!"</h3>
                       <p className="text-slate-300 text-xs md:text-sm">Watch Rahul's Story</p>
                    </div>
                 </div>
              </div>

              {/* TEXT REVIEWS */}
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  // Mobile: w-[75vw] (See next card peeking) | PC: w-[400px]
                  className="flex-shrink-0 w-[75vw] md:w-[400px] snap-center relative group"
                >
                  {/* Mobile: p-5 | PC: p-8 */}
                  <div className="h-full bg-gradient-to-b from-white to-teal-50 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 relative shadow-xl hover:shadow-teal-900/20 transition-all duration-300 border border-white/10 group-hover:-translate-y-2">
                    
                    {/* Mobile: Quote Smaller */}
                    <Quote className="absolute -top-2 -right-2 md:-top-4 md:-right-4 text-teal-900/5 transform rotate-12 w-12 h-12 md:w-20 md:h-20" />

                    {/* Profile */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="relative">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full p-[2px] bg-gradient-to-tr from-teal-400 to-blue-500">
                                <img src={review.img} alt={review.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm md:text-lg font-extrabold text-slate-900">{review.name}</h4>
                            <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-500">
                                <span className="bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded-md">{review.treatment}</span>
                                <span className="hidden md:inline">• {review.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3 md:mb-4 bg-slate-100 inline-flex px-2 md:px-3 py-1 rounded-full">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="md:w-3.5 md:h-3.5 text-yellow-500" fill="currentColor" />
                        ))}
                    </div>

                    {/* Text - Mobile: text-xs */}
                    <p className="text-slate-700 text-xs md:text-[15px] leading-relaxed font-medium mb-6 md:mb-8 line-clamp-4 md:line-clamp-none">
                        "{review.text}"
                    </p>

                    {/* Footer */}
                    <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 flex items-center gap-2">
                        <CheckCircle2 size={14} className="md:w-4 md:h-4 text-teal-600" />
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wide">Verified Patient</span>
                    </div>

                  </div>
                </motion.div>
              ))}

        </div>

      </div>
    </section>
  );
}