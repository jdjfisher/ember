'use client';

import { ProfileCard } from '@/components/ProfileCard';
import SwipeCard from '@/components/SwipeCard';
import { profilesToSwipe } from '@/lib/profiles';
import { Profile } from '@/types';
import classNames from 'classnames';
import Link from 'next/link';
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

      <div
        className={classNames(
          'absolute bg-black bg-opacity-60 w-full h-full flex justify-center items-center z-10 left-0 transition-[top] duration-300 shadow-2xl',
          match ? 'top-0' : 'top-full'
        )}
      >
        {/* TODO: Restyle */}
        <div className="text-white">
          Its a match
          <br />
          <Link href="/chats">Send a message</Link>
          <br />
          <button type="button" onClick={() => setMatch(undefined)}>
            Keep swiping
          </button>
        </div>
      </div>
    </div>
  );
}
