import { Profile } from '@/types';
import { hussainMessages } from './messages';

export const hugo: Profile = {
  id: 0,
  imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
  name: 'Hugo',
  title: '',
  age: 25,
  livesIn: 'London',
  interests: ['TV Shows', 'Cooking', 'Football', 'Music'],
  aboutMe: 'A painting is worth a 1000 words -- \n Match for the real thing.',
};

export const amelia: Profile = {
  id: 2,
  imageUrls: [
    `https://i.pravatar.cc/700?img=1`,
    `https://i.pravatar.cc/200?img=2`,
    `https://i.pravatar.cc/50?img=3`,
  ],
  name: 'Amelia',
  title: '',
  age: 24,
  swipedRight: false,
  livesIn: 'London',
  distance: 12,
  interests: ['i', 'd', 'k'],
  aboutMe: 'New to London - show me round! 🤩 \n Kicking ass and taking names since 1999 👊',
};

export const hussain: Profile = {
  id: 1,
  imageUrls: [
    `https://i.pravatar.cc/700?img=1`,
    `https://i.pravatar.cc/200?img=2`,
    `https://i.pravatar.cc/50?img=3`,
  ],
  name: 'Hussain',
  title: '',
  age: 25,
  swipedRight: true,
  livesIn: 'London',
  distance: 5,
  interests: ['i', 'd', 'k'],
  aboutMe: 'hi:)',
  chat: hussainMessages,
};

export const chatProfiles: Profile[] = [hussain];

export const profilesToSwipe: Profile[] = [amelia];
