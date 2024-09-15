export interface Profile {
  id: number;
  imageUrls: string[];
  name: string;
  title: string;
  age: number;
  swipedRight?: boolean;
  livesIn: string;
  distance?: number;
  interests: string[]; // max 4?
  aboutMe: string;
  chat?: ScriptedMessageThread;
}

export interface Message {
  sentByYou: boolean;
  text: string;
  timestamp?: string;
  picture?: string;
}

export interface MessageAction {
  type: 'message';
  text: string;
  timestamp?: string;
  sentByYou?: boolean;
  picture?: boolean;
}

interface DelayAction {
  type: 'delay';
  duration: number;
  typing: boolean;
}

export type ScriptedMessageAction = MessageAction | DelayAction | 'prompt' | 'unmatch';

export type ScriptedMessageThread = ScriptedMessageAction[];
