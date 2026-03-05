import { getProductById } from "@/lib/api";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    return <p>Produkt nicht gefunden.</p>;
  }

  return (
    <>
      <main>
        <Link href="/" className={styles.backLink}>
          ← Zurück zur Übersicht
        </Link>
        <div className={styles.product}>
          <Image
            src={product.product_image || `https://picsum.photos/300/300?random=${product.product_id}`}
            alt={product.product_name}
            width={400}
            height={400}
            className={styles.image}
          />

          <div className={styles.info}>
            <h1 className={styles.name}>{product.product_name}</h1>
            <p className={styles.description}>{product.product_description}</p>
            <p className={styles.price}>{product.price} €</p>
            <p className={styles.stock}>Lagerbestand: {product.stock} Stück</p>
          </div>
        </div>
      </main>
    </>
  );
}
