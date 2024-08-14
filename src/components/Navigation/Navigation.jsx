import { NavLink } from "react-router-dom";
import classNames from "classnames";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Home</NavLink>
      <NavLink to="/SignUp" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>SignUp</NavLink>
      <NavLink to="/login" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>login</NavLink>
      <NavLink to="/about" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Contact</NavLink>
      <NavLink to="/services" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Services</NavLink>
      <NavLink to="/users" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Users</NavLink>
      <NavLink to="/posts" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Posts</NavLink>
    </nav>
  );
}

export default Navigation;