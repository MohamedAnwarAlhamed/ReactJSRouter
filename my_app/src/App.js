import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HOME } from './components/Home';
import { ABOUT } from './components/About';
import { CONTACT } from './components/Contact';
import { HEADER } from './components/Header';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<><HOME /><HEADER/></>} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/contact" element={<CONTACT />} />
          <Route path="*" element={<h1>NO FOUND</h1>} />
        </Routes>
      </Router>
  );
}

export default App;
