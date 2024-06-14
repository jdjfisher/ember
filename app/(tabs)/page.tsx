'use client';

import SwipeCard from '@/components/SwipeCard';
import { profiles } from '@/lib/dummy';

export default function Home() {
  return (
    <div className="relative w-full rounded-3xl bg-[#EE1F4D]">
      {profiles.map((profile) => (
        <SwipeCard profile={profile} key={profile.name} />
      ))}
    </div>
  );
}
