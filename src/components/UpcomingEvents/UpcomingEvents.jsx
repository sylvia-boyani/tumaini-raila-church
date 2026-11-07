
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import "./UpcomingEvents.css";

const events = [
  {
    day: "15",
    month: "NOV",
    year: "2026",
    category: "Church Gathering",
    title: "Sunday Thanksgiving Service",
    description:
      "A special time of worship, gratitude and fellowship in the presence of God.",
    time: "Time to be confirmed",
    location: "Tumaini Raila Church",
  },
  {
    day: "21",
    month: "NOV",
    year: "2026",
    category: "Prayer & Fellowship",
    title: "Prayer and Fellowship Gathering",
    description:
      "An opportunity to come together in prayer, encouragement and spiritual growth.",
    time: "Time to be confirmed",
    location: "Tumaini Raila Church",
  },
  {
    day: "29",
    month: "NOV",
    year: "2026",
    category: "Community",
    title: "Community Fellowship Day",
    description:
      "A day dedicated to strengthening relationships and sharing the love of Christ.",
    time: "Time to be confirmed",
    location: "Venue to be confirmed",
  },
];

function UpcomingEvents() {
  return (
    <section className="upcoming-events-section" id="events">
      <div className="events-container">

        <motion.div
          className="events-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="events-eyebrow">WHAT'S HAPPENING</span>

          <h2>
            Moments That Bring
            <span> Us Together.</span>
          </h2>

          <p>
            From worship gatherings to fellowship and community
            activities, there is always an opportunity to connect,
            grow and experience life together.
          </p>
        </motion.div>

        <div className="events-list">
          {events.map((event, index) => (
            <motion.article
              className="event-item"
              key={`${event.day}-${event.title}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="event-date">
                <span className="event-day">{event.day}</span>
                <span className="event-month">{event.month}</span>
                <span className="event-year">{event.year}</span>
              </div>

              <div className="event-details">
                <span className="event-category">{event.category}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>

                <div className="event-meta">
                  <span>
                    <Clock size={15} />
                    {event.time}
                  </span>

                  <span>
                    <MapPin size={15} />
                    {event.location}
                  </span>
                </div>
              </div>

              <div className="event-action">
                <ArrowUpRight size={24} />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="events-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span>BE PART OF OUR COMMUNITY</span>
            <h3>There is a place for you here.</h3>
          </div>

          <a href="#contact" className="events-cta">
            Plan Your Visit
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default UpcomingEvents;
