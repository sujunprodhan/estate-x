import React from 'react';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SimilarPropertyCard = ({ property }) => {
  const { title, location, price, type, beds, baths, area, image, _id, id } = property;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  const isRent = type?.toLowerCase().includes('rent');

  return (
    <Link
      href={`/property/${_id || id}`}
      className="group block bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider ${isRent ? 'bg-[#00c6d9]' : 'bg-[#6345ed]'}`}
          >
            {type}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm transition-colors">
            <Heart size={20} />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 z-10 flex items-center text-white font-medium text-sm drop-shadow-md">
          <MapPin size={16} className="mr-1" />
          <span className="truncate max-w-65.5">{location}</span>
        </div>

        {/* Image */}
        <Image
          fill
          src={image}
          alt={title}
          className=" object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-slate-900 mb-2 truncate">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-extrabold text-[#6345ed]">{formattedPrice}</span>
          {isRent && <span className="text-slate-400 ml-1 font-medium">/mo</span>}
        </div>

        {/* Stats Grid */}
        <div className="flex items-center justify-between py-4 bg-slate-50/50 rounded-2xl">
          <div className="flex flex-col items-center justify-center flex-1">
            <BedDouble size={20} className="text-slate-400 mb-2" />
            <span className="text-lg font-bold text-slate-900">{beds || 0}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
              Beds
            </span>
          </div>

          <div className="w-px h-12 bg-slate-200"></div>

          <div className="flex flex-col items-center justify-center flex-1">
            <Bath size={20} className="text-slate-400 mb-2" />
            <span className="text-lg font-bold text-slate-900">{baths || 0}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
              Baths
            </span>
          </div>

          <div className="w-px h-12 bg-slate-200"></div>

          <div className="flex flex-col items-center justify-center flex-1">
            <Square size={20} className="text-slate-400 mb-2" />
            <span className="text-lg font-bold text-slate-900">{area || 0}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
              Sqft
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SimilarPropertyCard;
