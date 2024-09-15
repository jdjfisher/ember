import Image from 'next/image';
import Link from 'next/link';
import { MessageAction, Profile } from '@/types';

interface Props {
  profile: Profile;
}

export default function ChatCard({ profile }: Props) {
  function findLastMessage() {
    if (!profile.chat) {
      return undefined;
    }

    let lastMessageAction: MessageAction | undefined = undefined;

    for (const action of profile.chat) {
      if (typeof action === 'object' && 'text' in action) {
        lastMessageAction = action;
      } else {
        break; // Stop once we hit the first false
      }
    }

    return lastMessageAction?.text;
  }

  return (
    <Link href={`/chats/${profile.id}`} className="flex items-center gap-4 px-5 py-3">
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
          <span>{findLastMessage()}</span>
        </div>
      </div>
    </Link>
  );
}
