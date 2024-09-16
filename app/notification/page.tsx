'use client';

import { useEffect, useState } from 'react';

export default function FakeNotification() {
  const [permission, setPermission] = useState('default');

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [delay, setDelay] = useState(0);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        setPermission(permission);
      });
    }
  };

  const sendNotification = async () => {
    if (!navigator.serviceWorker || Notification.permission !== 'granted') {
      alert('Please enable notifications first.');
      return;
    }

    setSending(true);

    const registration = await navigator.serviceWorker.ready;

    setTimeout(async () => {
      await registration.showNotification(title, {
        body: body,
        icon: '/icons/logo.png',
      });

      setTitle('');
      setBody('');
      setSending(false);
    }, delay * 1000);
  };

  return (
    <div className="space-y-5 p-5">
      <h1 className="font-bold">Fake notification</h1>

      {permission === 'default' && (
        <button
          type="button"
          className="border rounded px-3 py-1 bg-gray-100"
          onClick={requestNotificationPermission}
        >
          Enable Notifications
        </button>
      )}

      {permission === 'denied' && (
        <p>Notification permission is denied. Please enable it in the browser settings.</p>
      )}

      {permission === 'granted' && (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            sendNotification();
          }}
        >
          <label>
            Title
            <input
              required
              type="text"
              disabled={sending}
              placeholder="New message"
              className="w-full border rounded px-3 py-1 bg-gray-100"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Body
            <input
              required
              type="text"
              disabled={sending}
              placeholder="You have a new message"
              className="w-full border rounded px-3 py-1 bg-gray-100"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <label>
            Delay (seconds)
            <input
              required
              type="number"
              disabled={sending}
              className="w-full border rounded px-3 py-1 bg-gray-100"
              value={delay}
              min={0}
              onChange={(e) => setDelay(Number(e.target.value))}
            />
          </label>
          <button type="submit" disabled={sending} className="border rounded px-3 py-1 bg-gray-100">
            Send
          </button>

          {sending && <p>Sending...</p>}
        </form>
      )}
    </div>
  );
}
