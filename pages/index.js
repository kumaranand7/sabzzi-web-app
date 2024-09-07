import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AppBar } from '@mui/material';
import '../app/globals.css';

// GoogleMap component ko dynamically load karenge, SSR ko disable karte hue
const GoogleMap = dynamic(() => import('./GoogleMap'), { ssr: false });
const WhatsAppWidget = dynamic(() => import('./WhatsAppWidget'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabzzi.com</title>
        <meta name="description" content="Order fresh vegetables online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* Navigation Bar */}

        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <div className={styles.logo}>
              <Image src="/images/logo.jpeg" alt="Store Logo" width={50} height={50} />
              <h1>Sabzzi.com</h1>
            </div>
            
            <ul className={styles.navLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#aboutus">About us</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for vegetables..." />
          </div>
          <div className={styles.navRight}>
            <a href="/login" className={styles.icon}>
              <Image src="/images/login.png" alt="Login" width={24} height={24} />Login
            </a>
            <a href="/cart" className={styles.icon}>
              <Image src="/images/cart2.png" alt="Cart" width={24} height={24} />Cart
            </a>
          </div>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <p>Fresh vegetables delivered to your doorstep</p>
        </header>

        {/* Main Content */}
        <main className={styles.main}>
          <section id="products" className={styles.productGrid}>
            <div className={styles.productCard}>
              <Image src="/images/veg1.jpg" alt="Tomato" width={150} height={150} className={styles.productImage} />
              <h2>Tomatoes</h2>
              <p>₹29.9 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.productCard}>
              <Image src="/images/veg2.jpeg" alt="Cucumber" width={150} height={150} className={styles.productImage} />
              <h2>Cucumbers</h2>
              <p>₹14.9 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.productCard}>
              <Image src="/images/veg3.png" alt="Apple" width={150} height={150} className={styles.productImage} />
              <h2>Apples</h2>
              <p>₹13.49 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>
          </section>
        </main>

        <br />
         {/* Google Map at the bottom */}
         <div className={styles.mapContainer}>
          <GoogleMap />
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2024 SABZZI.COM</p>
          
        </footer>

        {/* WhatsApp Widget */}
        <WhatsAppWidget />

       
      </div>
    </>
  );
}
