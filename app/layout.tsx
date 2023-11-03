import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import SidebarProvider from '@/context/SidebarContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WowTube',
  description: 'The best streaming video apps'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <Navbar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
