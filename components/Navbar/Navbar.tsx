import styles from "@/components/Navbar/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav_container}>
        <ol className={styles.list}>
          <li className={styles.list_element}>
            <Link href="/">Startseite</Link>
          </li>
          <li className={styles.list_element}>
            <Link href="/">Produktseite</Link>
          </li>
          <li className={styles.list_element}>
            <Link href="/products">Admin</Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
