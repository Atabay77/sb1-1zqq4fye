import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface PlatformIconProps {
  Icon: LucideIcon;
  label: string;
}

export function PlatformIcon({ Icon, label }: PlatformIconProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col items-center gap-3 group cursor-pointer"
      onClick={() => navigate('/hiddify-code')}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/60 border border-blue-500/30 group-hover:bg-gray-700/80 transition-colors">
        <Icon size={32} className="text-gray-300" />
      </div>
      <span className="text-gray-400 group-hover:text-gray-200 transition-colors">{label}</span>
    </div>
  );
}