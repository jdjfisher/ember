import { Profile } from '@/types';
import { MouseEventHandler, useState } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { TbWriting } from 'react-icons/tb';
import { MdInterests } from 'react-icons/md';

interface Props {
  profile: Profile;
}

export function ProfileDetail({ profile }: Props) {
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
    <div className="flex h-full flex-col gap-2">
      <div
        className="flex-1 select-none justify-between rounded-3xl border-2 p-4 text-white"
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
      </div>

      <div>
        <div className="space-x-2 text-3xl capitalize">
          <span className="font-bold">{profile.name}</span>
          <span>{profile.age}</span>
        </div>
      </div>

      <div className="flex flex-row space-x-2">
        <div>
          <FaHouseUser size={25} />
        </div>
        <div>{profile.livesIn}</div>
      </div>

      <div>
        <h1 className="text-2xl font-bold">About me</h1>
      </div>

      <div>
        <div>{profile.title}</div>
        <div className="whitespace-pre-line">{profile.aboutMe}</div>
      </div>

      <div className="flex flex-row space-x-2">
        <div>
          <MdInterests size={25} />
        </div>
        <div>
          <h1 className="font-bold">Interests</h1>
        </div>
      </div>

      <div>
        <div className="flex flex-row space-x-3">
          {profile.interests.map((item) => (
            <div className="rounded border-2 p-1" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
