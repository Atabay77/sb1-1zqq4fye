import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { href: '/', label: 'Home' },
  { href: '/free-codes', label: 'Mugt Kod' },
  { href: '/vip-codes', label: 'VIP kod' },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex gap-6">
      {links.map(link => (
        <Link
          key={link.label}
          to={link.href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}