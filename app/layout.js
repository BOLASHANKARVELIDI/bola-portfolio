import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bola Shankar Velidi | Firmware Engineer & Developer',
  description:
    'Portfolio of Bola Shankar Velidi — Firmware Test Engineer at KAZAM EV Tech and Full Stack Developer specializing in embedded systems, C/C++, React, and IoT.',
  keywords: [
    'Bola Shankar Velidi',
    'Firmware Engineer',
    'Full Stack Developer',
    'ESP32',
    'React',
    'Next.js',
    'Arduino',
    'IoT',
    'Java',
  ],
  authors: [{ name: 'Bola Shankar Velidi' }],
  openGraph: {
    title: 'Bola Shankar Velidi | Firmware Engineer & Developer',
    description: 'Firmware Test Engineer and Full Stack Developer — B.Tech ECE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
