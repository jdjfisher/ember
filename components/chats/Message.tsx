import { Message as MessageI } from '@/types';

interface Props {
  message: MessageI;
}

export default function Message({ message }: Props) {
  const className = [
    'max-w-[16rem] rounded-2xl px-4 py-2 w-fit',
    message.sentByYou ? 'bg-red-200 ml-auto' : 'bg-red-400',
  ].join(' ');

  return <div className={className}>{message.text}</div>;
}
