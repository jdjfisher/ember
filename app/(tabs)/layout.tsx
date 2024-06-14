import SwipeCard from '@/components/SwipeCard';
import NavTabs from '@/components/NavTabs';
import { profiles } from '@/lib/dummy';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
}

export default function TabLayout({ children }: Props) {
  return (
    <>
      <section className="flex items-center justify-between p-3">
        <FiMenu size={32} />

        <h1 className="select-none text-lg font-bold text-[#EE1F4D]">Ember</h1>

        <Image src="/icons/logo.png" alt="logo" width={35} height={35} />
      </section>

      <section className="flex flex-1">{children}</section>

      <NavTabs />
    </>
  );
}
