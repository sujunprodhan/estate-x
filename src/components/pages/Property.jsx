import { getProperties } from '@/actions/server/properties';
import React from 'react';
import Container from '../layouts/Container';
import PropertyClient from './PropertyClient';

const Property = async () => {
  const properties = (await getProperties()) || [];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Discover Our <span className="text-amber-500">Featured Properties</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Explore our handpicked selection of premium real estate properties tailored to match your lifestyle.
          </p>
        </div>

        <PropertyClient properties={properties} />
      </Container>
    </section>
  );
};

export default Property;
