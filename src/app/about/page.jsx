import React from 'react';
import Image from 'next/image';
import { Target, Shield, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import Agents from '@/components/pages/Agents';
import CTA from '@/components/pages/CTA';

export const metadata = {
  title: 'About Us | Estate-X',
  description: 'Learn more about Estate-X, our mission, vision, and the team behind our success in the real estate industry.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-stretch justify-center bg-zinc-50 dark:bg-black">
      

      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">

        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop)` }}
        />

        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-amber-500 font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
            Discover Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Real Estate</span> Experiences
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We don't just sell properties. We build long-term relationships through trust, transparency, and unparalleled expertise.
          </p>
        </div>
      </section>


      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -inset-4 bg-amber-500/10 blur-3xl -z-10 rounded-full"></div>
              <div className="space-y-4 pt-12">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" 
                    alt="Office" fill className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800&auto=format&fit=crop" 
                    alt="Handshake" fill className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop" 
                    alt="Real estate keys" fill className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" 
                    alt="Luxury Home" fill className="object-cover"
                  />
                </div>
              </div>
            </div>


            <div>
              <h2 className="text-sm font-bold tracking-wider text-amber-600 uppercase mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Building a legacy of trust since 2010.
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Estate-X started with a simple idea: to make finding a dream home an exciting and seamless experience. Over the last decade, we have grown into one of the most trusted real estate agencies, helping thousands of families find their perfect place.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Our team is driven by data, innovation, and a deep understanding of the local market. We prioritize your needs above all else, ensuring that every transaction is transparent and beneficial for you.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "10+ Years of Experience",
                  "Award Winning Agency",
                  "500+ Properties Sold",
                  "24/7 Client Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500 shrink-0" size={24} />
                    <span className="font-semibold text-gray-900 dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors font-bold rounded-xl flex items-center gap-2 group">
                Read Full Story
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Drives Us Forward
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our principles are the foundation of everything we do. We stand by these values to ensure we provide the best possible service to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target size={32} />, title: "Mission Driven", desc: "We are committed to helping you achieve your real estate goals with precision and dedication." },
              { icon: <Shield size={32} />, title: "Absolute Trust", desc: "Transparency and honesty are at the core of our communication and transactions." },
              { icon: <Award size={32} />, title: "Excellence", desc: "We continually strive to exceed expectations and deliver award-winning service." },
              { icon: <Users size={32} />, title: "Client First", desc: "Your needs dictate our actions. We tailor our approach to suit your unique situation." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <Agents />
      </div>


      <CTA />

    </div>
  );
}
