import React, { useState, useEffect } from 'react';
import { Phone, ExternalLink } from 'lucide-react';

export function PhonePayment() {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [showTimer, setShowTimer] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('63859978');
  const [timerCount, setTimerCount] = useState(0);

  useEffect(() => {
    let timer: number | undefined;
    
    if (showTimer && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setPhoneNumber('62816900');
      if (timerCount === 0) {
        setTimeLeft(180);
        setTimerCount(1);
      }
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [showTimer, timeLeft, timerCount]);

  const handlePhoneClick = () => {
    setShowTimer(true);
  };

  const handleAdminClick = () => {
    window.open('https://linkm.me/users/rex77', '_blank');
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handlePhoneClick}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <Phone size={20} />
        Telefon belgisi
      </button>

      {showTimer && (
        <div className="space-y-4 animate-fade-in">
          <div className="text-center text-2xl font-bold text-white">
            {formatTime(timeLeft)}
          </div>
          
          <div className="p-4 bg-gray-700/50 rounded-lg border border-blue-500/20">
            <p className="text-white text-center mb-2">
              Sızıň pul geçirmeli nomeriňiz: <span className="font-bold">{phoneNumber}</span>
            </p>
            <p className="text-gray-300 text-sm text-center mb-4">
              Puly geçireniňizden soň geçiren puluňyzy screen ediň we aşakdaky düğmä basyp screen iňizi admin'e ugradyň
            </p>
            <button
              onClick={handleAdminClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={18} />
              Admin
            </button>
            <p className="mt-4 text-yellow-400 text-sm text-center font-medium">
              Nomerler 3minda soň çalşylar we nomerler Jan etmek üçün däl
            </p>
          </div>
        </div>
      )}
    </div>
  );
}