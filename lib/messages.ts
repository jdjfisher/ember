import { ScriptedMessageThread } from '@/types';

export const hussainMessages: ScriptedMessageThread = [
  { type: 'message', text: 'Only looking to bottom really :/', timestamp: 'Yesterday' },
  { type: 'message', text: 'U?' },
  { type: 'userMessage', text: "I'm easy. Just want to meet ASAP" },
  { type: 'userMessage', text: 'Come mine tomorrow? Got a friend round tonight?' },
  { type: 'message', text: 'Sounds good aha' },
  { type: 'delay', duration: 1500, typing: true },
  {
    type: 'message',
    text: 'Hey, am I still coming over or are you still hanging out with that guy today?',
    timestamp: 'Today 2:13 AM',
  },
  { type: 'delay', duration: 1000, typing: true },
  {
    type: 'message',
    text: 'I was gonna bring some wine too?',
  },
  { type: 'delay', duration: 2500, typing: false },
  { type: 'delay', duration: 1000, typing: true },
  { type: 'message', text: 'But I need a photo haha', timestamp: 'Today 3:01 AM' },
  { type: 'delay', duration: 1000, typing: true },
  {
    type: 'message',
    text: 'Unflitered ;)',
  },
];

export const milaMessages: ScriptedMessageThread = [
  { type: 'message', text: "I don't want anything too serious", timestamp: 'Today' },
  { type: 'message', text: "Don't want commitment :)" },
  'prompt',
  { type: 'delay', duration: 500, typing: true },
  { type: 'message', text: 'Cool' },
  { type: 'delay', duration: 500, typing: true },
  { type: 'message', text: 'Where are you based?' },
  'prompt',
  { type: 'delay', duration: 4500, typing: false },
  { type: 'delay', duration: 500, typing: true },
  { type: 'message', text: 'Same' },
  { type: 'delay', duration: 250, typing: false },
  { type: 'message', text: "So that's good ;)" },
  'prompt',
  { type: 'delay', duration: 750, typing: true },
  { type: 'message', text: 'Imma be honest' },
  { type: 'delay', duration: 500, typing: true },
  { type: 'message', text: 'I need to get my 🐱 ate' },
  'prompt',
  'prompt',
  { type: 'delay', duration: 4500, typing: false },
  { type: 'delay', duration: 500, typing: true },
  { type: 'message', text: 'LMAO' },
  { type: 'delay', duration: 250, typing: false },
  { type: 'message', text: 'Nahhhh' },
  // TODO: UNMATCHED
];
