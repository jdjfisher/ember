'use client';

import { ProfileCard } from '@/components/ProfileCard';
import SwipeCard from '@/components/SwipeCard';
import { profilesToSwipe } from '@/lib/profiles';
import { Profile } from '@/types';
import { useState } from 'react';

export default function Home() {
  const [match, setMatch] = useState<Profile>();

  return (
    <div className="h-full p-5">
      <div className="relative h-full overflow-hidden rounded-3xl">
        {match ? (
          <ProfileCard profile={match} />
        ) : (
          profilesToSwipe.map((profile) => (
            <SwipeCard
              profile={profile}
              key={profile.id}
              onMatch={setMatch}
              onSwipe={() => profilesToSwipe.pop()}
            />
          ))
        )}

        <div className="flex h-full items-center justify-center bg-[#ee1f4c0a] shadow-inner">
          <p>No more profiles to swipe!</p>
        </div>
      </div>
    </div>
  );
}
