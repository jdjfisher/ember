export interface Profile {
  id: number;
  imageUrls: string[];
  name: string;
  title: string;
  age: number;
  swipedRight: boolean;
}

export interface Message {
  sentByYou: boolean;
  text: string;
}

export type ScriptedMessageThread = Array<
  | {
      type: 'message';
      text: string;
    }
  | {
      type: 'delay';
      duration: number;
      typing: boolean;
    }
  | 'prompt'
>;
