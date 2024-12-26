import React from 'react';
import { Mail } from 'lucide-react';

export function GmailPayment() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:playpass6300@gmail.com';
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">Gmail arkaly habarlaşmak</h3>
      <button
        onClick={handleEmailClick}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        <Mail size={20} />
        Gmail bilen habarlaşmak
      </button>
    </div>
  );
}