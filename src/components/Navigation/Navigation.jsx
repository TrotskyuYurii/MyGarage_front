import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.navLink}>Home</NavLink>
      <NavLink to="/SignUp" className={css.navLink}>SignUp</NavLink>
      <NavLink to="/login" className={css.navLink}>login</NavLink>
    </nav>
  );
}

export default Navigation;