'use client';

import dynamic from 'next/dynamic';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false,
});

interface Props {
  index: number;
}

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla sequi iusto expedita iste doloribus quos natus nam sit hic perspiciatis illo temporibus Expedita aliquam et molestias quidem ipsum Quo assumenda ipsum Quia et ratione veniam iste illo similique accusamus vel voluptatum voluptas perspiciatis consequuntur voluptates recusandae vitae blanditiis repellendus odio'

const names = lorem.split(' ');

export default function Card({ index }: Props) {  
  const src = `https://i.pravatar.cc/700?img=${index}`;

  const style = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const name = names[index * 2];
  const title = names[index * 2 +1 ];
  const age = 20 + (index ** 3) % 10;

  return (
    <TinderCard
      className="absolute h-full w-full"
      swipeRequirementType={'velocity'}
      preventSwipe={['down']}
    >
      <div className="flex h-full select-none flex-col justify-end p-5 text-white" style={style}>
        <span className="text-3xl">
          {name}, {age}
          </span>
          <span className="text-xl">
         {title}
          </span>
      </div>
    </TinderCard>
  );
}

