'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface Props {
  id: 'opening' | 'match' | 'unmatched';
  onEnd?: () => void;
}

export default function Animation({ id, onEnd }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: playerRef.current!,
      renderer: 'svg',
      autoplay: true,
      loop: false,
      path: `/animations/${id}/data.json`,
    });

    if (onEnd) {
      animation.addEventListener('complete', onEnd);
    }

    animation.addEventListener('error', console.error);

    return () => {
      animation.destroy();
    };
  }, [id, onEnd]);

  return <div ref={playerRef}> </div>;
}
