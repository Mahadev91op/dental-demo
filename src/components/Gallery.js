"use client";

import { useState } from "react";
import Link from "next/link"; // ✅ Fixed: Added missing import
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Camera, Sparkles } from "lucide-react";

const categories = ["All", "Smile Design", "Implants", "Whitening"];

const galleryData = [
  {
    id: 1,
    category: "Smile Design",
    title: "Hollywood Makeover",
    desc: "Porcelain Veneers",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    size: "large" // Spans 2 cols on PC, full width on mobile
  },
  {
    id: 2,
    category: "Whitening",
    title: "Laser Brightening",
    desc: "Zoom Whitening",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    category: "Implants",
    title: "Full Mouth Rehab",
    desc: "All-on-4 Implants",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    category: "Smile Design",
    title: "Gap Closure",
    desc: "Composite Bonding",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 5,
    category: "Whitening",
    title: "Wedding Ready",
    desc: "Cleaning & Polishing",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = activeTab === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeTab);

  return (
    <section id="smilegallery" className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-40 md:w-64 h-40 md:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-teal-600 font-bold tracking-wider uppercase text-[10px] md:text-sm bg-white px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-sm mb-3 md:mb-4 border border-slate-100"
          >
            <Camera size={14} className="md:w-4 md:h-4" /> Smile Gallery
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight"
          >
            Real Results. <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Real Smiles.</span>
          </motion.h2>
          
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeTab === tab 
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-500/30 scale-105" 
                  : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 auto-rows-[180px] md:auto-rows-[300px]"
        >
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`relative group rounded-xl md:rounded-2xl overflow-hidden cursor-pointer bg-slate-200 ${item.size === 'large' ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''}`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-8">
                  <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-teal-500/90 backdrop-blur-sm text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-md mb-1 md:mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-sm md:text-2xl font-bold text-white mb-0.5 md:mb-1 leading-tight">{item.title}</h3>
                    <p className="text-slate-300 text-[10px] md:text-sm flex items-center justify-between">
                      <span className="truncate pr-2">{item.desc}</span>
                      <span className="bg-white/20 p-1 md:p-2 rounded-full backdrop-blur-sm shrink-0">
                        <ArrowUpRight size={12} className="md:w-[18px] md:h-[18px] text-white" />
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <div className="text-center mt-8 md:mt-12">
            <Link href="#appointment" className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-500 hover:text-teal-600 transition-colors group">
                <Sparkles size={14} className="text-teal-500 group-hover:rotate-12 transition-transform"/> 
                Want to see your smile here? 
                <span className="font-bold underline decoration-teal-500/50 underline-offset-4 group-hover:decoration-teal-500">Book Consultation</span>
            </Link>
        </div>

      </div>
    </section>
  );
}