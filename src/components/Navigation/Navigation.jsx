import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import css from "./Navigation.module.css";

function Navigation() {

  const isLogged = useSelector((state) => state.mainSlice.isLogged);

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>About</NavLink>
      <NavLink to="/home" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Home</NavLink>
      <NavLink to="/register" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>Register</NavLink>
      {!isLogged && <NavLink to="/login" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>LogIn</NavLink>}
      {isLogged && <NavLink to="/logout" className={({ isActive }) => classNames(css.navLink, { [css.active]: isActive })}>LogOut</NavLink>}
    </nav>
  );
}

export default Navigation;