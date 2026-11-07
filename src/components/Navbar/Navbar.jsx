
import { useState } from "react";
import {
  Church,
  Menu,
  X,
  ArrowUpRight
} from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Ministries", href: "#ministries" },
  { name: "Sermons", href: "#sermons" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="church-navbar">
      <div className="navbar-container">

        {/* Church Logo */}
        <a
          href="#home"
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
        </a>

        {/* Desktop Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#visit"
            className="mobile-visit-link"
            onClick={closeMenu}
          >
            Plan Your Visit
            <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Desktop CTA */}
        <a href="#visit" className="visit-button">
          <span>Plan Your Visit</span>
          <ArrowUpRight size={17} />
        </a>

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
