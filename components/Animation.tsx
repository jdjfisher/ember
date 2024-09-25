'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface Props {
  assetsId: string;
  data: object;
  onEnd?: () => void;
}

export default function Animation({ assetsId, data, onEnd }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: playerRef.current!,
      renderer: 'svg',
      autoplay: true,
      loop: false,
      animationData: patchData(data),
      assetsPath: `/animations/${assetsId}/images/`,
    });

    animation.addEventListener('complete', () => {
      console.debug('Animation completed');
      if (onEnd) {
        onEnd();
      }
    });

    animation.addEventListener('error', console.error);

    return () => {
      console.debug('Destroying animation');
      animation.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assetsId, data]);

  return <div ref={playerRef}> </div>;
}

/**
 * Recursively for each object in the data, add a 'layers': [] property if it doesn't exist.
 *
 * It's a hack to fix an error in lottie-web.
 */
function patchData(data: any): any {
  if (Array.isArray(data)) {
    return data.map(patchData);
  }

  if (data === null) {
    return data;
  }

  if (typeof data !== 'object') {
    return data;
  }

  if (!('layers' in data)) {
    data['layers'] = [];
  }

  for (const key in data) {
    patchData(data[key]);
  }

  return data;
}
