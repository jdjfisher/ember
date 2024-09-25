'use client';

import { useState } from 'react';
import Animation from '@/components/Animation';
import animationData from '@/public/animations/opening/data.json';

export default function OpeningScreen() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={'absolute top-0 left-0 h-full w-full transition-opacity bg-primary'}>
      <Animation assetsId="opening" data={animationData} onEnd={() => setIsVisible(false)} />
    </div>
  );
}
