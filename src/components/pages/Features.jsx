import React from 'react';
import { Shield, Clock, Home, Award } from 'lucide-react';
import Container from '../layouts/Container';

const Features = () => {
  const features = [
    {
      icon: <Shield size={32} className="text-amber-500" />,
      title: 'Trusted & Secure',
      description: 'We ensure 100% security for all your transactions and guarantee genuine property listings.'
    },
    {
      icon: <Clock size={32} className="text-amber-500" />,
      title: 'Fast Process',
      description: 'Our streamlined process ensures you find and buy your dream property in record time.'
    },
    {
      icon: <Home size={32} className="text-amber-500" />,
      title: 'Wide Range of Properties',
      description: 'Explore a vast collection of premium properties tailored to fit every budget and lifestyle.'
    },
    {
      icon: <Award size={32} className="text-amber-500" />,
      title: 'Award Winning Service',
      description: 'Recognized globally for our exceptional customer service and top-tier real estate agents.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            We Provide The Best <span className="text-amber-500">Real Estate</span> Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
