import React, { useState } from "react";
import "./Service.css";
import imarr from "../web19.png";


export default function Service() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/mobile.png?raw=true",
      title: "BaaS-backed",
      desc: "Đầu tiên, trình duyệt sẽ tải HTML và các nội dung, bao gồm logic ứng dụng JavaScript của bạn được viết trong khuôn khổ của tháng (Angular, React, Vue, Aurelia,…). ",
      img: "https://miro.medium.com/max/2000/1*ukHkdXd4l9nBrt8yvQ3zEQ.png",
    },
    {
      id: "2",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/globe.png?raw=true",
      title: "Backend-as-a-Service",
      desc: "Đây là lúc Backend-as-a-Service (BaaS) bước vào giai đoạn: ý tưởng là kết hợp sự dễ dàng của Function-as-a-Service với tất cả các API và khả năng mà một trang web hoặc ứng dụng .",
      img: "https://miro.medium.com/max/2000/1*ebxv4WVRzx_pElKLiGxA9g.png",
    },
    {
      id: "3",
      icon: "https://github.com/safak/youtube/blob/react-portfolio/public/assets/writing.png?raw=true",
      title: "The Serverless Paradigm",
      desc: "Hai dạng kiến trúc không máy chủ phổ biến là Chức năng như một Dịch vụ (ví dụ: AWS Lambda, Google Cloud Functions) và Backend-as-a-Service (ví dụ: Baqend, Firebase).",
      img: "https://miro.medium.com/max/2000/1*ix3L4aKzAdBJAHA6d70Ocw.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  

  return (
    <div className="service" id="service">
      <div
        className="service-slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="slider-container">
            <div className="slider-item">
              <div className="slider-left">
                <div className="slider-left-container">
                  <div className="slider-left-container-img">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Project</span>
                </div>
              </div>
              <div className="slider-right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <div className="service-arrow">
        <img
          src={imarr}
          className="service-arrow-left"
          alt=""
          onClick={() => handleClick()}
        />
        <img
          src={imarr}
          className="service-arrow-right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
}
