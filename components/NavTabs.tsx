'use client';

import Link from 'next/link';
import { FaComment, FaHeart, FaUser } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { usePathname } from 'next/navigation';

interface Tab {
  href: string;
  icon: IconType;
}

const tabs: Tab[] = [
  {
    href: '/profile',
    icon: FaUser,
  },
  {
    href: '/',
    icon: FaHeart,
  },
  {
    href: '/chats',
    icon: FaComment,
  },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className=" flex justify-around gap-1">
      {tabs.map((tab) => (
        <Link href={tab.href} key={tab.href} className="flex w-full justify-center py-8 ">
          <tab.icon size={24} color={pathname === tab.href ? 'black' : 'gray'} />
        </Link>
      ))}
    </nav>
  );
}
