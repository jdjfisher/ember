'use client';

import dynamic from 'next/dynamic';
import { Profile } from '@/types';
import { ProfileCard } from './ProfileCard';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false,
});

interface Props {
  profile: Profile;
}

export default function SwipeCard({ profile }: Props) {
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
      <ProfileCard profile={profile} />
    </TinderCard>
  );
}
