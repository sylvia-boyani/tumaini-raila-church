
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./ChurchLife.css";

const activities = [
  {
    number: "01",
    category: "Worship & Praise",
    title: "Together in His Presence",
    description:
      "Moments of worship, praise and fellowship as we gather together in faith.",
    image: "/images/23.jpeg",
    className: "activity-large",
  },
  {
    number: "02",
    category: "Fellowship",
    title: "Growing Together",
    description:
      "Building meaningful relationships through Christian fellowship.",
    image: "/images/19.jpeg",
    className: "activity-small",
  },
  {
    number: "03",
    category: "Community",
    title: "Faith in Action",
    description:
      "Sharing God's love through service, compassion and community engagement.",
    image: "/images/22.jpeg",
    className: "activity-small",
  },
  {
    number: "04",
    category: "Prayer",
    title: "United in Prayer",
    description:
      "Creating space for prayer, encouragement and spiritual growth.",
    image: "/images/3.jpeg",
    className: "activity-wide",
  },
];

function ChurchLife() {
  return (
    <section className="church-life-section" id="church-life">
      <div className="church-life-container">

        <motion.div
          className="church-life-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">LIFE AT TUMAINI RAILA</span>

          <h2>
            A Church Alive With
            <span> Faith, Love & Community.</span>
          </h2>

          <p>
            Church is more than a place we gather. It is a family where
            faith is nurtured, friendships are built and lives are
            strengthened through Christ.
          </p>
        </motion.div>

        <div className="church-life-grid">
          {activities.map((activity, index) => (
            <motion.article
              className={`church-life-card ${activity.className}`}
              key={activity.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <img src={activity.image} alt={activity.category} />

              <div className="church-life-overlay">
                <div className="activity-number">{activity.number}</div>

                <div className="activity-content">
                  <span>{activity.category}</span>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>

                <ArrowUpRight className="activity-arrow" size={25} />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="church-life-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            Every gathering is an opportunity to grow in faith
            and share in the love of Christ.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default ChurchLife;
