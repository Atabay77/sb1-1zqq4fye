import React, { ReactNode } from 'react';

interface FloatingContainerProps {
  children: ReactNode;
  className?: string;
}

export function FloatingContainer({ children, className = '' }: FloatingContainerProps) {
  return (
    <div className={`
      relative
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-indigo-500/10 before:to-purple-500/10
      before:rounded-[2rem] before:blur-xl before:-z-10
      after:absolute after:inset-0
      after:bg-gradient-to-r after:from-indigo-500/10 after:to-purple-500/10
      after:rounded-[2rem] after:blur-xl after:-z-10
      after:animate-pulse
      hover:scale-105 transition-transform duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}