import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { featuresData } from "./featuresData";
import "./FeatureDetail.css";

export default function FeatureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const featureIndex = featuresData.findIndex((f) => f.id === id);
  const feature = featuresData[featureIndex];

  // If not found, redirect to /features
  if (!feature) {
    return (
      <div className="fd-not-found">
        <div className="fd-container">
          <h2>Feature Not Found</h2>
          <p>We could not find the feature you requested.</p>
          <Link to="/features" className="fd-btn fd-btn--primary">
            Explore All Features
          </Link>
        </div>
      </div>
    );
  }

  const prevFeature = featuresData[(featureIndex - 1 + featuresData.length) % featuresData.length];
  const nextFeature = featuresData[(featureIndex + 1) % featuresData.length];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="fd-page">
      {/* 1. HERO HEADER BANNER (With signature Bluish Transparent Overlay) */}
      <section className="fd-hero">
        <div className="fd-hero__bg">
          <img src={feature.image} alt={feature.title} className="fd-hero__img" />
          <div className="fd-hero__overlay" />
          <div className="fd-hero__accent-stripe" />
        </div>

        <div className="fd-hero__container">
          {/* Breadcrumb pill */}
          <div className="fd-hero__breadcrumb">
            <Link to="/" className="fd-hero__breadcrumb-link">Home</Link>
            <span className="fd-hero__breadcrumb-sep">/</span>
            <Link to="/features" className="fd-hero__breadcrumb-link">Features</Link>
            <span className="fd-hero__breadcrumb-sep">/</span>
            <span className="fd-hero__breadcrumb-current">{feature.title}</span>
          </div>

          <div className="fd-hero__badge" style={{ "--badgeColor": feature.accentColor }}>
            <span>Module {feature.number}</span>
            <span className="fd-hero__badge-sep">•</span>
            <span>{feature.category}</span>
          </div>

          <h1 className="fd-hero__title">{feature.title}</h1>

          <p className="fd-hero__lead">
            {feature.quote}
          </p>

          <div className="fd-hero__actions">
            <Link to="/contact" className="fd-btn fd-btn--primary">
              Schedule a 1-on-1 Walkthrough
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>

            <Link to="/features" className="fd-btn fd-btn--ghost">
              ← View All Modules
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & IN-DEPTH DESCRIPTION */}
      <section className="fd-overview">
        <div className="fd-container">
          <div className="fd-overview__grid">
            <div className="fd-overview__content">
              <span className="fd-kicker">Deep Dive</span>
              <h2 className="fd-heading">Why Leading Schools Love This Module</h2>
              <p className="fd-overview__text">{feature.longDesc}</p>

              <div className="fd-highlights-list">
                {feature.highlights.map((h, i) => (
                  <div className="fd-highlight-card" key={i}>
                    <div className="fd-highlight-icon">✔</div>
                    <span className="fd-highlight-title">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fd-overview__media">
              <div className="fd-media-card">
                <img src={feature.image} alt={feature.title} className="fd-media-img" />
                <div className="fd-media-badge">
                  <span className="fd-media-star">★</span>
                  <span>{feature.badge} User Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS & BENEFITS */}
      <section className="fd-benefits">
        <div className="fd-container">
          <div className="fd-benefits__head">
            <span className="fd-kicker">Proven Impact</span>
            <h2 className="fd-heading">Measurable Results for Your Campus</h2>
            <p className="fd-sub">Real performance gains reported by administrators and educators using Qodo.</p>
          </div>

          <div className="fd-benefits__grid">
            {feature.benefits.map((b, idx) => (
              <div className="fd-benefit-box" key={idx}>
                <span className="fd-benefit-stat" style={{ color: feature.accentColor }}>{b.stat}</span>
                <h3 className="fd-benefit-label">{b.label}</h3>
                <p className="fd-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW: HOW IT WORKS */}
      <section className="fd-workflow">
        <div className="fd-container">
          <div className="fd-workflow__head">
            <span className="fd-kicker">Step-By-Step Process</span>
            <h2 className="fd-heading">How It Works in Your Daily Routine</h2>
            <p className="fd-sub">Simple, reliable, and automated steps designed to save hours of administrative friction.</p>
          </div>

          <div className="fd-workflow__steps">
            {feature.workflow.map((w, idx) => (
              <div className="fd-step-card" key={idx}>
                <div className="fd-step-num-wrap">
                  <span className="fd-step-num">{w.step}</span>
                  {idx < feature.workflow.length - 1 && <span className="fd-step-line" />}
                </div>
                <div className="fd-step-body">
                  <h3 className="fd-step-title">{w.title}</h3>
                  <p className="fd-step-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQS ACCORDION */}
      <section className="fd-faqs">
        <div className="fd-container">
          <div className="fd-faqs__head">
            <span className="fd-kicker">Common Questions</span>
            <h2 className="fd-heading">Frequently Asked Questions</h2>
          </div>

          <div className="fd-faqs__list">
            {feature.faqs.map((faq, idx) => (
              <div
                className={`fd-faq-item ${activeFaq === idx ? "is-open" : ""}`}
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <div className="fd-faq-question">
                  <span>{faq.q}</span>
                  <span className="fd-faq-toggle">{activeFaq === idx ? "−" : "+"}</span>
                </div>
                {activeFaq === idx && (
                  <div className="fd-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT & PREV MODULE NAVIGATOR */}
      <section className="fd-nav-section">
        <div className="fd-container">
          <div className="fd-nav-grid">
            <Link to={`/features/${prevFeature.id}`} className="fd-nav-card fd-nav-card--prev">
              <span className="fd-nav-direction">← Previous Module</span>
              <strong className="fd-nav-title">{prevFeature.title}</strong>
            </Link>

            <Link to="/features" className="fd-nav-card fd-nav-card--center">
              <span className="fd-nav-direction">Explore</span>
              <strong className="fd-nav-title">All 8 Modules</strong>
            </Link>

            <Link to={`/features/${nextFeature.id}`} className="fd-nav-card fd-nav-card--next">
              <span className="fd-nav-direction">Next Module →</span>
              <strong className="fd-nav-title">{nextFeature.title}</strong>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="fd-cta">
        <div className="fd-container">
          <div className="fd-cta-box">
            <h2>Ready to Transform Your School with {feature.title}?</h2>
            <p>Get a personalized 15-minute demonstration configured for your student enrollment size.</p>
            <div className="fd-cta-actions">
              <Link to="/contact" className="fd-btn fd-btn--white">
                Book Free Consultation
              </Link>
              <Link to="/features" className="fd-btn fd-btn--outline-white">
                View Other Modules
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
