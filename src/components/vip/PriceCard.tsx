import React from 'react';
import { Check, Crown } from 'lucide-react';
import { FloatingContainer } from '../FloatingContainer';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  imageUrl: string;
  onSelect: () => void;
}

export function PriceCard({ title, price, features, isPopular, imageUrl, onSelect }: PriceCardProps) {
  return (
    <FloatingContainer>
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-6 flex flex-col items-center border border-blue-500/30 relative transform transition-all duration-300 hover:scale-105">
        {isPopular && (
          <div className="absolute -top-3 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Crown size={14} />
            Popüler
          </div>
        )}
        
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-indigo-500/20 border border-blue-500/30">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
            {title}
          </div>
        </div>

        <p className="text-2xl font-bold text-indigo-400 mb-4">{price}</p>
        <ul className="space-y-2 text-gray-300 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check size={16} className="text-green-400" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={onSelect}
          className="w-full px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Satyn almak
        </button>
      </div>
    </FloatingContainer>
  );
}