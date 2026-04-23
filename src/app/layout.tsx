import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lonwalk',
  description: 'Integrated manufacturing website',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
