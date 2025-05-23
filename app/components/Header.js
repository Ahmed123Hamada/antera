'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Define menu items with their corresponding routes
  const menuItems = [
    { name: 'الرئيسية', route: '/' },
    { name: 'نبذة عن القبيلة', route: '/about' },
    { name: 'رزنامة المناسبات', route: '/gallery' },
    { name: 'اتصل بنا', route: '/contact' },
    { name: 'الوفيات', route: '/obituaries' }
  ];

  return (
    <motion.header 
      className="fixed w-full z-50 shadow-sm transition-shadow duration-300 hover:shadow-md from-transparent to-black/70 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ fontFamily: 'HomeScand', backgroundColor: 'var(--background)' }}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg tracking-tight" 
              style={{ fontFamily: 'HomeScandBold2' }}
            >
              سناب قبيلة عنزة الرسمية
            </Link>
            <motion.span 
              className="text-2xl max-md:text-lg" 
              style={{ color: 'var(--primary)' }}
              animate={{ scale: [1, 2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              ♥
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={item.route}
                  className="hover:text-[var(--green)] transition-colors duration-200 font-bold text-lg"
                  style={{ fontFamily: 'HomeScandBold', color: 'var(--primary)' }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            style={{ color: 'var(--primary)' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-6 space-y-4 pb-4"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.route}
                    className="block hover:text-[var(--green)] transition-colors duration-200 font-bold text-lg py-2 px-4 rounded-lg hover:bg-gray-100"
                    style={{ fontFamily: 'HomeScandBold', color: 'var(--primary)' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}