import React from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import Ideapad from '../../laptop/Ideapad.jpg'
import Thinkpad from '../../laptop/Thinkpad.jpg'
import Acer from '../../laptop/Acer.jpg'
import Macbook from '../../laptop/Macbook.jpg'
import Asus from '../../laptop/Asus.jpg'
import HP from '../../laptop/HP.jpg'
const data = [
  {
    Id: 1,
    Name: "Laptop Lenovo Ideapad 3 15ITL6 i5 1155G7/8Gb/256Gb/15.6\"FHD/Win 11",
    Price: '14.990.000',
    Description: "Lenovo Ideapad 3 15ITL6 82H801LMVN là một thiết bị mạnh mẽ đi kèm với thiết kế mỏng. Laptop hoàn toàn phù hợp với học sinh, sinh viên hay nhân viên văn phòng bởi hiệu năng mạnh mẽ từ CPU Intel thế hệ thứ 11. Máy tính xách tay này cũng có giá cả phải chăng, đây là một lựa chọn lý tưởng cho những ai đang tìm kiếm một chiếc máy tính xách tay mang lại giá trị tuyệt vời cho đồng tiền của họ.",
    ImageUrl: Ideapad
  },
  { Id: 2, Name: "Lenovo ThinkPad X1 Carbon", Price: '27.990.000', Description: "Ở Lenovo ThinkPad X1 Carbon Gen 11 2023, chúng ta sẽ có những nâng cấp đáng chú ý về hiệu năng mạnh mẽ tới từ con chip Intel Gen 13th, thêm vào đó là sự chắc chắn và bền bỉ đến từ chất liệu Nhôm tái chế bền vững. Do đó, đây sẽ là sự lựa chọn tuyệt vời cho người dùng là doanh nhân, dân văn phòng. Hay những người cần một chiếc laptop thuần công việc.", ImageUrl: Thinkpad },
  { Id: 3, Name: "Acer Swift Go 14", Price: '22.990.000', Description: "Laptop Acer Swift Go 14 AI SFG14-73-53X7 hỗ trợ tính toán, xử lý đồ hoạ siêu mượt mà với CPU Intel Core Ultra 5-125H cùng card đồ họa Onboard Intel Arc. Kết hợp với đó là RAM 16GB LPDDR5x 6400MHz, và SSD 512GB M.2 NVMe, hỗ trợ xử lý đa tác vụ cùng 1 lúc và lưu trữ, truy xuất dữ liệu mượt mà. Ngoài ra, thế hệ laptop Acer Swift Go này còn bao gồm màn hình 14 inch IPS 120Hz độ phân giải 2880 x 1800, cung cấp khả năng hiển thị sắc nét hàng đầu.", ImageUrl: Acer },
  { Id: 4, Name: "Macbook Air M3 13 2024", Price: '31.990.000', Description: "Apple Macbook Air 13 M3 với con chip Apple M3 mạnh mẽ cùng công nghệ dò tia tốc độ cao mang lại trải nghiệm dùng mượt mà. Laptop sở hữu một thiết kế siêu mỏng với độ dày 1,13 cm giúp người dùng dễ dàng mang theo. Macbook Air 13 được trang bị wifi 6E mang lại tốc độ nhanh hơn đến 2x lần so với wifi 622.", ImageUrl: Macbook },
  { Id: 5, Name: "Laptop ASUS Vivobook 14 OLED A14", Price: '16.690.000', Description: "Laptop Asus Vivobook 14 OLED A1405VA-KM095W có sự nổi bật nhất là màn hình OLED, chuẩn điện ảnh, đem lại trải nghiệm về thị giác cực kỳ tốt. Bên cạnh đó, chiếc laptop Asus Vivobook này thiết kế theo dạng bản lề xoay 180 độ, để điều chỉnh phù hợp với tầm nhìn của người dùng. ", ImageUrl: Asus },
  { Id: 6, Name: "Laptop HP Pavilion 15-eg3111TU", Price: '17.790.000 ', Description: "Laptop HP Pavilion 15 EG3111TU 8U6L8PA được xem là phù hợp để sử dụng trong các tác vụ học tập, làm việc với CPU I5-1335U, 2 thanh RAM 8GB bộ nhớ trong 512GB SSD. Việc giải trí trên máy cũng được tối ưu với kích thước màn hình 15.6 inch, hỗ trợ tấm nền IPS cùng độ phân giải 1920 x 1080 pixels. Sản phẩm laptop HP Pavilion này cũng sử dụng phiên bản Windows 11 mới nhất, hỗ trợ nhiều tiện ích cũng như tính năng mới.", ImageUrl: HP },
];
export default function ProductDetail() {
  const { id } = useParams();
  const product = data.find((p) => p.Id === parseInt(id));

  if (!product) {
    return <div className="text-center">Can't found product</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.ImageUrl} className="img-fluid" alt=""></img>
        </div>
        <div className="col-md-6">
          <h1 className="my-4 text-break">{product.Name}</h1>
          <p className="fw-bold text-danger">{product.Price}đ</p>
          <p>{product.Description}</p>
          <form className="form-outline">
            <input type="number" className="mb-4"></input>
            <Link to={`/cart`}>
              <br />
              <button className="btn btn-primary">Cart</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};