import React from "react";
import "./singlecontent2.css";
import img2 from "../web7.jpg";




export default function Singlecontent2() {
  return (
    <div className="singlecontent" id="singlecontent">
      <div className="singlecontentWrapper">
        <img src={img2} alt="" className="singlecontentImg" />
        <h1 className="singlecontentTitle">BackEnd roadmap 2021</h1>
        <div className="singlecontentInfo">
          <p className="singlecontentDesc" >
          Một website thường có 3 phần cơ bản bao gồm: HTML, CSS và JavaScript. Trong đó, HTML quyết định nội dung và cấu trúc, CSS quyết định màu sắc, hình dáng, kiểu chữ,… Hầu hết  các thay đổi của HTML và CSS đều được thể hiện dưới dạng tính, không thể thực hiện các hành động với chuyển động bắt mắt như xoay hình, bấm nháy máy, kiểm tra thông tin nhập hợp lệ, hiển thị thông báo người dùng,…Tất cả các hành động này được chuyển thể từ trạng thái tĩnh sang động nhờ vào thành phần thứ 3 là JavaScript. 3 thành phần này kết hợp với nhau tạo nên website hoàn chỉnh với giao diện (UI) và trải nghiệm người dùng (UX) chất lượng.Đặc biệt, với sự phát triển không ngừng của khoa học công nghệ, HTML và CSS đã được cải tiến hơn rất nhiều. Thay vì sử dụng JavaScript, các nhà thiết kế web có thể sử dụng HTML và CSS để thực hiện các hiệu ứng sinh động. Tuy nhiên, nếu có JavaScript thì hoạt động này có thể nhanh chóng và đỡ tốn công sức hơn rất nhiều. Bởi vậy mà đến hiện nay, JavaScript vẫn còn rất được ưa chuộng.
          </p>
        </div>
      </div>
    </div>
  );
}
