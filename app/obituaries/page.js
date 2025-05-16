'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Obituaries() {
  // Corrected obituary data with unique IDs
  const obituaries = [
    {
      id: 1,
      name: 'محمد بن عبدالله العنزي',
      date: '١٤٤٧/١٠/١٥ هـ',
      description: 'توفي يوم الخميس، نسأل الله له الرحمة والمغفرة.'
    },
    {
      id: 2,
      name: 'فاطمة بنت خالد ',
      date: '١٤٤٧/١٠/١٠ هـ',
      description: 'توفيت يوم السبت، اللهم اغفر لها وارحمها.'
    },
    {
      id: 3,
      name: 'عبدالرحمن بن صالح ',
      date: '١٤٤٧/١٠/٠٥ هـ',
      description: 'توفي يوم الإثنين، نسأل الله أن يتغمده بواسع رحمته.'
    },
    {
      id: 4,
      name: 'محمد بن عبدالله ',
      date: '١٤٤٧/١٠/١٥ هـ',
      description: 'توفي يوم الخميس، نسأل الله له الرحمة والمغفرة.'
    },
    {
      id: 5,
      name: 'فاطمة بنت خالد ',
      date: '١٤٤٧/١٠/١٠ هـ',
      description: 'توفيت يوم السبت، اللهم اغفر لها وارحمها.'
    },
    {
      id: 6,
      name: 'عبدالرحمن بن صالح ',
      date: '١٤٤٧/١٠/٠٥ هـ',
      description: 'توفي يوم الإثنين، نسأل الله أن يتغمده بواسع رحمته.'
    },
    {
      id: 7,
      name: 'محمد بن عبدالله ',
      date: '١٤٤٧/١٠/١٥ هـ',
      description: 'توفي يوم الخميس، نسأل الله له الرحمة والمغفرة.'
    },
    {
      id: 8,
      name: 'فاطمة بنت خالد ',
      date: '١٤٤٧/١٠/١٠ هـ',
      description: 'توفيت يوم السبت، اللهم اغفر لها وارحمها.'
    },
    {
      id: 9,
      name: 'عبدالرحمن بن صالح ',
      date: '١٤٤٧/١٠/٠٥ هـ',
      description: 'توفي يوم الإثنين، نسأل الله أن يتغمده بواسع رحمته.'
    },
    {
      id: 10,
      name: 'محمد بن عبدالله العنزي',
      date: '١٤٤٧/١٠/١٥ هـ',
      description: 'توفي يوم الخميس، نسأل الله له الرحمة والمغفرة.'
    },
    {
      id: 11,
      name: 'فاطمة بنت خالد العنزي',
      date: '١٤٤٧/١٠/١٠ هـ',
      description: 'توفيت يوم السبت، اللهم اغفر لها وارحمها.'
    },
    {
      id: 12,
      name: 'عبدالرحمن بن صالح ',
      date: '١٤٤٧/١٠/٠٥ هـ',
      description: 'توفي يوم الإثنين، نسأل الله أن يتغمده بواسع رحمته.'
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Matches grid layout (3 columns on large screens)

  // Calculate total pages and current items
  const totalPages = Math.ceil(obituaries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = obituaries.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div 
      className="min-h-screen pt-28 py-10 bg-cover bg-center" 
      style={{ 
        backgroundColor: 'var(--background)', 
        fontFamily: 'HomeScand',
        color: 'var(--text)'
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'HomeScandBold', color: 'var(--primary)' }}
          >
            الوفيات
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text)' }}
          >
            نسأل الله الرحمة والمغفرة لجميع موتانا
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentItems.map((obituary) => (
            <motion.div
              key={obituary.id}
              variants={itemVariants}
              className="p-6 rounded-xl border transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <h2
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'HomeScandBold', color: 'var(--primary)' }}
              >
                {obituary.name}
              </h2>
              <p
                className="text-sm mb-3"
                style={{ color: 'var(--text)' }}
              >
                تاريخ الوفاة: {obituary.date}
              </p>
              <p
                className="text-base mb-4"
                style={{ color: 'var(--text)' }}
              >
                {obituary.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/obituaries/${obituary.id}`}
                  className="inline-block text-sm font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                  style={{ 
                    fontFamily: 'HomeScandBold', 
                    color: 'var(--card-bg)',
                    backgroundColor: 'var(--primary)',
                    border: '1px solid var(--gold)'
                  }}
                >
                  اقرأ المزيد
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            {/* Previous Button */}
            <motion.button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                fontFamily: 'HomeScandBold',
                backgroundColor: currentPage === 1 ? 'var(--card-border)' : 'var(--primary)',
                color: 'var(--card-bg)',
                border: '1px solid var(--gold)'
              }}
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
            >
              السابق
            </motion.button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className="px-4 py-2 rounded-lg font-bold text-sm"
                  style={{ 
                    fontFamily: 'HomeScandBold',
                    backgroundColor: currentPage === page ? 'var(--primary)' : 'var(--card-bg)',
                    color: currentPage === page ? 'var(--card-bg)' : 'var(--text)',
                    border: '1px solid var(--gold)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                fontFamily: 'HomeScandBold',
                backgroundColor: currentPage === totalPages ? 'var(--card-border)' : 'var(--primary)',
                color: 'var(--card-bg)',
                border: '1px solid var(--gold)'
              }}
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
            >
              التالي
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}