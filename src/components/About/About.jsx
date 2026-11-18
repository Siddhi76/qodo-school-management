import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";

// Asset imports according to folder structure
import heroImg from "../../assets/school3.jpg";
import missionImg from "../../assets/Mission.jpg";
import whyBgImg from "../../assets/About3.jpg";

/* 3 Core Principles & Stats matching reference design */
const principles = [
  {
    step: "01",
    title: "Choose Best Course For You",
    subtitle: "Simplicity First",
    desc: "Designed for preschool educators with zero technical skills required. Clean screens and simple, intuitive steps.",
    linkText: "Learn More",
    linkTo: "/contact",
  },
  {
    step: "02",
    title: "Active Learning Engagement",
    subtitle: "Child Safety & Security",
    desc: "Real-time attendance tracking, authorized parent pickup validation, and instant emergency alerts keep children safe.",
    linkText: "Learn More",
    linkTo: "/contact",
  },
  {
    step: "03",
    title: "Joining Course Made Easy",
    subtitle: "Continuous 24/7 Support",
    desc: "Our dedicated onboarding team works with your staff from day one, ensuring a smooth and effortless transition.",
    linkText: "Learn More",
    linkTo: "/contact",
  },
];

const stats = [
  { value: "160+", label: "Courses & Campuses" },
  { value: "500+", label: "Educators & Teachers" },
  { value: "24 Lakh", label: "Operations Automated" },
  { value: "12K+", label: "Happy Parents" },
];

export default function About() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.12,
    });

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="about">
      {/* ================= HERO HEADER BANNER ================= */}
      <section className="about-hero" id="about-top">
        <div className="about-hero__bg">
          <img src={heroImg} alt="About Qodo Team" className="about-hero__img" />
          <div className="about-hero__overlay" />
          <div className="about-hero__angled-stripe" aria-hidden="true" />
          <div className="about-hero__accent-stripe" aria-hidden="true" />
        </div>

        <div className="about-hero__container">
          <div className="about-hero__title-box">
            <h1 className="about-hero__heading">About Us</h1>
          </div>

          <div className="about-hero__breadcrumb-pill">
            <Link to="/" className="about-hero__breadcrumb-link">Home</Link>
            <span className="about-hero__breadcrumb-sep">/</span>
            <span className="about-hero__breadcrumb-current">About Us</span>
          </div>
        </div>
      </section>

      {/* ================= Mission & Vision ================= */}
      <section className="about-mission scroll-animate" id="about-mission" ref={addToRefs}>
        <div className="about-mission__inner">
          <div className="about-mission__media">
            <div className="about-mission__img-wrapper">
              <img
                src={missionImg}
                alt="Transforming how schools operate"
                className="about-mission__img"
              />
            </div>
          </div>
          <div className="about-mission__text">
            <span className="about-mission__badge">Our Mission</span>
            <h2 className="about-mission__title">One smart platform for every preschool</h2>
            <p className="about-mission__para">
              Qodo helps your preschool run everything from one place. Handle
              admissions, attendance, fees, and messages to parents on one simple
              screen, without piles of paper.
            </p>
            <p className="about-mission__para">
              Teachers save time, parents stay informed, and children stay safe, so
              your team can spend more time with the kids.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Why Schools Choose Qodo ================= */}
      <section className="about-why scroll-animate" ref={addToRefs}>
        {/* Transparent background photo behind the section */}
        <div className="about-why__bg" aria-hidden="true">
          <img src={whyBgImg} alt="" className="about-why__bg-img" />
        </div>

        <div className="about-why__inner">
          <div className="about-why__text">
            <span className="about-why__badge">Why Schools Choose Qodo</span>
            <h2 className="about-why__title">
              Developed to simplify every aspect of preschool administration.
            </h2>
            <p className="about-why__para">
              Built specifically for preschools and daycare centers, QODO eliminates
              paperwork, improves collaboration, enhances child safety, and provides
              real-time insights that help institutions operate efficiently while
              delivering a better experience for parents and educators.
            </p>
            <Link to="/contact" className="about-why__btn">
              Let&rsquo;s discuss
            </Link>
          </div>
          <div className="about-why__highlights">
            <div className="about-why__card">
              <div className="about-why__card-icon">⚡</div>
              <h3>Fast Setup</h3>
              <p>Quick 2-to-5 day onboarding with full staff training included.</p>
            </div>
            <div className="about-why__card">
              <div className="about-why__card-icon">🛡️</div>
              <h3>Child Safety</h3>
              <p>Real-time attendance, pickup authorization, and emergency alerts.</p>
            </div>
            <div className="about-why__card">
              <div className="about-why__card-icon">📱</div>
              <h3>Parent App</h3>
              <p>Seamless fee payments, event notices, and progress tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3 SIMPLE STEPS / CORE PRINCIPLES ================= */}
      <section className="about-values" ref={addToRefs}>
        <div className="about-values__inner">
          <header className="about-values__head">
            <span className="about-values__badge">Why We Build</span>
            <h2 className="about-values__title">
              Follow These 3 Simple Steps to Join Our Class!
            </h2>
            <span className="about-values__line" aria-hidden="true" />
            <p className="about-values__subtitle">
              Built on a foundation of reliability, ease, and complete child safety.
            </p>
          </header>

          <div className="about-values__layout">
            {/* Left Column: 3 Steps */}
            <div className="about-values__steps">
              {principles.map((p, idx) => (
                <div className="about-step-item" key={p.step}>
                  <div className="about-step-header">
                    <span className="about-step-number">{p.step}</span>
                    <div className="about-step-title-wrap">
                      <h3 className="about-step-title">{p.title}</h3>
                      <span className="about-step-subtitle">{p.subtitle}</span>
                    </div>
                  </div>
                  <p className="about-step-desc">{p.desc}</p>
                  <Link to={p.linkTo} className="about-step-link">
                    <span>{p.linkText}</span>
                    <span className="about-step-circle-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </Link>
                  {idx < principles.length - 1 && <hr className="about-step-divider" />}
                </div>
              ))}
            </div>

            {/* Center Column: Oval / Stadium Capsule Photo */}
            <div className="about-values__center">
              <div className="about-capsule-frame">
                <div className="about-capsule-inner">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80"
                    alt="Qodo Educator & Student Success"
                    className="about-capsule-img"
                    loading="lazy"
                  />
                  <div className="about-capsule-badge" aria-hidden="true">
                    <span>★ 3 Core Steps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Stats Counters */}
            <div className="about-values__stats">
              {stats.map((s) => (
                <div className="about-stat-box" key={s.label}>
                  <span className="about-stat-number">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta scroll-animate" ref={addToRefs}>
        <div className="about-cta__inner">
          <div className="about-cta__content">
            <h2>Ready to make preschool management simple?</h2>
            <p>Tell us about your preschool and we will show you how Qodo can help.</p>
            <Link to="/contact" className="about-cta__btn">
              Schedule a Demo
            </Link>
          </div>
          <div className="about-cta__circle-bg" />
        </div>
      </section>
    </div>
  );
}