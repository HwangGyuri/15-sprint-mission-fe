import styles from './ProductDetail.module.css';
import imgDefault from '@/assets/img/img_default.svg';

function ProductDetail() {
  return (
    <div className={styles.container}>
      <h1>상품 상세 페이지</h1>\<div>상품 이미지</div>
      <img src={imgDefault} alt="기본 이미지" />
    </div>
  );
}

export default ProductDetail;
