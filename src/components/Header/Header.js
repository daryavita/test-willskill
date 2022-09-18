import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="#">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <nav className="header__nav-links">
        <NavLink
          to="/faq"
          className="header__link"
          activeClassName="header__link_active"
        >
          FAQ
        </NavLink>
        <NavLink
          to="/pay"
          className="header__link"
          activeClassName="header__link_active"
        >
          Оплата и доставка
        </NavLink>
        <NavLink
          to="/return"
          className="header__link"
          activeClassName="header__link_active"
        >
          Возврат
        </NavLink>
        <NavLink
          to="/research"
          className="header__link"
          activeClassName="header__link_active"
        >
          Исследования
        </NavLink>
        <NavLink
          to="/profile"
          className="header__link"
          activeClassName="header__link_active"
        >
          Личный кабинет
        </NavLink>
        <Link to="#" className="header__link">
          8 (800) 600-09-90
        </Link>
      </nav>
      <Link to="#" className="header__basket">
        <span className="header__basket-count">1</span>
      </Link>
      <BurgerMenu />
    </header>
  );
}

export default Header;
