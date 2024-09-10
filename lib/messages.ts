import { ScriptedMessageThread } from '@/types';

export const hussainMessages: ScriptedMessageThread = [
  { type: 'message', text: 'Only looking to bottom really :/' , timestamp: "Today 3:31 AM"},
  { type: 'message', text: 'U?' },
  'prompt',
  { type: 'userMessage', text: "I'm easy. Just want to meet ASAP" },
  { type: 'userMessage', text: 'Come mine tomorrow? Got a friend round tonight?' },
  { type: 'message', text: 'Sounds good aha' },
  { type: 'delay', duration: 1500, typing: true },
  {
    type: 'message',
    text: 'Hey, am I still coming over or are you still hanging out with that guy today?', timestamp: "Yesterday 6:14 PM",
  },
  'prompt',
  {
    type: 'message',
    text: 'I was gonna bring some wine too?',
  },
  'prompt',
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
