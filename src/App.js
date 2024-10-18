// import logo from './logo.svg';
import "./App.css";
import ProductList from "./components/week7/ProductList";
import ProductDetail from "./components/week7/ProductDetail";
import Header from "./components/week7/Header";
import Cart from './components/week7/Cart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
