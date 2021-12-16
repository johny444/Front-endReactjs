import React from 'react'
import "./Banner.css";

let bannerData = {
    title: " The Beginners Guide to Backend Development 2021 Guide",
    desc: "Các ngôn ngữ phát triển phụ trợ xử lý chức năng hậu trường của các ứng dụng web. Đó là mã kết nối web với cơ sở dữ liệu, quản lý các kết nối của người dùng và cung cấp năng lượng cho chính ứng dụng web. Phát triển phụ trợ hoạt động song song với giao diện người dùng để cung cấp sản phẩm cuối cùng cho người dùng cuối"
}

function Banner() {
    const handleClick = () => {
        window.open("https://learntocodewith.me/posts/backend-development/");
      };
    return (
        <div className="banner-bg" id="banner">
            <div className="banner-container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1> {bannerData.title} </h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        
                        <a className="banner-btn" onClick={handleClick} >Learn More</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;
