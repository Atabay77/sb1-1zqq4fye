import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StartChannel() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-indigo-400">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
      
      <div className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-blue-500/30">
        <h1 className="text-3xl font-bold text-white mb-6">Start Kanal</h1>
        <p className="text-gray-300 mb-8">
          Täze kodlar barada habardar bolmak üçin Start kanalymyza goşulyň.
        </p>
        
        <div className="grid gap-6">
          <a 
            href="https://t.me/startpremium" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600/20 p-6 rounded-xl border border-blue-500/20 hover:bg-blue-600/30 transition-colors"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Join Start Channel</h2>
            <p className="text-gray-300">Click to join our premium channel</p>
          </a>
        </div>
      </div>
    </div>
  );
}