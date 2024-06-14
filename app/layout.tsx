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

      {/* Hide overflow to disable pull-to-refresh */}
      <body className="mx-auto max-w-sm overflow-x-hidden overflow-y-hidden">
        <main className="flex min-h-screen flex-col justify-between">{children}</main>
      </body>
    </html>
  );
}
