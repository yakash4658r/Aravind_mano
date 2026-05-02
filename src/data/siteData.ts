// ============================================================
// SITE DATA — Single source of truth
// Replace all {{PLACEHOLDER}} values with your actual content
// ============================================================

export const resolveAssetPath = (path: string) => {
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
    image: resolveAssetPath("/images/laparoscopic_surgery_setup.png"),
    title: "Laparoscopic Surgery",
    desc: "Advanced keyhole techniques for gallbladder, hernia, and intestinal issues.",
    href: "/services/laparoscopic-surgery",
  },
  {
    image: resolveAssetPath("/images/robotic_surgery_illustration.png"),
    title: "Robotic Surgery",
    desc: "High precision, high end robotic surgical procedures for complex conditions.",
    href: "/services/robotic-surgery",
  },
  {
    image: resolveAssetPath("/images/gi_tract_illustration.png"),
    title: "GI Cancer Surgery",
    desc: "Specialized surgical oncology for stomach, colorectal, liver, and pancreatic cancers.",
    href: "/services/gi-cancer-surgery",
  },
  {
    image: resolveAssetPath("/images/liver_surgery_illustration.png"),
    title: "Liver Surgery",
    desc: "Advanced procedures including major hepatectomy for liver tumours and metastases.",
    href: "/services/liver-surgery",
  },
  {
    image: resolveAssetPath("/images/pancreas_illustration.png"),
    title: "Pancreas Surgery",
    desc: "Whipple procedure and complex resections for pancreatic diseases.",
    href: "/services/pancreas-surgery",
  },
  {
    image: resolveAssetPath("/images/pancreas_illustration.png"),
    title: "Pancreatitis",
    desc: "Expert medical and surgical management for acute and chronic pancreatitis.",
    href: "/conditions/pancreatitis",
  },
  {
    image: resolveAssetPath("/images/stomach_illustration.png"),
    title: "Gallstones",
    desc: "Gold-standard laparoscopic cholecystectomy for gallstone complications.",
    href: "/conditions/gallstones",
  },
  {
    image: resolveAssetPath("/images/stomach_illustration.png"),
    title: "Hiatus Hernia",
    desc: "Laparoscopic repair and fundoplication for lasting relief from severe acid reflux.",
    href: "/conditions/hiatus-hernia",
  },
  {
    image: resolveAssetPath("/images/laparoscopic_surgery_setup.png"),
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
  image?: string;
};

