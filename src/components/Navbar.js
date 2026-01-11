"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Correct Links Mapping
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Treatments", href: "#services" }, // "Treatments" click karne par Services section par jayega
  { name: "Smile Gallery", href: "#smilegallery" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* --- TOP BAR --- */}
      <div role="region" aria-label="Clinic Information" className="hidden md:flex bg-teal-900 text-teal-50 text-xs py-2 px-4 justify-between items-center z-[60] relative">
         <div className="flex gap-6">
            <span className="flex items-center gap-1"><Clock size={14} aria-hidden="true"/> <span>Mon - Sat: 10:00 AM - 8:00 PM</span></span>
            <span className="flex items-center gap-1"><MapPin size={14} aria-hidden="true"/> <span>City Center, Main Road</span></span>
         </div>
         <div className="flex gap-4">
            <span className="text-teal-200">Emergency? Call us:</span>
            <a href="tel:+919876543210" aria-label="Call us at +91 98765 43210" className="font-bold text-white hover:text-teal-400 transition">+91 98765 43210</a>
         </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-md py-3"
            : "md:top-8 top-0 bg-white/50 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link href="#home" aria-label="City Dental Clinic Home" className="flex items-center gap-2.5 group">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white p-2 rounded-xl shadow-lg shadow-teal-500/30">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.2 18.2A9 9 0 0 1 12 2v8l8.4 10.2a9 9 0 1 1-16.2 0Z"/><path d="m14 16-2 3-2-3"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none">
                  City<span className="text-teal-600">Dental</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold">Multispeciality Clinic</span>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 font-semibold text-sm hover:text-teal-600 transition relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* BOOK BUTTON */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="#appointment">
                <button aria-label="Book an Appointment" className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-teal-600/20 hover:bg-teal-700 hover:shadow-teal-600/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                  <Calendar size={16} aria-hidden="true" />
                  Book Appointment
                </button>
              </Link>
            </div>

            {/* MOBILE MENU BTN */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="p-2 text-slate-800"
              >
                {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-slate-800 hover:text-teal-600"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <div className="bg-teal-50 p-4 rounded-xl">
                 <p className="text-sm text-slate-500 mb-2">Need Help?</p>
                 <a href="tel:+919876543210" className="text-xl font-bold text-teal-700 block mb-4">+91 98765 43210</a>
                 <Link href="#appointment" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold shadow-lg">
                    Book Appointment
                    </button>
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}