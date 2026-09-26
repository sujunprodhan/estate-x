import React from 'react';
import Container from './Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="py-8 px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="col-span-1 md:col-span-1">
            <Link href={'/'} className="flex items-center gap-2 mb-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500" />
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500" />
              </svg>
              <p className="text-2xl font-extrabold tracking-tight">
                <span className="text-amber-500">Estate</span>
                <span className="text-slate-800 dark:text-white">X</span>
              </p>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing reliable real estate services and helping people find their dream homes since 1992.
            </p>
          </aside>
          
          <nav className="flex flex-col gap-3">
            <h6 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-sm tracking-wider">Services</h6>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Buy a Home</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Sell a Home</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Rentals</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Appraisals</a>
          </nav>
          
          <nav className="flex flex-col gap-3">
            <h6 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-sm tracking-wider">Company</h6>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">About Us</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Contact</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Careers</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Press</a>
          </nav>
          
          <nav className="flex flex-col gap-3">
            <h6 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-sm tracking-wider">Legal</h6>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">Cookie Policy</a>
          </nav>
        </div>
        
        <div className="py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400 px-4 md:px-0">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by EstateX Ltd.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;