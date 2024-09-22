import { Viewport } from 'next';
import './globals.css';
// import SplashScreen from '@/components/SplashScreen';

export const metadata = {
  title: 'Ember',
  description: 'Ember',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />

      <body className="mx-auto grid h-screen max-w-sm items-center bg-gray-50">
        {/* Hide overflow to disable pull-to-refresh */}
        <main className="h-full max-h-[60rem] flex flex-col relative overflow-hidden bg-white shadow-2xl">
          {children}
          {/* <SplashScreen /> */}
        </main>
      </body>
    </html>
  );
}
