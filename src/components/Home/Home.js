import React from "react";
import { useEffect, useState } from "react";
import Homelist from "../homelist/Homelist";
import "./Home.css";
import {
  featuredHomelist,
  languagesHomelist,
  databasesHomelist,
  serverHomelist,
  apisHomelist,
} from "../../data";

export default function Home() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "languages",
      title: "Languages",
    },
    {
      id: "databases",
      title: "Databases",
    },
    {
      id: "server",
      title: "Server",
    },
    {
      id: "apis",
      title: "APIs",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredHomelist);
        break;
      case "languages":
        setData(languagesHomelist);
        break;
      case "databases":
        setData(databasesHomelist);
        break;
      case "server":
        setData(serverHomelist);
        break;
      case "apis":
        setData(apisHomelist);
        break;
      default:
        setData(featuredHomelist);
    }
  }, [selected]);

  return (
    <div className="home-home" id="home">
      <h1 className="home-pg">Backend Type Section</h1>
      <ul className="home-ft">
        {list.map((items) => (
          <Homelist
            title={items.title}
            active={selected === items.id}
            setSelected={setSelected}
            id={items.id}
          />
        ))}
      </ul>
      <div className="container-act">
        {data.map((d) => (
          <div className="items">
            <img className="items-img" src={d.img} alt="" />
            <h3 className="items-wr">{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
