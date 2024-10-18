import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.Id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map(item => 
      item.Id === id ? {...item, quantity: Math.max(1, newQuantity)} : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Empty.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.Id}>
                <td>{item.Name}</td>
                <td>{item.Price}đ</td>
                <td>{item.quantity}</td>
                <td>{item.Price * item.quantity}đ</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(item.Id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Link to="/" className="btn btn-primary">Go Back</Link>
    </div>
  );
}
