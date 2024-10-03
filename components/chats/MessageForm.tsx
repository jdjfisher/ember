'use client';

import { FormEventHandler, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

interface Props {
  onMessage: (message: string) => void;
}

export default function MessageForm({ onMessage }: Props) {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    inputRef.current?.focus({ preventScroll: true });

    if (!text) {
      return;
    }

    onMessage(text);
    setText('');
  };

  return (
    <form className="flex items-center gap-2" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-xl border-2 border-red-200 p-2"
        placeholder="Send a message..."
      />

      <button type="submit">
        <IoMdSend size={32} color="#EE1F4D" />
      </button>
    </form>
  );
}
