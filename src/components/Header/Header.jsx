import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <header className="component">
        <Link to="/" className="logo">
            <img src={Logo} alt="Routemate Logo" />
        </Link>
        <span>Routemate</span>

        <nav className="navigation">
          <NavLink to="/" className="link" end>Home</NavLink>
          <NavLink to="/products" className="link">Products</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>
    </header>
  )
}
