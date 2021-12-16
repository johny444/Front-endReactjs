import React, { useEffect, useRef } from "react";
import "./Intro.css";
import Img from "../../components/web8.png";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      
      strings: ["Developer", "Designer", "Backend Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Img} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Xin Chào, Tôi tên là</h2>
          <h1>Sisanonh Kiattysack</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
