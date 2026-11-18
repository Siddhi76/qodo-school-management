import { useState } from "react";
import { Link } from "react-router-dom";
import { featuresData } from "./featuresData";
import "./FeaturesGrid.css";

const CATEGORIES = [
  "All Modules",
  "Student & Safety",
  "Finance & Operations",
  "Academic & Care",
];

export default function FeaturesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Modules");

  // Filter features according to selected category — show ALL (no pagination)
  const filteredFeatures = featuresData.filter((item) => {
    if (selectedCategory === "All Modules") return true;
    if (selectedCategory === "Student & Safety") {
      return item.id === "admissions" || item.id === "attendance" || item.id === "transport";
    }
    if (selectedCategory === "Finance & Operations") {
      return item.id === "fees" || item.id === "parents" || item.id === "staff";
    }
    if (selectedCategory === "Academic & Care") {
      return item.id === "academics" || item.id === "preschool";
    }
    return true;
  });

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <section className="fg-section" id="all-features">
      <div className="fg-container">
        {/* Header */}
        <div className="fg-head">
          <span className="fg-kicker">All-In-One Cloud Modules</span>
          <h2 className="fg-title">
            Explore Features &amp; Dedicated Pages
          </h2>
          <p className="fg-sub">
            Browse through our complete management suite. Select any module to view its dedicated page,
            live workflow walkthrough, and detailed parent benefits.
          </p>

          {/* Category Filter Pills */}
          <div className="fg-categories" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`fg-cat-btn ${selectedCategory === cat ? "is-active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
                {cat === "All Modules" && ` (${featuresData.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid — all cards, no pagination */}
        <div className="fg-grid">
          {filteredFeatures.map((item) => (
            <article className="fg-card" key={item.id} style={{ "--accent": item.accentColor }}>
              {/* Media image container */}
              <div className="fg-card__media">
                <img src={item.image} alt={item.title} className="fg-card__img" loading="lazy" />
                <div className="fg-card__overlay" />
                <span className="fg-card__cat-badge">{item.category}</span>
                <span className="fg-card__rating">★ {item.badge}</span>
              </div>

              {/* Card body */}
              <div className="fg-card__body">
                <div className="fg-card__number-wrap">
                  <span className="fg-card__number">{item.number}</span>
                  <span className="fg-card__dot" />
                  <span className="fg-card__module-tag">Module</span>
                </div>

                <h3 className="fg-card__title">
                  <Link to={`/features/${item.id}`} className="fg-card__title-link">
                    {item.title}
                  </Link>
                </h3>

                <p className="fg-card__desc">{item.quote}</p>

                {/* Checklist of highlights */}
                <ul className="fg-card__highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="fg-card__highlight-item">
                      <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="fg-check-icon">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Card footer CTA */}
                <div className="fg-card__footer">
                  <Link to={`/features/${item.id}`} className="fg-card__link">
                    <span>View Page Details</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="fg-arrow">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>

                  <Link to="/contact" className="fg-card__demo-link" title="Book a personalized demo">
                    Free Demo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="fg-cta-banner">
          <div className="fg-cta-content">
            <h3>Need a Custom Combination of Features for Your School?</h3>
            <p>Our education consultants configure Qodo according to your exact campus needs and curriculum.</p>
          </div>
          <Link to="/contact" className="fg-cta-btn">
            Request Custom Setup
          </Link>
        </div>
      </div>
    </section>
  );
}
