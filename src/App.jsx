import Layout from './components/common/Layout/Layout';
import BestProducts from './pages/BestProducts';
import SellProducts from './pages/SellProducts';
import './App.css';
import { useEffect, useState } from 'react';
import { getProducts } from './api/product';

function App() {
  const [bestProducts, setBestProducts] = useState([]);
  // const [sellProducts, setSellProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const bestResult = await getProducts(1, 4, '', 'favorite');

        setBestProducts(bestResult.list);
        // setSellProducts(sellResult.list);
      } catch (error) {
        setError(error);
      }
    }
    loadProducts();
  }, []);

  if (error) {
    return <p>상품을 불러오지 못했습니다.</p>;
  }

  return (
    <div>
      <Layout>
        <div className="bodyBox">
          <BestProducts products={bestProducts} />
          {/* <SellProducts products={sellProducts} /> */}
          <SellProducts />
        </div>
      </Layout>
    </div>
  );
}

export default App;
