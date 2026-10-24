import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PaletteSwitcher from '@/components/PaletteSwitcher';
import SmoothScroll from '@/components/SmoothScroll';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Star Eggs | Wholesale Fresh White Egg Supplier (Telangana & Maharashtra)',
  description:
    'Star Eggs is the premier wholesale fresh white egg supplier and distributor serving Telangana (Adilabad, Hyderabad, Warangal) and Maharashtra (Nagpur, Akola, Yavatmal, Arni, Vani). Grade-A white eggs, commercial 30-egg pulp trays, and wholesale master crates delivered daily.',
  keywords: [
    'Star Eggs',
    'wholesale eggs Adilabad',
    'egg distributor Telangana',
    'egg supplier Nagpur',
    'egg wholesale Akola',
    'egg distributor Yavatmal',
    'egg supplier Arni',
    'egg supplier Vani Wani',
    'fresh white eggs supplier',
    'commercial egg crates',
    'egg wholesale price Hyderabad',
  ],
  authors: [{ name: 'Star Eggs' }],
  creator: 'Star Eggs',
  publisher: 'Star Eggs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stareggs.in'),
  openGraph: {
    title: 'Star Eggs | Wholesale Fresh White Egg Supplier',
    description:
      'Freshness, Delivered. Dedicated wholesale and retail white egg supply across Telangana, Nagpur, Akola, Yavatmal, Arni, and Vani.',
    url: 'https://stareggs.in',
    siteName: 'Star Eggs',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/white-eggs.jpg',
        width: 1200,
        height: 630,
        alt: 'Star Eggs — Premium White Egg Supply',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Eggs | Wholesale Fresh White Egg Supplier',
    description:
      'Freshness, Delivered. Dedicated wholesale white egg supply across Telangana and Maharashtra corridors.',
    images: ['/images/white-eggs.jpg'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-brand-cream text-brand-charcoal antialiased selection:bg-brand-beige selection:text-brand-navy min-h-screen flex flex-col transition-colors duration-300">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full overflow-hidden">
            {children}
          </main>
          <Footer />
          {/* Floating multi-palette preview dock across all pages */}
          <PaletteSwitcher />
        </SmoothScroll>
      </body>
    </html>
  );
}
