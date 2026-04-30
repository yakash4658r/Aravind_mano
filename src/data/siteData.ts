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
      "Laparoscopic (minimally invasive) surgery uses a laparoscope — a thin tube with a high-intensity light and a high-resolution camera at the front — to look at the abdominal organs. This advanced technique allows for major surgeries to be performed through tiny incisions.",
    highlights: [
      "Minimally invasive approach with small incisions",
      "Less post-operative pain and discomfort",
      "Faster recovery and shorter hospital stays",
      "Minimal scarring and better cosmetic results",
      "Reduced risk of wound infections",
      "Precision-guided camera visualization",
    ],
    symptoms: [
      "Gallstones and gallbladder inflammation",
      "Acute or chronic appendicitis",
      "Inguinal, umbilical, or incisional hernia",
      "Gastroesophageal reflux disease (GERD)",
      "Bowel resection for benign or malignant issues",
    ],
    treatmentSteps: [
      { step: "Initial Consultation", desc: "Detailed history and physical examination to assess suitability for laparoscopy." },
      { step: "Diagnostic Workup", desc: "Ultrasound, CT, or MRI imaging to plan the surgical approach." },
      { step: "Anesthesia", desc: "Procedure performed under general anesthesia for patient comfort." },
      { step: "Trocar Insertion", desc: "Small ports placed to introduce the laparoscope and instruments." },
      { step: "Surgical Procedure", desc: "Organ removal or repair performed under high-definition visualization." },
      { step: "Rapid Recovery", desc: "Early mobilization and discharge, often within 24–48 hours." },
    ],
    faq: FAQ_ITEMS.slice(0, 3),
  },
  "services/gi-cancer-surgery": {
    title: "GI Cancer Surgery",
    breadcrumb: "Services > GI Cancer Surgery",
    intro:
      "GI Cancer Surgery involves the surgical treatment of cancers affecting the digestive system. Dr. Aravind Manoharan focuses on curative resections, ensuring early detection and clear margins (R0 resection) for the best possible survival outcomes.",
    highlights: [
      "Curative intent for stomach, colon, and rectal cancers",
      "Advanced D2 lymph node dissection for gastric cancer",
      "Sphincter-preserving surgery for rectal cancer",
      "Multidisciplinary approach with oncologists",
      "Early detection programs for GI malignancies",
      "Minimal access surgery for selected cancer cases",
    ],
    symptoms: [
      "Unexplained weight loss and loss of appetite",
      "Persistent abdominal pain or bloating",
      "Change in bowel habits (constipation or diarrhea)",
      "Rectal bleeding or black tarry stools",
      "Difficulty swallowing (dysphagia)",
      "Painless jaundice (yellowing of skin/eyes)",
    ],
    treatmentSteps: [
      { step: "Comprehensive Staging", desc: "Endoscopy, biopsy, and high-resolution imaging (CT/PET-CT)." },
      { step: "Neo-adjuvant Therapy", desc: "Coordination of chemo/radiation before surgery if required." },
      { step: "Surgical Planning", desc: "Customized resection strategy to ensure complete tumor removal." },
      { step: "Refined Resection", desc: "Precise surgery with adequate lymph node clearance." },
      { step: "Pathological Analysis", desc: "Expert review of resected tissue for staging and margins." },
      { step: "Adjuvant Planning", desc: "Long-term follow-up and coordination of post-op therapy." },
    ],
    faq: FAQ_ITEMS.slice(3, 5),
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

INNER_PAGES["services/robotic-surgery"] = { ...INNER_PAGES["services/laparoscopic-surgery"], title: "Robotic Surgery", breadcrumb: "Services > Robotic Surgery" };
INNER_PAGES["services/liver-surgery"] = { ...INNER_PAGES["conditions/liver-tumours"], title: "Liver Surgery", breadcrumb: "Services > Liver Surgery" };
INNER_PAGES["services/pancreas-surgery"] = { ...INNER_PAGES["conditions/pancreatic-disease"], title: "Pancreas Surgery", breadcrumb: "Services > Pancreas Surgery" };
INNER_PAGES["conditions/pancreatitis"] = { ...INNER_PAGES["conditions/pancreatic-disease"], title: "Pancreatitis", breadcrumb: "Conditions > Pancreatitis" };
INNER_PAGES["conditions/gallstones"] = { ...INNER_PAGES["conditions/gallstones-biliary"], title: "Gallstones", breadcrumb: "Conditions > Gallstones" };
INNER_PAGES["conditions/hiatus-hernia"] = { ...INNER_PAGES["conditions/gerd-acid-reflux"], title: "Hiatus Hernia", breadcrumb: "Conditions > Hiatus Hernia" };
INNER_PAGES["services/hernia-surgery"] = { ...INNER_PAGES["services/hernia-repair"], title: "Hernia Surgery", breadcrumb: "Services > Hernia Surgery" };

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
