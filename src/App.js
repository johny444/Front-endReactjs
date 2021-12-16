import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Cta from "./components/CallToAction";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About me/About";
import Contact from "./components/Contact/Contact";
import Service from "./components/Sevice/Service";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import { useState } from "react";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#fff",
              },
            },
          },
        }}
      />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header />
      <Service />
      <Content />
      <Home />
      <Banner />
      <Contact />
      <Intro />
      <About />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
