'use strict';
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, CheckCircle2, SlidersHorizontal, X, FileText, Ruler, Building, Wallet } from 'lucide-react';

const blueprints = [
  {
    id: 'BP-001',
    title: 'The Contemporary Cantilever Villa',
    type: 'Residential',
    specs: '5 BHK | 4,500 sq ft | 2 Floors',
    price: 'Ksh 150,000',
    imageSrc: '/4.jpg', // Utilizing your existing local high-quality assets
    description: 'A masterpiece of modernist architecture featuring bold structural cantilevers, open-concept living zones, and extensive floor-to-ceiling glass specs designed for scenic orientations.',
    includes: ['CAD Files (DWG Format)', 'Stamped Structural Blueprints', 'High-End 3D Renders', 'Electrical & Plumbing Layouts'],
  },
  {
    id: 'BP-002',
    title: 'Modernist Eco-A-Frame Cabin',
    type: 'Residential',
    specs: '3 BHK | 2,200 sq ft | Lofted',
    price: 'Ksh 85,000',
    imageSrc: '/7.jpg',
    description: 'An elegant, high-ceiling sustainable structural cabin design optimized for quick site timber frame assembly, localized off-grid solar integration, and steep grade handling.',
    includes: ['CAD Files (DWG Format)', 'Complete Bill of Quantities (BoQ)', 'HVAC Mechanical Schematics', 'Foundation Plans'],
  },
  {
    id: 'BP-003',
    title: 'Multi-Tenant Commercial Strip',
    type: 'Commercial',
    specs: '8 Units | 12,000 sq ft | Single Floor',
    price: 'Ksh 380,000',
    imageSrc: '/6.jpg',
    description: 'A high-yield zoning commercial commercial layout with modern concrete casting columns, unified service lanes, and modular inner wall layouts easily reconfigured for business tenants.',
    includes: ['Full Engineering Approval Pack', 'Zoning & Parking Site Layouts', 'CAD Files (DWG)', 'Plumbing Infrastructure Profiles'],
  },
  {
    id: 'BP-004',
    title: 'Minimalist Cuboid Luxury Estate',
    type: 'Residential',
    specs: '6 BHK | 6,800 sq ft | 3 Floors',
    price: 'Ksh 220,000',
    imageSrc: '/5.jpg',
    description: 'A premium concrete monolithic cuboid configuration utilizing multi-level roof terrace spaces, a hidden internal drainage scheme, and optimized deep pile foundation layouts.',
    includes: ['CAD Files (DWG Format)', 'Structural Engineering Blueprints', 'Interior Architecture Schematics', 'Material Takeoff BoQ'],
  },
];

export default function BlueprintStore() {
  const [filter, setFilter] = useState('All');
  const [selectedPlan, setSelectedPlan] = useState<typeof blueprints[0] | null>(null);
  const [checkoutPlan, setCheckoutPlan] = useState<typeof blueprints[0] | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate STK Push or operational processing
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setCheckoutPlan(null);
      setPhoneNumber('');
    }, 4000);
  };

  return (
    <section id="store" className="py-24 bg-slate-950 border-t border-slate-900 relative">
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
              <div 
                key={bp.id} 
                className="bg-slate-900 border border-slate-800/60 rounded-sm p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 relative group"
              >
                {/* ID Tag */}
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-600 group-hover:text-amber-400/40 transition-colors z-20">
                  {bp.id}
                </div>

                <div className="cursor-pointer" onClick={() => setSelectedPlan(bp)}>
                  {/* Miniature Asset Image Frame */}
                  <div className="relative w-full h-48 bg-slate-950 rounded-sm overflow-hidden mb-6 border border-slate-800/80">
                    <Image 
                      src={bp.imageSrc} 
                      alt={bp.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center space-x-2 text-amber-500 mb-2">
                    <Building className="h-4 w-4" />
                    <span className="text-xs font-mono tracking-widest uppercase">{bp.type} Architecture Set</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                    {bp.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-6">{bp.specs}</p>

                  {/* Deliverables Checklist */}
                  <div className="border-t border-slate-800/80 pt-4 mb-6">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Package Includes:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {bp.includes.slice(0, 4).map((item, index) => (
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
                  <button 
                    onClick={() => setCheckoutPlan(bp)}
                    className="inline-flex items-center space-x-2 px-5 py-3 bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all duration-300 shadow-lg"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    <span>Purchase Architecture Set</span>
                  </button>
                </div>
                
              </div>
            ))}
        </div>
      </div>

      {/* 1. PLAN DETAILED QUICK-VIEW MODAL */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 z-30 p-2 bg-slate-950/80 border border-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative w-full md:w-1/2 h-[250px] md:h-auto min-h-[350px] bg-slate-950">
              <Image src={selectedPlan.imageSrc} alt={selectedPlan.title} fill className="object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">{selectedPlan.type} Production Set</span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">{selectedPlan.title}</h3>
                
                <div className="flex items-center space-x-2 text-xs font-mono bg-slate-950 border border-slate-800/60 p-2.5 rounded-sm my-4 text-slate-300">
                  <Ruler className="h-3.5 w-3.5 text-amber-500" />
                  <span>{selectedPlan.specs}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">{selectedPlan.description}</p>

                <div className="space-y-2 mt-6">
                  <span className="text-xs font-mono text-slate-400 uppercase block tracking-wider">Unabridged Documentation Deliverables:</span>
                  <div className="space-y-1.5">
                    {selectedPlan.includes.map((inc, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                        <FileText className="h-3.5 w-3.5 text-amber-500" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Total Licensing cost</span>
                  <span className="text-2xl font-black text-white font-mono">{selectedPlan.price}</span>
                </div>
                <button 
                  onClick={() => {
                    setCheckoutPlan(selectedPlan);
                    setSelectedPlan(null);
                  }}
                  className="px-6 py-3 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-amber-400 transition-colors"
                >
                  Initiate Secure Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. SECURE CHECKOUT / INTEGRATION GATEWAY MODAL */}
      {checkoutPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-sm p-6 relative shadow-2xl">
            <button 
              onClick={() => setCheckoutPlan(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {paymentSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-12 w-12 bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center rounded-full mx-auto animate-bounce">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Payment Request Sent</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Check your device terminal input framework. We have transmitted an automated STK Push protocol to complete the transaction of <span className="text-white font-mono">{checkoutPlan.price}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-amber-500 text-xs font-mono uppercase">
                    <Wallet className="h-3.5 w-3.5" />
                    <span>Secure Licensing Checkout</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Acquire Blueprint License</h3>
                  <p className="text-xs text-slate-400">Design: {checkoutPlan.title}</p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800/80 rounded-sm flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Total Due Amount:</span>
                  <span className="text-base font-bold text-white text-amber-400">{checkoutPlan.price}</span>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">M-Pesa Registered Number</label>
                  <input 
                    type="tel"
                    required
                    pattern="^(?:254|\+254|0)?(7|1)[0-9]{8}$"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white font-mono tracking-wider transition-colors" 
                    placeholder="e.g. 0712345678"
                  />
                  <p className="text-[10px] text-slate-500 font-mono">Supports instant STK Push execution routines safely.</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest py-4 rounded-sm transition-all shadow-lg"
                >
                  Prompt Secure Payment Engine
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}