'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Link from 'next/link';
import mage11 from '..//images/1.jpg'; // Ensure this image is in the public/images folder
import mage15 from '..//images/5.jpg'; // Ensure this image is in the public/images folder
import mage4 from '..//images/4.jpg'; // Ensure this image is in the public/images folder
import ads from '..//images/ads.jpg'; // Ensure this image is in the public/images folder
import Image from 'next/image';
function HomeAD() {
  const images = [
    {
      src: mage11,
      alt: 'صورة 1',
      groomName: 'محمد أحمد',
      date: '2025-06-15',
      location: 'جدة',
    },
    {
      src: mage11,
      alt: 'صورة 2',
      groomName: 'خالد عبدالله',
      date: '2025-07-20',
      time: '6:30 م',
      location: 'الرياض',
    },
    {
      src: mage11,
      alt: 'صورة 3',
      groomName: 'عمر سعيد',
      date: '2025-08-10',
      location: 'الدمام',
    },
    {
      src: mage11,
      alt: 'صورة 4',
      groomName: 'يوسف محمود',
      date: '2025-09-05',
      time: '7:30 م',
      location: 'المدينة المنورة',
    },
  ];
  const Ads = [
    {
      src: ads,
      alt: 'صورة 1',
    },
    {
      src: ads,
      alt: 'صورة 2',
    },
    {
      src: ads,
      alt: 'صورة 3',
    },
    {
      src: ads,
      alt: 'صورة 4',
    },
    {
      src: ads,
      alt: 'صورة 5',
    },
    {
      src: ads,
      alt: 'صورة 6',
    },
    {
      src: ads,
      alt: 'صورة 7',
    },
    {
      src: ads,
      alt: 'صورة 8',
    },
  ];

  // Rest of the animation logic remains the same
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

  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    const observers = [];
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

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [heroControls, featuresTitleControls, featuresControls, galleryTitleControls, galleryControls]);

  return (
    <section>
      {/* Hero Section (update hero image similarly if needed) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={mage15} // Move hero image to public/images/
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
          className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full flex justify-between items-center gap-6 max-md:flex-col max-md:gap-10 max-md:h-[70vh] "
        >
          <div className="w-full " >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg" style={{ fontFamily: 'Home' }}>
            <div className="text-" style={{ fontFamily: 'Home',color: 'var(--section-bg)' }}>
            رزمانة مناسبات
              </div>
              سناب قبيلة عنزة الرسمية  
          </h1>
          <p className="text-xl md:text-3xl mb-10 font-light" style={{ fontFamily: 'Home' }}>
            المكان المثالي لحفل زفافك
          </p>      
          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-black font-semibold rounded-full hover:bg-primary hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <span className="relative z-10" >احجز موعدك الآن</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
          </Link>                
          </div>


      {/* Hidden SVG with clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="differentone24" clipPathUnits="objectBoundingBox">
            <path
              d="M0.773542 0.613333L1 0.5L0.773542 0.386667L0.853542 0.146458L0.613333 0.226458L0.5 0L0.386667 0.226458L0.146458 0.146458L0.226458 0.386667L0 0.5L0.226458 0.613333L0.146458 0.853542L0.386667 0.773542L0.5 1L0.613333 0.773542L0.853542 0.853542L0.773542 0.613333Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      
      {/* Image with clip path applied */}
      <figure style={{ clipPath: 'url(#differentone24)' }} className="">
        <Image
          src={mage4}
          alt="Description"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>


        </motion.div>

      </section>
            {/* Swiper Section for Wedding Announcements */}
      <section className="py-16" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10" style={{ color: 'var(--primary)', fontFamily: 'HomeScandBold' }}>
            إعلانات  تجارية
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {Ads.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      priority
                    />
                  </div>
                  {/* <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)', fontFamily: 'HomeScandBold' }}>
                    <span className="font-semibold" style={{ fontFamily: 'Home', color: 'white' }}>
                      اسم المعرس:
                    </span>{' '}
                    {image.groomName}
                  </h3>
                  <p className="text-lg mb-1" style={{ color: 'var(--text)' }}>
                    <span className="font-semibold">التاريخ:</span> {image.date}
                  </p>
                  <p className="text-lg" style={{ color: 'var(--text)' }}>
                    <span className="font-semibold">المدة:</span> {image.timeRange}
                  </p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Home' }}>
              مميزات أفراح شباب قبيلة عنزة الرسمية
            </h2>
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
      <div className=" w-full  p-6 flex flex-col items-center  gap-6">
        <motion.h2
          ref={galleryTitleRef}
          initial={animationVariants.initial}
          animate={galleryTitleControls}
          className="text-4xl font-bold text-center py-10"
          style={{ color: 'var(--primary)', fontFamily: 'Home' }}
        >
          صور افراح شباب قبيلة عنزة الرسمية
        </motion.h2>
        <span className="block w-24 h-1 mx-auto my-4 bg-black"></span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-12  ">
          {images.map((image, index) => (
            <motion.div
              key={index}
              ref={galleryRefs[index]}
              initial={animationVariants.initial}
              animate={galleryControls[index]}
              className="w-full"
            >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Wedding Details */}
                  <div
                    className="w-full sm:w-1/2 p-12 flex flex-col gap-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
                    style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  >
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)', fontFamily: 'HomeScandBold' }}>
                     <span
                      className=' font-semibold'
                     style={{fontFamily:"Home", color:"var(--text)"}}> اسم المعرس </span>
                       <span className="font-semibold" style={{ color: 'var(--text)' }}> {index + 1}:{image.groomName}  </span>
                    </h3>
                    <p className="text-lg mb-2" style={{ color: 'var(--text)' }}>
                      <span className="font-semibold">التاريخ:</span> {image.date}
                    </p>

                    <p className="text-lg" style={{ color: 'var(--text)' }}>
                      <span className="font-semibold">العنوان:</span> {image.location}
                    </p>
                  </div>
                  {/* Image */}
                  <div className="relative w-full sm:w-1/2 h-80 flex items-center  rounded-2xl overflow-hidden group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      
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
    </section>
  );
}

export default HomeAD;