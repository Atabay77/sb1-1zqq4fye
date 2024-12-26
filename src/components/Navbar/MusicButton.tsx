import React, { useState } from 'react';
import { Music, Music2 } from 'lucide-react';

export function MusicButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleMusic = () => {
    setIsActive(!isActive);
    // Music playback will be handled by the user
  };

  return (
    <button
      onClick={toggleMusic}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/60 border border-blue-500/30 hover:bg-gray-700/80 transition-colors"
      aria-label="Toggle music"
    >
      {isActive ? (
        <Music size={18} className="text-indigo-400" />
      ) : (
        <Music2 size={18} className="text-gray-400" />
      )}
    </button>
  );
}