import './globals.css';

export const metadata = {
  title: 'Ember',
  description: 'Ember',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />

      <body className="mx-auto max-w-sm grid items-center h-screen overflow-x-hidden">
        {/* Hide overflow to disable pull-to-refresh */}
        <main className="flex max-h-[60rem] h-full flex-col justify-between overflow-y-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
