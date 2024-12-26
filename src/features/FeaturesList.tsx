import React from 'react';
import { AnimatedCard } from '../components/AnimatedCard';

const initialFeatures = [
  {
    id: "1",
    title: "Mugt kodlar",
    description: "Gündelik täzelenen iOS, Android we PC üçin mugt kodlar.",
    imageUrl: "https://i.imgur.com/ApQlm2x.jpeg",
    buttonText: "Gitmek",
    to: "/free-codes"
  },
  {
    id: "2",
    title: "VIP kodlar",
    description: "Premium kodlar satyn almak üçin yüz tutuň.",
    imageUrl: "https://i.imgur.com/tM0EE9X.jpeg",
    buttonText: "Gitmek",
    to: "/vip-codes"
  },
  {
    id: "3",
    title: "Telegram Kanal",
    description: "Täze kodlar barada habardar bolmak üçin telegram kanalymyza goşulyň.",
    imageUrl: "https://i.imgur.com/0EAcI3j.jpeg",
    buttonText: "Goşulmak",
    to: "https://t.me/Swech77",
    isExternal: true
  },
  {
    id: "4",
    title: "Start Kanal",
    description: "Täze kodlar barada habardar bolmak üçin Start kanalymyza goşulyň",
    imageUrl: "https://i.imgur.com/UQ2SlkU.jpeg",
    buttonText: "Goşulmak",
    to: "https://tmstart.me/Swech",
    isExternal: true
  },
  {
    id: "5",
    title: "Support",
    description: "Kömek gerek bolsa biziň operatorlarymyz size kömek ederler.",
    imageUrl: "https://i.imgur.com/Zztu63J.jpeg",
    buttonText: "Ýüz tutmak",
    to: "/support"
  }
];

export function FeaturesList() {
  return (
    <div className="space-y-8">
      <hr className="border-t border-blue-500/30 w-full" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialFeatures.map((feature, index) => (
          <AnimatedCard
            key={feature.id}
            index={index}
            feature={feature}
          />
        ))}
      </div>

      <hr className="border-t border-blue-500/30 w-full" />
    </div>
  );
}