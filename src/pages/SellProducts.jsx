import styles from './SellProducts.module.css';
import SellProductCard from '@/components/ProductCard/SellProductCard';
import iconSearch from '@/assets/img/ic_search.svg';
import iconSort from '@/assets/img/ic_sort.svg';
import iconArrowDown from '@/assets/img/ic_arrow_down.svg';
import Pagination from './Pagination';

import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../api/product';
import { useDeviceType } from '../hooks/useDeviceType';

const INITIAL_PAGE = 1;
const ORDER_OPTIONS = [
  { value: 'recent', label: '최신순' },
  { value: 'favorite', label: '좋아요순' },
];

function SellProducts() {
  const deviceType = useDeviceType();

  let pageSize =
    deviceType === 'desktop' ? 10 : deviceType === 'tablet' ? 6 : 4;

  // 주소창에서 현재 상태 읽기
  const [searchParams, setSearchParams] = useSearchParams();

  // 주소창 정보를 실제 값으로 바꾸기
  const page = Number(searchParams.get('page')) || INITIAL_PAGE;
  const order = searchParams.get('orderBy') || 'recent';
  const keyword = searchParams.get('keyword') || '';

  // 정렬에 사용할 변수
  function getCurrentOrderLabel() {
    const currentOrder = order || 'recent';
    const found = ORDER_OPTIONS.find((option) => option.value === currentOrder);

    if (found) {
      return found.label;
    }
    return '최신순';
  }
  const currentOrderLabel = getCurrentOrderLabel();

  // 사용자가 검색창에 입력하고 있는 글자 기억
  const [input, setInput] = useState(keyword);
  // 서버에서 가져온 상품 목록
  const [products, setProducts] = useState([]);
  // 검색 결과를 포함해서 상품이 총 몇개인지 기억
  const [totalCount, setTotalCount] = useState(0);
  // 상품을 가져올 때 문제 생기면 오류 정보 저장
  const [error, setError] = useState(null);
  // 정렬 드롭다운 상태
  const [isSortOpen, setIsSortOpen] = useState(false);

  // 서버에서 상품 가져오기
  useEffect(() => {
    async function loadProducts() {
      try {
        // 서버에 어떤 상품을 어떤 순서로 몇 페이지 몇 개 가져올지 요청
        const result = await getProducts(page, pageSize, keyword, order);

        // 서버에서 받은 상품 목록을 products에 저장
        setProducts(result.list);
        // 서버에서 보내준 전체 상품 개수를 totalCount에 저장
        setTotalCount(result.totalCount);

        // 문제가 생기면 오류 저장
      } catch (error) {
        setError(error);
      }
    }
    loadProducts();
    // 페이지, 검색어, 정렬 방식 중 하나라도 바뀌면 상품 다시 가져오기
  }, [page, keyword, order, pageSize]);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(totalCount / pageSize);
  // 상품 개수가 0개여도 최소 1페이지 보여주기
  const displayTotalPages = totalPages || INITIAL_PAGE;

  // 검색 버튼 눌렀을 때 작동
  const handleSubmit = (event) => {
    event.preventDefault();

    // 현재 주소 정보를 queries에 저장
    const queries = new URLSearchParams(searchParams);
    // 검색어가 있으면 keyword에 저장
    if (input.trim()) {
      queries.set('keyword', input);
    } else {
      queries.delete('keyword');
    }
    // 검색 하면 무조건 1페이지로 돌아가기
    queries.set('page', String(INITIAL_PAGE));

    // 검색 내용을 반영하여 바뀐 주소 정보를 적용하기
    setSearchParams(queries);
  };

  // 정렬 방식 바꿨을 때
  // const handleOrder = (event) => {
  //   // 현재 주소 정보를 queries에 저장
  //   const queries = new URLSearchParams(searchParams);
  //   // 사용자가 선택한 정렬 순서가 nextOrder에 저장됨
  //   const nextOrder = event.target.value;

  //   // 변경된 정렬 방법 적용
  //   queries.set('orderBy', nextOrder);
  //   // 1페이지부터 보이도록 변경
  //   queries.set('page', String(INITIAL_PAGE));

  //   setSearchParams(queries);
  // };

  // 정렬 드롭다운 상태
  const applyOrder = (nextOrder) => {
    const queries = new URLSearchParams(searchParams);
    // 변경된 정렬 방법 적용
    queries.set('orderBy', nextOrder);
    // 1페이지부터 보이도록 변경
    queries.set('page', String(INITIAL_PAGE));
    setSearchParams(queries);
    setIsSortOpen(false);
  };

  // 페이지 번호를 눌렀을 때 작동
  const handlePageChange = (nextPage) => {
    // 현재 주소 정보를 queries에 저장
    const queries = new URLSearchParams(searchParams);

    // nextPage로 받은 페이지값을 현재 페이지로 설정
    queries.set('page', String(nextPage));
    setSearchParams(queries);
  };

  // 상품을 못 가져왔을 때 오류 처리
  if (error) {
    return <p>판매 상품을 불러오지 못했습니다.</p>;
  }

  // 실제 화면에 보이는 부분
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

            <div className={styles.sortWrapper}>
              {deviceType === 'mobile' ? (
                <img src={iconSort} alt="정렬"></img>
              ) : (
                <>
                  <button
                    type="button"
                    className={styles.sortButton}
                    onClick={(event) => {
                      event.stopPropagation();
                      setIsSortOpen((prev) => !prev);
                    }}
                  >
                    <span>{currentOrderLabel}</span>
                    <img src={iconArrowDown} alt="" />
                  </button>
                </>
              )}

              {isSortOpen && (
                <ul className={styles.sortMenu} role="listbox">
                  {ORDER_OPTIONS.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => applyOrder(option.value)}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* <select
              name="orderBy"
              aria-label="정렬"
              value={order || 'recent'}
              onChange={handleOrder}
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select> */}
          </form>
        </div>

        {/* 상품 카드 보여주기 */}
        <div
          className={`${styles.sellProductGrid} ${styles[`sellProductGrid--${deviceType}`]}`}
        >
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
