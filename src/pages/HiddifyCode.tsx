import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HiddifyContent } from '../components/hiddify/HiddifyContent';

export function HiddifyCode() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/free-codes" className="inline-flex items-center text-white mb-8 hover:text-indigo-400">
          <ArrowLeft className="mr-2" />
          Back to Free Codes
        </Link>
        
        <HiddifyContent />
      </div>
    </div>
  );
}