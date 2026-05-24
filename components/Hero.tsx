'use strict';
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, HardHat } from 'lucide-react';

export default function Hero() {
  // Array of your 4 local architectural assets
  const images = ['/showcase.jpg', '/1.jpg', '/2.jpg', '/3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden">
      {/* Background Subtle Mesh / Blueprint grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-500">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Precision Architectural Engineering</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
            We Design Realities. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              We Build Legacies.
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Magla Engineering Limited delivers bespoke architectural blueprints combined with flawless structural engineering execution. From sketch pad to concrete framework.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a href="#portfolio" className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-sm hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 group">
              <span>Explore Masterworks</span>
              <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 font-medium rounded-sm hover:bg-slate-800 transition-colors">
              <HardHat className="h-4 w-4 text-amber-500" />
              <span>Our Services</span>
            </a>
          </div>
        </div>

        {/* Dynamic Alternating Showcase Image Container */}
        <div className="md:col-span-5 relative w-full h-[450px] bg-slate-900 border border-slate-800 rounded-sm p-2 overflow-hidden group">
          {/* Subtle architectural gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none" />
          
          <div className="w-full h-full relative rounded-sm overflow-hidden border border-slate-800/80 bg-slate-950">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
              >
                <Image
                  src={src}
                  alt={`Magla Architectural Render Showcase ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Minimalist Slide Progress Indicators (Bottom Right Dots) */}
          <div className="absolute bottom-6 right-6 z-20 flex space-x-1.5 bg-slate-950/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-slate-800/40">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-4 bg-amber-500' : 'w-1.5 bg-slate-600'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}