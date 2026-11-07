
import { motion } from "framer-motion";
import {
  Eye,
  HeartHandshake,
  BookOpen,
  ArrowUpRight,
  Cross
} from "lucide-react";

import "./ChurchStory.css";

const storyItems = [
  {
    icon: Eye,
    number: "01",
    title: "Our Vision",
    description:
      "To nurture a Christ-centred community where lives are transformed through faith, love, hope and the truth of God's Word."
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Our Mission",
    description:
      "To share the love of Christ, strengthen believers through God's Word and serve our community with compassion and purpose."
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Our Foundation",
    description:
      "We stand on the teachings of Jesus Christ, embracing prayer, fellowship, worship and a life guided by Scripture."
  }
];

function ChurchStory() {
  return (
    <section className="church-story" id="church-story">

      <div className="story-container">

        {/* SECTION INTRODUCTION */}
        <motion.div
          className="story-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="story-eyebrow">
            <span />
            WHO WE ARE
            <span />
          </div>

          <h2>
            Built on Faith.
            <br />
            <em>United in Purpose.</em>
          </h2>

          <p>
            Our journey is guided by faith in Christ, a heart
            for people and a commitment to sharing the hope
            of the Gospel with our community.
          </p>
        </motion.div>

        {/* STORY IMAGE */}
        <motion.div
          className="story-image"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="/images/railaC.jpeg"
            alt="Church congregation gathered in worship"
          />

          <div className="story-image-overlay">
            <Cross size={25} />
            <p>
              Growing in faith.
              <br />
              Walking together in Christ.
            </p>
          </div>
        </motion.div>

        {/* VISION, MISSION AND FOUNDATION */}
        <div className="story-cards">

          {storyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="story-card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}
              >
                <div className="story-card-top">
                  <div className="story-card-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="story-card-line" />
              </motion.article>
            );
          })}

        </div>

        {/* BOTTOM QUOTE */}
        <div className="story-quote">
          <span className="quote-mark">“</span>

          <p>
            Let all that you do be done in love.
          </p>

          <span className="quote-reference">
            1 CORINTHIANS 16:14
          </span>
        </div>

      </div>

    </section>
  );
}

export default ChurchStory;
