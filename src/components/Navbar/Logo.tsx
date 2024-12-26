import React from 'react';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Code2 size={24} className="text-indigo-500" />
      <span className="text-xl font-bold text-white">CodeShare</span>
    </div>
  );
}