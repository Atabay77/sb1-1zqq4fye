import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { FreeCodes } from '../pages/FreeCodes';
import { VipCodes } from '../pages/VipCodes';
import { TelegramChannel } from '../pages/TelegramChannel';
import { StartChannel } from '../pages/StartChannel';
import { Support } from '../pages/Support';
import { HiddifyCode } from '../pages/HiddifyCode';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/free-codes" element={<FreeCodes />} />
      <Route path="/vip-codes" element={<VipCodes />} />
      <Route path="/telegram-channel" element={<TelegramChannel />} />
      <Route path="/start-channel" element={<StartChannel />} />
      <Route path="/support" element={<Support />} />
      <Route path="/hiddify-code" element={<HiddifyCode />} />
    </Routes>
  );
}