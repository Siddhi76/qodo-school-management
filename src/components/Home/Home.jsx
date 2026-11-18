import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FeaturesOrbit from "../Features/FeaturesOrbit";
import "./Home.css";

// Put your video file at: public/videos/school.mp4
const VIDEO_SRC = "/videos/school.mp4";
const stages = [
    {
        label: ["Preschool", "Management"],
        color: "#f5a524",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M8.5 14c.9 1.4 2 2 3.5 2s2.6-.6 3.5-2" />
                <path d="M9 9.5v.5M15 9.5v.5" />
            </svg>
        ),
    },
    {
        label: ["School", "Management"],
        color: "#3b8bff",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Z" />
                <path d="M12 6.5V19.5" />
            </svg>
        ),
    },
];

/* Flat illustration for the Why section (drawn in code, no image file needed) */
function WhyIllustration() {
    return (
        <svg
            className="why__svg"
            viewBox="0 0 520 440"
            role="img"
            aria-label="Students reading with a big stack of books"
        >
            {/* soft background blob */}
            <circle cx="262" cy="222" r="196" fill="#eaf2ff" />

            {/* sparkles */}
            <path d="M60 210 L64 220 L74 224 L64 228 L60 238 L56 228 L46 224 L56 220Z" fill="#14b8a6" />
            <path d="M120 70 L123 78 L131 81 L123 84 L120 92 L117 84 L109 81 L117 78Z" fill="#f7b538" />
            <path d="M300 48 L304 58 L314 62 L304 66 L300 76 L296 66 L286 62 L296 58Z" fill="#ef4f7a" />
            <path d="M470 205 L474 215 L484 219 L474 223 L470 233 L466 223 L456 219 L466 215Z" fill="#14b8a6" />
            <path d="M455 300 L458 308 L466 311 L458 314 L455 322 L452 314 L444 311 L452 308Z" fill="#ef4f7a" />
            <path d="M410 70 L413 77 L420 80 L413 83 L410 90 L407 83 L400 80 L407 77Z" fill="#f7b538" />

            {/* yellow folder behind */}
            <g transform="rotate(-9 130 270)">
                <rect x="62" y="150" width="150" height="230" rx="16" fill="#f7b538" />
                <rect x="62" y="150" width="62" height="26" rx="10" fill="#e9a21f" />
                <rect x="86" y="222" width="82" height="26" rx="6" fill="#e9a21f" opacity="0.7" />
            </g>
            {/* paper sheet */}
            <g transform="rotate(8 215 230)">
                <rect x="178" y="170" width="92" height="120" rx="6" fill="#ffffff" />
                <path d="M192 192 H256 M192 206 H256 M192 220 H240 M192 234 H250" stroke="#b9d3f5" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* teal leaf behind sitting person */}
            <path d="M232 214 C226 170 250 140 292 130 C300 176 276 210 232 214Z" fill="#14b8a6" />

            {/* book stack */}
            <rect x="140" y="346" width="260" height="42" rx="9" fill="#f7b538" />
            <rect x="140" y="346" width="22" height="42" rx="9" fill="#e9a21f" />
            <rect x="166" y="352" width="228" height="6" rx="3" fill="#fff" opacity="0.55" />

            <rect x="160" y="306" width="232" height="40" rx="9" fill="#3b8bff" />
            <rect x="160" y="306" width="22" height="40" rx="9" fill="#2a6fd6" />
            <rect x="186" y="312" width="200" height="6" rx="3" fill="#fff" opacity="0.55" />

            <rect x="136" y="266" width="246" height="40" rx="9" fill="#14b8a6" />
            <rect x="136" y="266" width="22" height="40" rx="9" fill="#0f9a8b" />
            <rect x="162" y="272" width="214" height="6" rx="3" fill="#fff" opacity="0.55" />

            <rect x="168" y="226" width="206" height="40" rx="9" fill="#ef4f7a" />
            <rect x="168" y="226" width="22" height="40" rx="9" fill="#d23a66" />
            <rect x="194" y="232" width="174" height="6" rx="3" fill="#fff" opacity="0.55" />

            {/* sitting person reading */}
            <rect x="246" y="190" width="58" height="52" rx="18" fill="#ff7a93" />
            <rect x="262" y="214" width="96" height="26" rx="12" fill="#1d2a6b" />
            <rect x="338" y="214" width="26" height="40" rx="10" fill="#1d2a6b" />
            <path d="M332 252 H370 V262 H332Z" fill="#14224f" />
            <circle cx="276" cy="168" r="23" fill="#f2c9a0" />
            <path d="M253 166 C252 144 296 140 299 166 C288 156 266 154 253 166Z" fill="#14224f" />
            <path d="M266 196 L306 184 L306 222 L266 228Z" fill="#3b6bd6" />
            <path d="M306 184 L342 196 L342 230 L306 222Z" fill="#2a56b5" />
            <path d="M258 206 Q272 222 300 214" stroke="#ff7a93" strokeWidth="12" strokeLinecap="round" fill="none" />

            {/* standing person, book raised */}
            <rect x="404" y="206" width="48" height="92" rx="16" fill="#5b7aa6" />
            <rect x="408" y="290" width="18" height="86" rx="8" fill="#14224f" />
            <rect x="430" y="290" width="18" height="86" rx="8" fill="#14224f" />
            <path d="M406 374 H428 V384 H402Z M430 374 H452 V384 H434Z" fill="#ef4f7a" />
            <path d="M410 218 L388 168 M446 218 L470 160" stroke="#5b7aa6" strokeWidth="15" strokeLinecap="round" fill="none" />
            <rect x="380" y="134" width="96" height="18" rx="5" fill="#ef4f7a" />
            <rect x="380" y="147" width="96" height="5" rx="2" fill="#fff" opacity="0.6" />
            <circle cx="428" cy="186" r="22" fill="#f2c9a0" />
            <path d="M406 184 C405 160 450 158 451 184 C440 174 418 172 406 184Z" fill="#14224f" />
            <path d="M414 206 L428 222 L442 206Z" fill="#ffffff" />

            {/* girl standing left with book */}
            <circle cx="104" cy="262" r="25" fill="#f26a2e" />
            <circle cx="104" cy="266" r="19" fill="#f2c9a0" />
            <rect x="84" y="288" width="40" height="60" rx="14" fill="#21b8a6" />
            <rect x="88" y="340" width="14" height="48" rx="6" fill="#14224f" />
            <rect x="108" y="340" width="14" height="48" rx="6" fill="#14224f" />
            <rect x="94" y="304" width="30" height="24" rx="4" fill="#ef4f7a" />
            <path d="M90 304 L108 312 L124 304" stroke="#21b8a6" strokeWidth="10" strokeLinecap="round" fill="none" />

            {/* pink plant bottom left */}
            <path d="M40 392 C44 352 84 336 118 344 C112 372 84 392 40 392Z" fill="#ef4f7a" />
            <path d="M60 392 C66 366 90 354 112 352" stroke="#d23a66" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* ground */}
            <rect x="70" y="392" width="390" height="9" rx="4.5" fill="#cfe3ff" />
        </svg>
    );
}

