'use client';

import dynamic from 'next/dynamic';
import { Profile } from '@/types';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false,
});

interface Props {
  profile: Profile;
}

export default function SwipeCard({ profile }: Props) {
  const style = {
    backgroundImage: `url(${profile.imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  function onSwipe(direction: string) {
    if (!profile.swipedRight) {
      return;
    }

    switch (direction) {
      case 'right':
        alert('Match!');
        break;
      case 'left':
        alert('Missed!');
        break;
    }
  }

  return (
    <TinderCard
      className="absolute h-full w-full"
      swipeRequirementType={'position'}
      preventSwipe={['down']}
      onSwipe={onSwipe}
    >
      <div
        className="flex h-full select-none flex-col justify-end rounded-3xl p-5 text-white"
        style={style}
      >
        <span className="text-3xl capitalize">
          {profile.name}, {profile.age}
        </span>
        <span className="text-xl">{profile.title}</span>
      </div>
    </TinderCard>
  );
}
