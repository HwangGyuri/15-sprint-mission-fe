import Layout from '../components/common/Layout/Layout';
import { useDeviceType } from '../hooks/useDeviceType';

import styles from './Registration.module.css';

function Registration() {
  const deviceType = useDeviceType();
  return (
    <Layout>
      <div
        className={`${styles.contentBox} ${styles[`contentBox--${deviceType}`]}`}
      >
        <div className={styles.contentHeader}>
          <span className={styles.title}>상품 등록하기</span>
          <button className={styles.submitButton}>등록</button>
        </div>

        <form name="registration" className={styles.form}>
          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>상품명</span>
            <input
              className={styles.textInput}
              placeholder="상품명을 입력해주세요"
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>상품 소개</span>
            <textarea
              className={`${styles.textArea} ${styles.introduction}`}
              placeholder="상품 소개를 입력해주세요"
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>판매가격</span>
            <input
              className={styles.textInput}
              placeholder="판매 가격을 입력해주세요"
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>태그</span>
            <input
              className={styles.textInput}
              placeholder="태그를 입력해주세요"
            />
            <div className={styles.tagList}>
              <span className={styles.tag}>#티셔츠 ✕</span>
              <span className={styles.tag}>#상의 ✕</span>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Registration;
