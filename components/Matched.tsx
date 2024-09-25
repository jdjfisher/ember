'use client';

import { useState } from 'react';
import Animation from './Animation';
import animationData from '@/public/animations/match/data.json';

interface Props {
  clearMatch: () => void;
}

export default function Matched({ clearMatch }: Props) {
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <div className="absolute backdrop-blur-sm top-0 w-full h-full flex flex-col gap-4 justify-center items-center z-10 left-0">
      <Animation assetsId="match" data={animationData} onEnd={() => setAnimationFinished(true)} />
    </div>
  );
}
