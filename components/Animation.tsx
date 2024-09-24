import { useEffect } from 'react';
import lottie from 'lottie-web';

interface Props {
  id: 'opening' | 'match' | 'unmatch';
  onEnd?: () => void;
}

export default function Animation({ id, onEnd }: Props) {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('player')!,
      renderer: 'svg',
      autoplay: true,
      loop: false,
      path: `/animations/${id}/data.json`,
    });

    if (onEnd) {
      animation.addEventListener('complete', onEnd);
    }

    return () => {
      animation.destroy();
    };
  }, [id, onEnd]);

  return <div id="player"> </div>;
}
