'use client';

import { useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={'absolute top-0 left-0 h-full w-full transition-opacity bg-[#c63f33]'}>
      <video
        autoPlay
        muted
        className="h-full object-cover w-full"
        onEnded={() => {
          setIsVisible(false);
        }}
      >
        <source src="/splash_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
