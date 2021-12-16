import React, { useState } from "react";
import Typed from "react-typed";
import "../components/Header.css";
import Iimg from "../components/web11.png";
import vid from "../components/video.mp4";
import vid1 from "../components/video1.mp4";
import vid2 from "../components/video2.mp4";
import vid4 from "../components/video4.mp4";
import vid3 from "../components/video3.mp4";

const Header = () => {
  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {btns},
    {slides},
  ];

  var sliderNav = function(manual){
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
  }

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i);
    });
  });
  const handleClick = (btn) => {
    btn === "slide"
    ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
    : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);

  };

  return (
    <section className="header-wraper">
      <video
        className="video-slide active"
        src={vid4}
        id="video-slider"
        autoPlay
        muted
        loop
      ></video>
      <video
        className="video-slide "
        src={vid3}
        id="video-slider"
        autoPlay
        muted
        loop
      ></video>
      <video
        className="video-slide"
        src={vid2}
        id="video-slider"
        autoPlay
        muted
        loop
      ></video>
      <video
        className="video-slide"
        src={vid1}
        id="video-slider"
        autoPlay
        muted
        loop
      ></video>
      <video
        className="video-slide"
        src={vid}
        id="video-slider"
        autoPlay
        muted
        loop
      ></video>
      <div className="main-info">
        <h1>Backend PHÁT TRIỂN VÀ KHUYẾN MÃI TRANG WEB</h1>
        <Typed
          className="typed-text"
          strings={[
            "Java",
            "PHP",
            ".NET(C#,VB)",
            "Ruby, Python, SQL, JavaScript",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="slider-navigation" >
          <span className="nav-btn active" onClick={() => handleClick()}></span>
          <span className="nav-btn" onClick={() => handleClick()}></span>
          <span className="nav-btn" onClick={() => handleClick()}></span>
          <span className="nav-btn" onClick={() => handleClick()}></span>
          <span className="nav-btn" onClick={() => handleClick()}></span>
        </div>
        <a href="#content" className="btn-main-offer">
          Tìm Hiểu
        </a>
        <a href="#home" className="next">
          <img src={Iimg} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Header;
