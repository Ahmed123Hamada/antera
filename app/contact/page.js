"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  // Animation controls and refs for each animated element
  const titleControls = useAnimation();
  const titleRef = useRef(null);
  const descriptionControls = useAnimation();
  const descriptionRef = useRef(null);
  const contactInfoControls = useAnimation();
  const contactInfoRef = useRef(null);
  const formControls = useAnimation();
  const formRef = useRef(null);

  // Animation configuration
  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Set up Intersection Observers for animations
  useEffect(() => {
    const observers = [];

    // Title
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleControls.start(animationVariants.animate);
        }
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) titleObserver.observe(titleRef.current);
    observers.push(titleObserver);

    // Description
    const descriptionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          descriptionControls.start(animationVariants.animate);
        }
      },
      { threshold: 0.1 }
    );
    if (descriptionRef.current) descriptionObserver.observe(descriptionRef.current);
    observers.push(descriptionObserver);

    // Contact Information
    const contactInfoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactInfoControls.start(animationVariants.animate);
        }
      },
      { threshold: 0.1 }
    );
    if (contactInfoRef.current) contactInfoObserver.observe(contactInfoRef.current);
    observers.push(contactInfoObserver);

    // Contact Form
    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formControls.start(animationVariants.animate);
        }
      },
      { threshold: 0.1 }
    );
    if (formRef.current) formObserver.observe(formRef.current);
    observers.push(formObserver);

    // Cleanup observers
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [titleControls, descriptionControls, contactInfoControls, formControls]);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--section-bg)', }}>
      <div className="max-w-6xl mx-auto">
        <motion.div ref={titleRef} initial={animationVariants.initial} animate={titleControls}>
          <h2
            className="text-4xl sm:text-5xl text-center mb-12 font-bold tracking-tight"
            style={{ color: 'var(--primary)',fontFamily: 'Home', fontWeight: 'bold' }}
          >
            تواصل معنا
          </h2>
          <span className="block w-24 h-1 mx-auto my-4 bg-black"></span>
        </motion.div>
        <motion.div
          ref={descriptionRef}
          initial={animationVariants.initial}
          animate={descriptionControls}
        >
          <p
            className="text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed"
            style={{ color: 'var(--text)',fontFamily: 'Home' }}
          >
            نحن هنا لمساعدتك في تنظيم مناسبتك الخاصة. تواصل معنا للحصول على مزيد من المعلومات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={contactInfoRef}
            initial={animationVariants.initial}
            animate={contactInfoControls}
            className="p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--primary)',fontFamily: 'Home' }}>
              معلومات التواصل
            </h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <FaPhone
                  className="ml-4 text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: 'var(--primary)' }}
                />
                <span style={{ color: 'var(--text)' }}>+966 12 345 6789</span>
              </div>
              <div className="flex items-center group">
                <FaEnvelope
                  className="ml-4 text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: 'var(--primary)' }}
                />
                <span style={{ color: 'var(--text)' }}>info@qabeela-antara.com</span>
              </div>
              <div className="flex items-center group">
                <FaMapMarkerAlt
                  className="ml-4 text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: 'var(--primary)' }}
                />
                <span style={{ color: 'var(--text)' }}>
                  شارع الملك فهد، جدة، المملكة العربية السعودية
                </span>
              </div>
              <div className="flex items-center group">
                <FaClock
                  className="ml-4 text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: 'var(--primary)' }}
                />
                <span style={{ color: 'var(--text)' }}>
                  كل يوم من 9:00 صباحاً إلى 10:00 مساءً
                </span>
              </div>
              <span className="block w-12 h-1  bg-black"></span>

              {/* Social Media Links */}
              <div className="flex flex-col items-start gap-5 ">

              <span
                className="text-lg font-semibold py-2 px-4 rounded-full inline-block mb-4"
              style={{ color: 'white',backgroundColor: 'var(--card-border)',fontFamily: 'HomeScand' }}>تابعنا على وسائل التواصل الاجتماعي</span>

                <div className=" w-full flex flex-col items-start justify-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform  group-hover:scale-110 flex gap-5 group duration-500 cursor-pointer"
                    style={{ color: 'var(--primary)' }}
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={25} className='group-hover:text-blue-800 duration-500' /> 
                    <span className="ml-2 text-2xl text-primary group-hover:text-blue-800  duration-500">فيسبوك</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 group-hover:scale-110 flex gap-5 group"
                    style={{ color: 'var(--primary)' }}
                    aria-label="Twitter"
                  >
                    <FaTwitter size={25}  className='group-hover:text-blue-400 duration-500' />
                    <span className="ml-2  text-primary text-2xl group-hover:text-blue-400 duration-500">تويتر</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 group-hover:scale-110 flex gap-5 group"
                    style={{ color: 'var(--primary)' }}
                    aria-label="Instagram"
                  >
                    <FaInstagram size={25}   className='group-hover:text-red-500 duration-500' />
                    <span className="ml-2 text-2xl  text-primary group-hover:text-red-500 duration-500">إنستغرام</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={animationVariants.initial}
            animate={formControls}
            className="p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--primary)',fontFamily: 'Home' }}>
              أرسل لنا رسالة
            </h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold" style={{ color: 'var(--text)' }}>
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300"
                  style={{ borderColor: 'var(--card-border)' }}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold" style={{ color: 'var(--text)' }}>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300"
                  style={{ borderColor: 'var(--card-border)' }}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-semibold" style={{ color: 'var(--text)' }}>
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300"
                  style={{ borderColor: 'var(--card-border)' }}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold" style={{ color: 'var(--text)' }}>
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg border-2 bg-white/80 backdrop-bl lour-sm focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300 min-h-[150px] resize-vertical"
                  style={{ borderColor: 'var(--card-border)' }}
                  required
                />
              </div>
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--background)',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontFamily: "HomeScandBold"

                }}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-[var(--primary)]"
                >
                  تم إرسال الرسالة بنجاح!
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}