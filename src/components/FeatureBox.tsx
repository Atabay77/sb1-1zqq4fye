import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FloatingContainer } from './FloatingContainer';
import { Link } from 'react-router-dom';

interface FeatureBoxProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  to: string;
  isExternal?: boolean;
}

export function FeatureBox({ 
  title, 
  description, 
  imageUrl, 
  buttonText,
  to,
  isExternal
}: FeatureBoxProps) {
  const ButtonContent = (
    <>
      {buttonText}
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </>
  );

  return (
    <FloatingContainer>
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-[2rem] shadow-lg overflow-hidden transition-colors p-8 flex flex-col items-center border border-blue-500/30">
        <div className="w-32 h-32 rounded-[1.5rem] overflow-hidden mb-6 ring-2 ring-indigo-500/20 border border-blue-500/30">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3 text-center">{description}</p>
        
        {isExternal ? (
          <a 
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors group border border-blue-500/30"
          >
            {ButtonContent}
          </a>
        ) : (
          <Link
            to={to}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors group border border-blue-500/30"
          >
            {ButtonContent}
          </Link>
        )}
      </div>
    </FloatingContainer>
  );
}