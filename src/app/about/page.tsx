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
              My <span className={styles.italic}>Story</span>
            </motion.h1>
            <motion.div
              className={styles.heroLeadWrapper}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ ...pageTransition, delay: 0.2 }}
            >
              <p className={styles.heroLead}>
                Namaste! I&apos;m Shalu Singh. I help people live happier lives by fixing the energy in their homes and reading the stars. 
                My journey started with a simple wish — to bring peace and good fortune to everyone around me.
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
                <h2 className={styles.sectionTitleLeft}>How It All Began</h2>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3>Learning from the Best</h3>
                    <p>It all started when I earned my Degree in Astrology from the Institute for Research in Indian Wisdom (IRIW), studying under the famous Dr. Pawan Sinha &apos;Guruji&apos;. I completed both Pranav (1st Level) and Prabhakar (2nd Level) with flying colors — scoring 88% in my very first year!</p>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3>Mastering Numerology &amp; More</h3>
                    <p>I then trained under Dr. Rohit Gadkari, one of India&apos;s top numerologists. I completed courses in Advanced Numerology, Name Correction, and Placement — all the tools needed to truly change someone&apos;s life for the better.</p>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3>Helping Hundreds of Families</h3>
                    <p>Over the years, I&apos;ve helped hundreds of clients from all walks of life — doctors, business owners, teachers, and families. My work got noticed by newspapers, and I even wrote a book to share my knowledge with the world. Today, I use everything I&apos;ve learned to bring peace, success, and positivity into people&apos;s homes.</p>
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
              <h2 className={styles.sectionTitle}>Certifications &amp; Training</h2>
              <p className={styles.subtitle}>Real certificates from real teachers — proof of years of hard work and learning.</p>
            </div>
            
            <div className={styles.certGrid}>
              {[
                {
                  year: "2026",
                  title: "Advanced Professional Course in Vastu Energy Science",
                  source: "Dr. Rohit Gadkari (PHD Gold Medalist)",
                  image: "/images/vastu_energy_course_cft.png",
                  description: "Mastery in the science of energy flow and advanced Vastu corrections to harmonize living and working spaces."
                },
                {
                  year: "2026",
                  title: "Advanced Professional Course in Business Numerology",
                  source: "Dr. Rohit Gadkari (PHD Gold Medalist)",
                  image: "/images/business_num_cft.png",
                  description: "Specialized expertise in business name alignment and numerical strategies to foster growth and prosperity."
                },
                {
                  year: "2024",
                  title: "Advanced Wrist Watch Course",
                  source: "Dr. Rohit Gadkari (Ace Numerologist)",
                  image: "/images/cert-0.jpg",
                  description: "Learned how wrist watches connect to your energy and luck."
                },
                {
                  year: "2024",
                  title: "Advance Numerology",
                  source: "2D Consultants / Dr. Rohit Gadkari",
                  image: "/images/cert-3.jpg",
                  description: "A 6-month deep dive into the power of numbers and how they shape your life."
                },
                {
                  year: "2024-25",
                  title: "Degree in Astrology (Prabhakar - 2nd Level)",
                  source: "Institute for Research in Indian Wisdom",
                  image: "/images/cert-5.jpg",
                  description: "Advanced astrology training under the famous Prof. Pawan Sinha Guruji."
                },
                {
                  year: "2023-24",
                  title: "Degree in Astrology (Pranav - 1st Level)",
                  source: "Institute for Research in Indian Wisdom",
                  image: "/images/cert-4.jpg",
                  description: "First level astrology degree — scored 88% marks!"
                },
                {
                  year: "2024",
                  title: "Advance Placement Course",
                  source: "Dr. Rohit Gadkari",
                  image: "/images/cert-2.jpg",
                  description: "Learned how to place objects and furniture for the best energy flow."
                },
                {
                  year: "2024",
                  title: "Advance Name Correction",
                  source: "Dr. Rohit Gadkari",
                  image: "/images/cert-1.jpg",
                  description: "Training in fixing names to attract better luck and energy."
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
                <h2 className={styles.sectionTitleLeft}>In the News &amp; Awards</h2>
                <p className={styles.mediaDescription}>
                  My work has been featured in newspapers and I have received awards for my skills in Numerology and Vastu. These are some of the proudest moments from my journey of helping people.
                </p>
                
                <div className={styles.awardHighlight}>
                  <div className={styles.awardIcon}>🏆</div>
                  <div>
                    <h4>Best Numerologist Award 2024</h4>
                    <p>Given by Dr. Rohit Gadkari for outstanding work and dedication in Numerology.</p>
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



        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div 
              className={styles.ctaContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Transform Your Life?</h2>
              <p>Let&apos;s work together to bring more peace, happiness, and success into your home.</p>
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
