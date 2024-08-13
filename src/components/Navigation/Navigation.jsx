import { NavLink } from "react-router-dom";
import classNames from "classnames";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Home</NavLink>
      <NavLink to="/SignUp" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>SignUp</NavLink>
      <NavLink to="/login" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>login</NavLink>
    </nav>
  );
}

export default Navigation;