import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">
          <Link to="/">Fav Anime</Link>
        </div>
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
