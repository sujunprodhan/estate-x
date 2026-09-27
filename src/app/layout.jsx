import Navbar from '@/components/layouts/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/layouts/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '800'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'EstateX',
  description: 'Find your dream property',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} flex flex-col min-h-screen antialiased`}>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="grow">{children}</main>
        <footer className="mt-12">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
