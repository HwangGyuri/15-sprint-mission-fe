import styles from './BestProducts.module.css';
import BestProductCard from '@/components/ProductCard/BestProductCard';

import { useState, useEffect } from 'react';
import { getProducts } from '../api/product.js';
import { useDeviceType } from '../hooks/useDeviceType';

function BestProducts() {
  const deviceType = useDeviceType();
  let pageSize = deviceType === 'desktop' ? 4 : deviceType === 'tablet' ? 2 : 1;

  const [bestProducts, setBestProducts] = useState([]);
  const [error, setError] = useState(null);

  // 서버에서 인기순으로 상품 가져오기
  useEffect(() => {
    async function loadProducts() {
      try {
        const bestResult = await getProducts(1, pageSize, '', 'favorite');

        setBestProducts(bestResult.list);
      } catch (error) {
        setError(error);
      }
    }
    loadProducts();
  }, [pageSize]);

  if (error) {
    return <p>상품을 불러오지 못했습니다.</p>;
  }

  return (
    <>
      <section className={styles.bestProductContainer}>
        <div className={styles.bestProductHeader}>
          <span className={styles.title}>베스트 상품</span>
        </div>

        <div
          className={`${styles.bestProductGrid} ${styles[`bestProductGrid--${deviceType}`]}`}
        >
          {bestProducts.map((product) => (
            <BestProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default BestProducts;
