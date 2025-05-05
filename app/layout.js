import { Inter } from 'next/font/google'
import './globals.css'
import { Cairo } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700'] });



export const metadata = {
  title: 'قبيلة عنترة - قاعة أفراح',
  description: 'قاعة أفراح قبيلة عنترة - المكان المثالي لحفل زفافك',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className + ' ' + cairo.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
} 
const inter = Inter({ subsets: ['latin'] })