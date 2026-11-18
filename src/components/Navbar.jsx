import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import QodoLogo from "./QodoLogo";
import "./Navbar.css";

const featurePages = [
  { to: "/features/admissions", label: "Paperless Admissions", desc: "Digital forms, KYC & merit list", icon: "📝", color: "#2563eb", bg: "#eff6ff" },
  { to: "/features/attendance", label: "Real-Time Attendance", desc: "RFID, biometric & parent SMS", icon: "⏱️", color: "#16a34a", bg: "#f0fdf4" },
  { to: "/features/fees", label: "Fee Invoicing & UPI", desc: "Automated dues & GST receipts", icon: "💳", color: "#db2777", bg: "#fdf2f8" },
  { to: "/features/parents", label: "Parent Portal App", desc: "Daily feeds & direct teacher chat", icon: "📱", color: "#7c3aed", bg: "#f5f3ff" },
  { to: "/features/transport", label: "Live GPS Bus Tracking", desc: "Arrival alerts & route safety", icon: "🚌", color: "#ea580c", bg: "#fff7ed" },
  { to: "/features/academics", label: "Gradebook & Reports", desc: "CBSE/ICSE printable cards", icon: "📊", color: "#0284c7", bg: "#f0f9ff" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const location = useLocation();

  // Add a soft shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileFeaturesOpen(false);
  }, [location.pathname]);

  const close = () => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileFeaturesOpen(false);
  };

  const isFeaturesActive = location.pathname.startsWith("/features");

  return (
    <header className={`nb${scrolled ? " nb--scrolled" : ""}`}>
      <div className="nb__inner">
        <Link to="/" className="nb__logo" onClick={close} aria-label="Qodo home">
          <QodoLogo light={true} />
        </Link>

        <nav
          id="nb-menu"
          className={`nb__menu${open ? " is-open" : ""}`}
          aria-label="Main"
        >
          <ul className="nb__list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nb__link${isActive ? " is-active" : ""}`
                }
                onClick={close}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nb__link${isActive ? " is-active" : ""}`
                }
                onClick={close}
              >
                About Us
              </NavLink>
            </li>

            {/* Features Dropdown with Sub-Pages */}
            <li
              className="nb__dropdown-wrapper"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="nb__dropdown-trigger-box">
                <NavLink
                  to="/features"
                  className={`nb__link nb__link--has-dropdown${isFeaturesActive ? " is-active" : ""}`}
                  onClick={close}
                >
                  Features
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" className="nb__dropdown-arrow">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </NavLink>

                {/* Mobile sub-menu toggle button */}
                <button
                  type="button"
                  className="nb__mobile-expand-btn"
                  onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                  aria-label="Toggle feature pages"
                >
                  {mobileFeaturesOpen ? "▲" : "▼"}
                </button>
              </div>

              {/* Desktop Floating Mega-Dropdown */}
              <div className={`nb__dropdown-menu ${dropdownOpen ? "is-visible" : ""}`}>
                <div className="nb__dropdown-header">
                  <span className="nb__dropdown-kicker">Core System Modules</span>
                  <span className="nb__dropdown-note">Explore dedicated feature pages</span>
                </div>

                <div className="nb__dropdown-grid">
                  {featurePages.map((fp) => (
                    <Link
                      key={fp.to}
                      to={fp.to}
                      className="nb__dropdown-card"
                      onClick={close}
                    >
                      <div className="nb__dropdown-icon" style={{ background: fp.bg, color: fp.color }}>
                        {fp.icon}
                      </div>
                      <div className="nb__dropdown-text">
                        <strong className="nb__dropdown-item-title">{fp.label}</strong>
                        <span className="nb__dropdown-item-desc">{fp.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="nb__dropdown-footer">
                  <Link to="/features" className="nb__dropdown-footer-link" onClick={close}>
                    <span>View All 8 Modules &amp; Interactive Tour</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Mobile Sub-Links Accordion */}
              {mobileFeaturesOpen && (
                <ul className="nb__mobile-sublist">
                  {featurePages.map((fp) => (
                    <li key={fp.to}>
                      <Link to={fp.to} className="nb__mobile-sublink" onClick={close}>
                        <span>{fp.icon}</span>
                        <span>{fp.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nb__link${isActive ? " is-active" : ""}`
                }
                onClick={close}
              >
                Contact
              </NavLink>
            </li>

            <li className="nb__mobile-cta">
              <Link to="/contact" className="nb__cta" onClick={close}>
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className="nb__cta nb__cta--desktop">
          Book Appointment
        </Link>

        <button
          type="button"
          className="nb__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nb-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
