import React from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-[2rem] px-6 h-16 flex items-center justify-between shadow-lg border border-blue-500/30">
        <Logo />
        <div className="flex items-center gap-4">
          <NavLinks />
          <NavActions />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}