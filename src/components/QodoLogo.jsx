/* The Qodo logo drawn in code: crisp at any size, with a see-through background.
   Use light={true} on dark backgrounds (the small text turns white). */
export default function QodoLogo({ light = false, className = "" }) {
  const tagline = light ? "#ffffff" : "#2b3150";

  return (
    <svg
      className={className}
      viewBox="0 0 786 246"
      role="img"
      aria-label="Qodo Education Management"
    >
      <path d="M32.6 119.1A77.5 77.5 0 0 1 166.7 62.1" fill="none" stroke="#f72429" strokeWidth="55"/>
      <path d="M166.7 62.1A77.5 77.5 0 0 1 162.9 171.7" fill="none" stroke="#0786f8" strokeWidth="55"/>
      <path d="M162.9 171.7A77.5 77.5 0 0 1 32.6 119.1" fill="none" stroke="#fbb70d" strokeWidth="55"/>
      <path d="M168 178 L200 212" fill="none" stroke="#0786f8" strokeWidth="40" strokeLinecap="round"/>
      <circle cx="32.6" cy="119.1" r="27" fill="#f58a1f"/>
      <circle cx="166.7" cy="62.1" r="27" fill="#7a45c8"/>
      <circle cx="162.9" cy="171.7" r="25" fill="#3f9b4b"/>
      <circle cx="110" cy="115" r="52" fill="#ffffff"/>
      <path d="M86 108 Q95 96 104 108 M118 108 Q127 96 136 108" fill="none" stroke="#14224f" strokeWidth="5" strokeLinecap="round"/>
      <path d="M88 124 Q111 150 134 124" fill="none" stroke="#14224f" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="319" cy="109" r="58" fill="none" stroke="#f72429" strokeWidth="36"/>
      <path d="M350 146 L390 186" fill="none" stroke="#f72429" strokeWidth="32" strokeLinecap="round"/>
      <circle cx="462" cy="129" r="42" fill="none" stroke="#0786f8" strokeWidth="31"/>
      <circle cx="587" cy="129" r="42" fill="none" stroke="#fbb70d" strokeWidth="31"/>
      <rect x="614" y="33" width="31" height="152" rx="15.5" fill="#fbb70d"/>
      <circle cx="712.5" cy="129" r="42" fill="none" stroke="#0786f8" strokeWidth="31"/>
      <text x="246" y="235" textLength="524" lengthAdjust="spacing" fontFamily="Figtree, Arial, sans-serif" fontSize="22" fontWeight="600" fill={tagline}>EDUCATION MANAGEMENT</text>
    </svg>
  );
}