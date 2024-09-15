'use client';

import { authUser } from '@/lib/profiles';
import { ProfileDetail } from '@/components/ProfileDetail';

export default function Profile() {
  return (
    <div className="p-5">
      <ProfileDetail profile={authUser} />
    </div>
  );
}
