interface Profile {
  id: number;
  imageUrl: string;
  name: string;
  title: string;
  age: number;
}

interface Message {
  sentByYou: boolean;
  text: string;
}

type ScriptedMessageThread = Array<
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
