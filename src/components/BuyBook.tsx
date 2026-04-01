import Image from "next/image";
import { FaAmazon, FaShoppingCart } from "react-icons/fa";
import styles from "./BuyBook.module.css";

export default function BuyBook() {
  return (
    <section id="book" className={styles.buyBook}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/numbers-magic-cover.png" 
              alt="Number&apos;s Magic: A Guide to Numerology by Shalu Singh" 
              width={400} 
              height={600} 
              className={styles.bookImage}
              priority
            />
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.badge}>
              <div className={styles.line}></div>
              <span className={styles.badgeText}>Number Magic Book</span>
            </div>
            
            <h2 className={styles.title}>
              Number&apos;s <span className={styles.accent}>Magic</span>
            </h2>
            <p className={styles.author}>By Numerologist Shalu Singh</p>

            <div className={styles.summaryBox}>
              <h3 className={styles.summaryTitle}>About the Book</h3>
              <p className={styles.description}>
                &quot;Number&apos;s Magic&quot; explains how numbers help you. It shows how dates and names 
                affect your success, money, and peace at home.
              </p>
              <p className={styles.description} style={{ marginTop: '1rem' }}>
                Shalu Singh shows you how to use numbers to change your life for the better.
              </p>
            </div>

            <ul className={styles.features}>
              <li>Learn how numbers plan your future</li>
              <li>Fix your name for better luck</li>
              <li>Make your relationships better</li>
              <li>Vastu tips for a happy home</li>
            </ul>

            <div className={styles.btnGroup}>
              <a 
                href="https://www.amazon.in/Numbers-Magic-Numerology-Shalu-Singh/dp/B0D4R3FRYX" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.amazonBtn}
              >
                <FaAmazon /> Amazon
              </a>
              <a 
                href="https://www.flipkart.com/search?q=number%27s+magic+book+by+shalu+Singh+" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.flipkartBtn}
              >
                <FaShoppingCart /> Flipkart
              </a>
              <a 
                href="https://notionpress.com/in/read/number-s-magic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.notionBtn}
              >
                📖 Notion Press
              </a>
            </div>
            
            <span className={styles.deliveryInfo}>*Secure transaction via Official Portals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
