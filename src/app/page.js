// src/app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Component */}
      <Hero />

      {/* Placeholder for next sections */}
      <section className="h-screen flex items-center justify-center bg-slate-50">
        <h2 className="text-3xl text-slate-400">Services & Form Section Coming Soon...</h2>
      </section>

    </main>
  );
}