'use client';

import dynamic from 'next/dynamic';
import { Profile } from '@/types';
import { ProfileCard } from './ProfileCard';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false,
});

interface Props {
  profile: Profile;
  onMatch: (profile: Profile) => void;
  onSwipe: () => void;
}

export default function SwipeCard({ profile, onSwipe, onMatch }: Props) {
  function handleSwipe(direction: string) {
    onSwipe();

    if (!profile.swipedRight) {
      return;
    }

    switch (direction) {
      case 'right':
        onMatch(profile);
        break;
      case 'left':
        break;
    }
  }

  return (
    <TinderCard
      className="absolute h-full w-full"
      swipeRequirementType={'position'}
      preventSwipe={['down']}
      onSwipe={handleSwipe}
    >
      <ProfileCard profile={profile} />
    </TinderCard>
  );
}
