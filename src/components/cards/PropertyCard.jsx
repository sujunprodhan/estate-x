import React from 'react';
import { MapPin, BedDouble, Bath, Square, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PropertyCard = ({ property }) => {
  const { title, category, location, price, type, beds, baths, area, image, featured } = property;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative aspect-4/3 overflow-hidden cursor-pointer">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {featured && (
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Featured
            </span>
          )}
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            {type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors shadow-md">
            <Share2 size={16} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors shadow-md">
            <Heart size={16} />
          </button>
        </div>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1 cursor-pointer hover:text-amber-500 transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4 text-sm font-medium">
          <MapPin size={16} className="mr-1 text-amber-500 shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        <div className="mt-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100 dark:border-slate-700">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center text-slate-400">
                <BedDouble size={18} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {beds} Beds
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-x border-slate-100 dark:border-slate-700">
              <div className="flex items-center text-slate-400">
                <Bath size={18} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {baths} Baths
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center text-slate-400">
                <Square size={18} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {area} sqft
              </span>
            </div>
          </div>

          {/* Footer (Price & Action) */}
          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-1">
                Price
              </p>
              <p className="text-2xl font-extrabold text-amber-500">{formattedPrice}</p>
            </div>
            <Link
              href={`/property/${property._id || property.id}`}
              className="px-5 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-amber-500 dark:hover:bg-amber-500 text-white rounded-xl font-bold transition-colors text-sm shadow-md hover:shadow-amber-500/30"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
