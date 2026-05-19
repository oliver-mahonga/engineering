'use strict';
'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <Layers className="h-6 w-6 text-amber-500 transition-transform duration-500 group-hover:rotate-90" />
          <span className="text-xl font-bold tracking-widest text-white uppercase">
            Magla<span className="text-amber-500">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider uppercase">
          <a href="#hero" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
          <a href="#store" className="hover:text-amber-500 transition-colors">Store Plans</a>
          <a href="#contact-portal" className="px-5 py-2.5 bg-amber-500 text-slate-950 rounded-sm font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-0.5">
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 px-6 py-8 flex flex-col space-y-6 md:hidden animate-fade-in">
          <a href="#hero" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">Portfolio</a>
          <a href="#store" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">Store Plans</a>
          <a href="#contact-portal" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-amber-500 text-slate-950 font-semibold rounded-sm">
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}