import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="container mx-auto px-4 pt-28 pb-12 relative z-10">
      {children}
    </main>
  );
}