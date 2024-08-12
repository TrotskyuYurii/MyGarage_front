import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.navLink}>Home</NavLink>
      <NavLink to="/about" className={css.navLink}>About</NavLink>
      <NavLink to="/products" className={css.navLink}>Products</NavLink>
    </nav>
  );
}

export default Navigation;