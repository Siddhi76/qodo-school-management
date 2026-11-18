import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

// Images already in your project
import heroImg from "../../assets/campus2.jpg";
import chatImg from "../../assets/Mission.jpg";

/* ====== CHANGE YOUR OFFICE ADDRESS HERE (shown in the card AND on the map) ====== */
const OFFICE = {
  lines: ["ASP OL Media Tech Park,", "Hinjawadi Phase 1, Pune 411057"], // text shown in the "Visit Us At" card
  mapQuery: "ASP OL Media Tech Park, Hinjawadi Phase 1, Pune 411057", // what Google Maps searches for
};

const infoCards = [
  {
    label: "Location",
    title: "Visit Us At",
    lines: OFFICE.lines,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "24/7 Service",
    title: "Call Us On",
    lines: ["+91 (020) 1234-5678", "Mon - Sat, 9 AM - 6 PM"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Drop A Line",
    title: "Mail Address",
    lines: ["support@qodo.in", "sales@qodo.in"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Office Hours",
    title: "Opening Time",
    lines: ["Mon - Sat: 9am - 6pm", "Sunday (Closed)"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How fast can Qodo be set up at our preschool?",
    a: "Most preschools can be set up in 2 to 5 working days. Our team helps with importing your data, setting up roles and onboarding your staff.",
  },
  {
    q: "Can Qodo match the way our preschool already works?",
    a: "Yes. Qodo is modular, so you can turn on only what you need — admissions, fees, grading, communication and more.",
  },
  {
    q: "Is our student data safe on Qodo?",
    a: "Yes. We use strong security, role-based access and regular backups so student records stay protected.",
  },
  {
    q: "Can we try Qodo before we decide?",
    a: "Yes. You can book a live demo with our team, and your staff can also explore a trial sandbox environment.",
  },
];

export default function Contact() {
  const sectionRefs = useRef([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
  };

  const scrollToForm = () =>
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="contact-page">
      {/* ================= HERO BANNER ================= */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img src={heroImg} alt="Contact Qodo" className="contact-hero__img" />
          <div className="contact-hero__overlay" />
          <div className="contact-hero__accent-stripe" aria-hidden="true" />
        </div>
        <div className="contact-hero__container">
          <h1 className="contact-hero__heading">Contact</h1>
          <div className="contact-hero__crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="contact-hero__crumb-current">Contact</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="contact-info scroll-animate" ref={addToRefs}>
        <div className="contact-info__inner">
          <span className="contact-badge">Contact Info</span>
          <h2 className="contact-title">
            <em>Contact</em> &amp; Join Together
          </h2>
          <p className="contact-info__desc">
            Have questions about pricing, features or a free demo? Reach out through any
            channel below and our team will get back to you quickly.
          </p>

          <div className="contact-info__grid">
            {infoCards.map((c) => (
              <article className="info-card" key={c.title}>
                <div className="info-card__icon">{c.icon}</div>
                <span className="info-card__label">{c.label}</span>
                <h4>{c.title}</h4>
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHAT + FORM ================= */}
      <section className="contact-main scroll-animate" ref={addToRefs}>
        <div className="contact-main__inner">
          {/* Left: photo + chat card */}
          <div className="contact-visual">
            <div className="contact-visual__photo">
              <img src={chatImg} alt="Happy learner at school" />
            </div>
            <div className="chat-card">
              <div className="chat-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z" />
                </svg>
              </div>
              <h3>Chat With Us !</h3>
              <p>
                Built for preschools and daycare centers — talk to our team about
                admissions, fees, attendance and parent communication.
              </p>
              <button type="button" className="chat-card__btn" onClick={scrollToForm}>
                LET'S CHAT
              </button>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-wrap" id="contact-form">
            <span className="contact-badge contact-badge--left">Contact Us</span>
            <h2 className="contact-title contact-title--left">
              <em>Reach</em> &amp; Get In Touch With Us !
            </h2>

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out. Our school onboarding specialist will
                  contact you within 24 hours.
                </p>
                <button type="button" className="contact-form__btn" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input type="text" name="fullName" required placeholder="Your Name*" value={formData.fullName} onChange={handleChange} />
                  <input type="email" name="email" required placeholder="Your Email*" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <input type="tel" name="phone" required placeholder="Your Phone*" value={formData.phone} onChange={handleChange} />
                  <input type="text" name="subject" placeholder="Your Subject" value={formData.subject} onChange={handleChange} />
                </div>
                <textarea name="message" rows="6" required placeholder="Write Message" value={formData.message} onChange={handleChange} />
                <button type="submit" className="contact-form__btn">SEND MESSAGE</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="contact-map">
        <iframe
          title="Qodo office location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      {/* ================= FAQ ================= */}
      <section className="contact-faq scroll-animate" ref={addToRefs}>
        <div className="contact-faq__inner">
          <div className="contact-faq__head">
            <span className="contact-badge">FAQs</span>
            <h2 className="contact-title">
              Frequently Asked <em>Questions</em>
            </h2>
            <p>Find quick answers to common questions about Qodo.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`faq-item ${openFaq === idx ? "is-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-item__question">
                  <h4>{faq.q}</h4>
                  <span className="faq-item__toggle">+</span>
                </div>
                {openFaq === idx && <p className="faq-item__answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}