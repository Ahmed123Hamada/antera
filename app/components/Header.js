
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

  return (
    <motion.header 
      className="fixed w-full  bg-white/95 backdrop-blur-md z-50 shadow-sm transition-shadow duration-300 hover:shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ fontFamily: 'HomeScandBold' }}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg     tracking-tight" 
              style={{ fontFamily: 'HomeScandBold',  }}
            >
              شباب قبيلة عنزة الرسمية
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
            {['الرئيسية', 'من نحن', 'زفاف القبيلة', 'اتصل بنا'].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={item === 'الرئيسية' ? '/' : `/${item === 'من نحن' ? 'about' : item === 'زفاف القبيلة' ? 'gallery' : 'contact'}`}
                  className="text-gray-800 hover:text-[var(--green)] transition-colors duration-200 font-bold text-lg"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-800"
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
              {['الرئيسية', 'من نحن', 'افرحنا', 'اتصل بنا'].map((item, index) => (
                <motion.div
                  key={item}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item === 'الرئيسية' ? '/' : `/${item === 'من نحن' ? 'about' : item === 'افرحنا' ? 'gallery' : 'contact'}`}
                    className="block text-gray-800 hover:text-[var(--green)] transition-colors duration-200 font-bold text-lg py-2 px-4 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
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