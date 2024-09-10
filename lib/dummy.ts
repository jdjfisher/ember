import { Profile, ScriptedMessageThread } from '@/types';
import { profileHussain } from './Hussain';
import { ProfileAmelia } from './Amelia';

export const chatProfiles: Profile[] = [profileHussain];

export const profilesToSwipe: Profile[] = [ProfileAmelia];

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
