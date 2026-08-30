import styles from './SellProductCard.module.css';
import imgHeart from '@/assets/img/ic_heart.svg';
import imgSell from '@/assets/img/img_default.svg';

function SellProductCard({ product }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.productCard}>
        <div className={styles.productImgWrapper}>
          <img src={imgSell} alt="판매 중인 상품 이미지" />
        </div>

        <div className={styles.productInfo}>
          <div>
            <p className={styles.productIntro}>{product.name}</p>
            <p className={styles.productPrice}>
              {product.price.toLocaleString()}원
            </p>
          </div>

          <div className={styles.likeArea}>
            <img src={imgHeart} alt="좋아요 아이콘" />
            <p className={styles.likeCount}>{product.favoriteCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellProductCard;
