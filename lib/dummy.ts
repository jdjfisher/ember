import { Profile, ScriptedMessageThread } from '@/types';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla sequi iusto expedita iste doloribus quos natus nam sit hic perspiciatis illo temporibus Expedita aliquam et molestias quidem ipsum Quo assumenda ipsum Quia et ratione veniam iste illo similique accusamus vel voluptatum voluptas perspiciatis consequuntur voluptates recusandae vitae blanditiis repellendus odio';

const words = lorem.split(' ');

export const profiles: Profile[] = [1, 5, 9, 10].reverse().map((i) => ({
  id: i,
  imageUrl: `https://i.pravatar.cc/700?img=${i}`,
  name: words[i * 2],
  title: words[i * 2 + 1],
  age: 20 + (i ** 3 % 10),
  swipedRight: i % 2 === 0,
}));

export const messageThread: ScriptedMessageThread = [
  { type: 'delay', duration: 1000, typing: true },
  { type: 'message', text: 'How are you?' },
  'prompt',
  { type: 'delay', duration: 1000, typing: false },
  { type: 'delay', duration: 1500, typing: true },
  { type: 'message', text: 'I am a bot.' },
  { type: 'delay', duration: 1500, typing: true },
  { type: 'message', text: 'I am here to help you.' },
  { type: 'delay', duration: 1500, typing: true },
  { type: 'message', text: 'What can I do for you?' },
  'prompt',
  'prompt',
  { type: 'delay', duration: 1500, typing: false },
  { type: 'delay', duration: 3000, typing: true },
  { type: 'message', text: 'I am sorry, I did not understand that.' },
  { type: 'delay', duration: 1500, typing: true },
  { type: 'message', text: 'Can you please repeat that?' },
  'prompt',
  { type: 'delay', duration: 500, typing: true },
  { type: 'message', text: 'Goodbye!' },
];
