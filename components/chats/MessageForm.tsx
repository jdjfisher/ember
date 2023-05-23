'use client';

import { FormEventHandler } from 'react';
import { IoMdSend } from 'react-icons/io';

export default function MessageForm() {
  const submit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form className="flex  items-center gap-2" onSubmit={submit}>
      <input
        type="text"
        className="w-full rounded-xl border-2 border-red-200 p-2"
        placeholder="Type a message..."
      />

      <button type="submit">
        <IoMdSend size={32} color="#EE1F4D" />
      </button>
    </form>
  );
}
