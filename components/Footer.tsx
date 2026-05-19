'use strict';
'use client';

import { Mail, Phone, MapPin, ArrowUp, Building } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800/80 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
        
        {/* Profile Branding */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold uppercase tracking-widest text-white">Magla Engineering</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Setting architectural standards across the board. Providing sustainable, high-precision engineering design matrices and construction administration.
          </p>
        </div>

        {/* Dynamic Connect Fields */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase text-white tracking-widest">// Technical Inquiries</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>projects@maglaengineering.co.ke</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>+254 (0) 700 000 000</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase text-white tracking-widest">// Headquarters</h4>
            <p className="text-sm text-slate-400 flex items-start space-x-3 leading-relaxed">
              <MapPin className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>
                Engineers Block, Suite 404<br />
                Nairobi, Kenya
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Sub-Footer Identity Strip */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
        <p>© {new Date().getFullYear()} Magla Engineering Limited. All architectural blueprints protected.</p>
        <button onClick={scrollToTop} className="inline-flex items-center space-x-2 hover:text-amber-400 transition-colors uppercase font-bold tracking-wider group">
          <span>Top of Structure</span>
          <ArrowUp className="h-3.5 w-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}