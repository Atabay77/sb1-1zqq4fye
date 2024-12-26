import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

export function LinkPayment() {
  const handleLinkClick = () => {
    window.open('https://linkm.me/users/rex77', '_blank');
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleLinkClick}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <LinkIcon size={20} />
        Link bilen töleg
      </button>
    </div>
  );
}