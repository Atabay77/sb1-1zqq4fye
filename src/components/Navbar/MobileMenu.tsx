import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { href: '/', label: 'Home' },
  { href: '/free-codes', label: 'Mugt Kod' },
  { href: '/vip-codes', label: 'VIP kod' },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-gray-800/95 backdrop-blur-sm py-4 px-6 shadow-lg rounded-[2rem] border border-blue-500/30 mr-4">
          <nav className="flex flex-col items-end gap-4">
            {links.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}