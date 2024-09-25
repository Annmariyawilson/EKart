import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import View from './Pages/View';
import Wishlist from './Pages/Whishlist';
import Cart from './Pages/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/wish' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<h1>Page Not Found 404</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
