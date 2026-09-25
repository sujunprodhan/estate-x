import React from 'react';
import Container from './Container';
import Link from 'next/link';
import NavLinks from '../buttons/NavLinks';

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLinks href={'/'}>Home</NavLinks>
      </li>
      <li>
        <NavLinks href={'/about'}>About</NavLinks>
      </li>
      <li>
        <NavLinks href={'/contact'}>Contact</NavLinks>
      </li>
      <li>
        <NavLinks href={'/property'}>Property</NavLinks>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-xl bg-base-100/80 border-b border-base-200/50 shadow-sm transition-all duration-300">
      <Container>
        <div className="navbar py-4">
          {/* Logo & Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden hover:bg-base-200 rounded-full mr-2"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-xl rounded-2xl z-1 mt-4 w-56 p-4 shadow-xl border border-base-200 gap-2"
              >
                {navItem}
              </ul>
            </div>
            <Link href={'/'} className="text-2xl font-extrabold tracking-tight">
              <span className="text-amber-500">Estate</span>
              <span className="text-slate-800 dark:text-white">X</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-10">{navItem}</ul>
          </div>

          {/* Action Buttons */}
          <div className="navbar-end flex gap-3 lg:gap-4">
            <Link
              className="btn btn-ghost hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-6 font-semibold border-0 hidden sm:flex"
              href={'/login'}
            >
              Login
            </Link>
            <Link
              className="btn bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 shadow-lg shadow-amber-500/30 border-0 font-semibold transition-all hover:-translate-y-0.5"
              href={'/register'}
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
