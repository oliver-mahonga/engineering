'use strict';
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, X, Ruler, MapPin, Building2, Layers } from 'lucide-react';

const projects = [
  {
    title: 'The Lumina Pavilion',
    category: 'Residential',
    location: 'Nairobi',
    metric: '12,000 sq ft',
    imageSrc: '/4.jpg',
    description: 'A premium luxury residential structure maximizing glass facade ergonomics, integrated solar tracking arrays, and thermal insulation metrics.',
    materials: ['Reinforced Concrete', 'Low-E Insulated Glass', 'Local Granite']
  },
  {
    title: 'Vertex Tower Matrix',
    category: 'Commercial',
    location: 'Mombasa',
    metric: '24 Floors',
    imageSrc: '/6.jpg',
    description: 'High-density commercial high-rise utilizing an advanced external steel exoskeleton frame to mitigate wind shear force profiles along the coastline.',
    materials: ['Structural Titanium Steel', 'Curtain Wall Glass', 'Composite Panels']
  },
  {
    title: 'Aero-Structural Hangar',
    category: 'Industrial',
    location: 'Kisumu',
    metric: '45,000 sq ft',
    imageSrc: '/5.jpg',
    description: 'Industrial assembly facility configured with clear-span steel trusses to yield wide uninhibited spatial floor plates for heavy freight operations.',
    materials: ['Pre-engineered Steel Trusses', 'Corrugated Decking', 'Industrial Epoxy']
  },
  {
    title: 'Minimalist Atrium Villa',
    category: 'Residential',
    location: 'Nakuru',
    metric: '6,500 sq ft',
    imageSrc: '/7.jpg',
    description: 'A residential masterwork arranged symmetrically around a central lightwell atrium, establishing optimal natural ventilation loops.',
    materials: ['Bespoke Timber Frame', 'Polished Concrete', 'Smart Glass Windows']
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  // Track which project is actively open in the lightbox modal view
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
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

        {/* Portfolio Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter(p => activeFilter === 'All' || p.category === activeFilter)
            .map((proj, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(proj)}
                className="group relative bg-slate-900 border border-slate-800 rounded-sm overflow-hidden h-[400px] cursor-pointer"
              >
                
                {/* Real Optimized Project Image Render */}
                <div className="absolute inset-0 w-full h-full bg-slate-950">
                  <Image
                    src={proj.imageSrc}
                    alt={`${proj.title} Architectural Blueprint Layout`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Dark gradient mapping to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 transition-opacity duration-300 group-hover:via-slate-950/60" />
                </div>

                {/* Info Card Overlay Layer */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{proj.category}</span>
                      <span className="w-1 h-1 bg-slate-500 rounded-full" />
                      <span className="text-xs text-slate-300 font-mono">{proj.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400">Scale Scope: {proj.metric}</p>
                  </div>
                  
                  {/* Interactive Action Icon Block (Now clickable button format) */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents double firing from child event bubbling
                      setSelectedProject(proj);
                    }}
                    className="p-3 bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-sm text-slate-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500"
                    aria-label={`View details for ${proj.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Dynamic Architecture Details Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
            
            {/* Close Command Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 p-2 bg-slate-950/80 border border-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Column: Image Render */}
            <div className="relative w-full md:w-1/2 h-[250px] md:h-auto min-h-[300px] bg-slate-950">
              <Image 
                src={selectedProject.imageSrc}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column: Architectural Specifications */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-2">
                  <Building2 className="h-4 w-4" />
                  <span>{selectedProject.category} Infrastructure</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {selectedProject.title}
                </h3>

                {/* Scope Indicators */}
                <div className="grid grid-cols-2 gap-4 my-4 p-3 bg-slate-950 border border-slate-800/60 rounded-sm text-xs font-mono">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <MapPin className="h-3.5 w-3.5 text-amber-500" />
                    <span>{selectedProject.location}, Kenya</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Ruler className="h-3.5 w-3.5 text-amber-500" />
                    <span>{selectedProject.metric}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Core System Specifications Strip */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center space-x-1.5 text-xs font-mono uppercase text-slate-400 tracking-wider">
                  <Layers className="h-3.5 w-3.5 text-amber-500" />
                  <span>Material Blueprint Manifest:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.materials.map((mat, mIdx) => (
                    <span key={mIdx} className="text-[11px] font-mono bg-slate-950 border border-slate-800/80 px-2.5 py-1 text-slate-300 rounded-sm">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}