
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Heart,
  Shield,
  Baby,
  Music2,
  HandHeart,
  GraduationCap
} from "lucide-react";

import "./Ministries.css";

const ministries = [
  {
    number: "01",
    title: "Youth Ministry",
    description:
      "Equipping young people to grow in faith, discover their purpose and become positive influences in their communities.",
    image: "/images/16.jpeg",
    icon: Users
  },
  {
    number: "02",
    title: "Women Ministry",
    description:
      "Building a community of women who encourage one another through prayer, fellowship and spiritual growth.",
    image: "/images/9.jpeg",
    icon: Heart
  },
  {
    number: "03",
    title: "Men Ministry",
    description:
      "Encouraging godly leadership, brotherhood and a life of integrity, service and responsibility.",
    image: "/images/mens.jpeg",
    icon: Shield
  },
  {
    number: "04",
    title: "Children's Ministry",
    description:
      "Nurturing young hearts through biblical teaching, fellowship and meaningful Christian experiences.",
    image: "/images/21.jpeg",
    icon: Baby
  },
  {
    number: "05",
    title: "Worship & Choir",
    description:
      "Glorifying God through music, praise and heartfelt worship that brings the congregation together.",
    image: "/images/17.jpeg",
    icon: Music2
  },
  {
    number: "06",
    title: "Prayer Ministry",
    description:
      "Creating opportunities for prayer, intercession and spiritual encouragement within our church family.",
    image: "/images/3.jpeg",
    icon: HandHeart
  }
];

function Ministries() {
  return (
    <section className="ministries-section" id="ministries">

      <div className="ministries-container">

        {/* SECTION INTRO */}
        <motion.div
          className="ministries-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ministries-eyebrow">
            <span />
            FAITH IN ACTION
            <span />
          </div>

          <h2>
            Growing Together.
            <br />
            <em>Serving Together.</em>
          </h2>

          <p>
            Every person has a place to belong, grow and serve.
            Discover the different ministries through which
            we nurture faith, build relationships and serve
            our church community.
          </p>
        </motion.div>

        {/* MINISTRY GRID */}
        <div className="ministries-grid">

          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;

            return (
              <motion.article
                className="ministry-card"
                key={ministry.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.12
                }}
              >

                <div className="ministry-image">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    loading="lazy"
                  />

                  <span className="ministry-number">
                    {ministry.number}
                  </span>

                  <div className="ministry-image-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="ministry-card-content">

                  <h3>{ministry.title}</h3>

                  <p>{ministry.description}</p>

                  <div className="ministry-card-bottom">
                    <span>GROW IN FAITH</span>
                    <ArrowUpRight size={18} />
                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

      {/* HOPE SCHOOL FEATURE */}
      <motion.div
        className="hope-school-section"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        <div className="hope-school-image">
          <img
            src="/images/hopeSch.jpeg"
            alt="Pupils learning at Hope School"
            loading="lazy"
          />
        </div>

        <div className="hope-school-content">

          <div className="hope-school-eyebrow">
            <GraduationCap size={20} />
            OUR EDUCATION MINISTRY
          </div>

          <h2>Hope School</h2>

          <h3>Educating for Life and Eternity</h3>

          <div className="hope-gold-line" />

          <p>
            As a church-supported primary school, Hope School
            reflects our commitment to nurturing young minds
            through education, character development and
            Christian values.
          </p>

          <div className="hope-school-details">
            <span>EARLY YEARS EDUCATION</span>
            <span>UPPER PRIMARY SCHOOL</span>
            <span>JUNIOR SCHOOL</span>
          </div>

          <a
  href="https://hope-school.onrender.com/"
  className="hope-school-link"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Discover Hope School</span>
  <ArrowUpRight size={19} />
</a>

          <small>
            Visit the dedicated Hope School website.
            Website link will be connected once provided.
          </small>

        </div>

      </motion.div>

    </section>
  );
}

export default Ministries;
