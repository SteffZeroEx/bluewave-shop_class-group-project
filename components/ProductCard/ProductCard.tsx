import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import styles from "@/components/ProductCard/ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <Image
        src={product.product_image || `https://picsum.photos/300/300?random=${product.product_id}`}
        alt={product.product_name}
        width={400}
        height={300}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{product.product_name}</h2>
        <p className={styles.description}>{product.short_description}</p>
        <p className={styles.price}>{product.price} €</p>
        <Link className={styles.link} href={`/products/${product.product_id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
