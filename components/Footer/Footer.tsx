import styles from "@/components/Footer/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <nav className={styles.footer_container}>
        <ol className={styles.list}>
          <li className={styles.list_element}>
            <Link href="/impressum">Impressum</Link>
          </li>
          <li>
            <Image src="/Limon.png" width={100} height={100} alt="Limon" />
          </li>
          <li className={styles.list_element}>
            <Link href="/datenschutz">Datenschutz</Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
