import React from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import data from "../../data";
import { useState } from "react";
export default function ProductDetail() {
  const { id } = useParams();
  const product = data.find((p) => p.Id === parseInt(id));
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.Id === product.Id);
    
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity: quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  if (!product) {
    return <div className="text-center">Can't found product</div>;
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.ImageUrl} className="img-fluid" alt={product.Name}></img>
        </div>
        <div className="col-md-6">
          <h1 className="my-4 text-break">{product.Name}</h1>
          <p className="fw-bold text-danger">{product.Price}đ</p>
          <p>{product.Description}</p>
          <form className="form-outline">
            <label htmlFor="quantity">Số lượng: </label>
            <input 
              type="number" 
              className="mb-4" 
              id="quantity" 
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              min="1"
            ></input>
            <br />
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </form>
        </div>
      </div>
    </div>
  );
};