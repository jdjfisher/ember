import NavTabs from '@/components/NavTabs';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function TabLayout({ children }: Props) {
  return (
    <>
      <section className="flex items-center justify-between p-3">
        <Link href="settings">
          <FiMenu size={32} />
        </Link>

        <h1 className="select-none text-lg font-bold text-[#EE1F4D]">Ember</h1>

        <Image src="/icons/logo.png" alt="logo" width={35} height={35} />
      </section>

      <section className="flex flex-1">{children}</section>

      <NavTabs />
    </>
  );
}
