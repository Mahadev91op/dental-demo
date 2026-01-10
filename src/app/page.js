import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials"; // Import kiya

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials /> {/* Yahan Add kiya */}
      
      {/* Footer Placeholder */}
      <section className="py-20 text-center bg-slate-100">
        <p className="text-slate-400">Next: Appointment Form & Footer...</p>
      </section>
    </main>
  );
}