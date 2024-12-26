import React from 'react';

interface StatusMessageProps {
  status: 'success' | 'error';
}

export function StatusMessage({ status }: StatusMessageProps) {
  if (status === 'success') {
    return (
      <div className="text-green-400 text-sm">
        Hatyňyz üstünlikli ugradyldy!
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="text-red-400 text-sm">
        Bagyşlaň, näsazlyk ýüze çykdy. Gaýtadan synanyşyň.
      </div>
    );
  }

  return null;
}