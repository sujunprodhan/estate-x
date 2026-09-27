'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: "Downtown Manhattan",
    propertiesCount: 124,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48386.40188614668!2d-74.05581971711204!3d40.71441865917812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710609340798!5m2!1sen!2sbd"
  },
  {
    id: 2,
    name: "Beverly Hills",
    propertiesCount: 86,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52860.781878415714!2d-118.44199923837889!3d34.08253995874495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1710609459203!5m2!1sen!2sbd"
  },
  {
    id: 3,
    name: "Miami Beach",
    propertiesCount: 156,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28741.011883651154!2d-80.15549072971212!3d25.810237307000103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b31333d04029%3A0x3c6838a5b28b7e28!2sMiami%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2sbd!4v1710609531862!5m2!1sen!2sbd"
  },
  {
    id: 4,
    name: "San Francisco",
    propertiesCount: 92,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.75781499660171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1710609605727!5m2!1sen!2sbd"
  }
];

export default function MapSection() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-amber-600 uppercase mb-3">Location Explorer</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Find Properties By Area
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore our premium property listings across top locations. Select an area below to view its vibrant neighborhoods on the map.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-4">
            {locations.map((loc, index) => (
              <motion.button
                key={loc.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveLocation(loc)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  activeLocation.id === loc.id 
                    ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-600/20' 
                    : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 hover:border-amber-300 dark:hover:border-amber-900'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full transition-colors ${activeLocation.id === loc.id ? 'bg-white/20' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40'}`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold ${activeLocation.id === loc.id ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {loc.name}
                    </h4>
                    <p className={`text-sm mt-1 ${activeLocation.id === loc.id ? 'text-amber-100' : 'text-gray-500 dark:text-gray-400'}`}>
                      {loc.propertiesCount} Properties
                    </p>
                  </div>
                </div>
                <Navigation 
                  size={20} 
                  className={`transition-transform duration-300 ${activeLocation.id === loc.id ? 'translate-x-1 text-white' : 'text-gray-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'}`} 
                />
              </motion.button>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 relative bg-zinc-200 dark:bg-zinc-800"
          >
            <iframe
              key={activeLocation.id}
              src={activeLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title={`Map of ${activeLocation.name}`}
            />
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 animate-pulse pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
