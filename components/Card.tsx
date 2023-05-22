'use client';

import dynamic from 'next/dynamic';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false,
});

interface Props {
  card: ProfileCard;
}

export default function Card({ card }: Props) {
  const style = {
    backgroundImage: `url(${card.imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <TinderCard
      className="absolute h-full w-full"
      swipeRequirementType={'velocity'}
      preventSwipe={['down']}
    >
      <div
        className="flex h-full select-none flex-col justify-end rounded-3xl p-5 text-white"
        style={style}
      >
        <span className="text-3xl capitalize">
          {card.name}, {card.age}
        </span>
        <span className="text-xl">{card.title}</span>
      </div>
    </TinderCard>
  );
}
