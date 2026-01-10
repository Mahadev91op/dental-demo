import Link from "next/link";
import { CheckCircle2, Star, ArrowRight, ShieldCheck, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-b from-slate-50 to-white pt-28 pb-12 lg:pt-0 lg:pb-0 lg:h-screen flex items-center overflow-hidden"
    >
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-teal-50/50 clip-path-slant hidden lg:block"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-7">
            
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-5 py-2.5 rounded-full shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
              <div className="flex flex-col items-start leading-none">
                 <span className="flex text-yellow-400 gap-0.5 text-[10px]">
                    <Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" />
                 </span>
                 <span className="text-xs font-bold text-slate-700 mt-1">4.9/5 Rating (500+ Reviews)</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Design Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Dream Smile.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Experience world-class <strong>Painless Dentistry</strong> in your city. 
              From Laser Implants to Invisible Braces, we bring back your confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="#appointment">
                <button className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition shadow-xl shadow-teal-600/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                  Book Consultation <ArrowRight size={20} />
                </button>
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 text-slate-700 font-bold hover:text-teal-600 transition flex items-center justify-center gap-3 group">
                 <div className="bg-white p-2 rounded-full shadow-md group-hover:scale-110 transition border border-slate-100">
                    <PlayCircle size={24} className="text-teal-600 fill-teal-50" />
                 </div>
                 Watch Clinic Tour
              </button>
            </div>

            {/* Features Strip */}
            <div className="pt-6 border-t border-slate-200 mt-8 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3">
              <div className="flex items-center gap-3">
                 <div className="bg-teal-100 p-2 rounded-full text-teal-700"><ShieldCheck size={20}/></div>
                 <div className="text-left">
                    <p className="font-bold text-slate-900 text-sm">Lifetime Warranty</p>
                    <p className="text-xs text-slate-500">On Dental Implants</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-blue-100 p-2 rounded-full text-blue-700"><CheckCircle2 size={20}/></div>
                 <div className="text-left">
                    <p className="font-bold text-slate-900 text-sm">Pain-Free Tech</p>
                    <p className="text-xs text-slate-500">Laser Treatments</p>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT: HERO IMAGE */}
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative z-10 w-full max-w-[500px]">
              
              {/* Image Container with Custom Shape */}
              <div className="relative rounded-[3rem] rounded-tr-none overflow-hidden shadow-2xl border-8 border-white bg-slate-200 h-[450px] lg:h-[600px] group">
                <img 
                  // Smile specific Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Beautiful Smile" 
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge: Before/After */}
              <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Result</span>
                      <span className="text-lg font-bold text-teal-600">100% Whiter</span>
                   </div>
                   <div className="h-10 w-px bg-slate-200"></div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Time</span>
                      <span className="text-lg font-bold text-slate-800">45 Mins</span>
                   </div>
                </div>
              </div>

            </div>
            
            {/* Pattern Dots behind image */}
            <div className="absolute -z-10 top-10 right-10 opacity-20">
               <svg width="100" height="100" fill="currentColor" className="text-teal-600"><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2"></circle></pattern><rect width="100" height="100" fill="url(#dots)"></rect></svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}