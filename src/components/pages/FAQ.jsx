'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How do I start the process of buying a home?",
    answer: "The first step is to get pre-approved for a mortgage so you know your budget. Once that's done, you can start browsing our properties or contact one of our agents to help you find homes that match your criteria."
  },
  {
    id: 2,
    question: "What are the additional costs of buying a property?",
    answer: "Beyond the property price, you should budget for closing costs (typically 2-5% of the loan amount), property taxes, home insurance, HOA fees (if applicable), and initial maintenance or furnishing costs."
  },
  {
    id: 3,
    question: "How long does it usually take to close on a house?",
    answer: "On average, closing takes about 30 to 45 days after your offer is accepted. This time is needed for the home inspection, appraisal, and for your lender to finalize your mortgage."
  },
  {
    id: 4,
    question: "Can I sell my current home and buy a new one at the same time?",
    answer: "Yes! This is very common. We can help you navigate this by setting up a contingency offer, or exploring options like bridge loans so the transition is as smooth as possible."
  },
  {
    id: 5,
    question: "Do I need a real estate agent to buy a home?",
    answer: "While not legally required, having an expert agent ensures you get the best deal, helps navigate complex paperwork, and provides access to off-market listings. Plus, as a buyer, our services are usually paid for by the seller!"
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0].id);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Got questions? We've got answers. Here are some of the most common questions our clients ask us.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${openId === faq.id ? 'text-amber-500' : 'text-zinc-900 dark:text-white hover:text-amber-500'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors shrink-0 ml-4 ${openId === faq.id ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'}`}>
                  {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
