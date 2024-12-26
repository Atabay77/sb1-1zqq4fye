import React, { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const next15 = new Date();
      next15.setHours(15, 0, 0, 0);
      
      if (now.getHours() >= 15) {
        next15.setDate(next15.getDate() + 1);
      }
      
      const diff = next15.getTime() - now.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-4">
      <p className="text-gray-300 text-sm">
        Kodlaryň täzelenmegine: <span className="font-mono text-white">{timeLeft}</span>
      </p>
    </div>
  );
}