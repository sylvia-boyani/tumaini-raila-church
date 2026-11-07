
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>TUMAINI RAILA CHURCH</h2>
          <p className="footer-tagline">
            A place of faith, hope, love and fellowship.
          </p>
          <p>
            Growing together in faith, serving our community
            and sharing the love of Christ.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#ministries">Our Ministries</Link>
          <Link to="/#events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h3>Our Ministries</h3>
          <a href="/#ministries">Youth Ministry</a>
          <a href="/#ministries">Women Ministry</a>
          <a href="/#ministries">Men Ministry</a>
          <a href="/#ministries">Children's Ministry</a>
          <a href="/#ministries">Worship Ministry</a>
          <a href="https://hope-school.onrender.com/">Hope School</a>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>We would love to hear from you.</p>
          <Link to="/contact" className="footer-contact-link">
            Contact the Church
          </Link>
          <p className="footer-service-note">
            Join us for worship and fellowship.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Tumaini Raila Church.
          All rights reserved.
        </p>
        <p>Built on Faith. United in Purpose.</p>
      </div>
    </footer>
  );
}

export default Footer;
