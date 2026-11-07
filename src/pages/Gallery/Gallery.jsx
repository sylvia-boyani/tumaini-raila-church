
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const categories = [
  "All",
  "Worship",
  "Fellowship",
  "Community",
  "Events",
];

const photos = [
  {
    id: 1,
    title: "A Time of Worship",
    category: "Worship",
    image: "/images/8.jpeg",
  },
  {
    id: 2,
    title: "United in Fellowship",
    category: "Fellowship",
    image: "/images/6.jpeg",
  },
  {
    id: 3,
    title: "Serving Together",
    category: "Community",
    image: "/images/23.jpeg",
  },
  {
    id: 4,
    title: "Moments ",
    category: "Fun",
    image: "/images/15.jpeg",
  },
  {
    id: 5,
    title: "Church Celebrations",
    category: "Events",
    image: "/images/20.jpeg",
  },
  {
    id: 6,
    title: "Growing Together",
    category: "Fellowship",
    image: "/images/22.jpeg",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter(
          (photo) => photo.category === activeCategory
        );

  return (
    <main className="gallery-page">

      {/* Gallery Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <div className="gallery-hero-content">
            <span>THE TUMAINI RAILA EXPERIENCE</span>

            <h1>
              Moments of Faith.
              <br />
              <em>Memories of Grace.</em>
            </h1>

            <p>
              Celebrating the moments, people and experiences
              that make our church family special.
            </p>

            <Link to="/" className="gallery-back-link">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="gallery-intro">
        <span>OUR CHURCH, OUR STORY</span>

        <h2>
          Every Picture Tells
          <em> A Story.</em>
        </h2>

        <p>
          From moments of worship to shared laughter and
          meaningful fellowship, explore the experiences
          that bring us together in faith and love.
        </p>
      </section>

      {/* Gallery Filters */}
      <section className="gallery-content">
        <div className="gallery-filter-bar">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div layout className="gallery-page-grid">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.article
                layout
                key={photo.id}
                className="gallery-page-item"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <img src={photo.image} alt={photo.title} />

                <div className="gallery-page-caption">
                  <div>
                    <span>{photo.category}</span>
                    <h3>{photo.title}</h3>
                  </div>

                  <ArrowUpRight size={22} />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Gallery CTA */}
      <section className="gallery-page-cta">
        <span>YOU ARE ALWAYS WELCOME</span>

        <h2>
          Become Part of
          <em> Our Story.</em>
        </h2>

        <p>
          Join us for worship, fellowship and a growing journey
          of faith at Tumaini Raila Church.
        </p>

        <Link to="/#contact" className="gallery-visit-button">
          Plan Your Visit
          <ArrowUpRight size={18} />
        </Link>
      </section>

    </main>
  );
}

export default Gallery;
