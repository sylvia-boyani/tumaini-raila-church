
import { ArrowUpRight, Heart, Cross } from "lucide-react";
import { motion } from "framer-motion";

import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome-section" id="about">

      <div className="welcome-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="welcome-image-wrapper"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          <div className="welcome-image-frame">
            <img
              src="/images/8.jpeg"
              alt="Members of a church community sharing fellowship"
            />
          </div>

          <div className="welcome-image-accent" />

          <div className="welcome-image-caption">
            <Heart size={19} />
            <span>A COMMUNITY ROOTED IN LOVE</span>
          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >

          <div className="welcome-eyebrow">
            <span />
            GET TO KNOW US
          </div>

          <h2>
            More Than a Church.
            <br />
            <em>A Family of Faith.</em>
          </h2>

          <p className="welcome-lead">
            Welcome to Tumaini Raila Church, a place where
            faith finds expression, love brings us together
            and hope inspires our journey with Christ.
          </p>

          <p className="welcome-description">
            We believe that the church is more than a building.
            It is a community of people growing in God's Word,
            supporting one another, worshipping together and
            making a meaningful difference in the lives of others.
          </p>

          <div className="welcome-values">

            <div className="welcome-value">
              <div className="value-icon">
                <Cross size={21} />
              </div>

              <div>
                <h4>Faith in Christ</h4>
                <span>Rooted in the Word of God</span>
              </div>
            </div>

            <div className="welcome-value">
              <div className="value-icon">
                <Heart size={21} />
              </div>

              <div>
                <h4>Love in Community</h4>
                <span>Growing together in fellowship</span>
              </div>
            </div>

          </div>

          <a href="#church-story" className="welcome-link">
            Discover Our Story
            <ArrowUpRight size={19} />
          </a>

        </motion.div>

      </div>

      <div className="welcome-bottom-decoration" />

    </section>
  );
}

export default Welcome;
