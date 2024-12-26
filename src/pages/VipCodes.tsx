import React, { useState } from 'react';
import { ArrowLeft, Crown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingContainer } from '../components/FloatingContainer';
import { PurchaseModal } from '../components/vip/PurchaseModal';

interface PlanDetails {
  title: string;
  price: string;
}

export function VipCodes() {
  const [selectedPlan, setSelectedPlan] = useState<PlanDetails | null>(null);

  const handlePurchase = (plan: PlanDetails) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-indigo-400">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">VIP Kodlar</h1>
        
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-blue-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Weekly Plan */}
            <FloatingContainer>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-6 flex flex-col items-center border border-blue-500/30">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-indigo-500/20 border border-blue-500/30">
                    <img
                      src="https://i.imgur.com/LKopc7L.jpeg"
                      alt="VIP Codes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
                    HEPDE
                  </div>
                </div>
                
                <p className="text-2xl font-bold text-indigo-400 mb-4">50 TMT</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" />
                    Çäksiz tizlik
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" />
                    7 günlük premium
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" />
                    24/7 goldaw
                  </li>
                </ul>

                <button
                  onClick={() => handlePurchase({ title: "HEPDE", price: "50 TMT" })}
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Satyn almak
                </button>
              </div>
            </FloatingContainer>

            {/* Monthly Plan */}
            <FloatingContainer>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-[2rem] p-6 flex flex-col items-center border border-blue-500/30 relative">
                <div className="absolute -top-3 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Crown size={14} />
                  Popüler
                </div>
                
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-indigo-500/20 border border-blue-500/30">
                    <img
                      src="https://i.imgur.com/LKopc7L.jpeg"
                      alt="VIP Codes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
                    AÝLYK
                  </div>
                </div>

                <p className="text-2xl font-bold text-indigo-400 mb-4">250 TMT</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" />
                    Çäksiz tizlik
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" />
                    30 günlük premium
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" />
                    24/7 goldaw
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-400" />
                    Ýokary Tizlik
                  </li>
                </ul>

                <button
                  onClick={() => handlePurchase({ title: "AÝLYK", price: "250 TMT" })}
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Satyn almak
                </button>
              </div>
            </FloatingContainer>
          </div>
        </div>
      </div>

      {selectedPlan && (
        <PurchaseModal
          isOpen={true}
          onClose={() => setSelectedPlan(null)}
          plan={selectedPlan}
        />
      )}
    </div>
  );
}