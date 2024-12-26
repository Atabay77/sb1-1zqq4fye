import React from 'react';
import { ImageSlider } from '../../components/ImageSlider';

const sliderImages = [
  {
    url: "https://i.imgur.com/E9E94LG.jpeg",
    alt: "Channel Image 1",
    link: "https://tmstart.me/Mexico_soxr"
  },
  {
    url: "https://i.imgur.com/QvdNJnb.jpeg",
    alt: "Channel Image 2",
    link: "https://tmstart.me/forest"
  },
  {
    url: "https://i.imgur.com/Qr3HhRz.jpeg",
    alt: "Channel Image 3",
    link: "https://tmstart.me/kanal24"
  }
];

export function HomeChannels() {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-blue-500/30">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Goldow berýan kanallarymyz
      </h2>
      <p className="text-gray-300 text-center mb-8">
        START platformasynda goldow berýan kanallarymyza hem girip bilersiňiz
      </p>
      <ImageSlider images={sliderImages} />
      <p className="text-gray-300 text-center mt-6">
        Girmek isleýan kanalyňyzyň üstüne basyp girin bilersiňiz
      </p>
    </div>
  );
}