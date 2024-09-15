'use client';

import SwipeCard from '@/components/SwipeCard';
import { profilesToSwipe } from '@/lib/profiles';

export default function Home() {
  return (
    <div className="h-full p-5">
      <div className="relative h-full overflow-hidden rounded-3xl bg-[#ee1f4c0a] shadow-inner flex items-center justify-center">
        {profilesToSwipe.map((profile) => (
          <SwipeCard profile={profile} key={profile.id} />
        ))}
        <p>No more profiles to swipe!</p>
      </div>
    </div>
  );
}
