'use client';

import Card from '@/components/Card';
import NavTabs from '@/components/NavTabs';
import { profiles } from '@/lib/dummy';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [queue] = useState(profiles);

  return (
    <>
      <section className="flex items-center justify-between p-3">
        <FiMenu size={32} />

        <h1 className="text-lg font-bold text-[#EE1F4D]">Ember</h1>

        <Image src="/icons/logo.png" alt="logo" width={35} height={35} />
      </section>

      <section className="flex flex-1 px-3">
        <div className="relative w-full rounded-3xl bg-[#EE1F4D]">
          {queue.map((card) => (
            <Card card={card} key={card.name} />
          ))}
        </div>
      </section>

      <NavTabs />
    </>
  );
}
