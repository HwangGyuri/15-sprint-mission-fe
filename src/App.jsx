import Layout from './components/common/Layout/Layout';
import BestProducts from './pages/BestProducts';
import SellProducts from './pages/SellProducts';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <div className="bodyBox">
          <BestProducts />
          <SellProducts />
        </div>
      </Layout>
    </div>
  );
}

export default App;
