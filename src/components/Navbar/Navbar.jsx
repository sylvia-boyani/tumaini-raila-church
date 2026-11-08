
import { useState } from "react";
import {
  Church,
  Menu,
  X,
  ArrowUpRight
} from "lucide-react";
import {
  Link,
  useLocation
} from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "/", section: false },
  { name: "About Us", href: "/#about", section: true },
  { name: "Ministries", href: "/#ministries", section: true },
  { name: "Give", href: "/give", section: false },
  { name: "Gallery", href: "/gallery", section: false },
  { name: "Contact", href: "/contact", section: false }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isHomePage = location.pathname === "/";

  return (
    <header className="church-navbar">
      <div className="navbar-container">

        {/* Church Logo */}
        <Link
          to="/"
          className="church-brand"
          onClick={closeMenu}
        >
          <div className="brand-icon">
            <Church size={27} strokeWidth={1.5} />
          </div>

          <div className="brand-text">
            <span className="brand-name">
              TUMAINI CHURCH
            </span>
            <span className="brand-subtitle">
              RAILA
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          id="mobile-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeMenu}
              className={
                link.name === "Gallery" && location.pathname === "/gallery"
                  ? "nav-active"
                  : ""
              }
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="mobile-visit-link"
            onClick={closeMenu}
          >
            Plan Your Visit
            <ArrowUpRight size={17} />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="visit-button"
          onClick={closeMenu}
        >
          <span>Plan Your Visit</span>
          <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
