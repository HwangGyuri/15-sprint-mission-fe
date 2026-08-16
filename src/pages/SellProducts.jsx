import styles from './SellProducts.module.css';
import SellProductCard from '@/components/ProductCard/SellProductCard';
import iconSearch from '@/assets/img/ic_search.svg';
import Pagination from './Pagination';

import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../api/product';

const PAGE_SIZE = 10;
const INITIAL_PAGE = 1;
// const INITIAL_TOTAL_COUNT = 0;

function SellProducts() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || INITIAL_PAGE;

  const order = searchParams.get('order') || 'recent';
  const keyword = searchParams.get('keyword') || '';

  const [input, setInput] = useState(keyword);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const result = await getProducts(page, PAGE_SIZE, keyword, order);

        setProducts(result.list);
        setTotalCount(result.totalCount);
      } catch (error) {
        setError(error);
      }
    }
    loadProducts();
  }, [page, keyword, order]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  const displayTotalPages = totalPages || INITIAL_PAGE;

  const handleSubmit = (event) => {
    event.preventDefault();

    const queries = new URLSearchParams(searchParams);
    if (input.trim()) {
      queries.set('keyword', input);
    } else {
      queries.delete('keyword');
    }
    queries.set('page', String(INITIAL_PAGE));

    setSearchParams(queries);
  };

  const handleOrder = (event) => {
    const queries = new URLSearchParams(searchParams);
    const nextOrder = event.target.value;

    queries.set('order', nextOrder);
    queries.set('page', String(INITIAL_PAGE));

    setSearchParams(queries);
  };

  const handlePageChange = (nextPage) => {
    const queries = new URLSearchParams(searchParams);

    queries.set('page', String(nextPage));
    setSearchParams(queries);
  };

  if (error) {
    return <p>판매 상품을 불러오지 못했습니다.</p>;
  }

  // const result = products
  //   .filter((product) => (keyword ? product.name.includes(keyword) : true))
  //   .toSorted((a, b) => {
  //     if (order === 'favorite') {
  //       return b.favoriteCount - a.favoriteCount;
  //     }

  //     return new Date(b.createdAt) - new Date(a.createdAt);
  //     // return order === 'desc'
  //     //   ? a.favoriteCount - b.favoriteCount
  //     //   : b.favoriteCount - a.favoriteCount;
  //   });

  return (
    <>
      <section className={styles.sellProductContainer}>
        <div className={styles.sellProductHeader}>
          <span className={styles.title}>판매 중인 상품</span>

          <form onSubmit={handleSubmit}>
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
              value={order || 'recent'}
              onChange={handleOrder}
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </form>
        </div>

        <div className={styles.sellProductGrid}>
          {products.map((product) => (
            <SellProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Pagination
        page={page}
        totalPages={displayTotalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default SellProducts;
