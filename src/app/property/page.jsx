import Property from '@/components/pages/Property';
import React from 'react';

const ProductPage = () => {
  return (
    <div className="flex flex-col flex-1 items-stretch justify-center bg-zinc-50 dark:bg-black">
      <section className="relative w-full py-28 flex items-center justify-center overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
          <p className="text-amber-500 font-bold tracking-widest uppercase mb-4">
            Exclusive Listings
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Find Your <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">Perfect Place</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Browse through our extensive collection of premium properties. From luxury villas to modern downtown apartments, we have something for everyone.
          </p>
        </div>
      </section>
      <Property />
      
    </div>
  );
};

export default ProductPage;