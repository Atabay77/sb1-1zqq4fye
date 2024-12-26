import React from 'react';
import { PlatformLogos } from '../PlatformLogos';

export function Title() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">
        CodeShare
      </h1>
      <PlatformLogos />
    </div>
  );
}