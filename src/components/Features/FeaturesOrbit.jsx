import { useState, useEffect, useRef, useCallback } from "react";
import { featuresData } from "./featuresData";
import "./Features.css";

export default function FeaturesOrbit({
  id = "features",
  kicker = "Interactive Tour",
  title = "Powerful Features, Made Simple",
  subtitle = "Click the right arrow to switch features, or select any circular feature node in the orbit to discover how Qodo transforms daily school tasks.",
}) {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [featureRotation, setFeatureRotation] = useState(0);
  const featureTouchStart = useRef(0);
  const orbitSectionRef = useRef(null);

  const featureCount = featuresData.length;

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

  // Polar coordinates along circular orbit (radius = 39% of half-width)
  const getCoordinates = (index, total) => {
    const angleDeg = index * (360 / total);
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = 50 + 39 * Math.sin(angleRad);
    const y = 50 - 39 * Math.cos(angleRad);
    return { x, y };
  };

  return (
    <div className="f-orbit-wrapper" ref={orbitSectionRef}>
      {/* CIRCULAR ORBIT FEATURES CAROUSEL */}
      <section id={id} className="f-orbit-section">
        <div className="f-section-head">
          <span className="f-kicker">{kicker}</span>
          <h2 className="f-section-title">
            {typeof title === "string" && title.includes("Simple") ? (
              <>
                Powerful Features, Made{" "}
                <span className="ft__mark" style={{ color: "var(--f-blue)" }}>
                  Simple
                </span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="f-section-sub">{subtitle}</p>
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
          {/* Faint ambient glow and circular orbital track */}
          <div className="f-orbit__ambient-glow" />
          <div className="f-orbit__track" aria-hidden="true" />

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
                  aria-label={`Select feature ${item.number}: ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectFeature(index);
                    }
                  }}
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

                    {/* Active yellow rating/stat pill badge on top right */}
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

