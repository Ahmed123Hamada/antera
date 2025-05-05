'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md" style={{ fontFamily: 'Tajawal, Arial, Helvetica, sans-serif' }}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--gold)' }}>
            شباب قبيلة عنترة الرسمية
            </Link>
            <span className="text-2xl" style={{ color: 'var(--gold)' }}>♥</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[var(--green)] transition-colors font-bold">
              الرئيسية
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[var(--green)] transition-colors font-bold">

            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-[var(--green)] transition-colors font-bold">
              زفاف القبيلة            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[var(--green)] transition-colors font-bold">
              اتصل بنا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
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
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[var(--green)] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-[var(--green)] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن  
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-700 hover:text-[var(--green)] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              افرحنا
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-[var(--green)] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
} 