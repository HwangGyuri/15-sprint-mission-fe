import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Items from './pages/Items';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  );
}

export default App;
