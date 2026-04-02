"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SriYantra } from "./CelestialDecor";
import styles from "./Services.module.css";

const services = [
  {
    title: "Vedic Numerology",
    description: "Learn how your numbers can help you get more success in life.",
    image: "/images/service-numerology.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 10"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    title: "Name Correction",
    description: "Fix the spelling of your name for better luck and success.",
    image: "/images/service-name.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
  },
  {
    title: "Watch Analysis",
    description: "Check if your watch brings lucky times for you.",
    image: "/images/service-watch.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7"></circle>
        <polyline points="12 9 12 12 14.5 13.5"></polyline>
        <path d="M16 2h-8M16 22h-8M4.5 7h15M4.5 17h15"></path>
      </svg>
    ),
  },
  {
    title: "Business Numerology",
    description: "Pick the right business name and dates to earn more money.",
    image: "/images/service-business.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Vaastu Correction",
    description: "Fix your home's energy without breaking any walls.",
    image: "/images/service-correction.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    title: "Astrology",
    description: "Get advice from the stars to plan your future.",
    image: "/images/service-astrology.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        <path d="M2 12h20M12 2v20"></path>
      </svg>
    ),
  },
  {
    title: "Mobile Numerology",
    description: "Find out if your mobile number brings you good luck and positive energy.",
    image: "/images/service-numerology.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
        <path d="M9 7h6M9 11h6"></path>
      </svg>
    ),
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 6000); // 6 seconds per slide for better readability
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="services" className={styles.services}>
      <SriYantra />
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>Our Expertise</span>
          </div>
          <h2 className={styles.title}>
            Our <span className={styles.italic}>Services</span>
          </h2>
          <p className={styles.subtitle}>
            Blending ancient wisdom with modern living to create spaces that breathe and thrive.
          </p>
        </div>

        <div className={styles.carouselContainer} onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          <div className={styles.carouselWrapper}>
            <AnimatePresence mode="popLayout">
              {services.map((service, index) => {
                // Calculate relative position (-2 to 2)
                let position = index - activeIndex;
                if (position > 2) position -= services.length;
                if (position < -2) position += services.length;

                // Only render the 5 visible cards
                if (Math.abs(position) > 2) return null;

                let zIndex = 1;
                let x = "0%";
                let scale = 0.6;
                let rotateY = 0;
                let opacity = 0;
                let blur = "8px";
                const isActive = position === 0;

                if (isActive) {
                  // Center card (Focus)
                  zIndex = 20;
                  scale = 1;
                  opacity = 1;
                  x = "0%";
                  blur = "0px";
                } else if (position === 1) {
                  // Inner Right
                  zIndex = 10;
                  scale = 0.8;
                  opacity = 0.4;
                  x = "55%";
                  rotateY = -15;
                  blur = "3px";
                } else if (position === -1) {
                  // Inner Left
                  zIndex = 10;
                  scale = 0.8;
                  opacity = 0.4;
                  x = "-55%";
                  rotateY = 15;
                  blur = "3px";
                } else if (position === 2) {
                  // Outer Right
                  zIndex = 5;
                  scale = 0.65;
                  opacity = 0.15;
                  x = "100%";
                  rotateY = -25;
                  blur = "6px";
                } else if (position === -2) {
                  // Outer Left
                  zIndex = 5;
                  scale = 0.65;
                  opacity = 0.15;
                  x = "-100%";
                  rotateY = 25;
                  blur = "6px";
                }

                return (
                  <motion.div
                    key={index}
                    className={styles.card}
                    initial={{ opacity: 0, scale: 0.5, x: position > 0 ? "100%" : "-100%" }}
                    animate={{ 
                      opacity, 
                      scale, 
                      x, 
                      zIndex,
                      rotateY,
                      filter: `blur(${blur})`
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      position: "absolute", 
                      left: "50%", 
                      marginLeft: "-210px", // Half of new width (420/2)
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className={styles.imageOverlay}>
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        style={{ objectFit: 'cover' }}
                        className={styles.cardImage}
                      />
                      <div className={styles.gradient}></div>
                    </div>
                    <motion.div 
                      className={styles.cardContent}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={styles.iconWrapper}>{service.icon}</div>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>{service.description}</p>
                    </motion.div>
                    <div className={styles.hoverLine}></div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous service">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <div className={styles.dots}>
              {services.map((_, i) => (
                <div 
                  key={i} 
                  className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
                  onClick={() => handleCardClick(i)}
                ></div>
              ))}
            </div>
            <button className={styles.navBtn} onClick={nextSlide} aria-label="Next service">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
