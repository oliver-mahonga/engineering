'use strict';
'use client';

import { useState } from 'react';
import { ShoppingCart, Menu, Expand, CheckCircle2, SlidersHorizontal } from 'lucide-react';

const blueprints = [
  {
    id: 'BP-001',
    title: 'The Contemporary Cantilever Villa',
    type: 'Residential',
    specs: '5 BHK | 4,500 sq ft | 2 Floors',
    price: 'Ksh 150,000',
    includes: ['CAD Files', 'Structural Blueprints', '3D Renders', 'Electrical & Plumbing Layouts'],
  },
  {
    id: 'BP-002',
    title: 'Modernist Eco-A-Frame Cabin',
    type: 'Residential',
    specs: '3 BHK | 2,200 sq ft | Lofted',
    price: 'Ksh 85,000',
    includes: ['CAD Files', 'Bill of Quantities (BoQ)', 'HVAC Schematics'],
  },
  {
    id: 'BP-003',
    title: 'Multi-Tenant Commercial Strip',
    type: 'Commercial',
    specs: '8 Units | 12,000 sq ft | Single Floor',
    price: 'Ksh 380,000',
    includes: ['Full Engineering Approval Pack', 'Zoning Layouts', 'CAD Files', 'Plumbing'],
  },
  {
    id: 'BP-004',
    title: 'Minimalist Cuboid Luxury Estate',
    type: 'Residential',
    specs: '6 BHK | 6,800 sq ft | 3 Floors',
    price: 'Ksh 220,000',
    includes: ['CAD Files', 'Structural Blueprints', 'Interior Layouts', 'BoQ'],
  },
];

export default function BlueprintStore() {
  const [filter, setFilter] = useState('All');

  return (
    <section id="store" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-amber-500 tracking-[0.25em] block">// DIGITAL REGISTRY</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Pre-Engineered Blueprints</h2>
            <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
              Acquire production-ready, stamp-certified architectural designs optimized for immediate structural permitting and localized construction.
            </p>
          </div>

          {/* Filtering Engine */}
          <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800/80 p-1.5 rounded-sm">
            <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500 ml-2" />
            {['All', 'Residential', 'Commercial'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${filter === category ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blueprints
            .filter((bp) => filter === 'All' || bp.type === filter)
            .map((bp) => (
              <div key={bp.id} className="bg-slate-900 border border-slate-800/60 rounded-sm p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 relative group">
                
                {/* Structural Background Blueprint Element */}
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-700 group-hover:text-amber-500/20 transition-colors">
                  {bp.id}
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-amber-500 mb-3">
                    <Menu className="h-5 w-5" />
                    <span className="text-xs font-mono tracking-widest uppercase">{bp.type} Plan Set</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                    {bp.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-6">{bp.specs}</p>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-slate-800/80 pt-4 mb-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Package Includes:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {bp.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="h-3 w-3 text-amber-500/80 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & Checkout Strip */}
                <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between mt-4">
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase">Investment Fee</span>
                    <span className="text-xl font-extrabold text-white font-mono tracking-tight">{bp.price}</span>
                  </div>
                  <button className="inline-flex items-center space-x-2 px-5 py-3 bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all duration-300">
                    <ShoppingCart className="h-3.5 w-3.5" />
                    <span>Purchase Architecture Set</span>
                  </button>
                </div>
                
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}