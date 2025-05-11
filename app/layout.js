import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata = {
  title: 'أسناب قبيلة عنزة _الرسمية',
  icons: {
    icon: '/4.icon',
    web: '/4.icon',
     // String path to favicon
    shortcut: '/4.icon', // String path for shortcut icon
    apple: '/4.icon', // String path for Apple Touch icon
  },
  description: 'أسناب قبيلة عنزة الرسمية',
  keywords: 'قبيلة عنزة, سناب شات, عنزة, سناب قبيلة عنزة, سناب شات عنزة, سناب شات الرسمي, سناب شات الرسمي لقبيلة عنزة',
  authors: [{ name: 'أسناب قبيلة عنزة', url: 'https://www.snapchat.com/add/3nza' }],
  creator: 'أسناب قبيلة عنزة',
  openGraph: {
    title: 'أسناب قبيلة عنزة _الرسمية',
    description: 'أسناب قبيلة عنزة الرسمية',
    url: 'https://3nza.com',
    siteName: 'أسناب قبيلة عنزة _الرسمية',
    locale: 'ar-SA',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}