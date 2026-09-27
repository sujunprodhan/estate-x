'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

export default function MortgageCalculator() {
  const [price, setPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const emi = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(emi);
    } else if (principal > 0 && monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      setMonthlyPayment(0);
    }
  }, [price, downPayment, interestRate, loanTerm]);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">Finance</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mortgage Calculator
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Estimate your monthly mortgage payments with our easy-to-use calculator. Adjust the variables to see how they affect your EMI.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-xl shadow-amber-500/5"
        >
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Property Price</label>
                <span className="font-bold text-amber-600 dark:text-amber-500">${price.toLocaleString()}</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign size={16} className="text-gray-400" />
                </div>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>
              <input 
                type="range" 
                min="50000" max="5000000" step="10000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full mt-4 accent-amber-500"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Down Payment</label>
                <span className="font-bold text-amber-600 dark:text-amber-500">${downPayment.toLocaleString()}</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign size={16} className="text-gray-400" />
                </div>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>
              <input 
                type="range" 
                min="0" max={price} step="5000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full mt-4 accent-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 block mb-2">Interest Rate</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Percent size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 block mb-2">Loan Term (Years)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={16} className="text-gray-400" />
                  </div>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-amber-500 focus:border-amber-500 transition-colors appearance-none"
                  >
                    <option value={10}>10 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
          <div className="bg-amber-500 text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-amber-500/30">
            <Calculator className="absolute -bottom-6 -right-6 w-48 h-48 text-amber-400/30 z-0" />
            
            <div className="relative z-10">
              <p className="text-amber-100 font-semibold uppercase tracking-widest text-sm mb-2">Estimated Monthly Payment</p>
              <h4 className="text-5xl md:text-6xl font-extrabold mb-6">
                ${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </h4>
              
              <div className="space-y-4 pt-6 border-t border-amber-400/50">
                <div className="flex justify-between">
                  <span className="text-amber-100">Principal Amount</span>
                  <span className="font-bold">${(price - downPayment).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-100">Total Interest</span>
                  <span className="font-bold">${((monthlyPayment * loanTerm * 12) - (price - downPayment)).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-lg pt-2">
                  <span className="font-bold text-amber-50">Total Paid</span>
                  <span className="font-black">${(monthlyPayment * loanTerm * 12 + downPayment).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <button className="w-full bg-white text-amber-600 hover:bg-zinc-50 transition-colors font-bold py-4 rounded-xl mt-8 shadow-lg">
                Apply for Pre-Approval
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
