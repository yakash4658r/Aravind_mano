// ============================================================
// SITE DATA — Single source of truth
// Replace all {{PLACEHOLDER}} values with your actual content
// ============================================================

const resolveAssetPath = (path: string) => {
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const PLACEHOLDERS = {
  // Doctor
  DOCTOR_NAME: "Dr. Aravind Manoharan",
  DOCTOR_DEGREE: "MCh (Surgical Gastroenterology), MS (General Surgery)",
  DOCTOR_SPECIALITY_LINE: "Laparoscopic Gastro Surgeon & GI Cancer Specialist",

  // Clinic / Brand
  CLINIC_NAME: "DrAravindMano",
  CITY: "Chennai",
  LOGO_URL: resolveAssetPath("/images/Logo.svg"),
  DOCTOR_IMAGE: resolveAssetPath("/images/Aravind Manoharan.webp"),
  CLINIC_IMAGE: resolveAssetPath("/images/clinic.jpg"),

  // Theme colors
  PRIMARY_COLOR: "#0e5872",
  SECONDARY_COLOR: "#de1c21",
  ACCENT_COLOR: "#ff7680",

  // Contact
  PHONE: "+91 72002 85569",
  WHATSAPP: "917200285569",
  EMAIL: "draravindmanoharan@gmail.com",
  ADDRESS: "No 20, old 12, Govinda St, Ayyavoo Colony, Aminjikarai, Chennai, Tamil Nadu 600029",
  WORKING_HOURS: "Mon-Fri (8am - 6pm), Sat-Sun (10am - 2pm)",

  // Appointment
  APPOINTMENT_LINK: "https://www.practo.com/chennai/doctor/dr-aravind-manoharan-gastroenterologist", 

  // Social
  FB: "https://facebook.com/draravindmano",
  IG: "https://instagram.com/draravindmano",
  LI: "https://linkedin.com/in/draravindmanoharan",
  YT: "https://youtube.com/@draravindmano",
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Cancers we Treat",
    children: [
      { label: "Liver Cancer", href: "/conditions/liver-cancer" },
      { label: "Pancreatic Cancer", href: "/conditions/pancreatic-cancer" },
      { label: "Oesophageal Cancer", href: "/conditions/oesophageal-cancer" },
      { label: "Stomach Cancer", href: "/conditions/stomach-cancer" },
      { label: "Intestinal Cancer", href: "/conditions/intestinal-cancer" },
      { label: "Colon Cancer", href: "/conditions/colon-cancer" },
    ],
  },
  {
    label: "Expertise",
    children: [
      { label: "Laparoscopic Surgery", href: "/services/laparoscopic-surgery" },
      { label: "Robotic Surgery", href: "/services/robotic-surgery" },
      { label: "GI Cancer Surgery", href: "/services/gi-cancer-surgery" },
      { label: "Liver Surgery", href: "/services/liver-surgery" },
      { label: "Pancreas Surgery", href: "/services/pancreas-surgery" },
      { label: "Pancreatitis", href: "/conditions/pancreatitis" },
      { label: "Gallstones", href: "/conditions/gallstones" },
      { label: "Hiatus Hernia", href: "/conditions/hiatus-hernia" },
      { label: "Bariatric Surgery", href: "/services/bariatric-surgery" },
      { label: "Hernia Surgery", href: "/services/hernia-surgery" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// ─── Hero Slides ─────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    badge: "MCh Super-Specialty Trained",
    headline: "Advanced GI & Laparoscopic Surgical Care",
    subtext:
      "Expert surgical management of gastrointestinal conditions and digestive system cancers with precision, minimum pain, and faster recovery.",
    ctaLabel: "Make An Appointment",
    ctaHref: PLACEHOLDERS.APPOINTMENT_LINK,
    secondaryLabel: "Our Services",
    secondaryHref: "/services/laparoscopic-surgery",
    image: resolveAssetPath("/images/hero-doctor.jpg"),
    imageAlt: "Dr. Aravind Manoharan in consultation",
  },
  {
    badge: "GI Cancer Specialist",
    headline: "Precision Surgery for Complex GI Cancers",
    subtext:
      "Specialized care for stomach, colon, liver, and pancreatic cancers using advanced surgical techniques for optimal curative outcomes.",
    ctaLabel: "Learn About GI Cancer Care",
    ctaHref: "/services/gi-cancer-surgery",
    secondaryLabel: "Book Consultation",
    secondaryHref: PLACEHOLDERS.APPOINTMENT_LINK,
    image: resolveAssetPath("/images/hero-robotic.jpg"),
    imageAlt: "Advanced GI surgery preparation",
  },
  {
    badge: "Patient-Centered Approach",
    headline: "Compassionate Care for Every Digestive Journey",
    subtext:
      "From diagnosis to recovery, we prioritize your wellbeing with personalized treatment plans and accessible, expert guidance.",
    ctaLabel: "About Our Approach",
    ctaHref: "/about",
    secondaryLabel: "View Patient Stories",
    secondaryHref: "/resources/patient-stories",
    image: resolveAssetPath("/images/hero-care.jpg"),
    imageAlt: "Dr. Aravind explaining treatment to a patient",
  },
];

// ─── Stats ───────────────────────────────────────────────────
export const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Successful Procedures" },
  { value: "99%", label: "Patient Satisfaction" },
  { value: "MCh", label: "Super-Specialty Training" },
  { value: "24/7", label: "Emergency GI Support" },
];

// ─── About Doctor ────────────────────────────────────────────
export const ABOUT_DOCTOR = {
  name: "Dr. Aravind Manoharan",
  degree: "MBBS, MS (General Surgery), MCh (Surgical Gastroenterology & GI Surgery)",
  speciality: PLACEHOLDERS.DOCTOR_SPECIALITY_LINE,
  tagline: "Dr. Aravind Manoharan",
  bio1:
    "Dr. Aravind Manoharan is a Surgical Gastroenterologist, GI Oncosurgeon, and Gastroenterologist with advanced super-specialty training in Surgical Gastroenterology and GI Surgery. He specializes in diagnosing and treating complex disorders of the entire digestive system — from chronic gastrointestinal conditions to advanced gastrointestinal cancers.",
  bio2:
    "Currently practising at M R Hospital, Aminjikarai, Chennai, Dr. Aravind manages a wide spectrum of gastrointestinal conditions — from routine gallbladder and hernia surgeries to complex GI cancer resections and hepatobiliary procedures — with the same dedication and thoroughness.",
  highlights: [
    "MBBS — Completed in 2010",
    "MS (General Surgery) — Specialized in 2016",
    "MCh (Surgical Gastroenterology & GI Surgery) — Super-specialty Excellence 2021",
    "Advanced Fellowship in Minimally Invasive & Laparoscopic Surgery",
    "Expert in Complex GI Cancer and Onco-surgery Procedures",
  ],
  image: PLACEHOLDERS.DOCTOR_IMAGE,
};

// ─── Approach to Care ────────────────────────────────────────
export const APPROACH_POINTS = [
  { icon: "🔬", title: "Precision Diagnosis", desc: "Utilizing advanced imaging and molecular diagnostics for unambiguous clinical staging." },
  { icon: "🤝", title: "Patient-First Ethos", desc: "Every treatment pathway is uniquely tailored to your physiological and lifestyle needs." },
  { icon: "🤖", title: "Minimally Invasive", desc: "Prioritizing advanced laparoscopic protocols for reduced pain and rapid recovery cycles." },
  { icon: "📋", title: "Evidence-Based", desc: "Adhering strictly to international GI guidelines and the latest clinical research." },
  { icon: "⚡", title: "Rapid Recovery", desc: "Implementing enhanced post-operative protocols to get you back to life faster." },
  { icon: "🌱", title: "Holistic Wellness", desc: "Integrated nutrition and lifestyle support for long-term digestive vitality." },
];

// ─── Expertise Cards ─────────────────────────────────────────
export const EXPERTISE_CARDS = [
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80",
    title: "Laparoscopic Surgery",
    desc: "Advanced keyhole techniques for gallbladder, hernia, and intestinal issues.",
    href: "/services/laparoscopic-surgery",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
    title: "Robotic Surgery",
    desc: "High precision, high end robotic surgical procedures for complex conditions.",
    href: "/services/robotic-surgery",
  },
  {
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80",
    title: "GI Cancer Surgery",
    desc: "Specialized surgical oncology for stomach, colorectal, liver, and pancreatic cancers.",
    href: "/services/gi-cancer-surgery",
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80",
    title: "Liver Surgery",
    desc: "Advanced procedures including major hepatectomy for liver tumours and metastases.",
    href: "/services/liver-surgery",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
    title: "Pancreas Surgery",
    desc: "Whipple procedure and complex resections for pancreatic diseases.",
    href: "/services/pancreas-surgery",
  },
  {
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80",
    title: "Pancreatitis",
    desc: "Expert medical and surgical management for acute and chronic pancreatitis.",
    href: "/conditions/pancreatitis",
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80",
    title: "Gallstones",
    desc: "Gold-standard laparoscopic cholecystectomy for gallstone complications.",
    href: "/conditions/gallstones",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
    title: "Hiatus Hernia",
    desc: "Laparoscopic repair and fundoplication for lasting relief from severe acid reflux.",
    href: "/conditions/hiatus-hernia",
  },
  {
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80",
    title: "Hernia Surgery",
    desc: "Tension-free mesh repair for inguinal, incisional, and umbilical hernias.",
    href: "/services/hernia-surgery",
  },
];

