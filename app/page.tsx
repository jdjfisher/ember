'use client';

import Card from '@/components/Card';
import NavTabs from '@/components/NavTabs';
import { profiles } from '@/lib/dummy';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export default function Home() {
  const [queue] = useState(profiles);

  return (
    <>
      <section className="flex items-center justify-between p-5">
        <FiMenu size={32} />
        <h1 className="font-semibold text-purple-900">lorem</h1>
        <div className="h-7 w-7 bg-purple-300"></div>
      </section>

      <section className="flex flex-1  px-3">
        <div className="relative w-full bg-purple-300">
          {queue.map((card) => (
            <Card card={card} key={card.name} />
          ))}
        </div>
      </section>

      <NavTabs />
    </>
  );
}
