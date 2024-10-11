import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Ideapad from '../../laptop/Ideapad.jpg'
import Thinkpad from '../../laptop/Thinkpad.jpg'
import Acer from '../../laptop/Acer.jpg'
import Macbook from '../../laptop/Macbook.jpg'
import Asus from '../../laptop/Asus.jpg'
import HP from '../../laptop/HP.jpg'
const data = [
  { Id: 1, Name: "Lenovo Ideapad 3 15ITL6", Price: '14.990.000', ImageUrl: Ideapad },
  { Id: 2, Name: "Lenovo ThinkPad X1 Carbon", Price: '27.990.000', ImageUrl: Thinkpad },
  { Id: 3, Name: "Acer Swift Go 14", Price: '22.990.000', ImageUrl: Acer },
  { Id: 4, Name: "Macbook Air M3 13 2024", Price: '31.990.000', ImageUrl: Macbook },
  { Id: 5, Name: "Laptop ASUS Vivobook 14 OLED A14", Price: '16.690.000', ImageUrl: Asus },
  { Id: 6, Name: "Laptop HP Pavilion 15-eg3111TU ", Price: '17.790.000', ImageUrl: HP },
];
export default function ProductList() {
  const [products] = useState(data);
  return (
    <div className="container">     
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
              <Card.Footer>
                <Link to={`/cart`}>
                  <Button variant="primary">Cart</Button>
                </Link>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
// export default function ProductList() {
//   const [products] = useState(data);

//   return (
//     <div className="container">
//       <div className="my-4 row">
//         {products.map((p) => (
//           <div className="col-md-4 mb-4" key={p.Id}>
//             <div className="card h-100">
//               <Link to={`/product/${p.Id}`} >
//                 <img src={p.ImageUrl} className="card-img-top" alt="" />
//               </Link>
//               <div className="card-body">
//                 <h5 className="card-title">{p.Name}</h5>
//                 <p className="card-text fw-bold text-danger">{p.Price}đ</p>
//               </div>
//               <div className="card-footer">
//                 <Link to={`/cart`}>
//                   <button className="btn btn-primary">Cart</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
