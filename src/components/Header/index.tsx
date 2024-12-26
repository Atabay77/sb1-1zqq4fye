import React from 'react';
import { Title } from './Title';
import { Description } from './Description';

export function Header() {
  return (
    <div className="text-center mb-16">
      <Title />
      <Description />
    </div>
  );
}