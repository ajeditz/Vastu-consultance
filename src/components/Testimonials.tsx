"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MoonPhases } from "./CelestialDecor";
import styles from "./Testimonials.module.css";
import Image from "next/image";

const testimonialImages = [
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.22 AM (1).jpeg", scramble: { x: -80, y: -30, rotate: -8, scale: 1.05 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.22 AM.jpeg", scramble: { x: 60, y: -50, rotate: 6, scale: 1.1 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.23 AM (1).jpeg", scramble: { x: -40, y: 60, rotate: -10, scale: 1.08 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.23 AM.jpeg", scramble: { x: 90, y: 30, rotate: 5, scale: 1.12 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.24 AM (1).jpeg", scramble: { x: 10, y: -70, rotate: -4, scale: 1.06 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.24 AM (2).jpeg", scramble: { x: -20, y: 80, rotate: 9, scale: 1.03 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.25 AM (1).jpeg", scramble: { x: -100, y: -20, rotate: -6, scale: 1.07 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.25 AM (2).jpeg", scramble: { x: 110, y: -40, rotate: 7, scale: 1.09 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.34.25 AM.jpeg", scramble: { x: -50, y: 40, rotate: -3, scale: 1.04 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.36.04 AM.jpeg", scramble: { x: 70, y: 60, rotate: 8, scale: 1.11 } },
  { src: "/images/testimonials-screenshots/WhatsApp Image 2026-04-01 at 5.37.07 AM.jpeg", scramble: { x: -70, y: -50, rotate: -7, scale: 1.06 } },
];

export default function Testimonials() {
  const [isAligned, setIsAligned] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <MoonPhases />
          <div className={styles.badge} style={{ marginTop: '2rem' }}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>Real Feedback</span>
          </div>
          <h2 className={styles.title}>
            Client <span className={styles.italic}>Voices</span>
          </h2>
          <p className={styles.subtitle}>
            Click anywhere below to see what people feel
          </p>
        </div>

        <div 
          className={styles.testimonialsWrapper}
          onClick={() => setIsAligned(!isAligned)}
        >
          <div className={isAligned ? styles.grid : styles.scrambleContainer}>
            {testimonialImages.map((t, i) => {
              const mobileScramble = {
                x: t.scramble.x * 0.25,
                y: t.scramble.y * 0.25,
                rotate: t.scramble.rotate * 0.5,
                scale: t.scramble.scale
              };

              return (
                <motion.div
                  key={i}
                  initial={isMobile ? mobileScramble : t.scramble}
                  animate={isAligned 
                    ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 } 
                    : (isMobile ? { ...mobileScramble, opacity: 1 } : { ...t.scramble, opacity: 1 })
                  }
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 30,
                    mass: 1,
                    delay: isAligned ? i * 0.02 : 0
                  }}
                  className={styles.imageCard}
                >
                  <Image 
                    src={t.src} 
                    alt={`Client Review ${i + 1}`}
                    width={400}
                    height={400}
                    className={styles.testimonialImg}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
