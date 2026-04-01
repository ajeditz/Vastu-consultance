"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import GridLines from "@/components/GridLines";
import RashiWheel from "@/components/RashiWheel";
import styles from "./about-page.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const pageTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Removed unused y1, y2

  return (
    <div className={styles.pageWrapper} ref={containerRef}>
      <GridLines />
      <Navbar />
      
      <div className={styles.heroWheelWrapper}>
        <RashiWheel />
      </div>

      <Link href="/" className={styles.backBtn}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </Link>

      <main>
        {/* Intro Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <motion.h1 
              className={styles.heroTitle}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={pageTransition}
            >
              My <span className={styles.italic}>Roots</span>
            </motion.h1>
            <motion.div
              className={styles.heroLeadWrapper}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ ...pageTransition, delay: 0.2 }}
            >
              <p className={styles.heroLead}>
                Namaste. I am an Astro-Vastu consultant dedicated to decoding the cosmic blueprint of your life. 
                My path has been paved through deep spiritual immersion and learning from the ancient wisdom of India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Education & Journey Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.journeyGrid}>
              <motion.div 
                className={styles.journeyImageContainer}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
              >
                <div className={styles.journeyImageWrapper}>
                  <Image 
                    src="/images/expert-graduation-final.png" 
                    alt="Spiritual Journey" 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  <div className={styles.glassBadge}>
                    <span>5+ Years</span>
                    <small>of Vedic Studies</small>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={styles.journeyText}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
              >
                <h2 className={styles.sectionTitleLeft}>The Foundation of Knowledge</h2>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3>Early Gurukul Education</h3>
                    <p>My journey began in the sacred temples of Varanasi, where I spent my formative years studying ancient Vedas, Upanishads, and Jyotish Shastras under the strict guidance of esteemed Gurus.</p>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3>Institute of Vedic Astrology</h3>
                    <p>I pursued formal education to blend traditional wisdom with scientific methodology. I mastered the art of calculating planetary alignments and their profound impacts on human destiny.</p>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3>Vastu Vidya Specialization</h3>
                    <p>To understand the spiritual science of spaces, I trained at the Institute of Classical Architecture & Vastu, learning how to harmonize the five elements (Panchamahabhuta) for prosperity and peace.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications & Expertise */}
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.certHeader}>
              <h2 className={styles.sectionTitle}>Certifications & Masteries</h2>
              <p className={styles.subtitle}>Recognized accreditations from prestigious institutions that validate my expertise.</p>
            </div>
            
            <div className={styles.certGrid}>
              {[
                {
                  year: "2024",
                  title: "Advanced Wrist Watch Course",
                  source: "Dr. Rohit Gadkari (Ace Numerologist)",
                  image: "/images/cert-0.jpg",
                  description: "Specialized training in understanding the cosmic footprint of timepieces."
                },
                {
                  year: "2024",
                  title: "Advance Numerology",
                  source: "2D Consultants / Dr. Rohit Gadkari",
                  image: "/images/cert-3.jpg",
                  description: "Comprehensive 6-month accreditation in the science of numbers."
                },
                {
                  year: "2024-25",
                  title: "Diploma in Astrology (Prabhakar - 2nd Level)",
                  source: "Institute for Research in Indian Wisdom",
                  image: "/images/cert-5.jpg",
                  description: "Advanced level Jyotish studies under Prof. Pawan Sinha 'Guruji'."
                },
                {
                  year: "2023-24",
                  title: "Diploma in Astrology (Pranav - 1st Level)",
                  source: "Institute for Research in Indian Wisdom",
                  image: "/images/cert-4.jpg",
                  description: "Foundational astrological training with distinction marks."
                },
                {
                  year: "2024",
                  title: "Advance Placement Course",
                  source: "Dr. Rohit Gadkari",
                  image: "/images/cert-2.jpg",
                  description: "Expertise in spatial and energetic placement strategies."
                },
                {
                  year: "2024",
                  title: "Advance Name Correction",
                  source: "Dr. Rohit Gadkari",
                  image: "/images/cert-1.jpg",
                  description: "Specialized training in Vedic Name Correction techniques."
                }
              ].map((cert, i) => (
                <motion.div 
                  key={i}
                  className={styles.certCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{ padding: "1.5rem", overflow: "hidden" }}
                >
                  <div style={{ position: "relative", width: "100%", height: "200px", marginBottom: "1.5rem", borderRadius: "1rem", overflow: "hidden" }}>
                    <Image src={cert.image} alt={cert.title} fill style={{ objectFit: "contain", backgroundColor: "#f9f9f9" }} />
                  </div>
                  <span className={styles.certYear}>{cert.year}</span>
                  <h4 style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>{cert.title}</h4>
                  <p style={{ fontWeight: 600, color: "var(--accent-orange)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>{cert.source}</p>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Features & Awards */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.mediaGrid}>
              <motion.div 
                className={styles.mediaContent}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.badge}>
                  <div className={styles.line}></div>
                  <span className={styles.badgeText}>Recognition</span>
                </div>
                <h2 className={styles.sectionTitleLeft}>Media Features & Prestigious Awards</h2>
                <p className={styles.mediaDescription}>
                  Our commitment to authentic Vedic wisdom has been recognized by national media and esteemed institutions. From being featured in leading Hindi publications to receiving accolades for excellence in Numerology and Vastu, these milestones validate our journey of transforming lives.
                </p>
                
                <div className={styles.awardHighlight}>
                  <div className={styles.awardIcon}>🏆</div>
                  <div>
                    <h4>Best Numerologist Award 2024</h4>
                    <p>Presented by Dr. Rohit Gadkari for exceptional performance and dedication in Advanced Numerology studies.</p>
                  </div>
                </div>
              </motion.div>

              <div className={styles.mediaImages}>
                <motion.div 
                  className={styles.pressImageWrapper}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Image 
                    src="/images/press-feature.png" 
                    alt="News Feature" 
                    fill 
                    style={{ objectFit: 'contain' }}
                    className={styles.roundedImage}
                  />
                </motion.div>
                <motion.div 
                  className={styles.awardImageWrapper}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image 
                    src="/images/graduation-award.png" 
                    alt="Graduation Ceremony" 
                    fill 
                    style={{ objectFit: 'contain', backgroundColor: '#fdfdfd' }}
                    className={styles.roundedImage}
                  />
                  <div className={styles.awardBadge}>Convocation 2024</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Beautiful Gallery Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.galleryHeader}>
              <h2 className={styles.sectionTitle}>Moments & Memories</h2>
              <p className={styles.subtitle}>A glimpse into seminars, consultations, and the sacred spaces we&apos;ve transformed.</p>
            </div>

            <div className={styles.galleryGrid}>
              {[
                { src: "/images/gallery-1.png", title: "Vedic Seminars", size: "large" },
                { src: "/images/gallery-2.png", title: "Temple Blessings", size: "small" },
                { src: "/images/gallery-3.png", title: "Client Consultations", size: "small" },
                { src: "/images/gallery-4.png", title: "Vastu Corrections", size: "wide" },
                { src: "/images/service-astrology.png", title: "Birth Chart Reading", size: "small" },
                { src: "/images/service-vastu.png", title: "Space Harmonization", size: "small" },
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  className={`${styles.galleryItem} ${styles[img.size]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                >
                  {/* Using standard img or a background for fallback if image doesn't exist to prevent crash */}
                  <div className={styles.galleryImgWrapper}>
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                      onError={(e) => {
                        // Fallback logic if image doesn't exist
                        e.currentTarget.src = "/images/gallery-1.png"; 
                      }}
                    />
                  </div>
                  <div className={styles.galleryOverlay}>
                    <h3>{img.title}</h3>
                    <span className={styles.galleryIcon}>+</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div 
              className={styles.ctaContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Ready to change your stars?</h2>
              <p>Book a consultation today and unlock the fortune meant for you.</p>
              <Link href="/#contact" className={styles.bookBtn}>
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className="brand-font">Cosmic<span className="text-accent">.</span>Path</p>
        <p className={styles.copyright}>© 2026 Jyotish & Vastu Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
