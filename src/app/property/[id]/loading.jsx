import React from 'react';
import { Building2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      {/* Spinner and Logo */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer spinning ring */}
        <div className="absolute w-24 h-24 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-[#6345ed] animate-spin"></div>
        {/* Inner static circle with icon */}
        <div className="w-16 h-16 rounded-full bg-[#6345ed]/10 flex items-center justify-center z-10">
          <Building2 size={28} className="text-[#6345ed]" />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
          Loading Property Details
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          Connecting to our real estate database to fetch premium property information, locations, and pricing...
        </p>
      </div>
    </div>
  );
};

export default Loading;