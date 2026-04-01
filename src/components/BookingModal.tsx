"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./BookingModal.module.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <div className={styles.omSymbol}>ॐ</div>
            <div className={styles.hindiText}>वास्तु देवाय: नम:</div>
          </div>
          <h2 className={styles.title}>Book a Consultation</h2>
          <p className={styles.subtitle}>
            Connect with Shalu Singh for personalized Vastu guidance that brings harmony to your space.
          </p>
        </div>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.bookBtn} onClick={onClose}>
            <span className={styles.btnIcon}>🗓️</span>
            <div className={styles.btnText}>
              <strong>Book Appointment</strong>
              <span>Schedule a formal session</span>
            </div>
          </Link>

          <a 
            href="https://wa.me/919582252374" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsappBtn}
          >
            <span className={styles.btnIcon}>💬</span>
            <div className={styles.btnText}>
              <strong>Chat on WhatsApp</strong>
              <span>Quick query & instant help</span>
            </div>
          </a>
        </div>

        <div className={styles.footer}>
          <p>Trusted by 100+ families for authentic Vastu wisdom.</p>
        </div>
      </div>
    </div>
  );
}
