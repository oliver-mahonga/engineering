'use strict';
'use client';

import { useState } from 'react';
import { Maximize2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'The Lumina Pavilion',
    category: 'Residential',
    location: 'Nairobi',
    metric: '12,000 sq ft',
  },
  {
    title: 'Vertex Tower Matrix',
    category: 'Commercial',
    location: 'Mombasa',
    metric: '24 Floors',
  },
  {
    title: 'Aero-Structural Hangar',
    category: 'Industrial',
    location: 'Kisumu',
    metric: '45,000 sq ft',
  },
  {
    title: 'Minimalist Atrium Villa',
    category: 'Residential',
    location: 'Nakuru',
    metric: '6,500 sq ft',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-amber-500 tracking-[0.25em] block">// ARCHITECTURAL SHOWCASE</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Featured Portfolios</h2>
          </div>
          
          {/* Quick Filter Shell */}
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider font-semibold">
            {['All', 'Residential', 'Commercial', 'Industrial'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border transition-all rounded-sm duration-300 ${activeFilter === filter ? 'bg-amber-500 border-amber-500 text-slate-950' : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter(p => activeFilter === 'All' || p.category === activeFilter)
            .map((proj, idx) => (
              <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-sm overflow-hidden h-[400px]">
                {/* Visual Image Underlay Area */}
                <div className="absolute inset-0 bg-slate-950 flex items-center justify-center p-6 text-center border-b border-slate-800">
                  <div className="space-y-2 opacity-40 group-hover:opacity-60 transition-opacity">
                    <Maximize2 className="h-8 w-8 text-slate-500 mx-auto" />
                    <p className="text-xs font-mono">src/assets/portfolio_img_{idx + 1}.jpg</p>
                  </div>
                </div>

                {/* Info Card Overlay Layer */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-24 z-20 flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{proj.category}</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full" />
                      <span className="text-xs text-slate-400 font-mono">{proj.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500">Scale Scope: {proj.metric}</p>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-sm text-slate-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="h-5 w-5 text-amber-500" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}