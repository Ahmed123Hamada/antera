"use client";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import gallery1 from '../images/1.jpg';

export default function Gallery() {
  const images = [
    {
      src: gallery1,
      alt: 'صورة 1',
      groomName: 'محمد أحمد',
      date: '2025-06-15',
      time: '7:00 م',
      timeRange: 'من 7:00 م إلى 12:00 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 2',
      groomName: 'خالد عبدالله',
      date: '2025-07-20',
      time: '6:30 م',
      timeRange: 'من 6:30 م إلى 11:30 م',
    },
    {
      src: gallery1,
      alt: 'صورة 3',
      groomName: 'عمر سعيد',
      date: '2025-08-10',
      time: '8:00 م',
      timeRange: 'من 8:00 م إلى 1:00 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 4',
      groomName: 'يوسف محمود',
      date: '2025-09-05',
      time: '7:30 م',
      timeRange: 'من 7:30 م إلى 12:30 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 5',
      groomName: 'أحمد فهد',
      date: '2025-10-12',
      time: '6:00 م',
      timeRange: 'من 6:00 م إلى 11:00 م',
    },
    {
      src: gallery1,
      alt: 'صورة 6',
      groomName: 'سامي إبراهيم',
      date: '2025-11-18',
      time: '7:00 م',
      timeRange: 'من 7:00 م إلى 12:00 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 7',
      groomName: 'فهد ناصر',
      date: '2025-12-01',
      time: '8:30 م',
      timeRange: 'من 8:30 م إلى 1:30 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 8',
      groomName: 'علي حسين',
      date: '2026-01-15',
      time: '6:45 م',
      timeRange: 'من 6:45 م إلى 11:45 م',
    },
    {
      src: gallery1,
      alt: 'صورة 9',
      groomName: 'ماجد سعيد',
      date: '2026-02-20',
      time: '7:15 م',
      timeRange: 'من 7:15 م إلى 12:15 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 10',
      groomName: 'راشد عبدالله',
      date: '2026-03-10',
      time: '8:00 م',
      timeRange: 'من 8:00 م إلى 1:00 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 11',
      groomName: 'سعود محمد',
      date: '2026-04-05',
      time: '6:30 م',
      timeRange: 'من 6:30 م إلى 11:30 م',
    },
    {
      src: gallery1,
      alt: 'صورة 12',
      groomName: 'عبدالله خالد',
      date: '2026-05-25',
      time: '7:45 م',
      timeRange: 'من 7:45 م إلى 12:45 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 13',
      groomName: 'تركي فهد',
      date: '2026-06-30',
      time: '8:15 م',
      timeRange: 'من 8:15 م إلى 1:15 ص',
    },
    {
      src: gallery1,
      alt: 'صورة 14',
      groomName: 'ناصر علي',
      date: '2026-07-20',
      time: '6:00 م',
      timeRange: 'من 6:00 م إلى 11:00 م',
    },
    {
      src: gallery1,
      alt: 'صورة 15',
      groomName: 'عبدالعزيز سعيد',
      date: '2026-08-10',
      time: '7:30 م',
      timeRange: 'من 7:30 م إلى 12:30 ص',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Calculate the images to display on the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Create fixed number of refs and animation controls for max images per page
  const refs = Array(imagesPerPage)
    .fill()
    .map(() => useRef(null));
  const controls = Array(imagesPerPage)
    .fill()
    .map(() => useAnimation());

  // Set up Intersection Observer for current page's images
  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && index < currentImages.length) {
            controls[index].start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut' },
            });
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    // Cleanup observers on unmount or page change
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [currentPage, controls, currentImages.length]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <div className="pt-32 text-center px-6">
        <h1
          className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg"
          style={{ color: 'var(--primary)' , fontFamily: 'HomeScandBold' }}
        >
          زفاف شباب قبيلة عنزة الرسمية
        </h1>
        <span className="block w-24 h-1 mx-auto my-4 bg-black"></span>
      </div>
      {/* Gallery Grid */}
      <section className="py-24" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-12">
            {currentImages.map((image, index) => (
              <motion.div
                key={index}
                ref={refs[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={controls[index]}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Wedding Details */}
                  <div
                    className="w-full sm:w-1/2 p-12 flex flex-col gap-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
                    style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  >
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)', fontFamily: 'HomeScandBold' }}>
                     <span
                      className='font-semibold'
                     style={{fontFamily:"Home", color:"white"}}> اسم المعرس </span>
                       {index + 1} - {image.groomName}
                    </h3>
                    <p className="text-lg mb-2" style={{ color: 'var(--text)' }}>
                      <span className="font-semibold">التاريخ:</span> {image.date}
                    </p>

                    <p className="text-lg" style={{ color: 'var(--text)' }}>
                      <span className="font-semibold">المدة:</span> {image.timeRange}
                    </p>
                  </div>
                  {/* Image */}
                  <div className="relative w-full sm:w-1/2 h-80 rounded-2xl overflow-hidden group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors font-semibold"
                        style={{ border: '1px solid var(--primary)' }}
                      >
                        عرض الصورة
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
                }`}
              >
                السابق
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-[var(--primary)] text-white'
                      : 'bg-[var(--card-bg)] text-[var(--text)] hover:bg-[var(--primary)] hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
                }`}
              >
                التالي
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}