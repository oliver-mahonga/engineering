'use strict';
'use client';

import { DraftingCompass, Building2, HardHat, FileText, Ruler, Landmark } from 'lucide-react';

const services = [
  {
    icon: DraftingCompass,
    title: 'Architectural Design',
    desc: 'Bespoke conceptualization, 3D photorealistic renderings, and space planning tailored to high-end aesthetic mandates.',
  },
  {
    icon: Building2,
    title: 'Structural Engineering',
    desc: 'Precise load-bearing blueprints, foundations configuration, and materials resilience calculations.',
  },
  {
    icon: HardHat,
    title: 'Construction Management',
    desc: 'On-site execution, resource allocation, scheduling, and engineering supervision from ground breaking to key handover.',
  },
  {
    icon: Ruler,
    title: 'Quantity Surveying',
    desc: 'Rigorous cost configuration, material take-offs, and bill of quantities estimation to optimize asset portfolios.',
  },
  {
    icon: FileText,
    title: 'Feasibility & Approvals',
    desc: 'Navigating regulatory validation loops, structural certifications, and comprehensive zoning assessments.',
  },
  {
    icon: Landmark,
    title: 'Interior Architecture',
    desc: 'Harmonizing internal spatial logic with luxury fit-outs, geometric millwork, and lighting ergonomics.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono uppercase text-amber-500 tracking-[0.25em] block">Core Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            End-to-End Infrastructure Delivery
          </h2>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <div key={idx} className="bg-slate-950 border border-slate-800/60 p-8 rounded-sm hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:bg-amber-500/10" />
                <div className="p-3 bg-slate-900 w-fit rounded-sm mb-6 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
                  <IconComponent className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}