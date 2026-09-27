import React from 'react';
import { Building2 } from 'lucide-react';
import Link from 'next/link';

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute w-24 h-24 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-[#6345ed] animate-spin"></div>
        <div className="w-16 h-16 rounded-full bg-[#6345ed]/10 flex items-center justify-center z-10">
          <Building2 size={28} className="text-[#6345ed]" />
        </div>
      </div>

      <div className="text-center max-w-md">
        <div>
          <Link href={'/'} className="text-2xl font-extrabold tracking-tight">
            <span className="text-amber-500">Estate</span>
            <span className="text-slate-800 dark:text-white">X</span>
          </Link>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
          Loading Property Details
        </h2>
      </div>
    </div>
  );
};

export default Loading;
