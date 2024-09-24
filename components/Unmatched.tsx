'use client';

import { useState } from 'react';
import Animation from './Animation';

export default function Unmatched() {
  const [animationFinished, setAnimationFinished] = useState(false);

  function goBack() {
    // TODO: ...
  }

  return (
    <div
      className="absolute flex items-center justify-center top-0 left-0 h-full w-full"
      onClick={animationFinished ? goBack : undefined}
    >
      <Animation id="unmatched" onEnd={() => setAnimationFinished(true)} />
    </div>
  );
}
