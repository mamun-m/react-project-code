import white from "../../assets/white.svg";
import underline from "../../assets/underline.svg";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import closemenu from "../../assets/close-white.svg";
import openmenu from "../../assets/menu-white.svg";

const Navbar = () => {
  const [menu, setmenu] = useState();
  const menuref = useRef();

  const openMenu = () => {
    menuref.current.style.right = "0";
  };
  const closeMenu = () => {
    menuref.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={white} className="logo-icon" alt="" />
      <img src={openmenu} alt="" onClick={openMenu} className="nav-menu-open" />
      <ul ref={menuref} className="nav-menu">
        <img
          onClick={closeMenu}
          className="nav-menu-close"
          src={closemenu}
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setmenu("home");
              }}
            >
              Home
            </p>
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setmenu("about");
              }}
            >
              About Me
            </p>{" "}
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#service">
            <p
              onClick={() => {
                setmenu("service");
              }}
            >
              Services
            </p>{" "}
            {menu === "service" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => {
                setmenu("work");
              }}
            >
              Portfolio
            </p>{" "}
            {menu === "work" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => {
                setmenu("contact");
              }}
            >
              Contact
            </p>{" "}
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me{" "}
        </AnchorLink>{" "}
      </div>
    </div>
  );
};

export default Navbar;
