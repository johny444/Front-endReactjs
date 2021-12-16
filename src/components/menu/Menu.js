import "./Menu.css";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
      <div className={"menu "+(menuOpen && "active")}>
        <ul>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#home">BackEnd</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#about">Nhắntin</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#service">Dịchvụ</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">Tiếpxúc</a>
          </li>
        </ul>
      </div>
    );
  }