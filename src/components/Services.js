"use client";

import Link from "next/link";
import { Sparkles, ShieldCheck, Microscope, Smile, Baby, Activity, ArrowRight, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Root Canal",
    desc: "Save your tooth with painless, single-sitting rotary therapy.",
    icon: <Microscope className="w-5 h-5 md:w-8 md:h-8" />,
    // Colors update kiye for better glow
    color: "text-blue-600",
    bg: "bg-blue-50",
    borderHover: "group-hover:border-blue-500/50",
    shadowHover: "group-hover:shadow-blue-500/20",
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    id: "02",
    title: "Implants",
    desc: "Permanent titanium replacement for missing teeth. Lifetime warranty.",
    icon: <ShieldCheck className="w-5 h-5 md:w-8 md:h-8" />,
    color: "text-teal-600",
    bg: "bg-teal-50",
    borderHover: "group-hover:border-teal-500/50",
    shadowHover: "group-hover:shadow-teal-500/20",
    gradient: "from-teal-600 to-emerald-400"
  },
  {
    id: "03",
    title: "Whitening",
    desc: "Laser Zoom technology for a sparkling white smile in 45 mins.",
    icon: <Sparkles className="w-5 h-5 md:w-8 md:h-8" />,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    borderHover: "group-hover:border-yellow-500/50",
    shadowHover: "group-hover:shadow-yellow-500/20",
    gradient: "from-yellow-500 to-orange-400"
  },
  {
    id: "04",
    title: "Braces",
    desc: "Invisible aligners (Invisalign) to straighten teeth without metal.",
    icon: <Smile className="w-5 h-5 md:w-8 md:h-8" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
    borderHover: "group-hover:border-purple-500/50",
    shadowHover: "group-hover:shadow-purple-500/20",
    gradient: "from-purple-600 to-pink-400"
  },
  {
    id: "05",
    title: "Kids Dental",
    desc: "Gentle care, fluoride applications, and cavity prevention for kids.",
    icon: <Baby className="w-5 h-5 md:w-8 md:h-8" />,
    color: "text-pink-600",
    bg: "bg-pink-50",
    borderHover: "group-hover:border-pink-500/50",
    shadowHover: "group-hover:shadow-pink-500/20",
    gradient: "from-pink-600 to-rose-400"
  },
  {
    id: "06",
    title: "Checkup",
    desc: "Scaling, fillings, and extractions to keep hygiene perfect.",
    icon: <Stethoscope className="w-5 h-5 md:w-8 md:h-8" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderHover: "group-hover:border-emerald-500/50",
    shadowHover: "group-hover:shadow-emerald-500/20",
    gradient: "from-emerald-600 to-lime-400"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50/50 relative overflow-hidden">
      
      {/* Background Pattern (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Treatments</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
            Using latest technology for precise and painless care.
          </p>
        </div>

        {/* CARDS GRID (Mobile: 2 cols, PC: 3 cols) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }} // Framer Motion smooth lift effect
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`group relative bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-8 
                border border-slate-200/60 ${service.borderHover} 
                shadow-sm hover:shadow-2xl ${service.shadowHover} 
                transition-all duration-300 overflow-hidden`}
            >
              
              {/* HOVER EFFECT BACKGROUND BLOB (Expand hota hai) */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 blur-3xl rounded-full group-hover:scale-[2.5] -translate-y-1/2 translate-x-1/2`}></div>

              {/* PC ONLY: Background Number */}
              <div className="hidden md:block absolute -right-4 -top-4 text-8xl font-extrabold text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none z-0">
                {service.id}
              </div>

              <div className="relative z-10">
                  {/* ICON CONTAINER */}
                  <div className={`relative w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-8 transition-all duration-300 ${service.bg} ${service.color} group-hover:text-white group-hover:bg-gradient-to-br ${service.gradient} group-hover:scale-110 shadow-sm ring-1 ring-inset ring-black/5`}>
                    {service.icon}
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-sm md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description with Line Clamp */}
                  <p className="text-[11px] md:text-base font-medium text-slate-500 md:mb-8 leading-tight md:leading-relaxed group-hover:text-slate-600 line-clamp-2 md:line-clamp-none">
                    {service.desc}
                  </p>

                  {/* PC ONLY: 'Learn More' Link */}
                  <Link href="#appointment" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-teal-600 transition-colors mt-4 group/link">
                    <span className="border-b-2 border-transparent group-hover/link:border-teal-600 pb-0.5 transition-all">Learn More</span>
                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE STICKY BOTTOM BAR (Kept same as it's good for conversion) */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-xl shadow-2xl flex justify-between items-center z-40 border border-slate-800 animate-in slide-in-from-bottom-5">
           <div className="flex items-center gap-3">
              <div className="bg-teal-500/20 p-2 rounded-full"><Stethoscope size={18} className="text-teal-400"/></div>
              <div>
                <p className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">Emergency?</p>
                <p className="font-bold text-sm">Book Visit Now</p>
              </div>
           </div>
           <Link href="#appointment">
             <button className="bg-teal-600 active:bg-teal-700 px-6 py-2.5 rounded-lg font-bold text-xs shadow-lg shadow-teal-500/20 transition-transform active:scale-95">Book</button>
           </Link>
        </div>

      </div>
    </section>
  );
}