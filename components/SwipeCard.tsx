'use client';

import dynamic from 'next/dynamic';
import { Profile } from '@/types';
import { ProfileCard } from './ProfileCard';
import { useBlurStore } from '@/store/blur';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false,
});

interface Props {
  profile: Profile;
  onMatch: (profile: Profile) => void;
  onSwipe: () => void;
}

export default function SwipeCard({ profile, onSwipe, onMatch }: Props) {
  const blur = useBlurStore((state) => state.blur);

  function handleSwipe(direction: string) {
    onSwipe();

    if (!profile.swipedRight) {
      return;
    }

    switch (direction) {
      case 'right':
        blur();
        setTimeout(() => {
          onMatch(profile);
        }, 500);
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