// ─── Cancers We Treat ────────────────────────────────────────
export const CANCERS = [
  {
    icon: "🫀",
    title: "Liver Cancer",
    points: ["Hepatocellular Carcinoma", "Liver Resection", "Metastasis Management"],
    href: "/conditions/liver-cancer",
    color: "#0e5872",
  },
  {
    icon: "🩺",
    title: "Pancreatic Cancer",
    points: ["Whipple Procedure", "Distal Pancreatectomy", "Pancreatic Cyst Management"],
    href: "/conditions/pancreatic-cancer",
    color: "#de1c21",
  },
  {
    icon: "🫁",
    title: "Oesophageal Cancer",
    points: ["Oesophagectomy", "Minimally Invasive MIE", "Neo-adjuvant Coordination"],
    href: "/conditions/oesophageal-cancer",
    color: "#0e5872",
  },
  {
    icon: "🍵",
    title: "Stomach Cancer",
    points: ["Subtotal Gastrectomy", "Total Gastrectomy", "D2 Lymph Node Dissection"],
    href: "/conditions/stomach-cancer",
    color: "#de1c21",
  },
  {
    icon: "⚕️",
    title: "Intestinal Cancer",
    points: ["Small Bowel Resection", "Laparoscopic Approach", "Curative Oncology"],
    href: "/conditions/intestinal-cancer",
    color: "#0e5872",
  },
  {
    icon: "🔵",
    title: "Colon Cancer",
    points: ["Laparoscopic Colectomy", "Anterior Resection", "Sphincter Preservation"],
    href: "/conditions/colon-cancer",
    color: "#de1c21",
  },
];

// ─── Services (Dark Band) ────────────────────────────────────
export const SERVICES_BAND = [
  {
    icon: "🔭",
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive keyhole procedures for gallbladder, hernia, and appendix.",
    href: "/services/laparoscopic-surgery",
  },
  {
    icon: "⚕️",
    title: "GI Cancer Surgery",
    desc: "Expert curative resections for stomach, colon, liver, and pancreatic cancers.",
    href: "/services/gi-cancer-surgery",
  },
  {
    icon: "🩺",
    title: "Hepatobiliary Surgery",
    desc: "Specialized care for liver tumours, bile duct diseases, and pancreatic conditions.",
    href: "/services/hepatobiliary-pancreatic-surgery",
  },
  {
    icon: "🔬",
    title: "Gastroenterology & Digestive Health",
    desc: "Comprehensive diagnostic and therapeutic care for core digestive wellbeing.",
    href: "/services/gastroenterology-digestive-health",
  },
];

// ─── Video / Myth-busting ────────────────────────────────────
export const MYTH_VIDEOS = [
  {
    ytId: "dQw4w9WgXcQ",
    title: "Myth: Surgery Spreads Cancer",
    desc: "Our specialist debunks one of the most common — and dangerous — cancer myths.",
  },
  {
    ytId: "dQw4w9WgXcQ",
    title: "Myth: All Chemotherapy Makes You Lose Your Hair",
    desc: "Understanding modern targeted therapies and their very different side-effect profiles.",
  },
  {
    ytId: "dQw4w9WgXcQ",
    title: "Myth: Cancer is Always Fatal",
    desc: "Early detection and advanced treatment have transformed cancer survival rates dramatically.",
  },
];

// ─── Testimonials ────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Radha devarajan",
    text: "Thank you for your exceptional kindness and the positive impact you have made in my life. Your commitment to your patients is truly inspiring.",
  },
  {
    name: "Prem Kumar",
    text: "Thank you for your outstanding dedication and care. Your compassion and kindness have made a real difference in my recovery.",
  },
  {
    name: "Sheik Sithi",
    text: "An exceptional oncologist with remarkable knowledge and dedication. The doctor explained every step of the treatment clearly, giving me confidence.",
  },
  {
    name: "Abdul rahman khan",
    text: "Fighting cancer is never easy, but having an oncologist who truly cares makes all the difference. Thank you for your guidance, compassion, and support.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: "What is Laparoscopic Surgery?",
    a: "Laparoscopic surgery is a minimally invasive technique where the surgeon uses small incisions and a camera (laparoscope) to perform procedures with high precision, resulting in less pain and faster recovery.",
  },
  {
    q: "How long does a typical laparoscopic procedure take?",
    a: "Most common procedures like gallbladder or appendix removal take between 30 minutes to 2 hours, depending on complexity.",
  },
  {
    q: "When can I return to work after surgery?",
    a: "Many patients are discharged within 24-48 hours and can return to light activities and work within 1-2 weeks, significantly faster than traditional surgery.",
  },
  {
    q: "Can GI cancers be cured by surgery?",
    a: "Yes, many gastrointestinal cancers are curable if detected early and completely resected with clear margins by a specialized surgical oncologist.",
  },
  {
    q: "Is robotic surgery different from laparoscopic surgery?",
    a: "Robotic surgery is an advancement of laparoscopy where the surgeon controls robotic arms for even greater precision and 3D visualization, especially useful for complex deep pelvic surgeries.",
  },
  {
    q: "Do I need to bring old reports for consultation?",
    a: "Yes, please bring all previous medical reports, scans, and blood test results to help Dr. Aravind understand your medical history accurately.",
  },
];

// ─── Inner Page Data (Services / Expertise / Cancers / Resources) ──────────
// Generic template structure — each page reads from its own key

