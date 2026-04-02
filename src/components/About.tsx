import Image from "next/image";
import Link from "next/link";
import { SolarSpirit } from "./CelestialDecor";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <SolarSpirit />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageSide}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/profile_pic.jpeg" 
                  alt="Shalu Singh - Professional Vastu Energy Science Expert" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  className={styles.image}
                />
                <div className={styles.experienceBadge}>
                  <span className={styles.years}>5+</span>
                  <span className={styles.expText}>Years of Experience</span>
                </div>
              </div>
              <div className={styles.imageBg}></div>
            </div>
            <div className={styles.expertInfo}>
              <h3 className={styles.expertName}>Shalu Singh</h3>
              <p className={styles.expertTitle}>Vastu Energy Science Expert</p>
            </div>
          </div>

          <div className={styles.contentSide}>
            <div className={styles.badge}>
              <div className={styles.line}></div>
              <span className={styles.badgeText}>Our Experience</span>
            </div>
            <h2 className={styles.title}>
              Transform Your Home with Proven Vastu Expertise
            </h2>
            <p className={styles.description}>
              Your home influences your energy, success, and peace of mind. With over 5 years of experience, we help homeowners create balanced and harmonious living spaces using authentic Vastu principles.
            </p>
            <p className={styles.description}>
              Our approach is simple—we identify energy imbalances and provide practical solutions that bring clarity, positivity, and growth into your life
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Success Stories</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12</span>
                <span className={styles.statLabel}>Awards Won</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </div>

            <Link href="/about" className={styles.cta}>Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
