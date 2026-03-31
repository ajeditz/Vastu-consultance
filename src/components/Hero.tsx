"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import RashiWheel from "./RashiWheel";

export default function Hero() {
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
