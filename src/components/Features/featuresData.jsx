import campus1 from "../../assets/campus1.jpg";
import campus2 from "../../assets/campus2.jpg";
import campus3 from "../../assets/campus3.jpg";
import school1 from "../../assets/school1.jpg";
import school2 from "../../assets/school2.jpg";
import library from "../../assets/library.jpg";

export const featuresData = [
  {
    id: "admissions",
    number: "01",
    category: "Student Enrollment",
    title: "Smart Paperless Admissions",
    badge: "4.9",
    quote:
      "Streamline student registrations, document verification, and seat allocation seamlessly with instant paperless workflows.",
    longDesc:
      "Say goodbye to manual admission counters and piles of paperwork. Parents fill out mobile-friendly application forms, upload certificates, pay registration fees online, and receive automated status alerts at each step.",
    highlights: ["Digital Forms & KYC", "Merit List Engine", "Instant Fee Receipt", "Automated SMS Alerts"],
    image: campus1,
    accentColor: "#2563eb",
    workflow: [
      { step: "01", title: "Online Application Form", desc: "Parents complete intuitive digital admission forms from any mobile browser and upload KYC certificates." },
      { step: "02", title: "Document Review & Merit List", desc: "Admissions committee validates certificates, sets criteria, and generates automated merit lists." },
      { step: "03", title: "Instant Token Fee & Seat Allotment", desc: "Parents pay seat confirmation fees via UPI/card and receive digital admission slips immediately." },
    ],
    benefits: [
      { stat: "80%", label: "Faster Turnaround", desc: "Cut inquiry-to-admission cycle from days to hours." },
      { stat: "100%", label: "Paperless KYC", desc: "Secure digital document repository for every applicant." },
      { stat: "Zero", label: "Double Bookings", desc: "Real-time seat capacity tracker across all campuses." },
      { stat: "24/7", label: "Parent Enquiries", desc: "Automated SMS, WhatsApp, and email status updates." },
    ],
    faqs: [
      { q: "Can parents apply from their smartphones?", a: "Yes, application forms are fully mobile-responsive and require no app download." },
      { q: "Does it support custom registration fees and tokens?", a: "Yes, you can configure registration fees, seat deposit tokens, and online UPI payment gateways." },
      { q: "Can we export applicant data for government reporting?", a: "Yes, download full KYC and registration sheets in Excel, CSV, or formatted PDF anytime." },
    ],
  },
  {
    id: "attendance",
    number: "02",
    category: "Safety & Tracking",
    title: "Real-Time Attendance & Alerts",
    badge: "5.0",
    quote:
      "Track daily student and staff attendance with one-tap check-in and automated notifications sent directly to parents.",
    longDesc:
      "Support RFID smart cards, biometric scanners, or fast mobile check-in by class teachers. When a child scans in or is marked absent, an instant SMS and app notification is sent to parents.",
    highlights: ["RFID & Biometric Sync", "Instant Parent SMS", "Teacher Mobile Register", "Defaulter Reports"],
    image: campus2,
    accentColor: "#16a34a",
    workflow: [
      { step: "01", title: "1-Tap Morning Roll Call", desc: "Teachers mark classroom attendance in 30 seconds, or students tap their RFID smart cards at the entrance." },
      { step: "02", title: "Automatic Cloud Sync", desc: "Attendance records sync instantly with central administrative registers and biometric devices." },
      { step: "03", title: "Automated Parent Notifications", desc: "Parents of late or absent children receive immediate SMS and mobile app alerts automatically." },
    ],
    benefits: [
      { stat: "30 Sec", label: "Morning Roll Call", desc: "Save up to 15 minutes of instructional time each morning." },
      { stat: "100%", label: "Parent Transparency", desc: "Instant absentee notices eliminate attendance miscommunications." },
      { stat: "Auto", label: "Defaulter Logs", desc: "Identify students below required attendance thresholds automatically." },
      { stat: "Biometric", label: "Hardware Support", desc: "Plug-and-play integration with RFID gates and thumbprint scanners." },
    ],
    faqs: [
      { q: "What happens when our school internet is down?", a: "The mobile register works offline and synchronizes attendance logs automatically once reconnected." },
      { q: "Can parents notify teachers of planned leaves in advance?", a: "Yes, parents can submit leave requests through the parent app, which populates directly into the teacher's roll call." },
      { q: "Does it track staff and teacher attendance too?", a: "Yes, staff check-in times, biometric punches, and leave approvals are tracked on the same platform." },
    ],
  },
  {
    id: "fees",
    number: "03",
    category: "Finance & Accounts",
    title: "Automated Fee Invoicing & UPI",
    badge: "4.9",
    quote:
      "Collect tuition and transportation fees digitally with automated reminders, flexible installments, and zero billing errors.",
    longDesc:
      "Create customized fee structures by grade, configure sibling discounts, and enable one-click online payments via UPI, debit cards, and net banking with instant digital tax receipts.",
    highlights: ["UPI & Online Gateway", "Auto Due Reminders", "Installment Plans", "Daily Collection Ledger"],
    image: campus3,
    accentColor: "#db2777",
    workflow: [
      { step: "01", title: "Configurable Fee Structures", desc: "Set tuition, transport, meal, and activity fees by grade with automatic sibling or scholarship discounts." },
      { step: "02", title: "Scheduled WhatsApp & SMS Reminders", desc: "Parents receive automated due date reminders containing a 1-click UPI and card payment link." },
      { step: "03", title: "Instant GST/Tax Receipts", desc: "Digital receipts are issued on payment and instantly logged into the school's accounts ledger." },
    ],
    benefits: [
      { stat: "45%", label: "Faster Collections", desc: "Dramatically reduce overdue payments with automated payment links." },
      { stat: "Zero", label: "Manual Invoicing Errors", desc: "Automated late fee rules and sibling discount calculations." },
      { stat: "1-Click", label: "UPI & Net Banking", desc: "Zero friction payment experience via Google Pay, PhonePe, and cards." },
      { stat: "Real-Time", label: "Financial Ledger", desc: "Daily collection summaries, reconciliations, and bank deposit reports." },
    ],
    faqs: [
      { q: "Can we collect fees in quarterly or monthly installments?", a: "Yes, set flexible payment schedules (annual, term, quarterly, or monthly) with custom due dates." },
      { q: "How do parents receive fee receipts?", a: "Receipts are automatically generated as PDF downloads, sent via WhatsApp/SMS, and stored on the parent app." },
      { q: "Can parents pay in cash or cheque at the front office?", a: "Yes, administrators can record manual cash/cheque payments with instant print or SMS receipt generation." },
    ],
  },
  {
    id: "parents",
    number: "04",
    category: "Parent Community",
    title: "Parent Portal & Daily Feed",
    badge: "5.0",
    quote:
      "Keep parents connected with live daily activity feeds, photo memories, announcements, and direct teacher messaging.",
    longDesc:
      "Delight parents with daily updates about classroom activities, special event photos, teacher notes, digital diaries, and emergency circulars delivered directly to their mobile devices.",
    highlights: ["Class Activity Feed", "Photo Memories Gallery", "Direct Teacher Chat", "Digital Homework Diary"],
    image: school2,
    accentColor: "#7c3aed",
    workflow: [
      { step: "01", title: "Daily Classroom Moments", desc: "Teachers post photos, artwork, activity descriptions, and homework tasks with one tap." },
      { step: "02", title: "Private Parent Timeline", desc: "Parents view a dedicated, secure timeline celebrating their child's learning journey." },
      { step: "03", title: "Two-Way Monitored Messaging", desc: "Parents and teachers communicate about queries without sharing private personal phone numbers." },
    ],
    benefits: [
      { stat: "98%", label: "Parent Engagement", desc: "Foster deep trust and transparency between families and preschool staff." },
      { stat: "100%", label: "Privacy Protected", desc: "Photos and student data are accessible only by authorized guardians." },
      { stat: "Zero", label: "Paper Circulars", desc: "Save thousands of sheets annually with digital consent forms and notes." },
      { stat: "Push", label: "Urgent Announcements", desc: "Broadcast emergency weather or holiday notices in under 5 seconds." },
    ],
    faqs: [
      { q: "Can both parents and grandparents have access?", a: "Yes, multi-guardian logins allow both parents and authorized family members to view updates." },
      { q: "Is teacher personal contact information exposed?", a: "No, messaging happens securely inside the app within designated school hours, protecting teacher privacy." },
      { q: "Can parents download photos of their children?", a: "Yes, high-resolution classroom memories can be saved directly to the parent's phone photo gallery." },
    ],
  },
  {
    id: "transport",
    number: "05",
    category: "Transit & Security",
    title: "School Bus & Live GPS Tracking",
    badge: "4.9",
    quote:
      "Ensure student transit safety with live school bus GPS tracking, driver verification, and proximity arrival alerts.",
    longDesc:
      "Give parents and transport managers total visibility. Live map view of every bus, automated alerts 5 minutes before arrival at the child's stop, speed monitoring, and student onboard logs.",
    highlights: ["Live Bus GPS Map", "Proximity Stop Alerts", "Driver Background Logs", "Speed & Route Control"],
    image: school1,
    accentColor: "#ea580c",
    workflow: [
      { step: "01", title: "GPS Route Setup", desc: "Map school bus routes, designated pickup/drop stops, and assign authorized drivers and attendants." },
      { step: "02", title: "Student Boarding Scan", desc: "Attendant confirms student boarding and deboarding at each stop via RFID or mobile roster." },
      { step: "03", title: "Proximity Stop Alert", desc: "Parents receive a notification when the bus is 1 km or 5 minutes away from their child's stop." },
    ],
    benefits: [
      { stat: "Live", label: "Real-Time GPS Map", desc: "Live bus location tracking updated every 3 seconds for complete safety." },
      { stat: "5 Min", label: "Early Stop Alerts", desc: "No more parents and toddlers waiting in harsh rain or summer heat." },
      { stat: "Speed", label: "Over-Speed Alarms", desc: "Instant alerts sent to school authorities if vehicle exceeds speed limits." },
      { stat: "Verified", label: "Pickup Authorizations", desc: "Prevent unauthorized guardian pickups with photo-validated authorization." },
    ],
    faqs: [
      { q: "Do we need expensive proprietary GPS hardware?", a: "No, Qodo works with standard vehicle GPS OBD trackers or directly via the driver attendant's smartphone." },
      { q: "Can route changes or delays be broadcast to parents?", a: "Yes, dispatchers can send instant delay or route diversion broadcasts to affected bus routes." },
      { q: "Does it track multiple campus shuttle routes?", a: "Yes, manage dozens of bus routes across multiple campus branches from one centralized console." },
    ],
  },
  {
    id: "academics",
    number: "06",
    category: "Academic Records",
    title: "Gradebook & Report Cards",
    badge: "4.9",
    quote:
      "Record marks effortlessly, track learning progression, and publish beautiful board-aligned digital report cards.",
    longDesc:
      "Save teachers hours of repetitive grading. Configure grading rubrics for CBSE, ICSE, or preschool early learning goals, compute percentages automatically, and generate one-click printable report cards.",
    highlights: ["Automated GPA / Grading", "CBSE & ICSE Formats", "Student Trend Analytics", "1-Click PDF Cards"],
    image: library,
    accentColor: "#0284c7",
    workflow: [
      { step: "01", title: "Rubric & Subject Setup", desc: "Define evaluation parameters, weightages, and grading scales for your educational board." },
      { step: "02", title: "Fast Marks Entry", desc: "Teachers enter marks or developmental goal evaluations on a clean, spreadsheet-like interface." },
      { step: "03", title: "1-Click Digital Report Cards", desc: "System computes GPAs, ranks, and teacher remarks, generating printable, branded report cards." },
    ],
    benefits: [
      { stat: "70%", label: "Grading Time Saved", desc: "Eliminate manual calculation of percentages, medians, and class ranks." },
      { stat: "CBSE/ICSE", label: "Board Compliant", desc: "Pre-built templates meeting official education board grading criteria." },
      { stat: "Growth", label: "Learning Analytics", desc: "Identify student learning gaps early with historical visual performance graphs." },
      { stat: "Digital", label: "Instant Publishing", desc: "Release report cards to parents digitally with secure digital signatures." },
    ],
    faqs: [
      { q: "Can we customize report card designs with our school crest?", a: "Yes, customize headers, watermarks, principal signatures, and remarks templates." },
      { q: "Does it support non-academic skill assessments?", a: "Yes, assess sports, arts, social behavior, and personal development alongside academics." },
      { q: "Can parents view term progress anytime?", a: "Yes, parents can view graded assignments, teacher feedback, and term summaries on their app." },
    ],
  },
];