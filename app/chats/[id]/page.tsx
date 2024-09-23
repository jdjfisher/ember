'use client';

import Message from '@/components/chats/Message';
import MessageForm from '@/components/chats/MessageForm';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { allProfiles } from '@/lib/profiles';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Message as MessageT } from '@/types';
import { useKeyboardResize } from '@/hooks/useKeyboardHeight';
import Typing from '@/components/chats/Typing';
import classNames from 'classnames';
import ProfileIcon from '@/components/ProfileIcon';

export default function Chat({ params }: any) {
  const id = Number(params?.id);

  const viewportHeight = useKeyboardResize();

  const profile = allProfiles.find((profile) => profile.id == id)!;

  const [unmatched, setUnmatch] = useState(false);

  const [scriptIndex, setScriptIndex] = useState(0);

  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<MessageT[]>([]);

  const chatBodyRef = useRef<HTMLDivElement>(null);

  function addMessage(message: MessageT) {
    setMessages([...messages, message]);
    setScriptIndex(scriptIndex + 1);
  }

  function scrollToBottom() {
    chatBodyRef.current!.scrollTo({
      top: chatBodyRef.current!.scrollHeight,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function onMessage(message: string) {
    addMessage({ text: message, sentByYou: true });
  }

  useEffect(() => {
    const currentScriptAction = profile.chat?.[scriptIndex];

    if (!currentScriptAction || currentScriptAction === 'prompt') {
      return;
    }

    if (currentScriptAction === 'unmatch') {
      setUnmatch(true);
      // Close the keyboard
      // @ts-ignore
      document.activeElement?.blur();
      return;
    }

    if (currentScriptAction.type === 'message') {
      addMessage({
        text: currentScriptAction.text,
        sentByYou: currentScriptAction.sentByYou ?? false,
        timestamp: currentScriptAction.timestamp,
        picture: currentScriptAction.picture ? profile.imageUrls[0] : undefined,
      });
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
    <div className="relative" style={{ height: viewportHeight ?? '100%' }}>
      <div
        className={classNames('flex flex-col h-full transition-[filter]', {
          'blur-sm': unmatched,
        })}
      >
        <div className="flex items-center gap-4 sticky top-0 bg-white shadow-sm p-4 h-14">
          <Link href="/chats">
            <BiArrowBack size={24} />
          </Link>

          <Link href={`/profiles/${profile.id}`}>
            <ProfileIcon profile={profile} />
          </Link>
          <Link href={`/profiles/${profile.id}`}>
            <h2>{profile.name}</h2>
          </Link>
          <BsThreeDots size={24} className="ml-auto" onClick={() => window.location.reload()} />
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto p-4 pb-16" ref={chatBodyRef}>
          {messages.map((message, i) => (
            <Message profile={profile} message={message} key={i} />
          ))}
          {isTyping && <Typing />}
        </div>

        <section className="p-4">
          <MessageForm onMessage={onMessage} />
        </section>
      </div>

      <div
        className={classNames(
          'absolute flex items-center justify-center top-0 left-0 h-full w-full',
          { hidden: !unmatched }
        )}
      >
        <Image
          src="/pics/unmatched.png"
          alt="Unmatch"
          width={350}
          height={350}
          onClick={() => setUnmatch(false)}
        />
      </div>
    </div>
  );
}
