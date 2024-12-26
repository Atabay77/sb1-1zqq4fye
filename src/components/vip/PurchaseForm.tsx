import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { processPayment } from '../../services/payment';

interface PurchaseFormProps {
  plan: {
    title: string;
    price: string;
  };
  onClose: () => void;
}

export function PurchaseForm({ plan, onClose }: PurchaseFormProps) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(true);

    try {
      const amount = parseInt(plan.price);
      const response = await processPayment({
        ...formData,
        amount,
      });

      // Handle successful payment
      alert('Töleg üstünlikli amala aşyryldy! VIP kodyňyz: ' + response.vipCode);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Töleg amala aşyrylmady');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    
    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
      value = value.substring(0, 19);
    }
    
    if (name === 'expiry') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      value = value.substring(0, 5);
    }
    
    if (name === 'cvv') {
      value = value.replace(/\D/g, '').substring(0, 3);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Kart belgisi
        </label>
        <div className="relative">
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="0000 0000 0000 0000"
            className="w-full px-4 py-2 bg-gray-700/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isProcessing}
          />
          <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Möhleti
          </label>
          <input
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            className="w-full px-4 py-2 bg-gray-700/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isProcessing}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            className="w-full px-4 py-2 bg-gray-700/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={isProcessing}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Kartyň eýesi
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="JOHN DOE"
          className="w-full px-4 py-2 bg-gray-700/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isProcessing}
        />
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={20} className="animate-spin" />
            Tassyklanýar...
          </span>
        ) : (
          'Tölegi tassykla'
        )}
      </button>
    </form>
  );
}