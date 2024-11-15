import generalStyles from "../../App.module.css";
import navbarStyles from "./Navbar.module.css";
import { logo } from "../../assets/Image";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const NavItem = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatgpt3">What is GPT3</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#fetures">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Libray</a>
      </p>
    </>
  );
};

const Toggler = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={navbarStyles.navbar__menu}>
      {toggleMenu ? (
        <RiCloseLine
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <RiMenu3Line
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(true)}
        />
      )}
      {toggleMenu && (
        <div
          className={[
            navbarStyles.navbar__menu__container,
            generalStyles.scale__up__center,
          ].join(" ")}
        >
          <div className={navbarStyles.navbar__menu__container__links}>
            <NavItem />
            <div className={navbarStyles.navbar__menu__container__links__sign}>
              <p>Sign in</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className={[navbarStyles.navbar, navbarStyles.gradient__bg].join(" ")}>
      <div className={navbarStyles.navbar__links}>
        <div className={navbarStyles.navbar__links__logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={navbarStyles.navbar__links__container}>
          <NavItem />
        </div>
      </div>
      <div className={navbarStyles.navbar__sign}>
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <Toggler />
    </div>
  );
};

export default Navbar;
