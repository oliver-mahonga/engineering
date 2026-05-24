'use strict';
'use client';

import React, { useState } from 'react';
import { Send, FileCheck, ClipboardList, ShieldAlert, ChevronDown } from 'lucide-react';

export default function ProjectForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    serviceType: 'Architecture', 
    message: '' 
  });
  
  // Track communication request lifetimes clearly
  const [status, setStatus] = useState<'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('PENDING');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // If server returns 404 or 500, capture message metrics directly
        throw new Error(result.error || `Server responded with status status ${response.status}`);
      }

      setStatus('SUCCESS');
      // Reset form upon successful execution loops
      setFormData({ name: '', email: '', phone: '', serviceType: 'Architecture', message: '' });
    } catch (err: any) {
      setStatus('ERROR');
      setErrorMessage(err.message || 'An unexpected routing error occurred. Please check folder locations.');
    }
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
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800/80 rounded-sm p-8 relative overflow-hidden shadow-xl">
          
          {status === 'SUCCESS' ? (
            <div className="py-16 text-center space-y-4 animate-fade-in">
              <div className="h-12 w-12 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Manifest Dispatched Successfully</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                Magla Engineering Limited has logged your engineering requirements. A coordinator will evaluate your design terminal specs shortly.
              </p>
              <button
                onClick={() => setStatus('IDLE')}
                className="pt-4 text-xs font-mono uppercase tracking-wider text-amber-500 underline hover:text-amber-400 transition-colors"
              >
                Submit another intake command
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Dynamic Error Status Box */}
              {status === 'ERROR' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-sm text-red-400 text-xs font-mono flex items-center space-x-2.5 animate-fade-in">
                  <ShieldAlert className="h-4 w-4 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="font-bold block uppercase text-[10px] text-red-500 mb-0.5">Routing Connection Breakage:</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">Full Corporate Name</label>
                  <input
                    type="text"
                    required
                    disabled={status === 'PENDING'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors disabled:opacity-40"
                    placeholder="e.g. John Doe / Alpha Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">Secure Email Terminal</label>
                  <input
                    type="email"
                    required
                    disabled={status === 'PENDING'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors disabled:opacity-40"
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
                    disabled={status === 'PENDING'}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors disabled:opacity-40"
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-slate-400">Target Core Mandate</label>
                  <div className="relative">
                    <select
                      disabled={status === 'PENDING'}
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors appearance-none cursor-pointer disabled:opacity-40"
                    >
                      <option value="Architecture">Bespoke Architectural Blueprinting</option>
                      <option value="Construction">Full Structural Construction</option>
                      <option value="Interior">Interior Architecture Fitout</option>
                      <option value="Surveying">Quantity Surveying & Auditing</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-slate-400">Project Brief & Site Parameters</label>
                <textarea
                  rows={4}
                  required
                  disabled={status === 'PENDING'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:outline-none p-3 text-sm rounded-sm text-white transition-colors resize-none disabled:opacity-40"
                  placeholder="Outline dimensions, locations, styles, or specific engineering challenges..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'PENDING'}
                className="w-full inline-flex items-center justify-center space-x-2 py-4 bg-amber-500 text-slate-950 font-extrabold uppercase tracking-widest text-xs rounded-sm hover:bg-amber-400 disabled:bg-slate-800 disabled:text-slate-500 transition-all duration-300 shadow-md"
              >
                {status === 'PENDING' ? (
                  <div className="h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Transmit Manifest Command</span>
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}