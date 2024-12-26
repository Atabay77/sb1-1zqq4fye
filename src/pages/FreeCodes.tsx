import React from 'react';
import { ArrowLeft, Apple, Smartphone, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlatformIcon } from '../components/platform/PlatformIcon';

export function FreeCodes() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-indigo-400">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
      
      <div className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-blue-500/30">
        <h1 className="text-3xl font-bold text-white mb-6">Mugt Kodlar</h1>
        <p className="text-gray-300 mb-8">
          Siz haýsyny ulanýarsyňyz?
        </p>
        
        <div className="flex justify-center gap-8 mb-12">
          <PlatformIcon Icon={Apple} label="iOS" />
          <PlatformIcon Icon={Smartphone} label="Android" />
          <PlatformIcon Icon={Monitor} label="Windows" />
        </div>
      </div>
    </div>
  );
}