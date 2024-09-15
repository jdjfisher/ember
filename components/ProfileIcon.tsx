import { Profile } from '@/types';
import classNames from 'classnames';
import Image from 'next/image';

interface Props {
  profile: Profile;
  size?: number;
  border?: boolean;
}

export default function ProfileIcon({ profile, size, border }: Props) {
  return (
    <Image
      src={profile.imageUrls[0]!}
      alt={profile.name}
      height={size ?? 32}
      width={size ?? 32}
      className={classNames('rounded-full object-cover aspect-square', { border: border })}
    />
  );
}
