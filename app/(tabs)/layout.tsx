'use client';

import NavTabs from '@/components/NavTabs';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function TabLayout({ children }: Props) {
  return (
    <>
      <section className="flex justify-center items-center p-3 shadow-sm h-14 bg-white">
        <Link href="notification">
          <Image src="/icons/logo_with_text.png" alt="Ember" width={128} height={128} />
        </Link>
      </section>

      <section className="overflow-y-auto flex-1">{children}</section>

      <NavTabs />
    </>
  );
}
