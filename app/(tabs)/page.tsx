'use client';

import SwipeCard from '@/components/SwipeCard';
import { profilesToSwipe } from '@/lib/profiles';

export default function Home() {
  return (
    <div className="relative mx-4 my-2 w-full rounded-3xl bg-[#EE1F4D]">
      {profilesToSwipe.map((profile) => (
        <SwipeCard profile={profile} key={profile.name} />
      ))}
    </div>
  );
}
