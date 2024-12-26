import React from 'react';
import { Code2 } from 'lucide-react';

export function CreatorSection() {
  return (
    <div className="mt-16 bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-lg border border-blue-500/30">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.imgur.com/ZXQt4Et.jpeg"
            alt="Creator Rex77"
            className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/50"
          />
          <div className="flex items-center gap-2">
            <Code2 size={20} className="text-indigo-400" />
            <p className="text-gray-300">
              Creator: <span className="text-indigo-400 font-semibold">Rex77</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}