import Message from '@/components/chats/Message';
import MessageForm from '@/components/chats/MessageForm';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { profiles, messages } from '@/lib/dummy';
import Link from 'next/link';
import Image from 'next/image';

export default function Chat({ params }: any) {
  const id = params?.id;

  const profile = profiles.find((profile) => profile.id == id)!;

  return (
    <div className="space-y-2 p-3">
      <div className="flex items-center gap-4">
        <Link href="/chats">
          <BiArrowBack size={24} />
        </Link>

        <Image
          src={profile.imageUrl}
          alt={profile.name}
          height={32}
          width={32}
          className="rounded-full"
        />

        <h2>{profile.name}</h2>

        <BsThreeDots size={24} className="ml-auto" />
      </div>

      <hr />

      <div className="space-y-4">
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </div>

      <section className="fixed bottom-5">
        <MessageForm />
      </section>
    </div>
  );
}
