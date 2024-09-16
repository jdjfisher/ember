'use client';

import { useEffect, useState } from 'react';

export default function FakeNotification() {
  const [permission, setPermission] = useState('default');

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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

    const registration = await navigator.serviceWorker.ready;

    await registration.showNotification(title, {
      body: body,
      icon: '/icons/logo.png',
    });

    setTitle('');
    setBody('');
    alert('Notification sent');
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
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Title"
            className="w-full border rounded px-3 py-1 bg-gray-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full border rounded px-3 py-1 bg-gray-100"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button
            type="button"
            className="border rounded px-3 py-1 bg-gray-100"
            onClick={sendNotification}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