/* ================= TESTIMONIALS / FEEDBACK SECTION ================= */
/* Reference image style: 3 white cards with signature corner brackets, squircle icons, matching website royal blue theme */
const testimonials = [
  {
    id: "client-1",
    name: "Neha D.",
    role: "Preschool Director, Little Wonders",
    title: "24/7 Operations Support",
    quote: "Qodo transformed how our preschool runs every day. Student attendance, parent notifications, and fee management that used to take hours are now completely automated.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    themeColor: "#2563eb",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    id: "client-2",
    name: "Jay K.",
    role: "Preschool Parent & PTA Member",
    title: "Child Safety & Guidance",
    quote: "As a parent, having live updates on my child's daily activities, meals, and secure pickup validation in one simple app gives our entire family complete peace of mind.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    themeColor: "#0e1846",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "client-3",
    name: "Fatima S.",
    role: "Head Administrator, Early Years",
    title: "Smart Cloud Platform",
    quote: "We onboarded over 200 children across 3 campuses within a single week. Teachers love how easy it is to share moments with parents, and paperwork is down by half.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    themeColor: "#0284c7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

/* Reveals elements with the "reveal" class when they scroll into view */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const root = ref.current;
        if (!root) return undefined;
        const items = root.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) {
            items.forEach((el) => el.classList.add("is-visible"));
            return undefined;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
    return ref;
}

function TestimonialsSection() {
    const sectionRef = useReveal();

    return (
        <section className="ts testimonials-section" id="testimonials" ref={sectionRef}>
            {/* Top decorative tab from Reference Image */}
            <div className="ts-top-tab-wrap" aria-hidden="true">
                <div className="ts-top-tab">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>

            <div className="ts__inner">
                <header className="ts__head">
                    <p className="ts__kicker">Client Feedback</p>
                    <h2 className="ts__title">
                        Loved by Parents and Staff
                    </h2>
                    <p className="ts__sub">
                        Real experiences and feedback from educators and parents using Qodo every day.
                    </p>
                </header>

                <div className="ts__grid">
                    {testimonials.map((t) => (
                        <div className="ts-card-wrapper reveal" key={t.id} style={{ "--cardTheme": t.themeColor }}>
                            {/* Stylized Corner Brackets from Reference Image */}
                            <span className="ts-bracket ts-bracket--tr" aria-hidden="true" />
                            <span className="ts-bracket ts-bracket--bl" aria-hidden="true" />

                            <article className="ts-card">
                                <div className="ts-card__head">
                                    <div className="ts-card__squircle-icon">
                                        {t.icon}
                                    </div>
                                    <div className="ts-card__stars">
                                        {Array.from({ length: t.stars }).map((_, k) => (
                                            <svg key={k} className="ts-star" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="ts-card__title">{t.title}</h3>

                                <p className="ts-card__text">
                                    &ldquo;{t.quote}&rdquo;
                                </p>

                                <div className="ts-card__footer">
                                    <div className="ts-card__author">
                                        <img
                                            className="ts-card__avatar"
                                            src={t.avatar}
                                            alt={t.name}
                                            width={44}
                                            height={44}
                                            loading="lazy"
                                        />
                                        <div className="ts-card__author-meta">
                                            <strong className="ts-card__name">{t.name}</strong>
                                            <span className="ts-card__role">{t.role}</span>
                                        </div>
                                    </div>

                                    <div className="ts-card__read-more">
                                        <span>Read More</span>
                                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="ts-card__arrow-icon">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CtaBanner() {
    return (
        <section className="cta">
            <div className="cta__inner">
                <div className="cta__banner">
                    <div className="cta__overlay" />
                    <div className="cta__content">
                        <h2 className="cta__title">
                            Enroll For Our Various Online Courses
                        </h2>
                        <p className="cta__title">
                            Anywhere From The World
                        </p>
                        <Link to="/contact" className="cta__btn">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const videoRef = useRef(null);

    // Respect people who turn off animations in their device settings
    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (query.matches && videoRef.current) {
            videoRef.current.pause();
        }
    }, []);

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="home" id="home">
                <video
                    ref={videoRef}
                    className="home__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src={VIDEO_SRC} type="video/mp4" />
                </video>
                <div className="home__overlay" />

                <div className="home__inner">
                    <h1 className="home__title">
                        <span className="home__title-strong">Simple, Connected &amp; Future Ready</span>
                        <span className="home__title-light">Preschool Management Software</span>
                    </h1>

                    <p className="home__sub">
                        Qodo brings admissions, attendance, fees, communication, transport
                        and daily operations together in one easy-to-use cloud platform for
                        preschools, schools and colleges.
                    </p>

                    <div className="home__actions">
                        <Link to="/contact" className="home-btn home-btn--primary">
                            Book a free demo
                        </Link>
                        <a href="#why-qodo" className="home-btn home-btn--ghost">
                            See why Qodo
                        </a>
                    </div>

                    <ul className="home__stages">
                        {stages.map((s) => (
                            <li key={s.label[0]} className="home__stage">
                                <span className="home__stage-icon" style={{ color: s.color }}>
                                    {s.icon}
                                </span>
                                <span className="home__stage-label">
                                    {s.label[0]}
                                    <br />
                                    {s.label[1]}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="home__curve" aria-hidden="true" />
            </section>

            {/* ================= WHY SECTION ================= */}
            <section className="why" id="why-qodo">
                <div className="why__inner">
                    <header className="why__head">
                        <p className="why__kicker">
                            Education management that grows with your institute
                        </p>
                        <h2 className="why__title">Why schools choose Qodo</h2>
                    </header>

                    <div className="why__body">
                        <div className="why__media">
                            <WhyIllustration />
                        </div>

                        <div className="why__text">
                            <p className="why__para">
                                QODO is a modern Cloud Based Preschool Management Software developed to
                                simplify every aspect of preschool administration. It connects
                                administrators, teachers, parents and staff through one intelligent
                                platform for managing admissions, attendance, fees, communication,
                                transport, academics and daily operations.
                            </p>
                            <p className="why__para">
                                Built specifically for preschools and daycare centers, QODO eliminates
                                paperwork, improves collaboration, enhances child safety and provides
                                real time insights that help institutions operate efficiently while
                                delivering a better experience for parents and educators.
                            </p>
                            <Link to="/contact" className="why__btn">
                                Let&rsquo;s discuss
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <FeaturesOrbit id="features" />

            {/* ================= TESTIMONIALS SECTION ================= */}
            <TestimonialsSection />

            {/* ================= CTA BANNER ================= */}
            <CtaBanner />
        </>
    );
}

