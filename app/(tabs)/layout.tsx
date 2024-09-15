'use client';

import NavTabs from '@/components/NavTabs';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function TabLayout({ children }: Props) {
  function refresh() {
    window.location.reload();
  }

  return (
    <>
      <section className="grid grid-cols-3 items-center p-3 shadow-sm h-16">
        <h1 className="select-none text-center col-start-2 text-lg font-bold text-[#EE1F4D] items-start">
          <button type="button" onClick={refresh}>
            Ember
          </button>
        </h1>

        <Link href="settings" className=" ml-auto">
          <Image src="/icons/logo.png" alt="logo" width={35} height={35} />
        </Link>
      </section>

      <section className="overflow-y-auto flex-1">{children}</section>

      <NavTabs />
    </>
  );
}
