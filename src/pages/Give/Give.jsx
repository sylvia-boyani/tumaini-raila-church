import React from "react";
import { Link } from "react-router-dom";
import "./Give.css";

const givingOptions = [
  {
    icon: "fa-mobile-screen-button",
    title: "M-Pesa Giving",
    description:
      "Support the work of the church conveniently through mobile money.",
    details: "M-Pesa payment details will be provided here.",
  },
  {
    icon: "fa-building-columns",
    title: "Bank Transfer",
    description:
      "Make a contribution directly to the church through a bank transfer.",
    details: "Church banking details will be provided here.",
  },
  {
    icon: "fa-globe",
    title: "Give Online",
    description:
      "We plan to provide a convenient online giving option for supporters.",
    details: "Online payment integration to be added.",
  },
  {
    icon: "fa-hand-holding-heart",
    title: "Gifts in Kind",
    description:
      "Contribute useful items, equipment, supplies and other resources.",
    details: "Contact the church to discuss your contribution.",
  },
];

const supportAreas = [
  {
    number: "01",
    title: "Church Ministry",
    description:
      "Support the day-to-day work and ministry of Tumaini Raila Church.",
  },
  {
    number: "02",
    title: "Evangelism & Missions",
    description:
      "Help support outreach, evangelism and the sharing of the Gospel.",
  },
  {
    number: "03",
    title: "Community Outreach",
    description:
      "Contribute towards initiatives that serve and strengthen the community.",
  },
  {
    number: "04",
    title: "Hope School",
    description:
      "Support the church's school and its mission of educating for life and eternity.",
  },
];

function Give() {
  return (
    <div className="give-page">

      {/* HERO */}
      <section className="give-hero">
        <div className="give-hero-overlay"></div>

        <div className="give-container give-hero-content">
          <span className="give-eyebrow">GIVING WITH PURPOSE</span>

          <h1>
            Your Giving.
            <br />
            <span>Someone's Tomorrow.</span>
          </h1>

          <p>
            Every act of generosity helps us serve, uplift lives and
            strengthen our community through faith and love.
          </p>

          <a href="#giving-options" className="give-primary-btn">
            Explore Giving Options
            <i className="fas fa-arrow-down"></i>
          </a>
        </div>

        <div className="give-hero-bottom">
          <span>Generosity is an expression of faith.</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="give-intro">
        <div className="give-container give-intro-grid">
          <div className="give-intro-heading">
            <span className="give-eyebrow">WHY WE GIVE</span>
            <h2>
              A generous heart
              <br />
              <span>changes lives.</span>
            </h2>
          </div>

          <div className="give-intro-text">
            <p>
              Giving is more than a financial contribution. It is an
              opportunity to participate in God's work and make a
              meaningful difference in the lives of others.
            </p>

            <p>
              Through your generosity, Tumaini Raila Church can continue
              its mission of faith, service, discipleship and community
              transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="give-ministries">
        <div className="give-container">
          <div className="give-section-heading">
            <span className="give-eyebrow">GIVE WITH PURPOSE</span>
            <h2>Where would you like to make a difference?</h2>
            <p>
              Your contribution can help strengthen different areas
              of the church's mission.
            </p>
          </div>

          <div className="give-ministries-grid">
            {supportAreas.map((area) => (
              <article className="give-ministry-card" key={area.number}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <p>0722337566 /  0726652265</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GIVING OPTIONS */}
      <section className="giving-options-section" id="giving-options">
        <div className="give-container">
          <div className="give-section-heading">
            <span className="give-eyebrow">WAYS TO GIVE</span>
            <h2>Choose how you would like to give</h2>
            <p>
              We welcome your generosity through different forms of
              contribution.
            </p>
          </div>

          <div className="giving-options-grid">
            {givingOptions.map((option, index) => (
              <article className="giving-option-card" key={option.title}>
                <div className="giving-option-top">
                  <span className="giving-option-number">
                    0{index + 1}
                  </span>

                  <div className="giving-option-icon">
                    <i className={`fas ${option.icon}`}></i>
                  </div>
                </div>

                <h3>{option.title}</h3>
                <p>{option.description}</p>

                <div className="giving-option-details">
                  {option.details}
                </div>

                <Link to="/contact" className="giving-option-link">
                  Enquire about giving
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRY SUPPORT */}
      

      {/* CLOSING CTA */}
      <section className="give-cta">
        <div className="give-container give-cta-content">
          <span className="give-eyebrow">THANK YOU FOR YOUR GENEROSITY</span>

          <h2>
            Together, we can make
            <br />
            <span>a lasting difference.</span>
          </h2>

          <p>
            Thank you for partnering with Tumaini Raila Church
            in its mission to serve God and the community.
          </p>

          <Link to="/contact" className="give-primary-btn">
            Get in Touch
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Give;