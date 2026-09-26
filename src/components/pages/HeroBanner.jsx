"use client";

import React from 'react';
import Container from '../layouts/Container';
import { Search, MapPin, Home, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className="w-full relative min-h-[85vh] lg:min-h-200 flex items-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop)` }}
      />
      
      {/* Strong Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50 z-0"></div>

      <div className="relative z-10 w-full pt-16 pb-12 md:pt-20 md:pb-16 px-4 md:px-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Text & Search Content */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-5 md:gap-6">
            
            {/* Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 backdrop-blur-md px-4 py-1.5 rounded-full w-max text-xs font-bold text-amber-400 uppercase tracking-widest shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Premium Real Estate
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight"
            >
              Find Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Dream Home</span> <br className="hidden md:block" />
              With Confidence
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 max-w-xl text-lg leading-relaxed mt-2"
            >
              Discover the most premium properties in your area. We provide seamless, transparent, and expert guidance to help you make the best choice.
            </motion.p>
            
            {/* Search Box Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-3 rounded-3xl mt-6 flex flex-col md:flex-row items-center gap-3 max-w-3xl shadow-2xl"
            >
              {/* Location Input */}
              <div className="flex-1 bg-slate-800/60 rounded-2xl p-3 flex items-center gap-4 border border-white/5 w-full">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-400" size={20} />
                </div>
                <div className="flex flex-col w-full">
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Location</span>
                  <input 
                    type="text" 
                    placeholder="New York, USA" 
                    className="bg-transparent border-none outline-none text-white placeholder-slate-500 text-sm font-semibold w-full"
                  />
                </div>
              </div>
              
              {/* Property Type Select */}
              <div className="flex-1 bg-slate-800/60 rounded-2xl p-3 flex items-center gap-4 border border-white/5 w-full">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Home className="text-blue-400" size={20} />
                </div>
                <div className="flex flex-col w-full">
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Property Type</span>
                  <select className="bg-transparent border-none outline-none text-white text-sm font-semibold w-full cursor-pointer appearance-none">
                    <option value="" className="text-slate-800 bg-white">Select type</option>
                    <option value="house" className="text-slate-800 bg-white">House</option>
                    <option value="apartment" className="text-slate-800 bg-white">Apartment</option>
                    <option value="villa" className="text-slate-800 bg-white">Villa</option>
                  </select>
                </div>
              </div>
              
              {/* Search Button */}
              <button className="bg-amber-500 hover:bg-amber-600 transition-colors text-slate-900 h-[60px] px-8 rounded-2xl font-bold flex items-center justify-center gap-2 w-full md:w-auto shrink-0 shadow-lg shadow-amber-500/30">
                <Search size={20} />
                Search
              </button>
            </motion.div>
            
            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-8 md:gap-16 mt-8 pt-8 border-t border-white/10"
            >
              <div>
                <h3 className="text-3xl font-extrabold text-white">1.5K<span className="text-amber-500">+</span></h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">Properties Ready</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block"></div>
              <div>
                <h3 className="text-3xl font-extrabold text-white">500<span className="text-amber-500">+</span></h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block"></div>
              <div>
                <h3 className="text-3xl font-extrabold text-white">50<span className="text-amber-500">+</span></h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">Expert Agents</p>
              </div>
            </motion.div>
            
          </div>
          
          {/* Right Circular Image Profile */}
          <div className="col-span-1 lg:col-span-5 relative flex justify-center lg:justify-end mt-10 md:mt-16 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-[8px] border-white/5 p-2 shadow-2xl">
                {/* Inner Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white/10 relative bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                    alt="Agent Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <button className="absolute top-12 right-0 lg:-right-4 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group z-20">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                  <Play className="text-amber-600 ml-1" size={24} fill="currentColor" />
                </div>
              </button>
              
              {/* Decorative Card */}
              <div className="absolute bottom-8 -left-4 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 flex gap-3 items-center z-20 animate-bounce" style={{animationDuration: '4s'}}>
                <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Trusted Agency</p>
                  <p className="text-slate-400 text-xs">Top Rated in 2026</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroBanner;