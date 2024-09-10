import { Profile, ScriptedMessageThread } from '@/types';

export const messagesHussain: ScriptedMessageThread = [
  { type: 'message', text: 'Only looking to bottom really :/' },
  { type: 'message', text: 'U?' },
  { type: 'userMessage', text: "I'm easy. Just want to meet ASAP" },
  { type: 'userMessage', text: 'Come mine tomorrow? Got a friend round tonight?' },
  { type: 'message', text: 'Sounds good aha' },
  { type: 'delay', duration: 1500, typing: true },
  {
    type: 'message',
    text: 'Hey, am I still coming over or are you still hanging out with that guy today?',
  },
  {
    type: 'message',
    text: 'I was gonna bring some wine too?',
  },
  { type: 'delay', duration: 1500, typing: true },
  {
    type: 'message',
    text: 'But I need a photo haha',
  },
  { type: 'delay', duration: 1000, typing: true },
  {
    type: 'message',
    text: 'Unflitered ;)',
  },
];

export const profileHussain: Profile = {
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
  chat: messagesHussain,
};
