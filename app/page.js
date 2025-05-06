"use client";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import hero from './images/1.jpg';
import gallery1 from './images/1.jpg';
import gallery2 from './images/1.jpg';
import gallery3 from './images/1.jpg';
import gallery4 from './images/2.jpg';
import Link from 'next/link';
import Contact from './contact/page';

function handleImageClick(src) {
  console.log('Image clicked:', src);
}

export default function Home() {
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
      src: gallery2,
      alt: 'صورة 2',
      groomName: 'خالد عبدالله',
      date: '2025-07-20',
      time: '6:30 م',
      timeRange: 'من 6:30 م إلى 11:30 م',
    },
    {
      src: gallery3,
      alt: 'صورة 3',
      groomName: 'عمر سعيد',
      date: '2025-08-10',
      time: '8:00 م',
      timeRange: 'من 8:00 م إلى 1:00 ص',
    },
    {
      src: gallery4,
      alt: 'صورة 4',
      groomName: 'يوسف محمود',
      date: '2025-09-05',
      time: '7:30 م',
      timeRange: 'من 7:30 م إلى 12:30 ص',
    },
  ];

  // Animation controls and refs for each section
  const heroControls = useAnimation();
  const heroRef = useRef(null);
  const featuresTitleControls = useAnimation();
  const featuresTitleRef = useRef(null);
  const featuresControls = Array(3)
    .fill()
    .map(() => useAnimation());
  const featuresRefs = Array(3)
    .fill()
    .map(() => useRef(null));
  const galleryTitleControls = useAnimation();
  const galleryTitleRef = useRef(null);
  const galleryControls = Array(images.length)
    .fill()
    .map(() => useAnimation());
  const galleryRefs = Array(images.length)
    .fill()
    .map(() => useRef(null));

  // Animation configuration
  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Set up Intersection Observers for animations
  useEffect(() => {
    const observers = [];

    // Hero section
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroControls.start(animationVariants.animate);
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);
    observers.push(heroObserver);

    // Features title
    const featuresTitleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          featuresTitleControls.start(animationVariants.animate);
        }
      },
      { threshold: 0.1 }
    );
    if (featuresTitleRef.current) featuresTitleObserver.observe(featuresTitleRef.current);
    observers.push(featuresTitleObserver);

    // Features items
    featuresRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            featuresControls[index].start(animationVariants.animate);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      observers.push(observer);
    });

    // Gallery title
    const galleryTitleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          galleryTitleControls.start(animationVariants.animate);
        }
      },
      { threshold: 0.1 }
    );
    if (galleryTitleRef.current) galleryTitleObserver.observe(galleryTitleRef.current);
    observers.push(galleryTitleObserver);

    // Gallery items
    galleryRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            galleryControls[index].start(animationVariants.animate);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      observers.push(observer);
    });

    // Cleanup observers
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [heroControls, featuresTitleControls, featuresControls, galleryTitleControls, galleryControls]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="قاعة أفراح شباب قبيلة عنترة الرسمية"
            fill
            className="object-cover transform scale-110 transition-transform duration-1000 hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 backdrop-blur-sm"></div>
        </div>
        <motion.div
          ref={heroRef}
          initial={animationVariants.initial}
          animate={heroControls}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            أفراح شباب قبيلة عنزة  الرسمية
          </h1>
          <p className="text-xl md:text-3xl mb-10 font-light">
            المكان المثالي لحفل زفافك
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-black font-semibold rounded-full 
                     hover:bg-primary hover:-translate-y-0.5 transition-all duration-300
                     relative overflow-hidden group"
            style={{
              backgroundColor: 'var(--primary)',
            }}
          >
            <span className="relative z-10">احجز موعدك الآن</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="container mx-auto px-6">
          <motion.div
            ref={featuresTitleRef}
            initial={animationVariants.initial}
            animate={featuresTitleControls}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">مميزات أفراح شباب قبيلة عنزة  الرسمية</h2>
            <span className="block w-24 h-1 mx-auto my-4 bg-black"></span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎉', title: 'مساحة واسعة', description: 'قاعة فسيحة تتسع لأعداد كبيرة من الضيوف' },
              { icon: '✨', title: 'تصميم عصري', description: 'ديكورات عصرية وأنيقة تناسب جميع الأذواق' },
              { icon: '🎵', title: 'خدمات متكاملة', description: 'خدمات متكاملة تشمل التصوير والضيافة' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                ref={featuresRefs[index]}
                initial={animationVariants.initial}
                animate={featuresControls[index]}
                className="p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <div className="container mx-auto px-6 flex flex-col items-center py-24 gap-6">
        <motion.h2
          ref={galleryTitleRef}
          initial={animationVariants.initial}
          animate={galleryTitleControls}
          className="text-4xl font-bold text-center mb-6"
          style={{ color: 'var(--primary)' }}
        >
          صور افراح شباب قبيلة عنزة الرسمية
        </motion.h2>
        <span className="block w-24 h-1 mx-auto my-4 bg-black"></span>
        <div className="grid grid-cols-1 sm:grid-12 md:grid-cols- gap-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              ref={galleryRefs[index]}
              initial={animationVariants.initial}
              animate={galleryControls[index]}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Wedding Details */}
                <div
                  className="w-full sm:w-1/2 p-12 flex flex-col gap-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                    فرح {image.groomName}
                  </h3>
                  <p className="text-lg mb-2" style={{ color: 'var(--text)' }}>
                    <span className="font-semibold">التاريخ:</span> {image.date}
                  </p>
                  <p className="text-lg mb-2" style={{ color: 'var(--text)' }}>
                    <span className="font-semibold">الوقت:</span> {image.time}
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
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors font-semibold"
                      style={{ border: '1px solid var(--primary)' }}
                      onClick={() => handleImageClick(image.src)}
                    >
                      عرض الصورة
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Link
          href="/gallery"
          className="inline-block px-10 py-4 text-black font-semibold rounded-full 
                   hover:bg-primary hover:-translate-y-0.5 transition-all duration-300
                   relative overflow-hidden group"
          style={{
            backgroundColor: 'var(--primary)',
          }}
        >
          <span className="relative z-10">عرض المزيد</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
        </Link>
      </div>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}