
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ChevronDown
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Background image and overlay */}
      <div className="hero-background" />

      <div className="hero-overlay" />

      {/* Decorative gold line */}
      <div className="hero-content">

        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-line" />
          <span>WELCOME TO TUMAINI CHURCH, RAILA</span>
          <span className="hero-line" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A Place of Faith.
          <br />
          <span>A Home of Hope.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover a community rooted in faith, united in love
          and growing together in the hope of Christ.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#visit" className="hero-primary-btn">
            Plan Your Visit
            <ArrowRight size={18} />
          </a>

          <a href="#about" className="hero-secondary-btn">
            <span className="play-icon">
              <Play size={14} fill="currentColor" />
            </span>
            Discover Our Church
          </a>
        </motion.div>

      </div>

      {/* Bottom information */}
      <div className="hero-bottom">

        <div className="hero-bottom-left">
          <span className="bottom-gold-line" />
          <span>FAITH. LOVE. HOPE.</span>
        </div>

        <a href="#about" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={17} />
        </a>

      </div>

    </section>
  );
}

export default Hero;
