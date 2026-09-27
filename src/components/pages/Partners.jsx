'use client';

import React from 'react';
import { motion } from 'framer-motion';
const logos = [
  { id: 1, name: "CityBank", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v3"/><path d="M12 14v3"/><path d="M16 14v3"/></svg> },
  { id: 2, name: "Global Trust", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> },
  { id: 3, name: "Nexus Developers", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M10 12h4"/><path d="M10 8h4"/><path d="M10 16h4"/></svg> },
  { id: 4, name: "Prime Mortgages", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { id: 5, name: "Skyline Builders", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22V12"/><path d="M16 22V6"/><path d="M4 22V16"/><path d="M20 22V10"/><path d="M2 22h20"/><path d="M16 2l-4 4-4-4"/></svg> },
  { id: 6, name: "Nova Finance", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
];

export default function Partners() {
  const loopedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-sm font-bold tracking-wider text-amber-500 uppercase">Trusted By</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            Our Partners & Financial Institutions
          </h3>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center pl-16 md:pl-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {loopedLogos.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-4 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all cursor-pointer text-zinc-500 hover:text-amber-500"
            >
              <div className="shrink-0">
                {partner.icon}
              </div>
              <span className="text-2xl font-black tracking-tight font-sans">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
