'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import FAQ from '@/components/pages/FAQ';

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 items-stretch justify-center bg-zinc-50 dark:bg-black">
      <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/80 to-slate-900/40 z-0"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-amber-500 font-bold tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              We are Here To Help
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Whether you have a question about a property, need assistance with your mortgage, or
              want to partner with us, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20  dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative -mt-32 z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl shadow-amber-500/5 border border-zinc-100 dark:border-zinc-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex shrink-0 items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">
                        Head Office
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Premium Boulevard, Suite 400
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex shrink-0 items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        +1 (800) 123-4567
                        <br />
                        +1 (800) 987-6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex shrink-0 items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        hello@estate-x.com
                        <br />
                        support@estate-x.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex shrink-0 items-center justify-center">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Monday - Friday: 9AM - 6PM
                        <br />
                        Saturday: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl shadow-xl shadow-amber-500/5 border border-zinc-100 dark:border-zinc-800">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Feel free to drop us a line below. Our support team will get back to you within 24
                  hours.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 group"
                  >
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="h-125 w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2592070005703!2d-73.9878434238318!3d40.75628597138541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sbd!4v1710620956920!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          title="Head Office Location"
        />
      </section>
      <FAQ />
    </div>
  );
}
