import styles from './BestProductCard.module.css';
import imgHeart from '@/assets/img/ic_heart.svg';
import imgBest from '@/assets/img/img_best_sample.svg';

function BestProductCard({ product }) {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.productCard}>
        <div className={styles.productImgWrapper}>
          <img src={imgBest} alt="베스트상품 이미지" />
        </div>

        <div className={styles.productInfo}>
          <p className={styles.productIntro}>{product.name}</p>
          <p className={styles.productPrice}>
            {product.price.toLocaleString()}원
          </p>

          <div className={styles.likeArea}>
            <img src={imgHeart} alt="좋아요 아이콘" />
            <p className={styles.likeCount}>{product.favoriteCount}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BestProductCard;
