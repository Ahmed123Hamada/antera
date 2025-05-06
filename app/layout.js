import './globals.css'
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata = {
  title: 'قبيلة عنترة - قاعة أفراح',
  description: 'قاعة أفراح قبيلة عنترة - المكان المثالي لحفل زفافك',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body  >
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
} 
