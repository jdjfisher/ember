import { Profile } from '@/types';
import { hussainMessages, milaMessages } from './messages';

export const hugo: Profile = {
  id: 0,
  imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
  name: 'Hugo',
  title: '',
  age: 28,
  livesIn: 'London',
  interests: ['Food', 'Nightlife', 'History', 'Travel'],
  aboutMe: 'A painting is worth a 1000 words -- \n Match for the real thing.',
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

export const amelia: Profile = {
  id: 2,
  imageUrls: [
    `https://i.pravatar.cc/700?img=1`,
    `https://i.pravatar.cc/200?img=2`,
    `https://i.pravatar.cc/50?img=3`,
  ],
  name: 'Amelia',
  title: '',
  age: 25,
  swipedRight: true,
  livesIn: 'London',
  distance: 12,
  interests: ['Exercise', 'History', 'Books', 'Music'],
  aboutMe: 'New to London - show me round! 🤩 \n Kicking ass and taking names since 1999 👊',
};

export const mila: Profile = {
  id: 3,
  imageUrls: [
    `https://i.pravatar.cc/700?img=1`,
    `https://i.pravatar.cc/200?img=2`,
    `https://i.pravatar.cc/50?img=3`,
  ],
  name: 'Mila',
  title: '',
  age: 24,
  swipedRight: false,
  livesIn: 'London',
  distance: 12,
  interests: ['i', 'd', 'k'],
  aboutMe: 'New to London - show me round! 🤩 \n Kicking ass and taking names since 1999 👊',
  chat: milaMessages,
};

const extras: Profile[] = [
  {
    id: 9,
    imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
    name: 'Kelly',
    title: '',
    age: 22,
    livesIn: 'London',
    interests: ['Puzzles', 'Walks in the rain', 'Nicholas Sparks', 'Crochet & Knitting'],
    aboutMe:
      "If you also like Shakespeare, Jeff Buckley and spending Sundays in bed watching movies, I'm your perfect match 🥰",
  },
  {
    id: 4,
    imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
    name: 'Benoit',
    title: '',
    age: 29,
    livesIn: 'London',
    interests: ['Maps', 'Drawing', 'Reading', 'History'],
    aboutMe:
      "I love maps 🌎 \n I like to read maps, I like to make maps. Let's map out our future together 🖊",
  },
  {
    id: 5,
    imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
    name: 'Chanel',
    title: '',
    age: 27,
    livesIn: 'London',
    interests: ['Travel', 'Food', 'Skiing', 'Cocktails'],
    aboutMe:
      "Red flag: don't bother if you've never left Europe \n Travel expert \n Let me broaden your horizons 💅",
  },
  {
    id: 6,
    imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
    name: 'Alfonso',
    title: '',
    age: 25,
    livesIn: 'London',
    interests: ['Monkeys', 'Jack Antonoff', 'Sleeping', 'Travelling'],
    aboutMe:
      "Don't talk to me before I've had my morning sarcasm. \n If you can't match my banter, I will publicly shame you. \n No monkey pic, no match. 🐒",
  },
  {
    id: 7,
    imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
    name: 'Callum',
    title: '',
    age: 32,
    livesIn: 'London',
    interests: ['Coffee', 'DIY', 'Disco'],
    aboutMe: 'Born in the wrong era. Long live physical media. Come see my vinyl collection. ',
  },
  {
    id: 10,
    imageUrls: ['https://i.pravatar.cc/700?img=69', 'https://i.pravatar.cc/700?img=68'],
    name: 'Stepan',
    title: '',
    age: 32,
    livesIn: 'London',
    interests: ['Coffee', 'DIY', 'Disco'],
    aboutMe: 'Born in the wrong era. Long live physical media. Come see my vinyl collection. ',
  },
];

export const chatProfiles: Profile[] = [hussain, mila];

export const profilesToSwipe: Profile[] = [
  extras[0],
  extras[1],
  extras[2],
  extras[3],
  extras[4],
  amelia,
  extras[5],
].reverse();
