import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Online Vegetable Store</title>
        <meta name="description" content="Order fresh vegetables online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <div className={styles.logo}>
              <Image src="/images/logo.jpeg" alt="Store Logo" width={50} height={50} />
              <h1>Online Veg Store</h1>
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
            <a href="/login" className={styles.icon}><img src="/images/login-icon.png" alt="Login" width={24} height={24} /></a>
            <a href="/cart" className={styles.icon}><img src="/images/cart-icon.png" alt="Cart" width={24} height={24} /></a>
          </div>
        </nav>

        <header className={styles.header}>
          <p>Fresh vegetables delivered to your doorstep</p>
        </header>

        <main className={styles.main}>
          <section id="products" className={styles.productGrid}>
            <div className={styles.productCard}>
              <img src="/images/tomato.jpg" alt="Tomato" className={styles.productImage} />
              <h2>Tomatoes</h2>
              <p>$2.99 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.productCard}>
              <img src="/images/cucumber.jpg" alt="Cucumber" className={styles.productImage} />
              <h2>Cucumbers</h2>
              <p>$1.49 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.productCard}>
              <img src="/images/carrot.jpg" alt="Carrot" className={styles.productImage} />
              <h2>Carrots</h2>
              <p>$3.49 per kg</p>
              <button className={styles.orderButton}>Order Now</button>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 Online Vegetable Store</p>
        </footer>
      </div>
    </>
  );
}
