import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Items from './pages/Items';
import Registration from './pages/Registration';
import ProductDetail from './pages/ProductDetail';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/items" element={<Items />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
