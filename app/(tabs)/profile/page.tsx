'use client';

import { userProfile } from '@/lib/user';
import { ProfileDetail } from '@/components/ProfileDetail';

export default function Profile() {
  return (
    <div className="p-5">
      <ProfileDetail profile={userProfile} />
    </div>
  );
}
