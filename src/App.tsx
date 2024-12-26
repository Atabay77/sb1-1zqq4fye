import React from 'react';
import { AppRoutes } from './routes';
import { SnowEffect } from './components/SnowEffect';
import { ThemeToggle } from './components/ThemeToggle';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors">
      <SnowEffect />
      <ThemeToggle />
      <Navbar />
      <AppRoutes />
    </div>
  );
}