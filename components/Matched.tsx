import { Profile } from '@/types';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ProfileIcon from './ProfileIcon';
import { authUser } from '@/lib/profiles';

interface Props {
  match: Profile;
  clearMatch: () => void;
}

export default function Matched({ match, clearMatch }: Props) {
  return (
    <div
      className={classNames(
        'absolute backdrop-blur-sm top-0 w-full h-full flex flex-col gap-4 justify-center items-center z-10 left-0'
      )}
    >
      {/* TODO: Switch */}
      <Image src="/pics/unmatched.png" alt="Matched" width={100} height={100} />

      <div className="flex gap-8 items-center">
        <ProfileIcon profile={match} size={86} border />
        <ProfileIcon profile={authUser} size={86} border />
      </div>

      <Link href={`/chats/${match.id}`}>Send a message</Link>

      <button type="button" onClick={() => clearMatch()}>
        Keep swiping
      </button>
    </div>
  );
}
