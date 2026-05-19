'use strict';
'use client';

import { ArrowUpRight, ShieldCheck, HardHat } from 'lucide-react';

export default function Hero() {
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

        <div className="md:col-span-5 relative w-full h-[450px] bg-slate-900 border border-slate-800 rounded-sm p-4 overflow-hidden group">
          {/* Main Visual Placeholder Container */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-transparent z-10" />
          <div className="w-full h-full relative bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-800/80">
            {/* Visual simulation mapping structural wireframe lines */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [size:16px_16px]" />
            <div className="z-20 text-center px-4">
              <span className="block text-xs uppercase tracking-widest text-amber-500 font-mono mb-2">// HIGH-END RENDERS</span>
              <p className="text-sm text-slate-400 italic">Insert your architectural masterwork render/photo here (Hero Background Block)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}