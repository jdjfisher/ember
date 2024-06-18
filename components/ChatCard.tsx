import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Profile } from '@/types';

interface Props {
  profile: Profile;
}

export default function ChatCard({ profile }: Props) {
  const timestamp = dayjs().format('HH:mm');

  return (
    <Link href={`/chats/${profile.id}`} className="flex  items-center gap-4 px-5 py-3">
      <Image
        src={profile.imageUrls[0]!}
        alt={profile.name}
        height={64}
        width={64}
        className="rounded-full"
      />

      <div className="w-full">
        <div className="font-bold">{profile.name}</div>
        <div className="flex items-end justify-between text-gray-500">
          <span>{profile.name}</span>
          <span className="text-xs">{timestamp}</span>
        </div>
      </div>
    </Link>
  );
}
