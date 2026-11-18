import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { featuresData } from "./featuresData";
import FeaturesGrid from "./FeaturesGrid";
import heroBg from "../../assets/campus1.jpg";
import "./Features.css";

export default function Features() {
  // Feature circular carousel state
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [featureRotation, setFeatureRotation] = useState(0);

  // Swipe support ref for mobile
  const featureTouchStart = useRef(0);

  const featureCount = featuresData.length;

  // --- FEATURES ORBIT NAVIGATION ---
  const handleNextFeature = useCallback(() => {
    setFeatureRotation((prev) => prev - 360 / featureCount);
    setActiveFeatureIdx((prev) => (prev + 1) % featureCount);
  }, [featureCount]);

  const handlePrevFeature = useCallback(() => {
    setFeatureRotation((prev) => prev + 360 / featureCount);
    setActiveFeatureIdx((prev) => (prev - 1 + featureCount) % featureCount);
  }, [featureCount]);

  const handleSelectFeature = useCallback(
    (index) => {
      if (index === activeFeatureIdx) return;
      let diff = index - activeFeatureIdx;
      if (diff > featureCount / 2) diff -= featureCount;
      if (diff < -featureCount / 2) diff += featureCount;
      setFeatureRotation((prev) => prev - diff * (360 / featureCount));
      setActiveFeatureIdx(index);
    },
    [activeFeatureIdx, featureCount]
  );

  // Keyboard navigation for feature orbit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNextFeature();
      } else if (e.key === "ArrowLeft") {
        handlePrevFeature();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextFeature, handlePrevFeature]);

  const activeFeature = featuresData[activeFeatureIdx];

  // Helper function to calculate polar coordinates for items
  const getCoordinates = (index, total) => {
    const angleDeg = index * (360 / total);
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = 50 + 39 * Math.sin(angleRad);
    const y = 50 - 39 * Math.cos(angleRad);
    return { x, y };
  };

  return (
    <div className="features-page">
      {/* 1. HERO SECTION — with school campus background image + deep navy/blue overlay */}
      <section className="f-hero f-hero--with-bg">
        {/* Full-bleed background image */}
        <div className="f-hero__bg-wrap" aria-hidden="true">
          <img src={heroBg} alt="" className="f-hero__bg-img" />
          <div className="f-hero__bg-overlay" />
          {/* Subtle mesh gradient on top */}
          <div className="f-hero__bg-mesh" />
        </div>

        <div className="f-hero__inner">
          <div className="f-hero__badge f-hero__badge--light">
            <span className="f-hero__badge-dot" />
            Qodo Preschool &amp; School Management
          </div>
          <h1 className="f-hero__title f-hero__title--light">
            Simplify Every Part of <br />
            <span className="f-hero__title-highlight--light">Your Preschool Operations</span>
          </h1>
          <p className="f-hero__sub f-hero__sub--light">
            Admissions, attendance, fees, parent communication, live transport, and
            daily toddler logs — all unified into one easy-to-use cloud platform.
          </p>

          <div className="f-hero__actions">
            <a href="#features-carousel" className="f-btn f-btn--primary">
              Explore Features Tour
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <Link to="/contact" className="f-btn f-btn--white-ghost">
              Book a Free Demo
            </Link>
          </div>

          <div className="f-hero__trust f-hero__trust--light">
            <div className="f-hero__trust-item">
              <span className="f-star">★</span> 4.9/5 Rating from Educators
            </div>
            <div className="f-hero__trust-divider" />
            <div className="f-hero__trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              100% Safe &amp; Paperless
            </div>
            <div className="f-hero__trust-divider" />
            <div className="f-hero__trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Instant Setup in 24 Hours
            </div>
          </div>
        </div>
      </section>

      {/* 2. CIRCULAR ORBIT FEATURES CAROUSEL (Matches Reference Image) */}
      <section id="features-carousel" className="f-orbit-section">
        <div className="f-section-head">
          <span className="f-kicker">Interactive Tour</span>
          <h2 className="f-section-title">Explore Core Features in Motion</h2>
          <p className="f-section-sub">
            Click the right arrow to switch features, or select any circular feature node
            in the orbit to discover how Qodo transforms daily school tasks.
          </p>
        </div>

        <div
          className="f-orbit"
          onTouchStart={(e) => (featureTouchStart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const diff = featureTouchStart.current - e.changedTouches[0].clientX;
            if (diff > 50) handleNextFeature();
            else if (diff < -50) handlePrevFeature();
          }}
        >
          {/* Faint ambient glow */}
          <div className="f-orbit__ambient-glow" />

          {/* Rotating Ring Container */}
          <div
            className="f-orbit__ring"
            style={{
              transform: `rotate(${featureRotation}deg)`,
            }}
          >
            {featuresData.map((item, index) => {
              const { x, y } = getCoordinates(index, featureCount);
              const isActive = index === activeFeatureIdx;

              return (
                <div
                  key={item.id}
                  className={`f-orbit__node ${isActive ? "is-active" : ""}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                  onClick={() => handleSelectFeature(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${item.title}`}
                >
                  {/* Counter-rotate each item so images and badges stay upright */}
                  <div
                    className="f-orbit__node-inner"
                    style={{
                      transform: `rotate(${-featureRotation}deg)`,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="f-orbit__node-img"
                    />

                    {/* Active yellow rating/stat pill badge on top right (matches reference image) */}
                    {isActive && (
                      <div className="f-orbit__badge anim-pop">
                        <span className="f-orbit__badge-star">★</span>
                        <span className="f-orbit__badge-text">{item.badge}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Content (Clean, boxless, matching reference image) */}
          <div className="f-orbit__center">
            <div key={activeFeature.id} className="f-orbit__center-content anim-fade">
              <p className="f-orbit__center-title">{activeFeature.title}</p>

              <blockquote className="f-orbit__center-quote">
                “{activeFeature.quote}”
              </blockquote>

              {/* Minimal Navigation Arrows */}
              <div className="f-orbit__nav">
                <button
                  type="button"
                  className="f-orbit__nav-arrow"
                  onClick={handlePrevFeature}
                  aria-label="Previous feature"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="f-orbit__nav-arrow"
                  onClick={handleNextFeature}
                  aria-label="Next feature"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE FEATURES GRID */}
      <FeaturesGrid />

       4. CALL TO ACTION/
      <section className="f-cta">
        <div className="f-cta__inner">
          <div className="f-cta__badge">Get Started with Qodo</div>
          <h2 className="f-cta__title">
            Ready to Run Your Preschool <br />
            the Modern, Smart Way?
          </h2>
          <p className="f-cta__sub">
            Join hundreds of progressive educators who save 15+ administrative hours every week.
            Book a 15-minute guided walkthrough with our team.
          </p>

          <div className="f-cta__buttons">
            <Link to="/contact" className="f-btn f-btn--primary f-btn--large">
              Book a Free Personalized Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
