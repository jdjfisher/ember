'use client';

import { useState } from 'react';
import Animation from '@/components/Animation';

export default function OpeningScreen() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={'absolute top-0 left-0 h-full w-full transition-opacity bg-primary'}>
      <Animation id="opening" onEnd={() => setIsVisible(false)} />
    </div>
  );
}
