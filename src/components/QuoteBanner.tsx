"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { SriYantra } from "./CelestialDecor";
import BookingModal from "./BookingModal";
import styles from "./QuoteBanner.module.css";

export default function QuoteBanner() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const particles = useMemo(() => [...Array(20)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.5 + 0.2
  })), []);

  return (
    <section className={styles.banner}>
      {/* Celestial Particles */}
      <div className={styles.celestialBg}>
        {particles.map((p: {left: string, top: string, delay: string, opacity: number}, i: number) => (
          <div key={i} className={styles.particle} style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            opacity: p.opacity
          }}></div>
        ))}
      </div>

      <div className="container">
        <div className={styles.glassContent}>
          {/* Sacred Geometry Background */}
          <div className={styles.mandalaWrapper}>
            <SriYantra />
          </div>

          <div className={styles.textSide}>
            <div className={styles.quoteWrapper}>
              <span className={styles.quoteMark}>&ldquo;</span>
              <blockquote className={styles.quote}>
                A peaceful home filled with positive energy creates happiness, success, and harmony in your life.
              </blockquote>
            </div>

            <div className={styles.ctaGroup}>
              <div className={styles.ctaSubtext}>BOOK YOUR MEETING TODAY</div>
              <button 
                onClick={() => setIsBookingOpen(true)} 
                className={styles.consultBtn}
              >
                Book a Consultation
              </button>
              <div className={styles.socialProof}>
                <span className={styles.dot}></span>
                Trusted by 100+ families
              </div>
            </div>
          </div>
          
          <div className={styles.imageSide}>
            <div className={styles.portraitContainer}>
              <div className={styles.portraitWrapper}>
                <Image 
                  src="/images/profile_pic.jpeg" 
                  alt="Vastu Expert - Shalu Singh" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  className={styles.portrait}
                />
              </div>
              <div className={styles.expertBrief}>
                <h4 className={styles.expertNameInline}>Shalu Singh</h4>
                <p className={styles.expertTitleInline}>Vastu Energy Science Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </section>
  );
}
