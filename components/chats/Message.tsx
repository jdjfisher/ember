import { Message as MessageI } from '@/types';

interface Props {
  message: MessageI;
}

export default function Message({ message }: Props) {
  const className = [
    'max-w-[16rem] rounded-2xl px-4 py-2 w-fit',
    message.sentByYou ? 'bg-red-400 ml-auto' : 'bg-red-200',
  ].join(' ');

  const containerClass = message.sentByYou ? 'flex justify-end' : 'flex';
  const paddingClass = !message.sentByYou && message.picture ? '' : 'pl-10';

  return (
    <div>
      <div>
        {message.timestamp && <div className="text-center text-gray-500">{message.timestamp}</div>}
      </div>
      <div className={`${containerClass} ${paddingClass}`}>
        {!message.sentByYou && message.picture && (
          <img src={message.picture} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
        )}
        <div className={className}>{message.text}</div>
      </div>
    </div>
  );
}
