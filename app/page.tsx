'use client';

import Card from '@/components/Card';
import { profiles } from '@/lib/dummy';
import { useState } from 'react';

export default function Home() {
  const [queue] = useState(profiles);

  return (
    <main className="flex min-h-screen flex-col gap-5 p-5">
      <section className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-1 w-7 bg-purple-100"></div>
          <div className="h-1 w-7 bg-purple-100"></div>
          <div className="h-1 w-7 bg-purple-100"></div>
        </div>
        <h1 className="font-semibold text-purple-900">lorem</h1>
        <div className="h-7 w-7 bg-purple-300"></div>
      </section>

      <section className="relative flex-1 bg-purple-300">
        {queue.map((card) => (
          <Card card={card} key={card.name} />
        ))}
      </section>

      <section className="flex justify-around">
        <div className="h-7 w-7 bg-purple-100"></div>
        <div className="h-7 w-7 bg-purple-500 shadow-xl"></div>
        <div className="h-7 w-7 bg-purple-100"></div>
        <div className="h-7 w-7 bg-purple-100"></div>
      </section>
    </main>
  );
}
