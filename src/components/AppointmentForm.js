"use client";

import { useState } from "react";
import { Calendar, User, Phone, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", message: "" });
  const [status, setStatus] = useState("idle"); 
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("loading");
      setTimeout(() => { setStatus("success"); setFormData({ name: "", phone: "", date: "", message: "" }); }, 2000);
  };

  // Mobile ke liye padding aur height adjust ki gayi hai
  const inputClasses = (fieldName) => `w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-white border-2 rounded-xl outline-none transition-all duration-300 text-slate-900 font-medium placeholder:text-slate-400 text-sm md:text-base ${focused === fieldName ? 'border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.15)]' : 'border-slate-100 hover:border-slate-300'}`;
  const iconClasses = (fieldName) => `absolute left-3 md:left-4 top-3.5 md:top-4 transition-colors duration-300 ${focused === fieldName ? 'text-teal-500' : 'text-slate-400'}`;

  return (
    <section id="appointment" className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor Blobs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 md:gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-4 md:space-y-8 text-center lg:text-left"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-teal-600 font-bold tracking-wider uppercase text-[10px] md:text-sm bg-teal-50 px-3 py-1 rounded-full mb-3 md:mb-4">
              <Sparkles size={12} className="md:w-3.5 md:h-3.5"/> Book Online
            </span>
            <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Transform</span> Your Smile?
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Skip the waiting room. Book your appointment easily online. We will confirm your slot via phone.
          </p>
          
          {/* Phone Card (Visible only on PC mainly, small on mobile) */}
          <div className="hidden md:block pt-4">
             <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-5 p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/40"
             >
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-4 rounded-full text-white shadow-lg shadow-teal-500/30">
                  <Phone size={28}/>
                </div>
                <div>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Prefer Calling?</p>
                   <p className="text-2xl font-extrabold text-slate-900 tracking-tight">+91 98765 43210</p>
                </div>
             </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Pro Form (App-like Card on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 bg-white/90 md:bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-6 md:p-12 border border-white/50 relative"
        >
           {status === "success" ? (
             <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                   <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Booking Confirmed!</h3>
                <p className="text-slate-600">We will call you shortly.</p>
                <button onClick={() => setStatus("idle")} className="text-teal-600 font-bold hover:underline">Book Another</button>
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 <div className="relative group">
                    <User className={iconClasses('name')} size={18} />
                    <input 
                      type="text" name="name" placeholder="Your Name" required 
                      value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      className={inputClasses('name')}
                    />
                 </div>
                 <div className="relative group">
                    <Phone className={iconClasses('phone')} size={18} />
                    <input 
                      type="tel" name="phone" placeholder="Phone Number" required 
                      value={formData.phone} onChange={handleChange}
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                      className={inputClasses('phone')}
                    />
                 </div>
               </div>

               <div className="relative group">
                  <Calendar className={iconClasses('date')} size={18} />
                  <input 
                    type="date" name="date" required 
                    value={formData.date} onChange={handleChange}
                    onFocus={() => setFocused('date')} onBlur={() => setFocused(null)}
                    className={`${inputClasses('date')} text-slate-900`}
                  />
               </div>

               <div className="relative group">
                  <MessageSquare className={iconClasses('message')} size={18} />
                  <textarea 
                    name="message" rows="3" placeholder="Problem? (Optional)"
                    value={formData.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    className={`${inputClasses('message')} resize-none`}
                  ></textarea>
               </div>

               <motion.button 
                 type="submit" 
                 disabled={status === "loading"}
                 whileTap={{ scale: 0.98 }}
                 className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold py-3.5 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
               >
                 {status === "loading" ? "Booking..." : "Confirm Appointment"} 
                 {!status === "loading" && <Send size={18} />}
               </motion.button>
             </form>
           )}
        </motion.div>
      </div>
    </section>
  );
}