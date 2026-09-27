import { getSingleProperty, getProperties } from '@/actions/server/properties';
import React from 'react';
import { MapPin, BedDouble, Bath, Square, Calendar, Check, Share2, Heart } from 'lucide-react';
import Container from '@/components/layouts/Container';
import SimilarPropertyCard from '@/components/cards/SimilarPropertyCard';
import Link from 'next/link';
import Image from 'next/image';

const PropertyDetails = async ({ params }) => {
  const { id } = await params;
  const property = await getSingleProperty(id);

  if (!property || Object.keys(property).length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-700">Property not found</h2>
      </div>
    );
  }

  const {
    title,
    category,
    location,
    price,
    type,
    beds,
    baths,
    area,
    yearBuilt,
    image,
    description,
    amenities,
    featured,
  } = property;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price || 0);

  // Fetch properties
  const allProperties = (await getProperties()) || [];
  let relatedProperties = allProperties.filter(
    (p) => p.category === category && p._id !== property._id
  );



  relatedProperties = relatedProperties.slice(0, 3);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-10 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="w-full h-100 md:h-125 lg:h-150 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 relative group">
            <Image
              src={
                image ||
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
              }
              alt={title}
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {featured && (
                <span className="bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider shadow-md">
                  Featured
                </span>
              )}
              <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider shadow-md">
                {type}
              </span>
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider shadow-md">
                {category}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                {title}
              </h1>

              <div className="flex items-center text-slate-500 dark:text-slate-400 text-lg font-medium mb-6">
                <MapPin size={22} className="mr-2 text-amber-500" />
                {location}
              </div>

              <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-6 inline-block mb-8">
                <p className="text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wider font-bold mb-1">
                  Asking Price
                </p>
                <p className="text-4xl font-extrabold text-amber-500">{formattedPrice}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-700 flex items-center justify-center text-blue-500">
                    <BedDouble size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Bedrooms</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{beds}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-slate-700 flex items-center justify-center text-teal-500">
                    <Bath size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Bathrooms</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{baths}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-slate-700 flex items-center justify-center text-amber-500">
                    <Square size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Area</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{area} sqft</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-slate-700 flex items-center justify-center text-purple-500">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Built</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{yearBuilt}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Interested in this property?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-amber-500/30">
                  Contact Agent
                </button>
                <button className="flex-1 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold py-3.5 rounded-xl transition-colors">
                  Schedule Tour
                </button>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <button className="flex items-center gap-2 text-slate-500 hover:text-amber-500 font-semibold transition-colors">
                  <Heart size={18} /> Save Property
                </button>
                <div className="w-px h-5 bg-slate-200 dark:bg-slate-700"></div>
                <button className="flex items-center gap-2 text-slate-500 hover:text-amber-500 font-semibold transition-colors">
                  <Share2 size={18} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 h-full">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
              About this Property
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              {description || 'No description provided for this property.'}
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 h-full">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Amenities
            </h3>
            {amenities && amenities.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-amber-500">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">No amenities listed.</p>
            )}
          </div>
        </div>

        {relatedProperties.length > 0 && (
          <div className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#6345ed] uppercase tracking-wider mb-2">
                  More Options
                </h4>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Similar Properties You May Like
                </h2>
              </div>
              <Link
                href="/property"
                className="px-6 py-2.5 rounded-full border border-[#6345ed] text-[#6345ed] hover:bg-[#6345ed] hover:text-white transition-colors font-semibold text-sm w-max"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map((prop) => (
                <SimilarPropertyCard key={prop._id || prop.title} property={prop} />
              ))}
            </div>
          </div>
        )}
        
      </Container>
      
    </div>
  );
};

export default PropertyDetails;
