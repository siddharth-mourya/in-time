import React from "react";
import styles from "./Navbar.module.scss";
// import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>In-Time</div>
      {/* <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link href="/home">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/features">Features</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/analytics">Analytics</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
