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
  lastMessage: 'Sounds good aha',
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

const kelly: Profile = {
  id: 101,
  imageUrls: [
    '/pics/kelly/1.jpeg',
    '/pics/kelly/2.jpeg',
    '/pics/kelly/3.jpeg',
    '/pics/kelly/4.jpeg',
    '/pics/kelly/5.jpeg',
    '/pics/kelly/6.jpeg',
    '/pics/kelly/7.jpeg',
    '/pics/kelly/8.jpeg',
  ],
  name: 'Kelly',
  title: '',
  age: 22,
  livesIn: 'London',
  interests: ['Puzzles', 'Walks in the rain', 'Nicholas Sparks', 'Crochet & Knitting'],
  aboutMe:
    "If you also like Shakespeare, Jeff Buckley and spending Sundays in bed watching movies, I'm your perfect match 🥰",
};

const benoit: Profile = {
  id: 102,
  imageUrls: ['/pics/benoit/1.JPG', '/pics/benoit/2.JPG'],
  name: 'Benoit',
  title: '',
  age: 29,
  livesIn: 'London',
  interests: ['Maps', 'Drawing', 'Reading', 'History'],
  aboutMe:
    "I love maps 🌎 \n I like to read maps, I like to make maps. Let's map out our future together 🖊",
};

const chanel: Profile = {
  id: 103,
  imageUrls: ['/pics/chanel/1.JPG'],
  name: 'Chanel',
  title: '',
  age: 27,
  livesIn: 'London',
  interests: ['Travel', 'Food', 'Skiing', 'Cocktails'],
  aboutMe:
    "Red flag: don't bother if you've never left Europe \n Travel expert \n Let me broaden your horizons 💅",
};

const alfonso: Profile = {
  id: 104,
  imageUrls: [
    '/pics/alfonso/1.jpeg',
    '/pics/alfonso/2.jpeg',
    '/pics/alfonso/3.jpeg',
    '/pics/alfonso/4.jpeg',
    '/pics/alfonso/5.jpeg',
  ],
  name: 'Alfonso',
  title: '',
  age: 25,
  livesIn: 'London',
  interests: ['Monkeys', 'Jack Antonoff', 'Sleeping', 'Travelling'],
  aboutMe:
    "Don't talk to me before I've had my morning sarcasm. \n If you can't match my banter, I will publicly shame you. \n No monkey pic, no match. 🐒",
};

const callum: Profile = {
  id: 105,
  imageUrls: ['/pics/callum/1.jpg'],
  name: 'Callum',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: ['Coffee', 'DIY', 'Disco'],
  aboutMe: 'Born in the wrong era. Long live physical media. Come see my vinyl collection. ',
};

const ed: Profile = {
  id: 106,
  imageUrls: ['/pics/ed/1.JPG'],
  name: 'Ed',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: ['Coffee', 'DIY', 'Disco'],
  aboutMe: '',
  lastMessage: 'Here x',
  chat: [
    {
      type: 'message',
      text: 'Here x',
      timestamp: 'Yesterday',
      picture: true,
    },
  ],
};

const bella: Profile = {
  id: 107,
  imageUrls: ['/pics/bella/1.JPG'],
  name: 'Bella',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: [],
  aboutMe: '',
  lastMessage: "It's a social construct...",
  chat: [
    {
      type: 'message',
      text: "It's a social construct...",
      timestamp: 'Yesterday',
      picture: true,
    },
  ],
};

const jacques: Profile = {
  id: 108,
  imageUrls: ['/pics/jacques/1.jpg'],
  name: 'Jacques',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: [],
  aboutMe: '',
  lastMessage: 'I can bench 125 pretty easy x',
  chat: [
    {
      type: 'message',
      text: 'I can bench 125 pretty easy x',
      timestamp: 'Yesterday',
      picture: true,
    },
  ],
};

const michelle: Profile = {
  id: 109,
  imageUrls: ['/pics/michelle/1.jpg'],
  name: 'Michelle',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: [],
  aboutMe: '',
  lastMessage: "I'm outside :)",
  chat: [
    {
      type: 'message',
      text: "I'm outside :)",
      timestamp: 'Yesterday',
      picture: true,
    },
  ],
};

const sarah: Profile = {
  id: 110,
  imageUrls: ['/pics/sarah/1.jpg'],
  name: 'Sarah',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: [],
  aboutMe: '',
  lastMessage: "I'm free on Thursday?",
  chat: [
    {
      type: 'message',
      text: "I'm free on Thursday?",
      timestamp: 'Yesterday',
      picture: true,
    },
  ],
};

const victor: Profile = {
  id: 111,
  imageUrls: ['https://i.pravatar.cc/700?img=1'],
  name: 'Victor',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: [],
  aboutMe: '',
  lastMessage: 'Do you?',
  chat: [
    {
      type: 'message',
      text: 'Do you?',
      timestamp: 'Yesterday',
      picture: true,
    },
  ],
};

const jacob: Profile = {
  id: 112,
  imageUrls: ['https://i.pravatar.cc/700?img=1'],
  name: 'Jacob',
  title: '',
  age: 32,
  livesIn: 'London',
  interests: [],
  aboutMe: '',
  lastMessage: "I'm walking to you now",
  chat: [
    {
      type: 'message',
      text: "I'm walking to you now",
      timestamp: 'Yesterday',
      picture: true,
    },
  ],
};

export const chatProfiles: Profile[] = [
  hussain,
  victor,
  jacques,
  bella,
  sarah,
  michelle,
  ed,
  jacob,
  mila,
];

export const profilesToSwipe: Profile[] = [
  kelly,
  benoit,
  chanel,
  alfonso,
  callum,
  amelia,
  ed,
].reverse();
