import React from 'react';
import { CreditCard, Coins, Phone, Mail, Link as LinkIcon } from 'lucide-react';

interface PaymentMethod {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'card',
    title: 'Kart bilen',
    icon: <CreditCard className="text-blue-400" size={24} />,
    description: 'Bank kartyňyz bilen töleg ediň'
  },
  {
    id: 'crypto',
    title: 'Crypto',
    icon: <Coins className="text-yellow-400" size={24} />,
    description: 'TRC20 / BEP20 arkaly töleg'
  },
  {
    id: 'phone',
    title: 'Telefon belgisi',
    icon: <Phone className="text-green-400" size={24} />,
    description: 'Telefon belgiňiz bilen töleg'
  },
  {
    id: 'gmail',
    title: 'Gmail arkaly habarlaşmak',
    icon: <Mail className="text-red-400" size={24} />,
    description: 'Gmail hasabyňyz bilen töleg'
  },
  {
    id: 'link',
    title: 'Link',
    icon: <LinkIcon className="text-purple-400" size={24} />,
    description: 'Link programmasy arkaly töleg'
  }
];

interface PaymentMethodSelectorProps {
  onSelect: (methodId: string) => void;
}

export function PaymentMethodSelector({ onSelect }: PaymentMethodSelectorProps) {
  return (
    <div className="grid gap-4">
      {PAYMENT_METHODS.map((method) => (
        <button
          key={method.id}
          onClick={() => onSelect(method.id)}
          className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl border border-blue-500/20 hover:bg-gray-700/70 transition-colors text-left"
        >
          <div className="flex-shrink-0">
            {method.icon}
          </div>
          <div>
            <h3 className="text-white font-medium">{method.title}</h3>
            <p className="text-gray-400 text-sm">{method.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}