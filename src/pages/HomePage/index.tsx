import React from 'react';
import { FeaturesList } from '../../features/FeaturesList';
import { Header } from '../../components/Header';
import { CreatorSection } from '../../components/CreatorSection';
import { HomeChannels } from './HomeChannels';
import { MainLayout } from '../../layouts/MainLayout';

export function HomePage() {
  return (
    <MainLayout>
      <Header />
      <div className="mb-16">
        <FeaturesList />
      </div>
      <HomeChannels />
      <CreatorSection />
    </MainLayout>
  );
}