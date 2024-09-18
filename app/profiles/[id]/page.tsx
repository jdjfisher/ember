'use client';

import { chatProfiles } from '@/lib/profiles';
import { ProfileDetail } from '@/components/ProfileDetail';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import Link from 'next/link';

export default function Profile({ params }: any) {
  const id = params?.id;

  const profile = chatProfiles.find((profile) => profile.id == id)!;

  return (
    <div>
      <div className="flex justify-between items-center gap-4 h-14 p-4 shadow-sm">
        <Link href="/">
          <BiArrowBack size={24} />
        </Link>

        <BsThreeDots size={24} />
      </div>

      <div className="p-5">
        <ProfileDetail profile={profile} />
      </div>
    </div>
  );
}
