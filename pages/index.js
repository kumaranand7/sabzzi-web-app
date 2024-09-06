import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import WhatsAppWidget from './WhatsAppWidget';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabzzi.com        </title>
        <meta name="description" content="Order fresh vegetables online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <div className={styles.logo}>
              <Image src="/images/logo.jpeg" alt="Store Logo" width={50} height={50} />
              <h1>Sabzzi.com              </h1>
            </div>
            <ul className={styles.navLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="#shop">Shop
              </a></li>
              <li><a href="#aboutus">About us</a></li>
          

              <li><a href="#log">Blog</a></li>

            </ul>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for vegetables..." />
          </div>
          <div className={styles.navRight}>
            <a href="/login" className={styles.icon}><img src="/images/login.png" alt="Login" width={24} height={24} />Login</a>
            <a href="/cart" className={styles.icon}><img src="/images/cart2.png" alt="Cart" width={24} height={24} />Cart</a>
          </div>
        </nav>

        <header className={styles.header}>
          <p>Fresh vegetables delivered to your doorstep</p>
        </header>

        <main className={styles.main}>
          <section id="products" className={styles.productGrid}>
            <div className={styles.productCard}>
            <img src="/images/veg1.jpg" alt="Carrot" className={styles.productImage} />
            <h2>Tomatoes</h2>
              <p>$2.99 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.productCard}>
              <img src="/images/veg2.jpeg" alt="Cucumber" className={styles.productImage} />
              <h2>Cucumbers</h2>
              <p>$1.49 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.productCard}>
              <img src="/images/veg3.png" alt="Apple" className={styles.productImage} />
              <h2>Apple</h2>
              <p>$13.49 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 SABZZI.COM</p>
        </footer>
        <WhatsAppWidget/>
        {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}

      </div>
    </>
  );
}
