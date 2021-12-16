import React from "react";
import "./singlecontent.css";
import img from "../web5.jpg";

export default function Singlecontent() {
  return (
    <div className="singlecontent" id="singlecontent">
      <div className="singlecontentWrapper">
        <img src={img} alt="" className="singlecontentImg" />
        <h1 className="singlecontentTitle">BackEnd Developer</h1>
        <div className="singlecontentInfo">
          <p className="singlecontentDesc" >
            Back End Developers là những nhà phát triển các chương trình
            back-end. hoặc làm việc trong nền của các phần của trang web mà
            người dùng không thể tương tác trực tiếp. Điều đó làm cho chức năng
            của Front End và Back End có những chức năng khác nhau. Trong khi
            giao diện người dùng làm mọi thứ để người dùng tương tác trực tiếp,
            thì giao diện người dùng lại hoạt động đằng sau hậu trường. Và nó có
            lợi thế hơn Front End vì nó liên quan đến công nghệ trong lĩnh vực
            cụ thể đó. Back End yêu cầu một ngôn ngữ lập trình để hoạt động. Có
            nhiều ngôn ngữ lập trình. Ví dụ, PHP Ruby Python, một điều bạn nên
            biết. Bạn có thể không thấy một danh sách lớn các chức danh cho biết
            công ty đang tìm kiếm “Back End Developer”, nhưng bạn sẽ tìm thấy
            một danh sách cho biết công ty đang tìm kiếm Nhà phát triển Ruby
            hoặc Nhà phát triển PHP, v.v., vì ngôn ngữ . lập trình đó Chỉ các
            nhà phát triển mới biết nó phù hợp với loại khóa nào. Vì vậy, cuối
            cùng, bạn có thể làm tốt nhiều nhất có thể từ các ngôn ngữ lập
            trình. Bạn sẽ không thể làm điều này với JavaScript vì nó là một
            phần hạn chế hơn. Có một sự khác biệt chính: hầu hết các hệ thống
            quản lý nội dung. Nó được xây dựng trên ngôn ngữ lập trình Back End.
            Giống như bất kỳ ứng dụng web lớn, phức tạp nào, JavaScript có thể
            gặp các vấn đề về hiệu suất như độ trễ hoặc lỗi và trong một số
            trường hợp, bạn có thể sử dụng JavaScript để tạo bất kỳ thứ gì bạn
            có thể thiết kế. Đôi khi có một giải pháp tốt hơn thế. Bằng cách học
            mã sẽ dạy bạn tìm ra giải pháp tốt nhất cho một vấn đề cụ thể. Và
            đôi khi điều này có nghĩa là sử dụng chính ngôn ngữ back end. Nói
            chung, hầu hết các nhà phát triển Back End làm việc với các nhà phát
            triển Front End để có được mã hoạt động trên thiết kế trang web.
            hoặc thiết kế ứng dụng bao gồm cả việc tùy chỉnh thiết kế đó khi cần
            thiết. Cuối cùng cũng đến với chủ đề cuối cùng của Full Stack.
          </p>
        </div>
      </div>
    </div>
  );
}
