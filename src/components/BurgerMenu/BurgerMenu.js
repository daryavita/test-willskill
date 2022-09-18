import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="burger-menu__menu-btn"
        onClick={() => setIsOpen(true)}
      ></button>
      <div className={isOpen ? "burger-menu burger-menu__open" : "burger-menu"}>
        <div className="burger-menu__container">
          <button
            className="burger-menu__close-btn"
            onClick={() => setIsOpen(false)}
          ></button>
          <nav className="burger-menu__nav-links">
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
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
