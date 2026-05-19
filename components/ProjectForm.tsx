'use strict';
'use client';

import React, { useState } from 'react';
import { Send, FileCheck, Layers, ClipboardList } from 'lucide-react';

export default function ProjectForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', serviceType: 'Architecture', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect backend API processes here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact-portal" className="py-24 bg-slate-900 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-500">
            <ClipboardList className="h-3.5 w-3.5" />
            <span>Project Intake Dashboard</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to commission your framework?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Fill out our architectural and structural engineering request manifest. Our principal systems architect will evaluate your specifications within 24 working hours.
          </p>

          <div className="border-t border-slate-800 pt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-slate-950 rounded border border-slate-800 text-amber-500 text-xs font-mono mt-0.5">01</div>
              <div>
                <h4 className="text-sm font-bold text-white">Project Scope Calibration</h4>
                <p className="text-xs text-slate-500">We analyze regulatory permissions, site boundaries, and terrain features.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-slate-950 rounded border border-slate-800 text-amber-500 text-xs font-mono mt-0.5">02</div>
              <div>
                <h4 className="text-sm font-bold text-white">Execution Tendering</h4>
                <p className="text-xs text-slate-500">Comprehensive drafting of structural frameworks paired with materials takeoffs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Form Sheet */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800/80 rounded-sm p-8 relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-16 text-center space-y-4 animate-fade-in">
              <FileCheck className="h-12 w-12 text-amber-500 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Manifest Dispatched Successfully</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                Magla Engineering Limited has logged your engineering requirements. A coordinator will call your terminal shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">Full Corporate Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors"
                    placeholder="e.g. John Doe / Alpha Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">Secure Email Terminal</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">Direct Contact Line</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors"
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">Target Core Mandate</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors appearance-none"
                  >
                    <option value="Architecture">Bespoke Architectural Blueprinting</option>
                    <option value="Construction">Full Structural Construction</option>
                    <option value="Interior">Interior Architecture Fitout</option>
                    <option value="Surveying">Quantity Surveying & Auditing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-slate-400">Project Brief & Site Parameters</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors resize-none"
                  placeholder="Outline dimensions, locations, styles, or specific engineering challenges..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 py-4 bg-amber-500 text-slate-950 font-extrabold uppercase tracking-widest text-xs rounded-sm hover:bg-amber-400 transition-all duration-300"
              >
                <span>Transmit Manifest Command</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}