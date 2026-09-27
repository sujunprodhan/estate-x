'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/90 to-amber-900/40 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-4">
              Your Dream Home Awaits
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Ready to take the <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">next step?</span>
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Whether you are looking to buy, sell, or simply want to explore your options, our expert team is here to help you make the best decision for your future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 group">
                <CalendarDays size={20} />
                Schedule a Visit
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-2 group">
                Contact Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-5/12 w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <h4 className="text-2xl font-bold text-white mb-6 relative z-10">Request a Callback</h4>
              
              <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Your Name" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                </div>
                <button type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-xl transition-all shadow-lg mt-2">
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
