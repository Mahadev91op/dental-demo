import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy Load components that are below the fold
const Services = dynamic(() => import("@/components/Services"));
const About = dynamic(() => import("@/components/About"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const AppointmentForm = dynamic(() => import("@/components/AppointmentForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar aur Hero turant dikhne chahiye, isliye normal import */}
      <Navbar />
      <Hero />
      
      {/* Baaki sections scroll karne par load honge */}
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <AppointmentForm />
      <Footer />
    </main>
  );
}