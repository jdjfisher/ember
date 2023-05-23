interface Props {
  message: Message;
}

export default function Message({ message }: Props) {
  const self = message.sender_id === 0;

  const className = [
    'max-w-[16rem] rounded-2xl px-4 py-2 w-fit',
    self ? 'bg-red-200 ml-auto' : 'bg-red-400',
  ].join(' ');

  return <div className={className}>{message.text}</div>;
}
