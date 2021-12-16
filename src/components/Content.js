import React,{useState} from 'react';
import "./Content.css";
import img from "./web5.jpg";
import img1 from "./web6.jpg";
import img2 from "./web7.jpg";
import Singlecontent from './singlecontent/singlecontent';
import Singlecontent1 from './singlecontent/singlecontent1';
import Singlecontent2 from './singlecontent/singlecontent2';

function Content() {

  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        <Singlecontent />
      </p>
  </div>
   const linkName=readMore?'Read Less << ':'Read More >> '
   const [read,setRead]=useState(false);
   const extraContent1=<div>
      <p className="extra-content">
       <Singlecontent1 />
      </p>
 </div>
 const linkName1=read?'Read Less <<':'Read More >> '
 const [readD,setReadD]=useState(false);
 const extraContent2=<dev>
   <p className="extra-content">
       <Singlecontent2 />
   </p>
 </dev>
   const linksName2=readD?'Read Less <<':'Read More >>' 
  return (
    <div className="container" id="content">
      <section className="content-con">
        <div className="content-l">
          <img src={img} alt="" />
        </div>
        <div className="content-r">
          <a onClick={()=>{setReadMore(!readMore)}}><h2>BackEnd Developer</h2></a>
          {readMore && extraContent}
          <p>
            Phát triển chương trình ở phía sau ngôi nhà Một phần của hoạt động
            đằng sau các loại cơ sở dữ liệu và cơ sở hạ tầngVà nó có lợi thế hơn
            Front End vì nó liên quan đến công nghệ trong lĩnh vực cụ thể đó.Vì
            vậy, cuối cùng, bạn có thể làm tốt nhiều nhất có thể từ các ngôn ngữ
            lập trình. Bạn sẽ không thể làm điều này với JavaScript vì nó là một
            phần hạn chế hơn. Có một sự khác biệt chính: hầu hết các hệ thống
            quản lý nội dung. Nó được xây dựng trên ngôn ngữ lập trình Back End.
            Giống như bất kỳ ứng dụng web lớn, phức tạp nào, JavaScript có thể
            gặp các vấn đề về hiệu suất như độ trễ hoặc lỗi và trong một số
            trường hợp.
          </p>
        </div>
      </section>
      <section className="content-con">
        <div className="content-r">
          <a onClick={()=> {setRead(!read)}}><h2>BackEnd roadmap 2021</h2></a>
          {read && extraContent1}
          <p>
            Tầm quan trọng của back-end là vô cùng quan trọng. Cho dù đó là bảo
            mật dữ liệu, bao gồm tên người dùng, mật khẩu, dữ liệu trang web,
            nếu phần phụ trợ được cập nhật, dữ liệu gốc phải được sao lưu. Và
            kiểm tra kỹ trước khi cập nhật, kể cả chức năng của trang web. tốc
            độ hiển thị
          </p>
        </div>
        <dic className="content-l">
          <img src={img1} alt="" />
        </dic>
      </section>
      <section className="content-con">
        <div className="content-l">
          <img src={img2} alt="" />
        </div>
        <div className="content-r">
          <a onClick={()=>{setReadD(!readD)}}><h2>BackEnd ReactJs</h2></a>
          {readD && extraContent2}
          <p>
            Bạn có thể sử dụng JavaScript để tạo bất kỳ thứ gì bạn thiết kế. Đôi
            khi có một giải pháp tốt hơn thế. Bằng cách học mã sẽ dạy bạn tìm ra
            giải pháp tốt nhất cho một vấn đề cụ thể. Và đôi khi điều này có
            nghĩa là sử dụng chính ngôn ngữ back end. Nói chung, hầu hết các nhà
            phát triển Back End làm việc với các nhà phát triển Front End để có
            được mã hoạt động trên thiết kế của trang web. hoặc thiết kế ứng
            dụng bao gồm cả việc tùy chỉnh thiết kế đó khi cần thiết. Cuối cùng
            cũng đến với chủ đề cuối cùng của Full Stack.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Content;