export type InnerPageData = {
  title: string;
  breadcrumb: string;
  intro: string;
  highlights: string[];
  symptoms: string[];
  treatmentSteps: { step: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const INNER_PAGES: Record<string, InnerPageData> = {
  // ── Services ──────────────────────────────────
  "services/laparoscopic-surgery": {
    title: "Laparoscopic Surgery",
    breadcrumb: "Services > Laparoscopic Surgery",
    intro:
      "Laparoscopic surgery is a technique where the surgeon inserts a thin, flexible tube called a laparoscope — fitted with a light and high-definition camera — through a small incision in the abdomen. The camera transmits magnified images to a monitor, allowing the surgeon to operate with exceptional precision using small specialised instruments. This approach is often preferred because it is less traumatic to the body, carries lower infection risk, and promotes a significantly faster recovery.",
    highlights: [
      "Laparoscopic Cholecystectomy (Gallbladder Removal)",
      "Hernia Repair (Inguinal, Incisional, Umbilical, Hiatal)",
      "Laparoscopic Appendectomy",
      "Laparoscopic Colorectal Surgery",
      "Laparoscopic GI Cancer Surgery",
      "Biliary & Pancreatic Laparoscopic Procedures",
      "MCh Super-Specialty Trained Specialist",
      "High-Volume Laparoscopic Surgeon",
    ],
    symptoms: [
      "Diagnosed with gallstones or gallbladder disease",
      "Inguinal, hiatal, incisional, or umbilical hernias",
      "Bowel resection for colon cancer, IBD, or diverticular disease",
      "Early to mid-stage GI cancers suitable for resection",
      "Surgical treatment for appendicitis, GERD, or biliary disease",
    ],
    treatmentSteps: [
      { step: "Personalised Surgical Planning", desc: "Thorough pre-operative evaluation and individually tailored surgical plan." },
      { step: "Clinical Evaluation", desc: "Assessment of hernia type or GI condition suitability for laparoscopy." },
      { step: "Precision Surgery", desc: "Minimally invasive approach prioritizing safety and oncological outcomes." },
      { step: "Rapid Recovery", desc: "Post-operative care focused on fast mobilization and minimal pain." },
    ],
    faq: [
      { q: "How long does laparoscopic surgery take?", a: "Most laparoscopic procedures take between 30 minutes and 2 hours depending on the complexity of the surgery and the condition being treated." },
      { q: "How soon can I return home after laparoscopic surgery?", a: "Many patients are discharged the same day or within 24–48 hours. More complex procedures may require a short hospital stay of 2–4 days." },
      { q: "Will I have visible scars?", a: "Laparoscopic surgery leaves only 3–4 small puncture marks (typically 5–12mm each), which fade significantly over time and are much less noticeable than open surgery scars." },
      { q: "Is laparoscopic surgery safe?", a: "Yes — laparoscopic surgery is well-established, safe, and performed routinely worldwide. Dr. Aravind Manoharan has extensive experience in laparoscopic techniques for GI conditions." },
      { q: "Does laparoscopic surgery cost more than open surgery?", a: "While the upfront procedural cost may be similar or slightly higher, laparoscopic surgery often results in lower total costs due to shorter hospital stays and faster recovery." },
    ],
  },
  "services/gi-cancer-surgery": {
    title: "GI Cancer Surgery",
    breadcrumb: "Services > GI Cancer Surgery",
    intro:
      "GI cancer surgery involves the precise removal of cancerous tumours from the digestive tract — including the stomach, liver, pancreas, colon, rectum, and oesophagus. Surgery is often the primary and most effective treatment for gastrointestinal cancers, offering the highest chance of cure when detected at an operable stage.",
    highlights: [
      "Stomach (Gastric) Cancer Surgery (D2 lymph node dissection)",
      "Colon & Rectal Cancer Surgery (Laparoscopic & Robotic)",
      "Liver Cancer Surgery (Hepatectomy)",
      "Pancreatic Cancer Surgery (Whipple Procedure)",
      "Oesophageal Cancer Surgery (Oesophagectomy)",
      "MCh-Qualified GI Oncosurgeon Specialist",
      "Multidisciplinary Comprehensive Care",
    ],
    symptoms: [
      "Newly diagnosed with gastrointestinal or digestive system cancer",
      "Seeking a second surgical opinion for cancer treatment",
      "Abnormal findings on endoscopy, CT scan, MRI, or PET scan",
      "Unexplained weight loss, bleeding, jaundice, or persistent symptoms",
      "Completed chemotherapy and requiring surgical resection",
    ],
    treatmentSteps: [
      { step: "Oncological Precision", desc: "Achieving complete tumour removal with clear margins while preserving healthy tissue." },
      { step: "Multidisciplinary Planning", desc: "Coordinated care with medical and radiation oncologists." },
      { step: "Minimally Invasive Options", desc: "Laparoscopic or robotic-assisted cancer surgery where oncologically appropriate." },
      { step: "Long-term Surveillance", desc: "Rigorous follow-up protocol to monitor for recurrence and ensure recovery." },
    ],
    faq: [
      { q: "Is surgery always necessary for GI cancer?", a: "Surgery is often the primary treatment for resectable GI cancers. For some cancers, chemotherapy or radiation may be given before surgery to shrink the tumour. Dr. Aravind will discuss all options with you." },
      { q: "What is the recovery like after GI cancer surgery?", a: "Recovery varies by procedure. Most patients stay in hospital for 5–10 days. Full recovery typically takes 4–8 weeks depending on the type of surgery." },
      { q: "Can GI cancer be cured by surgery?", a: "When detected and operated upon at an early stage, many GI cancers can be cured by surgery. Even in advanced cases, surgery combined with other treatments can significantly improve survival and quality of life." },
      { q: "Will I need chemotherapy after GI cancer surgery?", a: "Depending on the cancer type, stage, and pathology findings, adjuvant (post-operative) chemotherapy may be recommended. Dr. Aravind will coordinate with your oncologist for a complete care plan." },
    ],
  },
  "services/hepatobiliary-pancreatic-surgery": {
    title: "Hepatobiliary & Pancreatic Surgery",
    breadcrumb: "Services > Hepatobiliary & Pancreatic Surgery",
    intro:
      "This specialty deals with complex diseases of the liver, bile ducts, gallbladder, and pancreas. These surgeries are among the most challenging in GI surgery and require expert super-specialty training.",
    highlights: [
      "Liver resections (hepatectomy) for tumors and cysts",
      "Bile duct reconstructions and repair",
      "Whipple Procedure for pancreatic head tumors",
      "Management of complex gallstone complications",
      "Treatment of acute and chronic pancreatitis complications",
      "Pancreatic cyst and tumor surgery",
    ],
    symptoms: [
      "Jaundice (yellowing of skin and eyes)",
      "Upper abdominal pain radiating to the back",
      "Pale stools and dark urine",
      "Unexplained fatigue and weight loss",
      "Persistent nausea and vomiting",
      "Swelling or a mass in the upper abdomen",
    ],
    treatmentSteps: [
      { step: "Specialized Imaging", desc: "MRCP, Triple-phase CT, and liver function testing." },
      { step: "Biopsy & Markers", desc: "CA12.5, AFP, and CEA markers for tumor assessment." },
      { step: "Pre-op Optimization", desc: "Nutritional support and jaundice management (ERCP/PTBD)." },
      { step: "Complex Surgery", desc: "Major resection using specialized surgical equipment." },
      { step: "Critical Recovery", desc: "Close monitoring of liver and pancreatic function post-op." },
      { step: "Long-term Care", desc: "Surveillance and nutritional guidance for optimal recovery." },
    ],
    faq: [FAQ_ITEMS[4], FAQ_ITEMS[5]],
  },
  "services/colorectal-surgery": {
    title: "Colorectal Surgery",
    breadcrumb: "Services > Colorectal Surgery",
    intro:
      "Colorectal surgery covers conditions of the colon, rectum, and anus. We focus on laparoscopic resections for cancer, inflammatory bowel disease (IBD), and common anorectal disorders.",
    highlights: [
      "Laparoscopic right and left hemicolectomy",
      "Anterior resection and APR for rectal cancer",
      "Surgery for Crohn's disease and Ulcerative Colitis",
      "Focus on sphincter preservation to avoid permanent stomas",
      "Treatment of diverticular disease and polyps",
      "Management of hemorrhoids, fissures, and fistulas",
    ],
    symptoms: [
      "Persistent change in bowel habits (>4 weeks)",
      "Bleeding from the rectum",
      "Abdominal cramps and distention",
      "Incomplete bowel emptying feeling",
      "Perianal pain or discharge",
    ],
    treatmentSteps: [
      { step: "Colonoscopy", desc: "Visual examination and biopsy of the entire colon." },
      { step: "Staging Scans", desc: "CT or MRI Pelvis to determine extent of disease." },
      { step: "Laparoscopic Resection", desc: "Removal of the affected bowel segment with keyhole surgery." },
      { step: "Anastomosis", desc: "Reconnecting the healthy bowel segments." },
      { step: "Enhanced Recovery (ERAS)", desc: "Protocol-driven post-op care for faster bowel function return." },
    ],
    faq: FAQ_ITEMS.slice(0, 3),
  },
  "services/hernia-repair": {
    title: "Hernia Repair",
    breadcrumb: "Services > Hernia Repair",
    intro:
      "A hernia occurs when an organ pushes through an opening in the muscle or tissue that holds it in place. Our approach utilizes advanced laparoscopic techniques for tension-free mesh repair.",
    highlights: [
      "Laparoscopic Inguinal Hernia repair (TAPP/TEP)",
      "Incisional and Ventral Hernia management",
      "Hiatal Hernia repair with Fundoplication for GERD",
      "Tension-free mesh placement for long-term success",
      "Minimal postoperative pain and early return to work",
      "Laparoscopic IPOM for complex abdominal wall hernias",
    ],
    symptoms: [
      "Visible bulge in the groin or abdomen",
      "Pain or discomfort when lifting or straining",
      "A heavy or tugging sensation in the groin",
      "Severe heartburn or swallowing issues (Hiatal hernia)",
      "Nausea or vomiting (if hernia becomes incarcerated)",
    ],
    treatmentSteps: [
      { step: "Clinical Evaluation", desc: "Assessment of hernia type and risk of complications." },
      { step: "Laparoscopic Approach", desc: "Small incisions to view the hernia defect from inside." },
      { step: "Organ Reduction", desc: "Returning protruding tissue safely to its normal position." },
      { step: "Mesh Reinforcement", desc: "Placement of a medical-grade mesh to strengthen the defect." },
      { step: "Rapid Mobilization", desc: "Patients often walk within hours of the procedure." },
    ],
    faq: FAQ_ITEMS.slice(0, 3),
  },
  "services/gastroenterology-digestive-health": {
    title: "Gastroenterology & Digestive Health",
    breadcrumb: "Services > Gastroenterology & Digestive Health",
    intro:
      "Dr. Aravind Manoharan provides specialized care for a wide range of gastrointestinal and digestive conditions. Whether you need diagnostic procedures or long-term management for chronic issues, we offer tailored treatment plans to restore your digestive wellbeing.",
    highlights: [
      "Specialized care for Acid Reflux and GERD",
      "Management of chronic abdominal pain and dyspepsia",
      "Treatment for inflammatory bowel conditions",
      "Diagnostic endoscopy and colonoscopy services",
      "Hepatobiliary health management (liver, bile duct, pancreas)",
      "Focus on both surgical and non-surgical therapies",
    ],
    symptoms: [
      "Chronic heartburn or acidity",
      "Persistent abdominal pain or discomfort",
      "Change in bowel habits or rectal bleeding",
      "Difficulty swallowing or persistent bloating",
      "Unexplained weight loss or loss of appetite",
    ],
    treatmentSteps: [
      { step: "Clinical Consultation", desc: "Detailed evaluation of symptoms and medical history." },
      { step: "Diagnostic Testing", desc: "Endoscopy, imaging, or blood markers to identify the root cause." },
      { step: "Personalized Plan", desc: "Creating a treatment strategy combining lifestyle, medication, or surgery." },
      { step: "Therapeutic Intervention", desc: "Performing necessary procedures or starting targeted medical therapy." },
      { step: "Continuous Monitoring", desc: "Regular follow-up to ensure symptom relief and digestive health." },
    ],
    faq: FAQ_ITEMS.slice(0, 3),
  },

  // ── Conditions ────────────────────────────────
  "conditions/gallstones-biliary": {
    title: "Gallstones & Biliary Diseases",
    breadcrumb: "Conditions > Gallstones & Biliary",
    intro:
      "Gallstones are hardened deposits that can form in your gallbladder. If they cause symptoms or complications like jaundice or pancreatitis, surgical removal of the gallbladder (cholecystectomy) is necessary.",
    highlights: [
      "Gold-standard Laparoscopic Cholecystectomy",
      "Management of CBD stones via ERCP or Surgery",
      "Treatment of acute cholecystitis and biliary colic",
      "Liver cyst and abscess management",
      "Biliary stricture and leak repair",
    ],
    symptoms: [
      "Sudden, intense pain in the upper right abdomen",
      "Pain radiating to the right shoulder or back",
      "Nausea and vomiting",
      "Jaundice (yellow eyes/skin) if stones block the duct",
      "Fever and chills (indicating infection)",
    ],
    treatmentSteps: [
      { step: "Ultrasound Diagnosis", desc: "Confirming the presence of stones and gallbladder wall thickness." },
      { step: "Blood Tests", desc: "Checking liver enzymes and bilirubin levels." },
      { step: "MRCP", desc: "Specialized MRI to check for stones in the bile duct if suspected." },
      { step: "Surgery", desc: "Laparoscopic removal of the gallbladder." },
      { step: "Recovery", desc: "Same-day or next-day discharge with rapid return to normal diet." },
    ],
    faq: FAQ_ITEMS.slice(0, 3),
  },
  "conditions/gerd-acid-reflux": {
    title: "GERD & Acid Reflux",
    breadcrumb: "Conditions > GERD & Acid Reflux",
    intro:
      "Gastroesophageal reflux disease (GERD) is a chronic digestive disease where stomach acid flows back into your food pipe. When medication fails, laparoscopic surgery offers a permanent solution.",
    highlights: [
      "Laparoscopic Nissen Fundoplication",
      "Hiatal Hernia repair (Diaphragmatic defect closure)",
      "Permanent relief from chronic heartburn and acidity",
      "Prevention of Barrett's Esophagus and esophageal cancer",
      "High success rate for symptom control",
    ],
    symptoms: [
      "Frequent heartburn (burning sensation in chest)",
      "Regurgitation of food or sour liquid",
      "Difficulty swallowing (dysphagia)",
      "Sensation of a lump in the throat",
      "Chronic cough or hoarseness",
    ],
    treatmentSteps: [
      { step: "Endoscopy", desc: "Direct visualization of esophageal irritation and hiatal hernia." },
      { step: "pH Monitoring", desc: "Measuring acid levels in the esophagus over 24 hours." },
      { step: "Manometry", desc: "Testing the strength and function of the esophageal muscles." },
      { step: "Surgical Repair", desc: "Laparoscopic strengthening of the stomach valve." },
    ],
    faq: FAQ_ITEMS.slice(0, 3),
  },
  "conditions/stomach-cancer": {
    title: "Stomach Cancer",
    breadcrumb: "Conditions > Stomach Cancer",
    intro:
      "Stomach cancer, also known as gastric cancer, starts in the cells lining the stomach. Early surgical intervention combined with D2 lymphadenectomy is the curative standard.",
    highlights: [
      "MCh specialized D2 Lymphadenectomy",
      "Subtotal and Total Gastrectomy",
      "Curative intent even for locally advanced cases",
      "Minimally invasive options for early gastric cancer",
      "Multidisciplinary tumor board staging",
    ],
    symptoms: [
      "Persistent nausea and stomach pain",
      "Feeling bloated after eating small amounts",
      "Severe, persistent indigestion",
      "Unexplained weight loss",
      "Vomiting blood or having black stools",
    ],
    treatmentSteps: [
      { step: "Diagnostic Endoscopy", desc: "Visual inspection and multiple biopsies." },
      { step: "Staging CT", desc: "Evaluating tumor size and any distant spread." },
      { step: "Surgery", desc: "Total or subtotal removal of the stomach with nodal clearance." },
      { step: "Reconstruction", desc: "Joining the esophagus or remaining stomach to the intestine." },
    ],
    faq: [FAQ_ITEMS[3]],
  },
  "conditions/colorectal-cancer": {
    title: "Colorectal Cancer",
    breadcrumb: "Conditions > Colorectal Cancer",
    intro:
      "Colorectal cancer (cancer of the colon or rectum) is highly treatable when caught early. Our surgical approach focuses on complete tumor removal with preservation of organ function and high quality of life.",
    highlights: [
      "Laparoscopic Hemicolectomy (Right/Left)",
      "Sphincter-preserving rectal cancer surgery",
      "Total Mesorectal Excision (TME)",
      "Complete Mesocolic Excision (CME)",
      "Minimally invasive approach for faster recovery",
    ],
    symptoms: [
      "Persistent change in bowel habits (diarrhea/constipation)",
      "Rectal bleeding or blood in stool",
      "Persistent abdominal discomfort or cramps",
      "A feeling that the bowel doesn't empty completely",
      "Weakness or fatigue from anemia",
    ],
    treatmentSteps: [
      { step: "Colonoscopy & Biopsy", desc: "Diagnostic verification of the lesion." },
      { step: "Staging Scans", desc: "MRI Pelvis and CT Chest/Abdomen to plan surgery." },
      { step: "Surgical Resection", desc: "Removal of the cancerous segment and surrounding lymph nodes." },
      { step: "Anastomosis", desc: "Rejoining the bowel using specialized stapling techniques." },
    ],
    faq: FAQ_ITEMS.slice(0, 3),
  },
  "conditions/pancreatic-disease": {
    title: "Pancreatic Diseases & Cancer",
    breadcrumb: "Conditions > Pancreatic Disease",
    intro:
      "Pancreatic conditions range from inflammation (pancreatitis) to cancerous growths. These require highly specialized surgical care due to the pancreas's critical location and function.",
    highlights: [
      "Whipple Procedure (Pancreaticoduodenectomy)",
      "Distal Pancreatectomy (Spleen-preserving when possible)",
      "Management of Pancreatic Pseudocysts",
      "Treatment of Acute and Chronic Pancreatitis",
      "Pancreatic cyst surveillance and management",
    ],
    symptoms: [
      "Painless jaundice (yellowing of skin/eyes)",
      "Mid-back pain or upper abdominal pain",
      "Unexplained weight loss and oily stools",
      "Sudden onset of diabetes in later life",
      "Nausea and loss of appetite",
    ],
    treatmentSteps: [
      { step: "Triphasic CT", desc: "Detailed imaging to assess resectability." },
      { step: "Endoscopic Ultrasound (EUS)", desc: "Internal imaging and fine-needle aspiration if needed." },
      { step: "Surgical Procedure", desc: "Complex resection tailored to the site of the lesion." },
      { step: "Nutritional Support", desc: "Post-op enzyme therapy and specialized diet planning." },
    ],
    faq: [FAQ_ITEMS[4], FAQ_ITEMS[5]],
  },
  "conditions/liver-tumours": {
    title: "Liver Tumours & Surgery",
    breadcrumb: "Conditions > Liver Tumours",
    intro:
      "The liver is a unique organ that can regenerate. We specialize in removing both primary liver cancers and tumors that have spread to the liver from other parts of the GI tract.",
    highlights: [
      "Major and Minor Hepatectomy (Liver Resection)",
      "Resection of liver metastases from colorectal cancer",
      "Treatment of Hemangiomas and Liver Cysts",
      "Management of Hepatocellular Carcinoma (HCC)",
      "Biliary reconstruction for liver tumors",
    ],
    symptoms: [
      "Pain or fullness in the upper right abdomen",
      "Yellowing of the skin and eyes (jaundice)",
      "Easy bruising or bleeding",
      "Loss of appetite and weight loss",
      "Swelling of the abdomen (ascites)",
    ],
    treatmentSteps: [
      { step: "Functional Liver Assessment", desc: "Evaluating how much liver can be safely removed." },
      { step: "Pre-op Embolization", desc: "Techniques to grow the remaining liver if needed." },
      { step: "Precision Surgery", desc: "Removing the tumor with ultrasound-guided margins." },
      { step: "Regeneration Monitoring", desc: "Post-op care focusing on liver function recovery." },
    ],
    faq: [FAQ_ITEMS[3], FAQ_ITEMS[5]],
  },
  "conditions/esophageal-cancer": {
    title: "Esophageal Cancer",
    breadcrumb: "Conditions > Esophageal Cancer",
    intro:
      "Esophageal cancer affects the food pipe. Treatment often involves a combination of shrinking the tumor followed by specialized surgery to remove the affected portion of the esophagus.",
    highlights: [
      "Minimally Invasive Esophagectomy (MIE)",
      "Transhiatal and Transthoracic approaches",
      "Colonic or Gastric pull-up reconstructions",
      "Management of Barrett's Esophagus",
      "Stent placement for palliative care when needed",
    ],
    symptoms: [
      "Difficulty swallowing (feeling like food is stuck)",
      "Pain while swallowing",
      "Unexplained weight loss",
      "Persistent cough or hoarseness",
      "Persistent indigestion or heartburn",
    ],
    treatmentSteps: [
      { step: "Upper GI Endoscopy", desc: "Visual inspection and biopsy of the esophagus." },
      { step: "PET-CT Staging", desc: "Checking for any spread to lymph nodes or other organs." },
      { step: "Neo-adjuvant Therapy", desc: "Chemoradiation to shrink the tumor before surgery." },
      { step: "Surgical Resection", desc: "Removal of the esophagus and reconstruction of the food pipe." },
    ],
    faq: [FAQ_ITEMS[3], FAQ_ITEMS[5]],
  },

  // ── Resources ─────────────────────────────────
  "resources/patient-stories": {
    title: "Patient Stories",
    breadcrumb: "Resources > Patient Stories",
    intro:
      "Real stories from our patients about their experience with Dr. Aravind Manoharan and their journey toward recovery and health.",
    highlights: [
      "Recovery stories from major GI surgeries",
      "Experiences with laparoscopic procedures",
      "Testimonials from cancer survivors",
      "Personal accounts of compassionate care",
    ],
    symptoms: [],
    treatmentSteps: [],
    faq: FAQ_ITEMS.slice(0, 3),
  },
  "resources/gallery": {
    title: "Clinic Gallery",
    breadcrumb: "Resources > Gallery",
    intro:
      "Explore our clinic facilities and surgical capabilities at M R Hospital, Aminjikarai, where we provide advanced GI care.",
    highlights: [
      "Modern consultation suites",
      "Advanced laparoscopic equipment",
      "Patient recovery areas",
      "Surgical theatre facilities",
    ],
    symptoms: [],
    treatmentSteps: [],
    faq: FAQ_ITEMS.slice(1, 4),
  },
  "resources/faq": {
    title: "Frequently Asked Questions",
    breadcrumb: "Resources > FAQ",
    intro:
      "Find answers to common questions about gastrointestinal conditions, laparoscopic surgery, and your treatment at our clinic.",
    highlights: [
      "Pre-surgical instructions",
      "Recovery timelines",
      "Understanding minimally invasive techniques",
      "GI cancer management details",
    ],
    symptoms: [],
    treatmentSteps: [],
    faq: FAQ_ITEMS,
  },
};

// ─── Alias mappings for new Navigation Structure ───
INNER_PAGES["conditions/liver-cancer"] = { ...INNER_PAGES["conditions/liver-tumours"], title: "Liver Cancer", breadcrumb: "Conditions > Liver Cancer" };
INNER_PAGES["conditions/pancreatic-cancer"] = { ...INNER_PAGES["conditions/pancreatic-disease"], title: "Pancreatic Cancer", breadcrumb: "Conditions > Pancreatic Cancer" };
INNER_PAGES["conditions/oesophageal-cancer"] = { ...INNER_PAGES["conditions/esophageal-cancer"], title: "Oesophageal Cancer", breadcrumb: "Conditions > Oesophageal Cancer" };
INNER_PAGES["conditions/intestinal-cancer"] = { ...INNER_PAGES["conditions/colorectal-cancer"], title: "Intestinal Cancer", breadcrumb: "Conditions > Intestinal Cancer" };
INNER_PAGES["conditions/colon-cancer"] = { ...INNER_PAGES["conditions/colorectal-cancer"], title: "Colon Cancer", breadcrumb: "Conditions > Colon Cancer" };

INNER_PAGES["services/robotic-surgery"] = {
  title: "Robotic Surgery",
  breadcrumb: "Services > Robotic Surgery",
  intro:
    "In robotic surgery, the surgeon is fully in control — seated at a console with a magnified 3D view of the surgical field. The robotic arms replicate the surgeon's hand movements with greater precision and without tremor, which is particularly valuable in confined anatomical spaces.",
  highlights: [
    "Robotic Colorectal Surgery (Low anterior resection)",
    "Robotic Hernia Repair (Complex and recurrent hernias)",
    "Robotic Gastric Surgery (Stomach cancer resections)",
    "Robotic Hepatobiliary Surgery (Liver and biliary procedures)",
    "Robotic Rectal Cancer Surgery (Total mesorectal excision)",
    "Advanced Training in Robotic GI Techniques",
    "Selective & Evidence-Based Approach",
  ],
  symptoms: [
    "Requiring complex colorectal or rectal cancer surgery",
    "Individuals with recurrent or complex hernias",
    "Undergoing gastrectomy or bowel resection for cancer",
    "Anatomical complexity where enhanced visualisation improves safety",
    "Seeking the most advanced minimally invasive surgical option",
  ],
  treatmentSteps: [
    { step: "Enhanced Visualization", desc: "Magnified 3D view allowing for precise dissection around critical structures." },
    { step: "Tremor Filtration", desc: "Robotic arms translate movements with absolute stability and accuracy." },
    { step: "Selective Recommendation", desc: "Robotic approach used only when it offers a genuine clinical advantage." },
    { step: "Integrated Cancer Care", desc: "Coordinated planning with oncology and radiology teams." },
  ],
  faq: [
    { q: "Is the robot performing the surgery?", a: "No. The robot is a precision tool. Dr. Aravind Manoharan is fully in control at all times — the robotic system simply translates his movements with greater accuracy." },
    { q: "Is robotic surgery safer than laparoscopic surgery?", a: "For certain complex procedures, robotic surgery offers enhanced precision and reduced complications. For routine cases, laparoscopic surgery remains equally safe and effective." },
    { q: "How long is the recovery after robotic surgery?", a: "Recovery is similar to laparoscopic surgery — most patients are discharged within 2–5 days and return to normal activities within 2–4 weeks." },
    { q: "Is robotic surgery available in Chennai?", a: "Yes — Dr. Aravind Manoharan offers robotic-assisted surgery at M R Hospital, Aminjikarai, Chennai." },
  ],
};

INNER_PAGES["services/bariatric-surgery"] = {
  title: "Bariatric Surgery",
  breadcrumb: "Services > Bariatric Surgery",
  intro:
    "Bariatric surgery is the most effective and long-lasting treatment for severe obesity and obesity-related conditions including Type 2 diabetes, hypertension, and sleep apnoea. It creates lasting anatomical changes that support long-term weight loss and metabolic health.",
  highlights: [
    "Laparoscopic Sleeve Gastrectomy",
    "Roux-en-Y Gastric Bypass",
    "Mini Gastric Bypass (MGB)",
    "Metabolic Remission of Type 2 Diabetes",
    "Comprehensive Pre-operative Assessment",
    "Long-term Post-operative Support",
  ],
  symptoms: [
    "BMI ≥ 37.5 (Asian criteria) with or without comorbidities",
    "BMI ≥ 32.5 with Type 2 diabetes or hypertension",
    "Failed multiple attempts at sustained weight loss",
    "Significant impact of obesity on joints or mental health",
  ],
  treatmentSteps: [
    { step: "Multidisciplinary Evaluation", desc: "Cardiac, nutritional, and psychological assessment before surgery." },
    { step: "Laparoscopic Procedure", desc: "Minimally invasive bypass or sleeve gastrectomy." },
    { step: "Metabolic Monitoring", desc: "Close follow-up of diabetes and hypertension resolution." },
    { step: "Lifelong Support", desc: "Nutritional counselling and follow-up for sustained weight loss." },
  ],
  faq: [
    { q: "Is bariatric surgery permanent?", a: "Bariatric surgery creates lasting anatomical changes that support long-term weight loss. However, maintaining a healthy lifestyle is essential for sustained results." },
    { q: "Can bariatric surgery cure diabetes?", a: "Yes — bariatric surgery, particularly gastric bypass, often achieves complete remission of Type 2 diabetes even before significant weight loss occurs." },
  ],
};

INNER_PAGES["services/liver-surgery"] = {
  title: "Liver Surgery",
  breadcrumb: "Services > Liver Surgery",
  intro:
    "Liver surgery (hepatic surgery) involves the partial or complete removal of diseased liver tissue. The liver has a remarkable capacity to regenerate, making surgery possible even when a significant portion needs to be removed. Dr. Aravind performs both open and laparoscopic liver resections for tumours, cysts, and injuries.",
  highlights: [
    "Segmental Hepatectomy (Maximum healthy liver preservation)",
    "Right or Left Hepatectomy (Lobar liver removal)",
    "Laparoscopic Liver Resection (Minimally invasive approach)",
    "Liver Cyst Surgery (Deroofing or resection)",
    "Liver Abscess Drainage (Surgical or image-guided)",
    "Hepatobiliary Specialist Expertise",
    "Oncological Adequacy & Safety Focus",
  ],
  symptoms: [
    "Diagnosed with primary hepatocellular carcinoma (HCC)",
    "Resectable liver metastases from colorectal or other cancers",
    "Symptomatic or growing liver cysts or benign tumours",
    "Liver abscesses not responding to medical management",
    "Bile duct disease affecting the liver tissue",
  ],
  treatmentSteps: [
    { step: "Functional Assessment", desc: "Evaluating liver function and volume to ensure safety after resection." },
    { step: "Surgical Resection", desc: "Removing diseased tissue with ultrasound-guided margins." },
    { step: "Regeneration Support", desc: "Post-operative care focusing on liver function recovery." },
    { step: "Multidisciplinary Care", desc: "Coordinated planning with oncology and radiology teams." },
  ],
  faq: [
    { q: "Can the liver regenerate after surgery?", a: "Yes. The liver has an exceptional regenerative capacity. Even after removal of up to 70% of liver tissue, the remaining liver typically regenerates to normal size within weeks to months." },
    { q: "How long does liver surgery take?", a: "Liver surgery typically takes 2–6 hours depending on the extent of resection. More complex procedures take longer." },
    { q: "What is the recovery time after liver surgery?", a: "Most patients stay in hospital for 5–7 days and require 4–8 weeks for full recovery. Laparoscopic liver surgery generally allows faster recovery." },
    { q: "Is liver surgery risky?", a: "All surgery carries some risk. Liver surgery requires specialist expertise. Dr. Aravind carefully selects patients and plans each procedure to minimise risk and achieve the safest outcome." },
  ],
};

INNER_PAGES["services/pancreas-surgery"] = {
  title: "Pancreas Surgery",
  breadcrumb: "Services > Pancreas Surgery",
  intro:
    "Pancreatic surgery involves complex operations on the pancreas to treat tumours, cysts, and inflammatory disease. Due to the proximity to major blood vessels, it requires a highly skilled specialist. Dr. Aravind is trained in all major procedures, including the Whipple operation and distal pancreatectomy.",
  highlights: [
    "Whipple Procedure (Pancreaticoduodenectomy)",
    "Distal Pancreatectomy (Spleen-preserving when possible)",
    "Central Pancreatectomy (Parenchyma-preserving)",
    "Pancreatic Cyst Surgery (IPMN and mucinous cysts)",
    "Chronic Pancreatitis Drainage (Frey or Puestow procedure)",
    "HPB Super-Specialty Qualification",
    "Meticulous Pre-operative Optimization",
  ],
  symptoms: [
    "Diagnosed with pancreatic cancer or periampullary tumours",
    "Pancreatic cysts showing high-risk imaging features",
    "Pain-dominant chronic pancreatitis failing medical treatment",
    "Functional pancreatic tumours (Insulinoma)",
    "Unexplained jaundice and dilated bile ducts",
  ],
  treatmentSteps: [
    { step: "Triphasic CT Staging", desc: "Detailed imaging to assess resectability and vascular involvement." },
    { step: "Whipple/Resection", desc: "Complex surgical removal of diseased pancreatic segments." },
    { step: "Nutritional Support", desc: "Enzyme replacement and specialized diet planning post-op." },
    { step: "Long-term Surveillance", desc: "Continuous monitoring of pancreatic function and cancer markers." },
  ],
  faq: [
    { q: "What is the Whipple procedure?", a: "The Whipple procedure (pancreaticoduodenectomy) is a major surgery to remove the head of the pancreas, duodenum, part of the bile duct, and gallbladder — performed for cancers of the pancreatic head." },
    { q: "How long is recovery after pancreatic surgery?", a: "Hospital stay is typically 7–10 days. Full recovery takes 6–12 weeks. Patients often require dietary modifications and enzyme supplementation." },
    { q: "Will I develop diabetes after pancreatic surgery?", a: "Depending on the extent of pancreatic removal, some patients may develop or worsen diabetes after surgery. This is closely monitored post-operatively." },
    { q: "Can pancreatic cancer be cured by surgery?", a: "Surgery offers the only chance of cure for pancreatic cancer. Early-stage, resectable pancreatic cancer treated with surgery followed by chemotherapy has the best survival outcomes." },
  ],
};

INNER_PAGES["conditions/pancreatitis"] = {
  title: "Pancreatitis",
  breadcrumb: "Conditions > Pancreatitis",
  intro:
    "Pancreatitis is inflammation of the pancreas that ranges from mild acute episodes to debilitating chronic disease. Dr. Aravind provides comprehensive management, including medical bowel rest, endoscopic drainage, and specialized surgical procedures for chronic pancreatitis.",
  highlights: [
    "Acute Pancreatitis Medical Management",
    "Surgical Drainage (Frey or Puestow procedure)",
    "Distal Pancreatectomy for tail disease",
    "Endoscopic drainage of duct obstructions",
    "Nutritional & Enzyme replacement support",
    "Minimally invasive approach prioritised",
    "Compassionate Patient-Centred Care",
  ],
  symptoms: [
    "Severe upper abdominal pain radiating to the back",
    "Persistent nausea and vomiting",
    "Fever and elevated heart rate (acute episodes)",
    "Chronic pain and unexplained weight loss",
    "Fatty or oily stools and sudden-onset diabetes",
  ],
  treatmentSteps: [
    { step: "Emergency Stabilization", desc: "Medical management with bowel rest, fluids, and pain control." },
    { step: "Aetiology Identification", desc: "Determining cause (Gallstones/Alcohol) to prevent recurrence." },
    { step: "Surgical Intervention", desc: "Drainage or resection for chronic complications and pain." },
    { step: "Functional Restoration", desc: "Long-term nutritional and enzyme support for pancreatic health." },
  ],
  faq: [
    { q: "Can pancreatitis be cured?", a: "Acute pancreatitis usually resolves with medical treatment. Chronic pancreatitis can be managed but not fully cured — surgery can significantly reduce pain and improve quality of life." },
    { q: "What causes pancreatitis?", a: "The most common causes are gallstones (blocking the duct) and heavy alcohol use. Other causes include high triglycerides and certain medications." },
  ],
};

INNER_PAGES["conditions/colon-cancer"] = {
  title: "Colon Cancer",
  breadcrumb: "Conditions > Colon Cancer",
  intro:
    "Colon cancer (colorectal cancer) is highly treatable when detected early. Dr. Aravind offering laparoscopic right and left hemicolectomy with meticulous lymph node dissection for accurate staging and cure. We prioritize sphincter preservation and faster recovery.",
  highlights: [
    "Laparoscopic Right and Left Hemicolectomy",
    "Sigmoid Colectomy for left-sided tumours",
    "Complete Mesocolic Excision (CME)",
    "Sphincter-preserving rectal surgery",
    "Adjuvant Chemotherapy Coordination",
    "MCh Super-Specialty Qualification",
    "Minimally Invasive (Laparoscopic) First Approach",
  ],
  symptoms: [
    "Change in bowel habits (diarrhoea/constipation)",
    "Blood in stool or rectal bleeding",
    "Unexplained weight loss and fatigue",
    "Persistent abdominal pain, cramping, or bloating",
    "Feeling that the bowel doesn't empty completely",
  ],
  treatmentSteps: [
    { step: "Diagnostic Colonoscopy", desc: "Visual verification and biopsy for histopathological staging." },
    { step: "Oncological Resection", desc: "Precise removal of the cancerous segment and lymph nodes." },
    { step: "Functional Preservation", desc: "Techniques to preserve bowel control and quality of life." },
    { step: "Multidisciplinary Follow-up", desc: "Coordinated care with oncologists for long-term survival." },
  ],
  faq: [
    { q: "Is colon cancer curable?", a: "Yes — when detected at an early stage (Stage I or II), colon cancer has excellent cure rates with surgery alone. Even Stage III disease has good long-term outcomes with combined therapy." },
    { q: "What is colonoscopy and do I need one?", a: "Colonoscopy is a diagnostic procedure to visualise the colon and detect polyps. It is recommended for anyone over 45 or with rectal bleeding." },
  ],
};

INNER_PAGES["conditions/gallstones"] = {
  title: "Gallstones",
  breadcrumb: "Conditions > Gallstones",
  intro:
    "Gallstones are common causes of intense abdominal pain and digestive complications. Dr. Aravind performs laparoscopic cholecystectomy — the gold-standard treatment — through tiny incisions, allowing most patients to go home within 24 hours.",
  highlights: [
    "Laparoscopic Cholecystectomy (Keyhole removal)",
    "ERCP coordination for bile duct stones",
    "Single-incision Laparoscopic Surgery (SILS)",
    "Emergency management of cholecystitis",
    "Treatment for Gallstone Pancreatitis",
    "Rapid Return to Normal Activities",
    "Precision Minimally Invasive Techniques",
  ],
  symptoms: [
    "Right upper abdominal pain after fatty meals",
    "Intense nausea and vomiting",
    "Bloating and persistent indigestion",
    "Jaundice if stones block the bile duct",
    "Fever and severe pain (indicating infection)",
  ],
  treatmentSteps: [
    { step: "Radiological Confirmation", desc: "High-resolution ultrasound to verify stones and wall inflammation." },
    { step: "Laparoscopic Removal", desc: "Minimally invasive cholecystectomy with minimal scarring." },
    { step: "Bile Duct Clearance", desc: "Ensuring no stones remain in the common bile duct." },
    { step: "Post-op Diet Plan", desc: "Gradual return to normal dietary habits with early mobilization." },
  ],
  faq: [
    { q: "Do I need surgery for gallstones?", a: "Symptomatic gallstones — causing pain, nausea, or complications — are best treated with surgery. Asymptomatic gallstones may sometimes be monitored." },
    { q: "What happens if gallstones are not treated?", a: "Untreated symptomatic gallstones can lead to cholecystitis, cholangitis (bile duct infection), or gallstone pancreatitis." },
  ],
};

INNER_PAGES["conditions/hiatus-hernia"] = {
  title: "Hiatus Hernia",
  breadcrumb: "Conditions > Hiatus Hernia",
  intro:
    "A hiatus hernia occurs when part of the stomach pushes into the chest cavity, causing chronic acid reflux (GERD). Dr. Aravind offering laparoscopic repair — including Nissen fundoplication — providing lasting relief with minimal recovery time.",
  highlights: [
    "Laparoscopic Hiatus Hernia Repair",
    "Nissen or Toupet Fundoplication",
    "Closing the diaphragmatic defect",
    "Relief from chronic GERD and heartburn",
    "Prevention of Barrett's Esophagus",
    "Minimally Invasive approach prioritised",
    "Personalised Surgical Planning",
  ],
  symptoms: [
    "Chronic heartburn and acid reflux (GERD)",
    "Regurgitation of acid or food",
    "Difficulty swallowing or food getting stuck",
    "Chest pain or discomfort after eating",
    "Chronic cough, hoarseness, or throat clearing",
  ],
  treatmentSteps: [
    { step: "Functional Evaluation", desc: "Endoscopy and pH monitoring to assess the severity of reflux." },
    { step: "Laparoscopic Repair", desc: "Reducing the hernia and closing the muscle gap in the diaphragm." },
    { step: "Valve Strengthening", desc: "Fundoplication to create a strong anti-reflux barrier." },
    { step: "Dietary Guidance", desc: "Long-term lifestyle and post-op diet support for sustained relief." },
  ],
  faq: [
    { q: "Do all hiatus hernias need surgery?", a: "Small hernias causing mild symptoms are managed with medications. Surgery is recommended for large hernias or when medical treatment fails to control GERD." },
    { q: "What is fundoplication?", a: "Fundoplication is a surgical procedure where part of the stomach is wrapped around the lower oesophagus to prevent acid reflux." },
  ],
};

INNER_PAGES["services/hernia-surgery"] = {
  title: "Hernia Surgery",
  breadcrumb: "Services > Hernia Surgery",
  intro:
    "A hernia occurs when an organ pushes through a weakness in the muscle wall. Dr. Aravind offers expert laparoscopic and open repair for all hernia types using tension-free mesh techniques that minimise recurrence risk and allow fast recovery.",
  highlights: [
    "Laparoscopic TEP or TAPP Inguinal Repair",
    "Laparoscopic Incisional Hernia Repair",
    "Umbilical and Femoral Hernia repair",
    "Tension-free Mesh Reinforcement",
    "Bilateral hernias treated simultaneously",
    "MCh Super-Specialty Expertise",
    "Rapid Mobilization Protocol",
  ],
  symptoms: [
    "A visible bulge in the groin or abdomen",
    "Discomfort or pain when bending or lifting",
    "A feeling of heaviness or dragging in the groin",
    "Sudden severe pain and inability to push bulge back (Emergency)",
  ],
  treatmentSteps: [
    { step: "Clinical Assessment", desc: "Detailed evaluation of the hernia size and risk of strangulation." },
    { step: "Mesh Reinforcement", desc: "Laparoscopic placement of a high-quality mesh to prevent recurrence." },
    { step: "Tension-Free Technique", desc: "Minimizing post-op pain by avoiding tight muscle sutures." },
    { step: "Fast-Track Recovery", desc: "Discharge within 24–48 hours with minimal activity restrictions." },
  ],
  faq: [
    { q: "Do all hernias need surgery?", a: "All symptomatic hernias and those at risk of strangulation require surgical repair to prevent life-threatening complications." },
    { q: "Can a hernia come back after surgery?", a: "With modern mesh-based laparoscopic repair, recurrence rates are very low (1–3%). Maintaining a healthy weight further reduces risk." },
  ],
};

// ─── Footer ──────────────────────────────────────────────────
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Dr. Aravind", href: "/about" },
    { label: "Book Appointment", href: PLACEHOLDERS.APPOINTMENT_LINK },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/resources/faq" },
  ],
  expertise: [
    { label: "Laparoscopic Surgery", href: "/services/laparoscopic-surgery" },
    { label: "Robotic Surgery", href: "/services/robotic-surgery" },
    { label: "GI Cancer Surgery", href: "/services/gi-cancer-surgery" },
    { label: "Liver Surgery", href: "/services/liver-surgery" },
    { label: "Pancreas Surgery", href: "/services/pancreas-surgery" },
    { label: "Bariatric Surgery", href: "/services/bariatric-surgery" },
    { label: "Hernia Surgery", href: "/services/hernia-surgery" },
  ],
  services: [
    { label: "Liver Cancer", href: "/conditions/liver-cancer" },
    { label: "Pancreatic Cancer", href: "/conditions/pancreatic-cancer" },
    { label: "Oesophageal Cancer", href: "/conditions/oesophageal-cancer" },
    { label: "Stomach Cancer", href: "/conditions/stomach-cancer" },
    { label: "Intestinal Cancer", href: "/conditions/intestinal-cancer" },
    { label: "Colon Cancer", href: "/conditions/colon-cancer" },
  ],
};
