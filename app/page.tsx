import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Bluewave Electronics</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}
