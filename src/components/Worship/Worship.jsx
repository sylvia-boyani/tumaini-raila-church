
import { motion } from "framer-motion";
import {
  Clock,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Church,
  BookOpen,
  Heart
} from "lucide-react";

import "./Worship.css";

// Replace the placeholder schedules with the church's
// confirmed service days and times.

const services = [
  {
    number: "01",
    title: "Sunday Worship",
    subtitle: "A time of praise, worship and the Word",
    day: "Sundays",
    time: "10:30 - 1:00 PM",
    icon: Church,
    featured: true
  },
  {
    number: "02",
    title: "Home Fellowship Groups",
    subtitle: "Growing together through God's Word",
    day: "Teusdays - Neema Fellowship",
    time: "Saturdays - Grace Fellowship",
    icon: BookOpen,
    featured: false
  },
  {
    number: "03",
    title: "Prayer Meetings",
    subtitle: "Coming together in prayer and fellowship",
    day: "Every First Sunday of the Month",
    time: "9:00 AM - 10:00 AM",
    icon: Heart,
    featured: false
  }
];

function Worship() {
  return (
    <section className="worship-section" id="service-times">

      <div className="worship-container">

        {/* HEADING */}
        <motion.div
          className="worship-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="worship-eyebrow">
            <span />
            JOIN US IN FELLOWSHIP
            <span />
          </div>

          <h2>
            A Place to Worship.
            <br />
            <em>A Time to Connect.</em>
          </h2>

          <p>
            There is a place for you here. Join us as we gather
            in God's presence, grow in His Word and strengthen
            our fellowship as one church family.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="worship-grid">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                className={`worship-card ${
                  service.featured ? "featured-service" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}
              >

                <div className="worship-card-top">
                  <div className="worship-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <span className="worship-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="worship-subtitle">
                  {service.subtitle}
                </p>

                <div className="worship-divider" />

                <div className="worship-detail">
                  <CalendarDays size={17} />
                  <span>{service.day}</span>
                </div>

                <div className="worship-detail">
                  <Clock size={17} />
                  <span>{service.time}</span>
                </div>

                <div className="worship-card-bottom">
                  <span>YOU ARE WELCOME</span>
                  <ArrowUpRight size={19} />
                </div>

              </motion.article>
            );
          })}

        </div>

        {/* VISITOR INVITATION */}
        <motion.div
          className="worship-invitation"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="invitation-icon">
            <MapPin size={25} />
          </div>

          <div className="invitation-content">
            <h3>We Would Love to Welcome You</h3>

            <p>
              Whether you are visiting for the first time
              or looking for a church family, our doors
              and hearts are open to you.
            </p>
          </div>

          <a href="#contact" className="invitation-link">
            Plan Your Visit
            <ArrowUpRight size={18} />
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Worship;
