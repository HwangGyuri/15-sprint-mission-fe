import styles from './SellProducts.module.css';
import SellProductCard from '@/components/ProductCard/SellProductCard';
import iconSearch from '@/assets/img/ic_search.svg';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Pagination from './Pagination';

function SellProducts({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const order = searchParams.get('order') ?? '';

  const keyword = searchParams.get('keyword') ?? '';
  const [input, setInput] = useState(keyword);

  const handleSubmit = (event) => {
    event.preventDefault();

    const queries = new URLSearchParams(searchParams);
    if (input) {
      queries.set('keyword', input);
    } else {
      queries.delete('keyword');
    }

    setSearchParams(queries);
  };

  const handleOrder = (event) => {
    const queries = new URLSearchParams(searchParams);
    const nextOrder = event.target.value;

    if (['asc', 'desc'].includes(nextOrder)) {
      queries.set('order', nextOrder);
    } else {
      queries.delete('order');
    }
    setSearchParams(queries);
  };

  const result = products
    .filter((product) => (keyword ? product.name.includes(keyword) : true))
    .toSorted((a, b) => {
      if (!order) return 0;
      return order === 'desc'
        ? a.favoriteCount - b.favoriteCount
        : b.favoriteCount - a.favoriteCount;
    });

  return (
    <>
      <section className={styles.sellProductContainer}>
        <div className={styles.sellProductHeader}>
          <span className={styles.title}>판매 중인 상품</span>

          <form onSubmit={(event) => handleSubmit(event)}>
            <div className={styles.searchForm}>
              <img src={iconSearch} alt="검색 아이콘" />
              <input
                aria-label="검색어"
                name="keyword"
                placeholder="검색할 상품을 입력해주세요"
                onChange={(event) => setInput(event.target.value)}
                value={input}
              />
            </div>
            <button className={styles.productSubmit} type="button">
              상품 등록하기
            </button>
            <select
              name="order"
              aria-label="정렬"
              value={order ?? ''}
              onChange={handleOrder}
            >
              <option value="asc">최신순</option>
              <option value="desc">좋아요순</option>
            </select>
          </form>
        </div>

        <div className={styles.sellProductGrid}>
          {result.map((product) => (
            <SellProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Pagination />
    </>
  );
}

export default SellProducts;
