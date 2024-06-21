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
              className={`inline-block h-2 w-full rounded-full  ${
                index === imageIndex ? 'bg-white' : 'bg-gray-700 opacity-60'
              }`}
              onClick={() => setImageIndex(index)}
            />
          ))}
      </div>

      <div className="grid grid-cols-2 items-baseline">
        <Link href={`/profiles/${profile.id}`}>
          <div className="space-x-2 text-3xl capitalize">
            <span className="font-semibold">{profile.name},</span>
            <span>{profile.age}</span>
          </div>
        </Link>
        <div className="text-right align-bottom text-xl italic">
          <p>{profile.distance} miles away</p>
        </div>
        <div className="text-xl">{profile.title}</div>
      </div>
    </div>
  );
}
