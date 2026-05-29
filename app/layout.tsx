import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header-05';
import Footer from '@/components/ui/footer-1';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Robótica Submarina Chiloé | ROV Services',
  description: 'Servicios de ROV para inspección, monitoreo y operaciones subacuáticas en la industria salmonera del sur de Chile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
