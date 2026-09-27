'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Real Estate Broker",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "With over 15 years of experience, Sarah specializes in luxury properties and ensuring clients find their dream homes with zero stress.",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
    phone: "+1 (555) 123-4567",
    email: "sarah.j@estate-x.com"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Commercial Property Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Michael is our go-to expert for commercial real estate, helping businesses find the perfect locations to thrive and grow.",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
    phone: "+1 (555) 987-6543",
    email: "m.chen@estate-x.com"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Residential Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Emily's passion is helping first-time homebuyers navigate the market. Her patience and dedication make her a client favorite.",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
    phone: "+1 (555) 456-7890",
    email: "emily.r@estate-x.com"
  },
  {
    id: 4,
    name: "David Smith",
    role: "Investment Property Advisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "David helps investors maximize their returns by identifying undervalued properties and emerging market trends.",
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
    phone: "+1 (555) 321-0987",
    email: "d.smith@estate-x.com"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export default function Agents() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">Our Professionals</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Expert Agents
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our team of dedicated professionals is here to guide you through every step of your real estate journey with expertise and personalized care.
            </p>
          </motion.div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {agents.map((agent) => (
            <motion.div 
              key={agent.id} 
              variants={itemVariants}
              className="group relative bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src={agent.image} 
                  alt={agent.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={agent.social.facebook} className="p-2 bg-white/20 hover:bg-amber-600 rounded-full text-white backdrop-blur-sm transition-colors">
                    <FacebookIcon size={20} />
                  </a>
                  <a href={agent.social.twitter} className="p-2 bg-white/20 hover:bg-amber-400 rounded-full text-white backdrop-blur-sm transition-colors">
                    <TwitterIcon size={20} />
                  </a>
                  <a href={agent.social.instagram} className="p-2 bg-white/20 hover:bg-amber-500 rounded-full text-white backdrop-blur-sm transition-colors">
                    <InstagramIcon size={20} />
                  </a>
                  <a href={agent.social.linkedin} className="p-2 bg-white/20 hover:bg-amber-700 rounded-full text-white backdrop-blur-sm transition-colors">
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  {agent.name}
                </h4>
                <p className="text-sm text-amber-500 dark:text-amber-400 font-medium mb-4">
                  {agent.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                  {agent.bio}
                </p>
                <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                    <Phone size={16} className="text-gray-400" />
                    <span>{agent.phone}</span>
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                    <Mail size={16} className="text-gray-400" />
                    <span>{agent.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
