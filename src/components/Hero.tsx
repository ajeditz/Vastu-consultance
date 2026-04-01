"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import RashiWheel from "./RashiWheel";

const TIPS = [
  "A clean and open center invites positive energy and harmony into your home.",
  "Place a small water fountain in the North to attract wealth and career growth.",
  "Avoid placing mirrors directly in front of your bed for a restful sleep.",
  "Position your kitchen in the South-East corner to balance the fire element.",
  "Keep your main entrance bright and well-lit to welcome divine blessings."
];

export default function Hero() {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % TIPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`${styles.hero} vastu-grid`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>
            <div className={styles.line}></div>
            <span className={styles.badgeText}>Simple Vastu for Happy Homes</span>
          </div>

          <div className={styles.headlineContainer}>
            <img 
              src="/logo2.png" 
              alt="Healing Consultancy - Vastu & Astrology" 
              className={styles.headlineLogo}
            />
          </div>

          <p className={styles.description}>
            Helping you bring peace, happiness, and money to your home with Vastu.
          </p>

          <div className={styles.actions}>
            <Link href="/#contact" className={styles.primaryBtn}>
              Get Started
            </Link>
            <Link href="/#services" className={styles.secondaryBtn}>
              <span>See Services</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          <div className={styles.proTip}>
            <span className={styles.proTipLabel}>💡 Vastu Tip</span>
            <p className={styles.proTipText} key={currentTip}>{TIPS[currentTip]}</p>
          </div>
        </div>
      </div>

      <RashiWheel />

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </main>
  );
}
