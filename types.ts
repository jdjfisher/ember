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

export type ScriptedMessageThread = Array<
  | {
      type: 'message';
      text: string;
      timestamp?: string;
      sentByYou?: boolean;
      picture?: boolean;
    }
  | {
      type: 'delay';
      duration: number;
      typing: boolean;
    }
  | 'prompt'
>;
