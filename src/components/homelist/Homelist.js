import React from "react";
import "../homelist/homelist.css";

function Homelist({ id, title, active, setSelected }) {
  return <li className={active ? "homelist active" : "homelist"} onClick={() => setSelected(id)}>{title}</li>;
}

export default Homelist;