export const INNER_PAGES: Record<string, InnerPageData> = {
  // ── Services ──────────────────────────────────
  "services/laparoscopic-surgery": {
    title: "Laparoscopic Surgery",
    breadcrumb: "Services > Laparoscopic Surgery",
    intro:
      "Laparoscopic surgery is a technique where the surgeon inserts a thin, flexible tube called a laparoscope — fitted with a light and high-definition camera — through a small incision in the abdomen. The camera transmits magnified images to a monitor, allowing the surgeon to operate with exceptional precision using small specialised instruments.\n\nDr. Aravind Manoharan is highly trained and experienced in advanced laparoscopic techniques for a wide range of gastrointestinal and hepatobiliary conditions — from routine cholecystectomies to complex cancer resections — consistently achieving excellent surgical and patient outcomes.",
    highlights: [
      "Laparoscopic Cholecystectomy (Gallbladder Removal) — gold-standard, 3–4 tiny incisions",
      "Hernia Repair (Inguinal, Incisional, Umbilical, Hiatal) — mesh reinforcement",
      "Laparoscopic Appendectomy — rapid removal, same-day or next-day discharge",
      "Laparoscopic Colorectal Surgery — sphincter preservation where possible",
      "Laparoscopic GI Cancer Surgery — oncological precision, reduced trauma",
      "Biliary & Pancreatic Laparoscopic Procedures",
      "MCh Super-Specialty Trained — highest qualification in surgical gastroenterology",
      "High-Volume Laparoscopic Surgeon — thousands of procedures performed",
    ],
    symptoms: [
      "Patients diagnosed with gallstones, gallbladder disease, or cholecystitis",
      "Individuals with inguinal, hiatal, incisional, or umbilical hernias",
      "Patients requiring bowel resection for colon cancer, IBD, or diverticular disease",
      "Those with early to mid-stage GI cancers suitable for minimally invasive resection",
      "Patients seeking faster recovery and minimal scarring compared to open surgery",
      "Individuals advised surgical treatment for appendicitis, GERD, or biliary disease",
    ],
    treatmentSteps: [
      { step: "Personalised Surgical Planning", desc: "Thorough pre-operative evaluation with an individually tailored surgical plan based on condition, anatomy, and goals." },
      { step: "Precision Laparoscopic Surgery", desc: "Minimally invasive keyhole approach prioritizing safety and oncological outcomes." },
      { step: "Compassionate Patient-Centred Care", desc: "Dr. Aravind explains every aspect of your procedure, risks, and recovery before the operation." },
      { step: "Rapid Recovery Protocol", desc: "Post-operative care focused on fast mobilization, minimal pain, and early return home." },
    ],
    faq: [
      { q: "How long does laparoscopic surgery take?", a: "Most laparoscopic procedures take between 30 minutes and 2 hours depending on the complexity of the surgery and the condition being treated." },
      { q: "How soon can I return home after laparoscopic surgery?", a: "Many patients are discharged the same day or within 24–48 hours. More complex procedures may require a short hospital stay of 2–4 days." },
      { q: "Will I have visible scars?", a: "Laparoscopic surgery leaves only 3–4 small puncture marks (typically 5–12mm each), which fade significantly over time and are much less noticeable than open surgery scars." },
      { q: "Is laparoscopic surgery safe?", a: "Yes — laparoscopic surgery is well-established, safe, and performed routinely worldwide. Dr. Aravind Manoharan has extensive experience in laparoscopic techniques for GI conditions." },
      { q: "Does laparoscopic surgery cost more than open surgery?", a: "While the upfront procedural cost may be similar or slightly higher, laparoscopic surgery often results in lower total costs due to shorter hospital stays and faster recovery." },
    ],
    image: resolveAssetPath("/images/laparoscopic_surgery_setup.png"),
  },
  "services/gi-cancer-surgery": {
    title: "GI Cancer Surgery",
    breadcrumb: "Services > GI Cancer Surgery",
    intro:
      "GI cancer surgery involves the precise removal of cancerous tumours and affected tissue from the digestive tract and associated organs — including the stomach, liver, pancreas, colon, rectum, oesophagus, gallbladder, and bile ducts. The goal is to achieve complete tumour removal (clear margins) while preserving as much healthy tissue and organ function as possible.\n\nDr. Aravind works closely with medical oncologists and radiation oncologists to deliver a comprehensive, evidence-based treatment plan — including surgery, chemotherapy coordination, and post-operative care — for each patient.",
    highlights: [
      "Stomach (Gastric) Cancer Surgery — Subtotal/Total Gastrectomy with D2 lymph node dissection",
      "Colon & Rectal Cancer Surgery — Laparoscopic & Robotic hemicolectomy and resection",
      "Liver Cancer Surgery (Hepatectomy) — Segmental or lobar resection for HCC and metastases",
      "Pancreatic Cancer Surgery — Whipple Procedure (Pancreaticoduodenectomy)",
      "Oesophageal Cancer Surgery (Oesophagectomy) — with restoration of continuity",
      "Intestinal & Biliary Cancer Surgery — small/large bowel and bile duct resections",
      "MCh-Qualified GI Oncosurgeon — highest qualification in this field",
      "Minimally Invasive Options — laparoscopic or robotic where oncologically appropriate",
    ],
    symptoms: [
      "Anyone newly diagnosed with a gastrointestinal or digestive system cancer",
      "Patients seeking a second surgical opinion before starting cancer treatment",
      "Individuals with abnormal findings on endoscopy, CT scan, MRI, or PET scan",
      "Those with unexplained weight loss, bleeding, jaundice, or persistent abdominal symptoms",
      "Patients who have completed chemotherapy and require surgical resection",
      "Family members of high-risk patients seeking early cancer screening advice",
    ],
    treatmentSteps: [
      { step: "Oncological Staging", desc: "Endoscopy, biopsy, CT/PET-CT to determine cancer stage and resectability." },
      { step: "Multidisciplinary Planning", desc: "Coordinated care with medical and radiation oncologists for holistic, evidence-based treatment." },
      { step: "Precise Surgical Resection", desc: "Laparoscopic or open cancer surgery achieving complete tumour removal with clear margins." },
      { step: "Long-term Surveillance", desc: "Rigorous follow-up with scans and markers to monitor for recurrence and coordinate adjuvant therapy." },
    ],
    faq: [
      { q: "Is surgery always necessary for GI cancer?", a: "Surgery is often the primary treatment for resectable GI cancers. For some cancers, chemotherapy or radiation may be given before surgery to shrink the tumour. Dr. Aravind will discuss all options with you." },
      { q: "What is the recovery like after GI cancer surgery?", a: "Recovery varies by procedure. Most patients stay in hospital for 5–10 days. Full recovery typically takes 4–8 weeks depending on the type of surgery." },
      { q: "Can GI cancer be cured by surgery?", a: "When detected and operated upon at an early stage, many GI cancers can be cured by surgery. Even in advanced cases, surgery combined with other treatments can significantly improve survival and quality of life." },
      { q: "Will I need chemotherapy after GI cancer surgery?", a: "Depending on the cancer type, stage, and pathology findings, adjuvant (post-operative) chemotherapy may be recommended. Dr. Aravind will coordinate with your oncologist for a complete care plan." },
    ],
    image: resolveAssetPath("/images/gi_tract_illustration.png"),
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
      "Stomach (gastric) cancer requires early detection and expert surgical management for the best chance of cure. Dr. Aravind Manoharan performs both subtotal and total gastrectomy with D2 lymph node dissection — the internationally accepted standard for curative gastric cancer surgery — combined with post-operative chemotherapy coordination for Stage II/III disease.",
    highlights: [
      "Subtotal gastrectomy for distal stomach tumours",
      "Total gastrectomy for tumours of the mid or upper stomach",
      "D2 lymphadenectomy for complete lymph node staging and clearance",
      "Perioperative chemotherapy (FLOT or FOLFOX regimen) for Stage II/III disease",
      "Laparoscopic gastrectomy for selected early-stage cases",
      "MCh Super-Specialty Qualification",
      "Multidisciplinary Care Coordination",
    ],
    symptoms: [
      "Persistent upper abdominal discomfort or pain",
      "Unexplained weight loss and loss of appetite",
      "Nausea and vomiting",
      "Feeling full quickly after small meals",
      "Black or tarry stools (suggesting stomach bleeding)",
      "Anaemia detected on blood tests",
    ],
    treatmentSteps: [
      { step: "Diagnostic Endoscopy", desc: "Visual inspection and multiple biopsies." },
      { step: "Staging CT", desc: "Evaluating tumor size and any distant spread." },
      { step: "Surgery", desc: "Total or subtotal removal of the stomach with nodal clearance." },
      { step: "Reconstruction", desc: "Joining the esophagus or remaining stomach to the intestine." },
    ],
    faq: [
      { q: "Can you live normally after stomach cancer surgery?", a: "Yes — with dietary adjustments and nutritional support, most patients live well after gastrectomy. Small, frequent meals and vitamin supplementation are key to recovery." },
      { q: "What is H. pylori and does it cause stomach cancer?", a: "Helicobacter pylori is a bacterial infection that significantly increases the risk of stomach cancer. Eradication of H. pylori is an important preventive measure." },
    ],
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
INNER_PAGES["conditions/liver-cancer"] = {
  title: "Liver Cancer",
  breadcrumb: "Conditions > Liver Cancer",
  intro:
    "Liver cancer can be primary (originating in the liver — most commonly hepatocellular carcinoma or HCC) or secondary (metastases that have spread to the liver from cancers elsewhere). When liver cancer is diagnosed at a resectable stage, surgery offers the best chance of cure. Dr. Aravind coordinates with specialists for ablation, targeted therapy, and systemic treatments.",
  highlights: [
    "Surgical Resection (Hepatectomy) - Primary curative treatment",
    "Laparoscopic Liver Resection for suitable cases",
    "Lymph Node Dissection for accurate staging",
    "Multidisciplinary Management (TACE, ablation, targeted therapy)",
    "GI Oncosurgery Super-specialty Expertise",
    "Tumour Board Coordination with oncology teams",
  ],
  symptoms: [
    "Unexplained weight loss and loss of appetite",
    "Upper abdominal pain or swelling (especially on the right side)",
    "Jaundice (yellowing of skin or eyes) and dark urine",
    "History of liver cirrhosis, chronic hepatitis B or C",
    "Abnormal liver function tests or elevated AFP",
    "Incidental liver mass found on imaging",
  ],
  treatmentSteps: [
    { step: "Oncological Staging", desc: "Triple-phase CT and functional liver assessment." },
    { step: "Surgical Resection", desc: "Removal of the liver segment or lobe containing the tumour." },
    { step: "Multidisciplinary Care", desc: "Coordination for ablation or targeted therapy if surgery is not suitable." },
    { step: "Long-term Surveillance", desc: "Regular scans and tumor markers to monitor for recurrence." },
  ],
  faq: [
    { q: "Can liver cancer be cured?", a: "When detected early and surgically resected completely, liver cancer can be cured. Early-stage HCC and isolated colorectal liver metastases have good surgical outcomes." },
    { q: "What causes liver cancer?", a: "Common risk factors include chronic hepatitis B or C infection, liver cirrhosis, heavy alcohol use, and non-alcoholic fatty liver disease (NAFLD)." },
    { q: "Is liver cancer surgery safe?", a: "In experienced hands and with careful patient selection, liver cancer surgery is safe. Dr. Aravind Manoharan performs thorough pre-operative evaluation." },
    { q: "What happens if liver cancer cannot be removed surgically?", a: "Options include ablation (RFA/MWA), TACE, targeted therapy, or immunotherapy — coordinated by Dr. Aravind with the oncology team." },
  ],
  image: resolveAssetPath("/images/liver_surgery_illustration.png"),
};

INNER_PAGES["conditions/pancreatic-cancer"] = {
  title: "Pancreatic Cancer",
  breadcrumb: "Conditions > Pancreatic Cancer",
  intro:
    "Pancreatic cancer is one of the most challenging gastrointestinal cancers, often presenting late. Dr. Aravind Manoharan offers expert surgical management — including the Whipple procedure and distal pancreatectomy — combined with close oncology coordination for chemotherapy before and after surgery.",
  highlights: [
    "Whipple procedure (pancreaticoduodenectomy) for head tumours",
    "Distal pancreatectomy for body and tail tumours",
    "Neoadjuvant chemotherapy (FOLFIRINOX, Gemcitabine)",
    "Adjuvant chemotherapy after surgery for survival",
    "Palliative bypass surgery for symptom control",
    "MCh Super-Specialty Qualification",
    "Minimally invasive approach prioritised",
  ],
  symptoms: [
    "Upper abdominal pain radiating to the back",
    "Unexplained weight loss and loss of appetite",
    "New-onset diabetes in older adults",
    "Jaundice (yellowing of skin/eyes) and pale stools",
    "Nausea, vomiting, and early satiety",
  ],
  treatmentSteps: [
    { step: "Vascular Assessment", desc: "High-resolution imaging to determine tumor relationship with major vessels." },
    { step: "Whipple/Resection", desc: "Major surgical removal of the affected pancreatic segment." },
    { step: "Oncology Coordination", desc: "Sequencing of chemotherapy to improve surgical outcomes." },
    { step: "Nutritional Management", desc: "Post-op enzyme therapy and specialized dietary support." },
  ],
  faq: [
    { q: "Is pancreatic cancer always fatal?", a: "Not always — when detected and surgically resected at an early stage, outcomes are significantly better. Surgery combined with chemotherapy offers the best chance." },
    { q: "What are the warning signs of pancreatic cancer?", a: "Painless jaundice, unexplained weight loss, new-onset diabetes, and persistent upper abdominal/back pain are key warning signs." },
  ],
  image: resolveAssetPath("/images/pancreas_illustration.png"),
};

INNER_PAGES["conditions/oesophageal-cancer"] = {
  title: "Oesophageal Cancer",
  breadcrumb: "Conditions > Oesophageal Cancer",
  intro:
    "Oesophageal cancer (cancer of the food pipe) is a serious GI malignancy requiring prompt diagnosis. Dr. Aravind Manoharan offers comprehensive treatment — including oesophagectomy and neoadjuvant chemoradiation — with a focus on restoring swallowing function and quality of life.",
  highlights: [
    "Neoadjuvant chemoradiation before surgery to downstage tumour",
    "Oesophagectomy with gastric pull-up or colonic interposition",
    "Minimally invasive oesophagectomy (where feasible)",
    "Palliative stenting or bypass for advanced disease",
    "Nutritional support and feeding tube management",
    "Super-Specialty trained in surgical gastroenterology",
  ],
  symptoms: [
    "Progressive difficulty swallowing (dysphagia)",
    "Unexplained weight loss",
    "Chest pain or discomfort",
    "Regurgitation of food or liquid",
    "Chronic cough, hoarseness, or hiccups",
  ],
  treatmentSteps: [
    { step: "Swallowing Evaluation", desc: "Endoscopy and barium swallow to locate the lesion." },
    { step: "Neoadjuvant Therapy", desc: "Shrinking the tumor with chemo/radiation before surgery." },
    { step: "Oesophagectomy", desc: "Surgical removal and food pipe reconstruction." },
    { step: "Nutritional Recovery", desc: "Gradual return to swallowing with expert dietary guidance." },
  ],
  faq: [
    { q: "Is oesophageal cancer treatable?", a: "Oesophageal cancer detected at an early or locally advanced stage is treatable with combined surgery and chemoradiation." },
    { q: "What causes oesophageal cancer?", a: "Risk factors include chronic GERD, Barrett's oesophagus, smoking, heavy alcohol use, and achalasia." },
  ],
  image: resolveAssetPath("/images/stomach_illustration.png"),
};

INNER_PAGES["conditions/intestinal-cancer"] = {
  title: "Intestinal Cancer",
  breadcrumb: "Conditions > Intestinal Cancer",
  intro:
    "Intestinal cancers — including tumours of the small bowel and large intestine — require prompt diagnosis and specialist surgical management. Dr. Aravind Manoharan offers bowel resection with adequate margins and lymph node clearance, combined with adjuvant treatment when indicated.",
  highlights: [
    "Small bowel resection with primary anastomosis",
    "Right or left hemicolectomy for large bowel tumours",
    "Laparoscopic bowel resection where suitable",
    "Lymph node dissection for oncological staging",
    "Adjuvant chemotherapy coordination for advanced disease",
    "MCh Super-Specialty Qualification",
  ],
  symptoms: [
    "Abdominal pain or cramping",
    "Unexplained weight loss",
    "Blood in stool or dark stools",
    "Nausea, vomiting, or bowel obstruction",
    "Fatigue and anaemia from chronic bleeding",
  ],
  treatmentSteps: [
    { step: "Bowel Visualization", desc: "Colonoscopy or CT Enteroclysis to identify the lesion." },
    { step: "Surgical Resection", desc: "Removal of the affected segment with wide margins." },
    { step: "Reconstruction", desc: "Rejoining the healthy bowel ends safely." },
    { step: "Oncology Review", desc: "Post-op assessment for the need for chemotherapy." },
  ],
  faq: [
    { q: "Is intestinal cancer common?", a: "Small intestinal cancer is relatively rare. Large intestinal (colorectal) cancer is one of the most common GI cancers worldwide." },
    { q: "Can intestinal cancer be treated without surgery?", a: "Surgery is the primary treatment for resectable intestinal cancers. Chemotherapy and radiation may be used as adjuncts." },
  ],
  image: resolveAssetPath("/images/gi_tract_illustration.png"),
};

INNER_PAGES["conditions/colon-cancer"] = { ...INNER_PAGES["conditions/colorectal-cancer"], title: "Colon Cancer", breadcrumb: "Conditions > Colon Cancer" };

INNER_PAGES["services/robotic-surgery"] = {
  title: "Robotic Surgery",
  breadcrumb: "Services > Robotic Surgery",
  intro:
    "In robotic surgery, the surgeon is fully in control — seated at a console a short distance from the operating table, with a magnified 3D view of the surgical field. The robotic arms, which hold the instruments, replicate the surgeon's hand movements with greater precision and without tremor. This is particularly valuable in confined anatomical spaces or when operating around critical structures.\n\nDr. Aravind Manoharan utilises robotic assistance for selected complex GI, colorectal, and hepatobiliary cases where the additional precision and visualisation offer meaningful clinical benefit to the patient.",
  highlights: [
    "Robotic Colorectal Surgery — Low anterior resection, APR, right/left hemicolectomy",
    "Robotic Hernia Repair — Complex and recurrent hernias with enhanced dexterity",
    "Robotic Gastric Surgery — Subtotal/total gastrectomy with precise lymph node dissection",
    "Robotic Hepatobiliary Surgery — Selected liver resections and biliary procedures",
    "Robotic Rectal Cancer Surgery — Total Mesorectal Excision (TME) in narrow pelvic space",
    "Advanced Training in Robotic GI Techniques",
    "Selective & Evidence-Based Approach — recommended only for genuine clinical advantage",
    "Full Informed Consent — benefits, limitations, and alternatives explained clearly",
  ],
  symptoms: [
    "Patients requiring complex colorectal or rectal cancer surgery in confined pelvic space",
    "Individuals with recurrent or complex hernias needing precise repair",
    "Patients undergoing gastrectomy or bowel resection for cancer",
    "Those with anatomical complexity where enhanced visualisation improves safety",
    "Patients seeking the most advanced minimally invasive surgical option available",
  ],
  treatmentSteps: [
    { step: "Robotic Console Control", desc: "Surgeon seated at a console with magnified 3D view — in complete control throughout the procedure." },
    { step: "Enhanced Precision & Tremor Filtration", desc: "Robotic arms replicate hand movements with absolute stability and accuracy." },
    { step: "Selective Case Planning", desc: "Robotic surgery recommended only when it offers a genuine clinical advantage over laparoscopic or open approach." },
    { step: "Integrated Cancer Care", desc: "All robotic cancer surgeries planned in coordination with oncology and radiology teams." },
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
    "Bariatric surgery is the most effective and long-lasting treatment for severe obesity and obesity-related conditions including Type 2 diabetes, hypertension, sleep apnoea, and joint disease. Dr. Aravind Manoharan performs laparoscopic bariatric procedures — including sleeve gastrectomy and Roux-en-Y gastric bypass — with comprehensive pre-operative evaluation and long-term post-operative support.",
  highlights: [
    "Laparoscopic Sleeve Gastrectomy — removal of 75–80% of the stomach",
    "Roux-en-Y Gastric Bypass — small stomach pouch with intestinal rerouting",
    "Mini Gastric Bypass (MGB) — simplified bypass with excellent metabolic outcomes",
    "Metabolic Remission of Type 2 Diabetes",
    "Comprehensive Pre-operative Assessment — cardiac, nutritional, psychological",
    "Lifelong Dietary Counselling, Supplementation & Follow-up Support",
  ],
  symptoms: [
    "BMI ≥ 37.5 (Asian criteria) with or without comorbidities",
    "BMI ≥ 32.5 with Type 2 diabetes, hypertension, or sleep apnoea",
    "Failed multiple attempts at sustained weight loss through diet and exercise",
    "Significant impact of obesity on daily function, joints, or mental health",
  ],
  treatmentSteps: [
    { step: "Multidisciplinary Pre-op Evaluation", desc: "Cardiac, nutritional, and psychological assessment before surgery." },
    { step: "Laparoscopic Bariatric Procedure", desc: "Minimally invasive sleeve gastrectomy or gastric bypass tailored to the patient." },
    { step: "Metabolic Monitoring", desc: "Close follow-up of diabetes, hypertension, and nutritional parameters post-op." },
    { step: "Lifelong Support", desc: "Dietary counselling, vitamin supplementation, and long-term follow-up for sustained results." },
  ],
  faq: [
    { q: "Is bariatric surgery permanent?", a: "Bariatric surgery creates lasting anatomical changes that support long-term weight loss. However, maintaining a healthy lifestyle — diet and activity — is essential for sustained results." },
    { q: "Can bariatric surgery cure diabetes?", a: "Yes — bariatric surgery, particularly gastric bypass, often achieves complete remission of Type 2 diabetes even before significant weight loss occurs. It is the most effective treatment for metabolic disease associated with obesity." },
  ],
};

INNER_PAGES["services/liver-surgery"] = {
  title: "Liver Surgery",
  breadcrumb: "Services > Liver Surgery",
  intro:
    "Liver surgery (hepatic surgery) involves the partial or complete removal of diseased liver tissue — a procedure known as hepatic resection or hepatectomy. The liver has a remarkable capacity to regenerate, making surgery possible even when a significant portion of liver tissue needs to be removed.\n\nDr. Aravind Manoharan performs both open and laparoscopic liver surgeries, selecting the approach that offers the best balance of oncological adequacy and patient safety for each individual case.",
  highlights: [
    "Segmental Hepatectomy — removal of liver segments preserving maximum healthy tissue",
    "Right or Left Hepatectomy — lobar removal for larger tumours or extensive disease",
    "Laparoscopic Liver Resection — minimally invasive, less blood loss, faster recovery",
    "Liver Cyst Surgery — deroofing or resection of symptomatic/hydatid cysts",
    "Liver Abscess Drainage — surgical or image-guided drainage",
    "Hepatobiliary Specialist Training — MCh-trained with specific HPB expertise",
    "Multidisciplinary Planning — coordinated with oncology and radiology teams",
  ],
  symptoms: [
    "Patients diagnosed with hepatocellular carcinoma (HCC / primary liver cancer)",
    "Individuals with resectable liver metastases from colorectal or other cancers",
    "Those with symptomatic or growing liver cysts or benign tumours",
    "Patients with liver abscesses not responding to antibiotics",
    "Individuals with bile duct disease affecting the liver",
  ],
  treatmentSteps: [
    { step: "Pre-operative Liver Function Assessment", desc: "Evaluating liver volume and function to ensure safe resection margins." },
    { step: "Surgical Resection", desc: "Open or laparoscopic removal of diseased tissue with precise oncological margins." },
    { step: "Regeneration & Recovery Support", desc: "Post-operative care focusing on liver function and nutritional recovery." },
    { step: "Multidisciplinary Long-term Care", desc: "Coordinated surveillance with oncology and radiology teams for cancer cases." },
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
    "The pancreas is a vital organ that produces digestive enzymes and hormones (including insulin). Pancreatic surgery involves operations on the pancreas and surrounding structures — including the bile duct, duodenum, and blood vessels — to treat tumours, cysts, inflammatory disease, and cancer.\n\nDue to the complexity and proximity to major blood vessels, pancreatic surgery requires a highly skilled specialist surgeon. Dr. Aravind Manoharan is trained in all major pancreatic procedures, including the Whipple operation (pancreaticoduodenectomy), distal pancreatectomy, and central pancreatectomy.",
  highlights: [
    "Whipple Procedure (Pancreaticoduodenectomy) — standard surgery for pancreatic head cancers",
    "Distal Pancreatectomy — removal of body/tail, often with spleen removal",
    "Central Pancreatectomy — parenchyma-preserving resection for neck tumours",
    "Pancreatic Cyst Surgery — mucinous cysts and IPMNs",
    "Surgery for Chronic Pancreatitis — Frey or Puestow drainage procedures",
    "HPB Super-Specialty Qualification — dedicated training in hepatobiliary and pancreatic surgery",
    "Multidisciplinary Cancer Planning — neoadjuvant chemotherapy when indicated",
  ],
  symptoms: [
    "Patients diagnosed with pancreatic cancer or periampullary tumours",
    "Individuals with pancreatic cysts showing high-risk features on imaging",
    "Those with pain-dominant chronic pancreatitis failing medical treatment",
    "Patients with insulinoma or other functional pancreatic tumours",
    "Individuals with unexplained jaundice and dilated bile ducts on imaging",
  ],
  treatmentSteps: [
    { step: "High-resolution Staging & Vascular Assessment", desc: "Detailed CT/MRI imaging to assess resectability and tumour relationship with major vessels." },
    { step: "Whipple Procedure or Targeted Resection", desc: "Major surgical removal of the affected pancreatic segment and surrounding structures." },
    { step: "Careful Patient Preparation", desc: "Nutritional, biliary, and cardiorespiratory optimisation before surgery to minimise complications." },
    { step: "Nutritional Management & Surveillance", desc: "Post-op enzyme replacement, dietary support, and long-term cancer monitoring." },
  ],
  faq: [
    { q: "What is the Whipple procedure?", a: "The Whipple procedure (pancreaticoduodenectomy) is a major surgery to remove the head of the pancreas, duodenum, part of the bile duct, and gallbladder — performed for cancers of the pancreatic head and periampullary region." },
    { q: "How long is recovery after pancreatic surgery?", a: "Hospital stay is typically 7–10 days. Full recovery takes 6–12 weeks. Patients often require dietary modifications and enzyme supplementation after surgery." },
    { q: "Will I develop diabetes after pancreatic surgery?", a: "Depending on the extent of pancreatic removal, some patients may develop or worsen diabetes after surgery. This is closely monitored and managed post-operatively." },
    { q: "Can pancreatic cancer be cured by surgery?", a: "Surgery offers the only chance of cure for pancreatic cancer. Early-stage, resectable pancreatic cancer treated with surgery followed by chemotherapy has the best survival outcomes." },
  ],
};

INNER_PAGES["conditions/pancreatitis"] = {
  title: "Pancreatitis",
  breadcrumb: "Conditions > Pancreatitis",
  intro:
    "Pancreatitis — inflammation of the pancreas — ranges from mild acute episodes to debilitating chronic disease with severe pain and complications. Dr. Aravind Manoharan provides comprehensive medical and surgical management of pancreatitis, including drainage procedures and resections for chronic pancreatitis that has failed conservative treatment.",
  highlights: [
    "Medical management with bowel rest, fluids, pain control, and enzyme support",
    "Endoscopic drainage of pancreatic duct obstructions",
    "Surgical Drainage — Frey or Puestow procedure for chronic pancreatitis",
    "Distal pancreatectomy for chronic disease affecting the tail of the pancreas",
    "Nutritional support and pancreatic enzyme replacement",
    "MCh Super-Specialty Qualification in Surgical Gastroenterology",
    "Minimally invasive (laparoscopic) approach prioritised wherever possible",
  ],
  symptoms: [
    "Severe upper abdominal pain (often radiating to the back)",
    "Nausea and vomiting",
    "Fever and elevated heart rate (in acute cases)",
    "Chronic abdominal pain and weight loss (chronic pancreatitis)",
    "Fatty or oily stools (steatorrhoea) and diabetes (in chronic cases)",
  ],
  treatmentSteps: [
    { step: "Emergency Stabilization", desc: "Medical management with bowel rest, IV fluids, pain control, and nutritional support." },
    { step: "Cause Identification", desc: "Determining the underlying cause (gallstones, alcohol, other) to prevent recurrence." },
    { step: "Surgical or Endoscopic Intervention", desc: "Drainage or resection for chronic pain-dominant pancreatitis not responding to medical treatment." },
    { step: "Long-term Functional Support", desc: "Pancreatic enzyme replacement, dietary guidance, and diabetes management." },
  ],
  faq: [
    { q: "Can pancreatitis be cured?", a: "Acute pancreatitis usually resolves with medical treatment. Chronic pancreatitis can be managed but not fully cured — surgery can significantly reduce pain and improve quality of life." },
    { q: "What causes pancreatitis?", a: "The most common causes are gallstones (which block the pancreatic duct) and heavy alcohol use. Other causes include high triglycerides, certain medications, and anatomical abnormalities." },
  ],
};

INNER_PAGES["conditions/colon-cancer"] = {
  title: "Colon Cancer",
  breadcrumb: "Conditions > Colon Cancer",
  intro:
    "Colon cancer (colorectal cancer) is one of the most common GI cancers. When detected early, it is highly treatable. Dr. Aravind Manoharan offers both laparoscopic and open surgical resection — including right hemicolectomy, left hemicolectomy, and sigmoid colectomy — with meticulous lymph node dissection for accurate staging and cure.",
  highlights: [
    "Laparoscopic right hemicolectomy for right colon tumours",
    "Laparoscopic left hemicolectomy or sigmoid colectomy for left colon tumours",
    "Open surgery for locally advanced or obstructed cases",
    "Complete mesocolic excision (CME) for oncological completeness",
    "Adjuvant chemotherapy coordination for Stage III/IV disease",
    "MCh Super-Specialty Qualification in Surgical Gastroenterology",
    "Minimally invasive (laparoscopic) approach prioritised",
  ],
  symptoms: [
    "Change in bowel habits — persistent diarrhoea, constipation, or alternating",
    "Blood in stool or rectal bleeding",
    "Unexplained weight loss and fatigue",
    "Abdominal pain, cramping, or bloating",
    "Feeling that the bowel doesn't empty completely",
  ],
  treatmentSteps: [
    { step: "Colonoscopy & Biopsy", desc: "Visual verification of the tumour with histopathological staging." },
    { step: "Staging Imaging", desc: "CT scan of chest, abdomen, and pelvis to determine disease extent." },
    { step: "Oncological Resection", desc: "Laparoscopic or open removal of the cancerous segment with lymph node clearance." },
    { step: "Adjuvant Therapy Planning", desc: "Coordinated care with oncologists for Stage III/IV chemotherapy when indicated." },
  ],
  faq: [
    { q: "Is colon cancer curable?", a: "Yes — when detected at an early stage (Stage I or II), colon cancer has excellent cure rates with surgery alone. Even Stage III disease treated with surgery and chemotherapy has good long-term outcomes." },
    { q: "What is colonoscopy and do I need one?", a: "Colonoscopy is a diagnostic procedure to visualise the entire colon and detect polyps or early cancers. It is recommended for anyone over 45, those with rectal bleeding, or a family history of colorectal cancer." },
  ],
};

INNER_PAGES["conditions/gallstones"] = {
  title: "Gallstones",
  breadcrumb: "Conditions > Gallstones",
  intro:
    "Gallstones are one of the most common causes of abdominal pain and digestive symptoms. Dr. Aravind Manoharan performs laparoscopic cholecystectomy — the gold-standard treatment for symptomatic gallstones — through tiny incisions, allowing most patients to go home the same day or within 24 hours and resume normal activities within a week.",
  highlights: [
    "Laparoscopic Cholecystectomy — gallbladder removal through 3–4 tiny cuts",
    "ERCP for bile duct stones before or after surgery",
    "Single-incision laparoscopic surgery (SILS) for selected cases",
    "Emergency surgery for complicated cholecystitis or gallstone pancreatitis",
    "MCh Super-Specialty Qualification in Surgical Gastroenterology",
    "Minimally invasive approach prioritised — rapid return to normal activities",
  ],
  symptoms: [
    "Right upper abdominal pain, especially after fatty meals",
    "Nausea and vomiting",
    "Bloating and indigestion",
    "Jaundice if stones block the bile duct",
    "Fever and severe pain (cholecystitis or cholangitis)",
  ],
  treatmentSteps: [
    { step: "Ultrasound Confirmation", desc: "High-resolution imaging to verify stones and assess gallbladder wall and bile duct." },
    { step: "Laparoscopic Cholecystectomy", desc: "Minimally invasive removal of the gallbladder through 3–4 tiny incisions." },
    { step: "Bile Duct Clearance", desc: "ERCP if stones are present in the common bile duct." },
    { step: "Post-op Dietary Guidance", desc: "Gradual return to normal dietary habits with early mobilization." },
  ],
  faq: [
    { q: "Do I need surgery for gallstones?", a: "Symptomatic gallstones — causing pain, nausea, or complications — are best treated with surgery. Asymptomatic gallstones in some patients may be monitored without immediate surgery." },
    { q: "What happens if gallstones are not treated?", a: "Untreated symptomatic gallstones can lead to cholecystitis (gallbladder infection), cholangitis (bile duct infection), pancreatitis, or rarely gallbladder cancer." },
  ],
};

INNER_PAGES["conditions/hiatus-hernia"] = {
  title: "Hiatus Hernia",
  breadcrumb: "Conditions > Hiatus Hernia",
  intro:
    "A hiatus hernia occurs when part of the stomach pushes through the diaphragm into the chest cavity, causing chronic acid reflux (GERD) and discomfort. Dr. Aravind Manoharan offers laparoscopic repair of hiatus hernias — including Nissen fundoplication — providing lasting relief from GERD symptoms with minimal recovery time.",
  highlights: [
    "Laparoscopic hiatus hernia repair — closing the diaphragmatic defect",
    "Nissen or Toupet fundoplication — wrapping the stomach to prevent reflux",
    "Medical management with PPIs for mild cases",
    "Post-operative dietary and lifestyle guidance for sustained symptom control",
    "MCh Super-Specialty Qualification in Surgical Gastroenterology",
    "Minimally invasive approach prioritised wherever possible",
  ],
  symptoms: [
    "Chronic heartburn and acid reflux (especially when lying down)",
    "Regurgitation of acid or food",
    "Difficulty swallowing",
    "Chest pain or discomfort after eating",
    "Chronic cough, hoarseness, or throat clearing",
  ],
  treatmentSteps: [
    { step: "Functional Evaluation", desc: "Endoscopy and pH monitoring to assess the severity of reflux and hernia size." },
    { step: "Laparoscopic Hernia Repair", desc: "Reducing the hernia and closing the muscle gap in the diaphragm." },
    { step: "Fundoplication (Valve Strengthening)", desc: "Wrapping part of the stomach around the lower oesophagus to prevent acid reflux." },
    { step: "Post-op Dietary & Lifestyle Guidance", desc: "Long-term diet modification and lifestyle advice for sustained symptom control." },
  ],
  faq: [
    { q: "Do all hiatus hernias need surgery?", a: "Not all hiatus hernias require surgery. Small sliding hiatal hernias causing mild symptoms are often managed with medications. Surgery is recommended for large hernias, those causing severe GERD, or when medical treatment fails." },
    { q: "What is fundoplication?", a: "Fundoplication is a surgical procedure where the upper part of the stomach is wrapped around the lower oesophagus to strengthen the valve and prevent acid reflux." },
  ],
};

INNER_PAGES["services/hernia-surgery"] = {
  title: "Hernia Surgery",
  breadcrumb: "Services > Hernia Surgery",
  intro:
    "A hernia occurs when an organ or tissue pushes through a weakness in the surrounding muscle wall. Dr. Aravind Manoharan offers expert laparoscopic (keyhole) and open hernia repair for all hernia types — inguinal, incisional, umbilical, femoral, and hiatal — using tension-free mesh techniques that minimise recurrence risk and allow fast recovery.",
  highlights: [
    "Laparoscopic TEP or TAPP repair for inguinal hernias — fastest recovery, least pain",
    "Bilateral hernias treated simultaneously in one laparoscopic operation",
    "Laparoscopic incisional hernia repair with mesh reinforcement",
    "Open hernia repair for very large or complicated hernias",
    "Laparoscopic umbilical hernia repair",
    "MCh Super-Specialty Qualification in Surgical Gastroenterology",
    "Tension-free mesh technique — recurrence rates of 1–3%",
  ],
  symptoms: [
    "A visible bulge in the groin, abdomen, or belly button",
    "Discomfort or pain, especially when bending, coughing, or lifting",
    "A feeling of heaviness or dragging in the groin",
    "Sudden severe pain and inability to push the bulge back (Emergency — strangulated hernia)",
  ],
  treatmentSteps: [
    { step: "Clinical Assessment", desc: "Detailed evaluation of hernia type, size, and risk of strangulation." },
    { step: "Laparoscopic TEP/TAPP or Open Repair", desc: "Minimally invasive or open approach selected based on hernia complexity." },
    { step: "Tension-Free Mesh Reinforcement", desc: "Placement of a medical-grade mesh to strengthen the weakness and prevent recurrence." },
    { step: "Fast-Track Recovery", desc: "Discharge within 24–48 hours with minimal activity restrictions." },
  ],
  faq: [
    { q: "Do all hernias need surgery?", a: "All symptomatic hernias and those at risk of strangulation require surgical repair. Asymptomatic inguinal hernias in very elderly patients may be monitored with watchful waiting." },
    { q: "Can a hernia come back after surgery?", a: "With modern mesh-based laparoscopic repair, recurrence rates are very low (1–3%). Avoiding heavy lifting during recovery and maintaining a healthy weight reduce the risk further." },
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
