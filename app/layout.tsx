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

      <body className="mx-auto grid h-screen max-w-sm items-center overflow-x-hidden">
        {/* Hide overflow to disable pull-to-refresh */}
        <main className="flex h-full max-h-[60rem] flex-col justify-between overflow-x-hidden overflow-y-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
