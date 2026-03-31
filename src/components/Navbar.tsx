"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BookingModal from "./BookingModal";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Smooth scroll to a section by ID, works from any page
  const handleNavClick = (
    e: React.MouseEvent,
    sectionId?: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const scrollToSection = () => {
      if (!sectionId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 70; // offset for fixed navbar
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (window.location.pathname !== "/") {
      // Navigate to home first, then scroll after page loads
      router.push("/");
      setTimeout(scrollToSection, 600);
    } else {
      scrollToSection();
    }
  };

  return (
    <>
      <nav className={`${styles.nav} ${isOpen ? styles.openNav : ""}`}>
        <Link
          href="/"
          className={styles.logo}
          onClick={(e) => handleNavClick(e)}
        >
          <img 
            src="/amethyst-Photoroom.svg" 
            alt="Healing Logo" 
            className={styles.logoImage}
          />
        </Link>

        <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          <button
            className={styles.mobileClose}
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <a href="/" className={styles.link} onClick={(e) => handleNavClick(e)}>Home</a>
          <a href="/#services" className={styles.link} onClick={(e) => handleNavClick(e, "services")}>Services</a>
          <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link>
          <a href="/#testimonials" className={styles.link} onClick={(e) => handleNavClick(e, "testimonials")}>Reviews</a>
          <a href="/#book" className={styles.link} onClick={(e) => handleNavClick(e, "book")}>The Book</a>
        </div>

        <div className={styles.rightSection}>
          {!isOpen ? (
            <>
              <button className={styles.cta} onClick={() => setIsBookingOpen(true)}>
                Book Reading
              </button>

              <button
                className={styles.menuToggle}
                onClick={() => setIsOpen(true)}
                aria-label="Toggle Menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </>
          ) : null}
        </div>
      </nav>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
