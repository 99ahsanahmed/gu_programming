import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product_detail from './components/pd_detail';
import Product_page from './components/Product_page';
import Cart from './components/cart';
import User from './components/User';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App flex flex-col justify-center items-center">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:pd_id" element={<Product_detail />} />
        <Route path="/products" element={<Product_page />} />
        <Route path="/User/:usr_id" element={<User />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
