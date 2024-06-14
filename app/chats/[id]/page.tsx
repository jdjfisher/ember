'use client';

import Message from '@/components/chats/Message';
import MessageForm from '@/components/chats/MessageForm';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { profiles, messageThread } from '@/lib/dummy';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Message as MessageT } from '@/types';
import Typing from '@/components/chats/Typing';

export default function Chat({ params }: any) {
  const id = params?.id;

  const profile = profiles.find((profile) => profile.id == id)!;

  const [scriptIndex, setScriptIndex] = useState(0);

  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<MessageT[]>([]);

  function addMessage(message: MessageT) {
    setMessages([...messages, message]);
    setScriptIndex(scriptIndex + 1);
  }

  function onMessage(message: string) {
    addMessage({ text: message, sentByYou: true });
  }

  useEffect(() => {
    const currentScriptAction = messageThread[scriptIndex];

    if (!currentScriptAction || currentScriptAction === 'prompt') {
      return;
    }

    if (currentScriptAction.type === 'message') {
      addMessage({ text: currentScriptAction.text, sentByYou: false });
    }

    if (currentScriptAction.type === 'delay') {
      setIsTyping(currentScriptAction.typing);

      const timeout = setTimeout(() => {
        setIsTyping(false);
        setScriptIndex(scriptIndex + 1);
      }, currentScriptAction.duration);

      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptIndex]);

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

      <div className="space-y-2">
        {messages.map((message, i) => (
          <Message message={message} key={i} />
        ))}
        {isTyping && <Typing />}
      </div>

      <section className="fixed bottom-5">
        <MessageForm onMessage={onMessage} />
      </section>
    </div>
  );
}
