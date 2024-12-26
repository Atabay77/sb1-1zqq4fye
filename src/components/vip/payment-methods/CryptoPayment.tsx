import React, { useState, useEffect } from 'react';
import { Coins, ExternalLink } from 'lucide-react';

interface CryptoAddress {
  network: string;
  address: string;
  minDeposit?: string;
  confirmationTime?: string;
}

const CRYPTO_ADDRESSES: CryptoAddress[] = [
  {
    network: "Solana",
    address: "8kdRsXJ1jViefzZb7jyemNAwFqLqQ1AZY4oVzpJQhd4K",
    minDeposit: "1.00 USDT",
    confirmationTime: "1 Onay"
  },
  {
    network: "Tron(TRC20)",
    address: "TRx1PSxZD611FcEuHuh35RhUD2BfRQ9szL",
    minDeposit: "1.00 USDT",
    confirmationTime: "5 Onay"
  },
  {
    network: "BNB(BEP20)",
    address: "0xeE8041E5011Be9c7dA6c4017DbaFB547D89CCFD4",
    minDeposit: "1.00 USDT",
    confirmationTime: "20 Onay"
  },
  {
    network: "Ethereum(ERC20)",
    address: "0xeE8041E5011Be9c7dA6c4017DbaFB547D89CCFD4",
    minDeposit: "1.00 USDT",
    confirmationTime: "64 Onay"
  },
  {
    network: "opBNB",
    address: "0xeE8041E5011Be9c7dA6c4017DbaFB547D89CCFD4",
    minDeposit: "1.00 USDT",
    confirmationTime: "1 Onay"
  }
];

export function CryptoPayment() {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [showTimer, setShowTimer] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  useEffect(() => {
    if (showTimer && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showTimer, timeLeft]);

  const handleStartPayment = () => {
    setShowTimer(true);
  };

  const handleCopyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleVerifyClick = () => {
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
        onClick={handleStartPayment}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
      >
        <Coins size={20} />
        Crypto bilen tölemek
      </button>

      {showTimer && (
        <div className="space-y-4 animate-fade-in">
          <div className="text-center text-2xl font-bold text-white">
            {formatTime(timeLeft)}
          </div>

          <div className="space-y-4">
            {CRYPTO_ADDRESSES.map((crypto) => (
              <div
                key={crypto.network}
                className="p-4 bg-gray-700/50 rounded-lg border border-blue-500/20"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-medium">{crypto.network}</h3>
                  <div className="text-sm text-gray-400">
                    Min: {crypto.minDeposit}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <code className="flex-1 p-2 bg-gray-800 rounded text-sm text-gray-300 overflow-x-auto">
                    {crypto.address}
                  </code>
                  <button
                    onClick={() => handleCopyAddress(crypto.address)}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm text-white transition-colors"
                  >
                    {copiedAddress === crypto.address ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="text-sm text-gray-400">
                  Tassyklama wagty: {crypto.confirmationTime}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-gray-300 text-sm">
            Töleg geçireniňizden soň tassyklatmak üçin aşakdaky düwmä basyň
          </div>

          <button
            onClick={handleVerifyClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ExternalLink size={18} />
            Tassyklatmak
          </button>
        </div>
      )}
    </div>
  );
}