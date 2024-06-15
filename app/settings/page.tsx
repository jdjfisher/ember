'use client';

export default function Settings() {
  async function handleNotification() {
    const result = await Notification.requestPermission();

    if (result !== 'granted') {
      console.log('Permission denied');
      return;
    }

    new Notification('Hello, world!', {
      body: 'This is a notification',
    });
  }

  return (
    <div className="space-y-5 p-5">
      <h1 className="font-bold">Settings</h1>

      <button
        type="button"
        onClick={handleNotification}
        className="rounded-md border bg-gray-100 px-2 py-1"
      >
        Notification
      </button>
    </div>
  );
}
