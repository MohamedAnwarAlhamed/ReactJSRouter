import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HOME } from './components/Home';
import { ABOUT } from './components/About';
import { CONTACT } from './components/Contact';
import { HEADER } from './components/Header';
import { NavBar } from './components/NavBar';
import { ORDER_SUMMARY } from './components/OrderSummary';
import { PRODUCTS } from './components/Products';
import { FEATURE } from './components/Feature';
import { NEW } from './components/New';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<><HOME /><HEADER/></>} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/contact" element={<CONTACT />} />
          <Route path="*" element={<h1>NO FOUND</h1>} />
          <Route path="/order-summary" element={<ORDER_SUMMARY />} />
          <Route path="/product" element={<PRODUCTS />} >
              <Route index element={<FEATURE />} />
             <Route path="/feature" element={<FEATURE />} />
              <Route path="/new" element={<NEW />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
