"use client";

import React, { useState, useMemo } from 'react';
import PropertyCard from '../cards/PropertyCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyClient = ({ properties }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = useMemo(() => {
    const allCategories = properties.map(p => p.category).filter(Boolean);
    const uniqueCategories = [...new Set(allCategories)];
    return ['All', ...uniqueCategories];
  }, [properties]);

  // Active category
  const filteredProperties = useMemo(() => {
    if (activeCategory === 'All') {
      return properties;
    }
    return properties.filter(p => p.category === activeCategory);
  }, [properties, activeCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const currentProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Animation smooth fading
  const fadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  };

  return (
    <>
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? 'bg-amber-500 text-white shadow-amber-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 hover:text-amber-500 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {currentProperties.length > 0 ? (
        <>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage + activeCategory} 
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProperties.map((property) => (
                <PropertyCard key={property._id || property.title} property={property} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 md:mt-16">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-50 hover:text-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    currentPage === idx + 1
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-amber-50 hover:text-amber-500'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-50 hover:text-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">No properties found.</h3>
          <p className="text-slate-500">There are no properties available in this category.</p>
        </div>
      )}
    </>
  );
};

export default PropertyClient;
