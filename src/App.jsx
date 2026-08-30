import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Items from './pages/Items';
import Registration from './pages/Registration';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/items" element={<Items />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
