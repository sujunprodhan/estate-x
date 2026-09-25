"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ children, href }) => {
  const path = usePathname();
  const isActive = href === '/' ? path === href : path.startsWith(href);
  
  return (
    <Link 
      className={`text-base font-medium transition-colors ${
        isActive 
          ? "text-amber-500 font-bold" 
          : "hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-slate-800"
      } rounded-lg p-3`} 
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLinks;