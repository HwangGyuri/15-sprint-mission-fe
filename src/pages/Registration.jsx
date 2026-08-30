import Layout from '../components/common/Layout/Layout';
import { useDeviceType } from '../hooks/useDeviceType';
import { createProduct } from '../api/product';
// import { ProductDetail } from './ProductDetail';

import styles from './Registration.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const deviceType = useDeviceType();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      images: ['https://example.com/image.jpg'],
      tags: tags ? [tags] : [],
      price: Number(price),
      description: description,
      name: name,
    };

    const createdProduct = await createProduct(postData);
    console.log(createdProduct);

    navigate(`/products/${createdProduct.id}`);
  };

  return (
    <Layout>
      <div
        className={`${styles.contentBox} ${styles[`contentBox--${deviceType}`]}`}
      >
        <form
          name="registration"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.contentHeader}>
            <span className={styles.title}>상품 등록하기</span>
            <button className={styles.submitButton} type="submit">
              등록
            </button>
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>상품명</span>
            <input
              className={styles.textInput}
              placeholder="상품명을 입력해주세요"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>상품 소개</span>
            <textarea
              className={`${styles.textArea} ${styles.introduction}`}
              placeholder="상품 소개를 입력해주세요"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>판매가격</span>
            <input
              className={styles.textInput}
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputTitle}>태그</span>
            <input
              className={styles.textInput}
              placeholder="태그를 입력해주세요"
              value={tags}
              onChange={(event) => setTags(event.target.value)}
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
