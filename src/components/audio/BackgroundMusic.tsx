import React, { useState, useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';

const AUDIO_URL = "https://cdn.pixabay.com/download/audio/2022/03/24/audio_d3f7d9e7e9.mp3";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.loop = true;
    audio.addEventListener('canplaythrough', () => setIsLoaded(true));
    audio.addEventListener('error', (e) => {
      console.error('Audio loading error:', e);
      setIsLoaded(false);
    });
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current && isLoaded) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Playback failed:', error);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isLoaded) return null;

  return (
    <button
      onClick={toggleMusic}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/60 border border-blue-500/30 hover:bg-gray-700/80 transition-colors"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <Music size={18} className="text-indigo-400" />
      ) : (
        <Music2 size={18} className="text-gray-400" />
      )}
    </button>
  );
}