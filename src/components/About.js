"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Years Experience", value: "15+", icon: Clock, delay: 0.2 },
  { label: "Happy Patients", value: "12k+", icon: Users, delay: 0.4 },
  { label: "Awards Won", value: "25+", icon: Award, delay: 0.6 },
];

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-2 lg:order-1"
          >
             <motion.div 
               whileHover={{ scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
               className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] md:border-8 border-slate-50 z-10 h-auto lg:h-[600px] w-full"
             >
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
             </motion.div>

             <motion.div 
               initial={{ y: 20, opacity: 0, scale: 0.9 }}
               whileInView={{ y: 0, opacity: 1, scale: 1 }}
               whileHover={{ y: -5 }}
               transition={{ delay: 0.3, type: "spring" }}
               className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-6 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[180px] md:max-w-xs z-20"
             >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                   <div className="relative shrink-0">
                     <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Sharma" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-teal-500" />
                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                   </div>
                   <div>
                      <p className="font-bold text-slate-900 text-xs md:text-sm leading-tight">Dr. A. Sharma</p>
                      <p className="text-[10px] md:text-xs text-teal-600 font-medium">Head Surgeon</p>
                   </div>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 italic leading-tight">"We treat patients like family, not just teeth."</p>
             </motion.div>

             <motion.div 
               animate={{ rotate: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-teal-100/60"
             >
                <svg width="80" height="80" fill="currentColor" viewBox="0 0 100 100"><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2"></circle></pattern><rect width="100" height="100" fill="url(#dots)"></rect></svg>
             </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
             <motion.span variants={fadeInUp} className="text-teal-600 font-bold tracking-wider uppercase text-[10px] md:text-sm bg-teal-50 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6 inline-block">
               About CityDental
             </motion.span>
             
             <motion.h2 variants={fadeInUp} custom={0.1} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-[1.1]">
               Your Smile is Our <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Masterpiece.</span>
             </motion.h2>
             
             <motion.p variants={fadeInUp} custom={0.2} className="text-slate-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
               Founded in 2010, CityDental has been at the forefront of <strong>painless dentistry</strong>. We combine state-of-the-art technology with a soothing environment to ensure you actually enjoy your visit.
             </motion.p>

             <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 inline-block text-left">
                {['Advanced Laser Technology (No Drill)', 'Lifetime Warranty on Implants', '0% EMI Options Available'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={fadeInUp}
                    custom={0.3 + i * 0.1}
                    className="flex items-start md:items-center gap-3 text-slate-700 font-medium text-sm md:text-lg"
                  >
                     <CheckCircle className="text-teal-500 shrink-0 mt-0.5 md:mt-0" size={20} />
                     {item}
                  </motion.li>
                ))}
             </ul>

             <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-slate-100 pt-6 md:pt-8 mb-8">
                {stats.map((stat, idx) => (
                   <motion.div 
                     key={idx}
                     variants={fadeInUp}
                     custom={stat.delay}
                     whileHover={{ y: -5 }}
                     className="p-2 md:p-0 rounded-xl transition-colors text-center lg:text-left"
                   >
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mb-2 mx-auto lg:mx-0" />
                      <p className="text-xl md:text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</p>
                      <p className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wide">{stat.label}</p>
                   </motion.div>
                ))}
             </div>

             <motion.div variants={fadeInUp} custom={0.8}>
                <Link href="#appointment" className="group inline-flex items-center gap-2 text-white bg-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-base hover:bg-slate-800 transition shadow-lg hover:shadow-xl transform active:scale-95">
                    Meet The Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
             </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}