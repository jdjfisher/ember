import { Message as MessageI } from '@/types';

interface Props {
  message: MessageI;
}

export default function Message({ message }: Props) {
  const className = [
    'max-w-[16rem] rounded-2xl px-4 py-2 w-fit',
    message.sentByYou ? 'bg-red-400 ml-auto' : 'bg-red-200',
  ].join(' ');

  return (
    <div>
      {message.timestamp && <div className="text-center text-gray-500">{message.timestamp}</div>}
      <div className={className}>{message.text}</div>
    </div>
  );
}
