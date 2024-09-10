import { Profile } from '@/types';
import { MouseEventHandler, useState } from 'react';
import Link from 'next/link';

interface Props {
  profile: Profile;
}

export function ProfileCard({ profile }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const imageUrl = profile.imageUrls[imageIndex];

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const onClick: MouseEventHandler = (e) => {
    e.stopPropagation();

    if (e.clientX < window.innerWidth / 2 && imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else if (e.clientX > window.innerWidth / 2 && imageIndex < profile.imageUrls.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div
      className="flex h-full select-none flex-col justify-between rounded-3xl p-4 text-white"
      onClick={onClick}
      style={style}
    >
      <div className="flex gap-3">
        {profile.imageUrls.length > 1 &&
          profile.imageUrls.map((_, index) => (
            <div
              key={index}
              className={`inline-block h-1 w-full rounded-full  ${
                index === imageIndex ? 'bg-white' : 'bg-gray-700 opacity-60'
              }`}
              onClick={() => setImageIndex(index)}
            />
          ))}
      </div>

      <div className="grid grid-rows-2 items-baseline">
        <div className="row-span-1">
          <Link href={`/profiles/${profile.id}`}>
            <div className="space-x-2 text-3xl capitalize">
              <span className="font-bold">{profile.name}</span>
              <span>{profile.age}</span>
            </div>
          </Link>
        </div>
        <div className="row-span-1">
          <li className="marker:text-green-500">
            <span>Recently Active</span>
          </li>
        </div>
      </div>
    </div>
  );
}
