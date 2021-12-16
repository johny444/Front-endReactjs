import React from "react";
import "./singlecontent1.css";
import img1 from "../web6.jpg";




export default function Singlecontent1() {
  return (
    <div className="singlecontent" id="singlecontent">
      <div className="singlecontentWrapper">
        <img src={img1} alt="" className="singlecontentImg" />
        <h1 className="singlecontentTitle">BackEnd roadmap 2021</h1>
        <div className="singlecontentInfo">
          <p className="singlecontentDesc" >
          Ngoài ra, các Backend Developer cũng là người chịu trách nhiệm tối ưu hoá ứng dụng về tốc độ và hiệu quả. Hơn thế nữa, Backend Developer thường tạo ra một giải pháp lưu trữ dữ liệu với Database. Đây là một trong những thành phần quan trọng cho tất cả các ứng dụng web vì nó lưu trữ thông tin như người dùng, bình luận, bài đăng,… Backend Developer là người có trách nhiệm tuyệt đối và thường tập trung vào các hoạt động hậu trường nếu như xảy ra bất kỳ hoạt động nào ở trên trang web. Backend Developer sẽ phát triển việc xây dựng mã và ngôn ngữ chạy phía sau hậu trường ở trên máy chủ web hoặc Backend. Các mã được viết bởi Backend Developer đều sẽ hỗ trợ thông tin cơ sở dữ liệu cho trình duyệt. Ví dụ phổ biến nhất về lập trình Backend là các phông chữ, màu sắc, thiết kế,.. để tạo thành giao diện của trang web khi đọc một bài viết trên Blog. Trong khi nội dung của bài viết được kết xuất từ máy chủ và được tìm nạp từ cơ sở dữ liệu.
          </p>
        </div>
      </div>
    </div>
  );
}
