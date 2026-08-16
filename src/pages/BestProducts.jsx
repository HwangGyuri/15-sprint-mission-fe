import styles from './BestProducts.module.css';
import BestProductCard from '@/components/ProductCard/BestProductCard';

function BestProducts({ products = [] }) {
  return (
    <>
      <section className={styles.bestProductContainer}>
        <div className={styles.bestProductHeader}>
          <span className={styles.title}>베스트 상품</span>
        </div>

        <div className={styles.bestProductGrid}>
          {products.map((product) => (
            <BestProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default BestProducts;
