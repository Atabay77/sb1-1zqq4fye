import React from 'react';
import { Smartphone, Monitor, Apple } from 'lucide-react';

export function PlatformLogos() {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/60 border border-blue-500/30">
        <Apple size={24} className="text-gray-300" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/60 border border-blue-500/30">
        <Smartphone size={24} className="text-gray-300" />
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/60 border border-blue-500/30">
        <Monitor size={24} className="text-gray-300" />
      </div>
    </div>
  );
}