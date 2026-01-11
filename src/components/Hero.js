"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js Image Component for better performance
import { Star, ArrowRight, PlayCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    tag: "Cosmetic",
    title: "Design Your \nDream Smile.",
    highlight: "Dream Smile.",
    desc: "Experience world-class Painless Dentistry. From Hollywood Veneers to Laser Whitening.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", 
    gradient: "from-teal-600 to-blue-600"
  },
  {
    id: 2,
    tag: "Implants",
    title: "Permanent Teeth \nin 24 Hours.",
    highlight: "in 24 Hours.",
    desc: "Replace missing teeth forever with Titanium Implants. Eat what you love with Lifetime Warranty.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", 
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: 3,
    tag: "Kids Care",
    title: "Kids Love \nVisiting Us.",
    highlight: "Visiting Us.",
    desc: "A fear-free zone for little ones. Cartoons, toys, and a gift after every visit!",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2000&auto=format&fit=crop", 
    gradient: "from-pink-500 to-rose-500"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section 
      id="home" 
      aria-label="Hero Section"
      className="relative bg-white pt-0 h-[100svh] lg:h-screen w-full overflow-hidden flex flex-col lg:flex-row"
    >
      
      {/* IMAGE SECTION */}
      <div className="absolute top-0 left-0 w-full h-[55%] lg:absolute lg:top-0 lg:right-0 lg:w-[55%] lg:h-full lg:left-auto z-0">
        <div className="relative w-full h-full lg:rounded-bl-[6rem] overflow-hidden bg-slate-200 shadow-2xl">
           <AnimatePresence mode="popLayout">
              <motion.div 
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full will-change-transform" // Hardware acceleration
              >
                 <Image 
                   src={slides[current].img}
                   alt={`Dental Clinic - ${slides[current].title}`}
                   fill
                   className="object-cover"
                   priority={true} // LCP Boost
                   sizes="(max-width: 768px) 100vw, 55vw"
                 />
              </motion.div>
           </AnimatePresence>
           
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 lg:hidden"></div>
           <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10"></div>

           {/* CONTROLS */}
           <div className="hidden lg:flex absolute bottom-10 left-10 gap-3 z-20">
              <button 
                onClick={prevSlide} 
                aria-label="Previous Slide"
                className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-teal-600 hover:border-teal-600 transition-all border border-white/30 active:scale-95 group"
              >
                  <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform"/>
              </button>
              <button 
                onClick={nextSlide} 
                aria-label="Next Slide"
                className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-teal-600 hover:border-teal-600 transition-all border border-white/30 active:scale-95 group"
              >
                  <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform"/>
              </button>
           </div>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute bottom-0 w-full h-[48%] bg-white rounded-t-[2.5rem] px-6 py-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col justify-between z-20 lg:static lg:h-full lg:w-[45%] lg:bg-transparent lg:shadow-none lg:rounded-none lg:pl-20 lg:pr-10 lg:justify-center">
          
          <div className="h-full flex flex-col justify-center space-y-4 lg:space-y-8">
            
            <div className="flex justify-center lg:justify-start">
               <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-4 h-4" />
                <span className="text-[10px] lg:text-sm font-bold text-slate-700">4.9/5 Rating</span>
                <span className="flex text-yellow-400 gap-0.5" aria-label="5 out of 5 stars">
                    <Star size={12} fill="currentColor" aria-hidden="true"/>
                    <Star size={12} fill="currentColor" aria-hidden="true"/>
                    <Star size={12} fill="currentColor" aria-hidden="true"/>
                    <Star size={12} fill="currentColor" aria-hidden="true"/>
                    <Star size={12} fill="currentColor" aria-hidden="true"/>
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left space-y-3 lg:space-y-6"
                aria-live="polite"
              >
                <div>
                   <span className="inline-block text-teal-600 font-extrabold uppercase tracking-widest text-[10px] lg:text-xs border border-teal-100 bg-teal-50 px-3 py-1 rounded-md">
                    {slides[current].tag}
                   </span>
                </div>
                <h1 className="text-4xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight whitespace-pre-line">
                  {slides[current].title.split(slides[current].highlight)[0]} 
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slides[current].gradient}`}>
                    {slides[current].highlight}
                  </span>
                </h1>
                <p className="text-sm lg:text-xl text-slate-500 max-w-xs mx-auto lg:mx-0 lg:max-w-lg leading-relaxed font-medium line-clamp-3 lg:line-clamp-none">
                  {slides[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-2 lg:hidden">
              {slides.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? "w-6 bg-teal-600" : "w-1.5 bg-slate-300"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2 lg:pt-6 w-full">
              <Link href="#appointment" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition shadow-xl shadow-teal-600/20 flex items-center justify-center gap-2 active:scale-95 transform hover:-translate-y-1">
                  Book Appointment <ArrowRight size={20} aria-hidden="true" />
                </button>
              </Link>
              
              <Link href="#smilegallery" className="hidden lg:flex w-full sm:w-auto">
                <button className="w-full px-8 py-4 text-slate-700 font-bold hover:text-teal-600 transition flex items-center justify-center gap-3 group">
                   <div className="bg-white p-2 rounded-full shadow-md group-hover:scale-110 transition border border-slate-100">
                      <PlayCircle size={24} className="text-teal-600 fill-teal-50" aria-hidden="true" />
                   </div>
                   Watch Tour
                </button>
              </Link>
            </div>

          </div>
      </div>
    </section>
  );
}