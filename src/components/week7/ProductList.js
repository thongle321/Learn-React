import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Card} from "react-bootstrap";
import { Link} from 'react-router-dom';
import data from "../../data";

export default function ProductList() {
  const [products] = useState(data);

  return (
    <div className="container">     
    <h1 className="text-center my-4">Product List</h1>
      <div className="my-4 row">
        {products.map((p) => (
          <div className="col-lg-4 mb-4" key={p.Id}>
            <Card className="h-100 shadow">
              <Link to={`/product/${p.Id}`}>
                <Card.Img variant="top" src={p.ImageUrl} />
              </Link>
              <Card.Body>
                <Card.Title>{p.Name}</Card.Title>
                <Card.Text className="fw-bold text-danger">
                  {p.Price}đ
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
