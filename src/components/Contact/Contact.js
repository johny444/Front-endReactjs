import React from "react";
import "./Contact.css";

export default function Contact() {
  const data = [
    {
      id: 1,
      name: "KiattysackSisanonh",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "https://seeklogo.com/images/F/facebook-messenger-logo-36376366E2-seeklogo.com.png",
      desc: "My name’s Kuang.Glad to meet you.",
    },
    {
      id: 2,
      name: "ChanthalaSaliengnak",
      title: "Co-Founder ",
      img: "https://scontent.fdad3-2.fna.fbcdn.net/v/t1.18169-1/s480x480/28059287_606523869681142_618195966234094473_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=NJWqdwwBHmsAX_0hQbS&_nc_ht=scontent.fdad3-2.fna&oh=2564bd77729cfc4c466200a0221adbb0&oe=6197FA74",
      icon: "https://seeklogo.com/images/F/facebook-messenger-logo-36376366E2-seeklogo.com.png",
      desc: "My name’s Jacky. Glad to meet you ",
      featured: true,
    },
    {
      id: 3,
      name: "ViengmanyChanthakhan",
      title: "CEO ",
      img: "https://scontent.fdad3-2.fna.fbcdn.net/v/t1.6435-9/44391560_2159547367645882_555394075155496960_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AsoNFuo_WwMAX8a_wDa&_nc_ht=scontent.fdad3-2.fna&oh=f0d0e1313716b0d7535925a5960acc14&oe=6198CD74",
      icon: "https://seeklogo.com/images/F/facebook-messenger-logo-36376366E2-seeklogo.com.png",
      desc: "My name’s Johny. Glad to meet you",
    },
  ];

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        {data.map((d) => (
          <div className={d.featured ? "container-card  featured" : "container-card "}>
            <div className="card-top">
              <img
                src="https://github.com/safak/youtube/blob/react-portfolio/public/assets/right-arrow.png?raw=true"
                className="card-top-left"
                alt=""
              />
              <img src={d.img} className="card-top-user" alt="" />
              <img src={d.icon} className="card-top-right" alt="" />
            </div>
            <div className="card-center">{d.desc}</div>
            <div className="card-bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
