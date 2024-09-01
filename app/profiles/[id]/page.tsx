'use client';

import { profiles } from '@/lib/dummy';
import { ProfileDetail } from '@/components/ProfileDetail';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import Link from 'next/link';

export default function Profile({ params }: any) {
  const id = params?.id;

  const profile = profiles.find((profile) => profile.id == id)!;

  return (
    <div className="space-y-2 p-3">
      <div className="flex items-center gap-4">
        <Link href="/">
          <BiArrowBack size={24} />
        </Link>

        <BsThreeDots size={24} className="ml-auto" />
      </div>

      <hr />
      <div className="p-5">
        <ProfileDetail profile={profile} />
      </div>
    </div>
  );
}
