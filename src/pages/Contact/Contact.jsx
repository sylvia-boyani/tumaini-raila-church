
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowUpRight
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend demonstration.
    // Connect this form to a backend later.
    alert("Thank you for reaching out! Our contact form will be connected soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>WE WOULD LOVE TO HEAR FROM YOU</span>

          <h1>
            Let's Connect.
            <em> You're Welcome Here.</em>
          </h1>

          <p>
            Whether you are planning a visit, seeking prayer or
            simply have a question, we would be delighted to hear
            from you.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="contact-intro">
        <span>GET IN TOUCH</span>

        <h2>
          There Is Always
          <em> Room for You.</em>
        </h2>

        <p>
          We believe in building relationships, supporting one
          another and growing together in faith. Reach out to us
          and let us know how we can connect with you.
        </p>
      </section>

      {/* Contact Information and Form */}
      <section className="contact-main">
        <div className="contact-information">

          <div className="contact-info-heading">
            <span>CONTACT INFORMATION</span>
            <h2>We are here for you.</h2>
            <p>
              Get in touch with our church team using any of
              the contact details below.
            </p>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Phone size={21} />
            </div>
            <div>
              <h3>Call Us</h3>
              <p>0722337566 / 0726652265 / 0726579395</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Mail size={21} />
            </div>
            <div>
              <h3>Email Us</h3>
              <p>tumaini.raila@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MapPin size={21} />
            </div>
            <div>
              <h3>Visit Us</h3>
              <p>Opposite Southern Bypass</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Clock size={21} />
            </div>
            <div>
              <h3>Service Times</h3>
              <p>10:30 AM - 1:00 PM Main Service</p>
              <p>10:30 AM - 12:00 PM Children's Service</p>
              <p>10:30 AM - 1:00 PM Youth Service</p>
            </div>
          </div>

          <div className="contact-scripture">
            "Come to me, all you who are weary and burdened,
            and I will give you rest."
            <span>Matthew 11:28</span>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>SEND US A MESSAGE</span>
          <h2>How can we help you?</h2>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to talk about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={17} />
            </button>
          </form>
        </motion.div>
      </section>

      {/* Location */}
      <section className="contact-location">
        <div>
          <span>FIND YOUR WAY TO US</span>
          <h2>We Look Forward to Welcoming You.</h2>
          <p>
            Join us for worship, fellowship and a meaningful
            journey of faith.
          </p>
        </div>

        <div className="contact-map-placeholder">
          <MapPin size={35} />
          <p>Opposite Southern ByPass, Raila</p>
        </div>
      </section>

      {/* Final Invitation */}
      <section className="contact-cta">
        <span>YOUR PLACE IN OUR FAMILY</span>
        <h2>
          We Would Be Blessed
          <em> to Have You With Us.</em>
        </h2>

        <p>
          Come as you are. There is a place for you at
          Tumaini Raila Church.
        </p>
      </section>

    </main>
  );
}

export default Contact;
