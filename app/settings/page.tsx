'use client';

import { useEffect, useState } from 'react';

export default function Settings() {
  const [permission, setPermission] = useState('default');

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
    console.log('Service worker registered');
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

  const sendNotification = () => {
    if (!navigator.serviceWorker || Notification.permission !== 'granted') {
      alert('Please enable notifications first.');
      return;
    }

    navigator.serviceWorker.ready.then(function (registration) {
      console.log('Sending notification');

      registration.showNotification('Ember', {
        body: 'This is a push notification demo.',
        icon: '/icons/logo.png', // Add an icon to the public folder
      });
    });
  };

  return (
    <div className="space-y-5 p-5">
      <h1 className="font-bold">Settings</h1>

      {permission === 'default' && (
        <button
          type="button"
          className="border rounded px-3 py-1 bg-gray-100"
          onClick={requestNotificationPermission}
        >
          Enable Notifications
        </button>
      )}

      {permission === 'granted' && (
        <button
          type="button"
          className="border rounded px-3 py-1 bg-gray-100"
          onClick={sendNotification}
        >
          Send Push Notification
        </button>
      )}

      {permission === 'denied' && (
        <p>Notification permission is denied. Please enable it in the browser settings.</p>
      )}
    </div>
  );
}
