import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { PurchaseForm } from './PurchaseForm';
import { GmailPayment } from './payment-methods/GmailPayment';
import { PhonePayment } from './payment-methods/PhonePayment';
import { LinkPayment } from './payment-methods/LinkPayment';
import { CryptoPayment } from './payment-methods/CryptoPayment';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    title: string;
    price: string;
  };
}

export function PurchaseModal({ isOpen, onClose, plan }: PurchaseModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const handleBack = () => {
    setSelectedMethod(null);
  };

  const renderPaymentMethod = () => {
    switch (selectedMethod) {
      case 'card':
        return <PurchaseForm plan={plan} onClose={onClose} />;
      case 'crypto':
        return <CryptoPayment />;
      case 'gmail':
        return <GmailPayment />;
      case 'phone':
        return <PhonePayment />;
      case 'link':
        return <LinkPayment />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-gray-800/95 rounded-[2rem] p-8 max-w-md w-full border border-blue-500/30 shadow-xl transform transition-all">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">
          {plan.title} Plan - {plan.price}
        </h2>
        
        {selectedMethod ? (
          <>
            <button
              onClick={handleBack}
              className="text-gray-400 hover:text-white mb-6 flex items-center gap-2"
            >
              ← Yza gaýt
            </button>
            {renderPaymentMethod()}
          </>
        ) : (
          <>
            <p className="text-gray-400 mb-6">
              Töleg usulyny saýlaň
            </p>
            <PaymentMethodSelector onSelect={handleMethodSelect} />
          </>
        )}
      </div>
    </div>
  );
}