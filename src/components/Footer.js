"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react";

const SocialIcon = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 transition-all duration-300 border border-slate-700 hover:bg-teal-500 hover:text-white hover:border-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:-translate-y-1 active:scale-95"
  >
    <Icon size={16} className="md:w-[18px] md:h-[18px]" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="group flex items-center gap-2 text-slate-400 text-xs md:text-sm py-1 transition-all duration-300 hover:text-teal-400">
      <span className="w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-2 rounded-full opacity-0 group-hover:opacity-100"></span>
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-24 md:pb-10 md:pt-20 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
          
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left space-y-4">
            <Link href="#home" className="inline-flex items-center gap-2 group justify-center lg:justify-start">
                <div className="bg-teal-600 text-white p-1.5 rounded-lg shadow-lg shadow-teal-900/20 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.2 18.2A9 9 0 0 1 12 2v8l8.4 10.2a9 9 0 1 1-16.2 0Z"/><path d="m14 16-2 3-2-3"/></svg>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">CityDental</span>
            </Link>
            <p className="text-xs md:text-sm text-slate-500 max-w-xs mx-auto lg:mx-0 leading-relaxed">
              Your smile is our priority. Advanced dental care for the whole family with a gentle touch.
            </p>
            <div className="flex justify-center lg:justify-start gap-3 pt-2">
               <SocialIcon icon={Facebook} href="#" />
               <SocialIcon icon={Instagram} href="#" />
               <SocialIcon icon={Twitter} href="#" />
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold text-sm md:text-lg mb-4 md:mb-6 flex items-center gap-2 after:content-[''] after:h-[2px] after:w-4 after:bg-teal-600 after:rounded-full">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#services">Treatments</FooterLink>
              <FooterLink href="#reviews">Stories</FooterLink>
              <FooterLink href="#appointment">Book Now</FooterLink>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold text-sm md:text-lg mb-4 md:mb-6 flex items-center gap-2 after:content-[''] after:h-[2px] after:w-4 after:bg-teal-600 after:rounded-full">Find Us</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex flex-col md:flex-row gap-1 md:gap-3 group cursor-default">
                <span className="text-teal-500 font-bold group-hover:text-teal-400 transition-colors">Address</span>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">Shop 24, City Center,<br/>Main Road, Mumbai</span>
              </li>
              <li className="flex flex-col md:flex-row gap-1 md:gap-3 group cursor-default">
                <span className="text-teal-500 font-bold group-hover:text-teal-400 transition-colors">Phone</span>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">+91 98765 43210</span>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1 bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs md:text-sm hover:border-slate-700 transition-colors duration-300">
             <h4 className="text-white font-bold mb-3 flex items-center gap-2">Opening Hours</h4>
             <ul className="space-y-2">
                <li className="flex justify-between text-slate-400"><span>Mon - Sat</span> <span className="text-teal-400 font-medium">10 AM - 8 PM</span></li>
                <li className="flex justify-between text-slate-400"><span>Sunday</span> <span className="text-red-400 font-medium">Closed</span></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] md:text-xs text-slate-600">
            &copy; {new Date().getFullYear()} City Dental Clinic. All rights reserved.
          </p>
          
          <div className="group relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
             <p className="relative text-[10px] md:text-xs text-slate-500 font-medium flex items-center gap-1.5 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800 group-hover:border-teal-500/30 transition-colors">
                <span className="text-slate-600">Designed by</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 group-hover:from-teal-300 group-hover:to-blue-300 transition-all cursor-pointer">
                    DevSamp
                </span>
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
}