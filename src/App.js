// import logo from './logo.svg';
import "./App.css";
import ProductList from "./components/week7/ProductList";
import ProductDetail from "./components/week7/ProductDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/week7/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          
        </Routes>
      </div>
    </Router>
  );
}
export default App;
