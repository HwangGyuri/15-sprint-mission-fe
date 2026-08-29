import Layout from '../components/common/Layout/Layout';
import BestProducts from './BestProducts';
import SellProducts from './SellProducts';
import styles from './Items.module.css';

function Items() {
  return (
    <div>
      <Layout>
        <div className={styles.bodyBox}>
          <BestProducts />
          <SellProducts />
        </div>
      </Layout>
    </div>
  );
}

export default Items;
