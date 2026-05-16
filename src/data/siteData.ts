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
  CLINIC_NAME: "Dr Aravind Manoharan",
  CITY: "Chennai",
  LOGO_URL: resolveAssetPath("/images/Logo.svg"),
  DOCTOR_IMAGE: resolveAssetPath("/images/doc_2.jpeg"),
  CTA_IMAGE: resolveAssetPath("/images/doc_3.jpeg"),
  CLINIC_IMAGE: resolveAssetPath("/images/clinic.jpg"),

  // Theme colors
  PRIMARY_COLOR: "#0e5872",
  SECONDARY_COLOR: "#de1c21",
  ACCENT_COLOR: "#ff7680",

  // Contact
  PHONE: "+91 72002 85569",
  WHATSAPP: "917200285569",
  EMAIL: "draravindmano@gmail.com",
  ADDRESS: "No 20, Old 12, Govinda St, Ayyavoo Colony, Chennai – 600 029",
  WORKING_HOURS: "Mon – Sat: 5:00 PM – 9:00 PM",

  // Appointment
  APPOINTMENT_LINK: "https://www.justdial.com/online-consult/bookslot?docid=044PXX44.XX44.250704200007.C7H9&source=77&version=3.1&wap=77&action=BA&parentid=&extRdt=1&wkwebview=1&ll=dtlpg&ncatid=&position=footer_Overview_Book+Appointment&pagename=dtlpg&leadtype=Book+Appointment&bd=2&city=Chennai&area=&bcity=Chennai&barea=Aminjikarai&pncdbd=&bpncdbd=600030&paidstatus=1&misc=8589934592&hncatid=10226406&search=Dr-Aravind-Manoharan-Near-Sky-Walk-Mall-Aminjikarai&did=044PXX44.XX44.250704200007.C7H9&ask_mobile=0&case=sms_email&frmpg=dtlpg&hncatid_name=Dr.+Aravind+Manoharan", 

  // Social
  FB: "https://www.facebook.com/share/18ZaqjH2Ag/?mibextid=wwXIfr",
  IG: "https://www.instagram.com/dr.aravind.manoharan?igsh=eHc4bWFkYjY1c3ky&utm_source=qr",
  LI: "https://linkedin.com/in/draravindmanoharan",
  YT: "https://youtube.com/@aravindmanoharan-gutsense?si=Ycx_tibgwMGYVS4e",
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
      { label: "Colon Cancer", href: "/conditions/colon-cancer" },
      { label: "Gallstones", href: "/conditions/gallstones" },
      { label: "Hiatus Hernia", href: "/conditions/hiatus-hernia" },
      { label: "Bariatric Surgery", href: "/conditions/bariatric-surgery" },
      { label: "Hernia Surgery", href: "/conditions/hernia-surgery" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// ─── Hero Slides ─────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    badge: "Senior Consultant · Chennai",
    headline: "Dr. Aravind Manoharan – Laparoscopic Gastro Surgeon & GI Cancer Specialist",
    subtext:
      "Expert care for complex gastrointestinal disorders, digestive cancers, and hepatobiliary conditions — delivered with precision and compassion.",
    ctaLabel: "Book an Appointment",
    ctaHref: PLACEHOLDERS.APPOINTMENT_LINK,
    secondaryLabel: "Learn More",
    secondaryHref: "/about",
    image: resolveAssetPath("/images/doc_1.jpeg"),
    imageAlt: "Dr. Aravind Manoharan",
  },
  {
    badge: "Expertise Focus",
    headline: "Advanced Laparoscopic & GI Cancer Surgery in Chennai",
    subtext:
      "Minimally invasive techniques for faster recovery, less pain, and superior outcomes — for gallbladder, hernia, colorectal, and complex GI cancer surgeries.",
    ctaLabel: "Explore Surgical Services",
    ctaHref: "/services/laparoscopic-surgery",
    secondaryLabel: "",
    secondaryHref: "",
    image: resolveAssetPath("/images/hero-robotic.jpg"),
    imageAlt: "Advanced Laparoscopic Surgery",
  },
  {
    badge: "Patient-Centred Care",
    headline: "Compassionate, Expert GI Care — From Diagnosis to Recovery",
    subtext:
      "Whether you need a second opinion, early diagnosis, or complex surgery — Dr. Aravind Manoharan guides you at every step with clarity, honesty, and genuine care.",
    ctaLabel: "Meet Dr. Aravind",
    ctaHref: "/about",
    secondaryLabel: "",
    secondaryHref: "",
    image: resolveAssetPath("/images/hero-care.jpg"),
    imageAlt: "Dr. Aravind explaining treatment",
  },
];

// ─── Stats ───────────────────────────────────────────────────
export const STATS = [
  { value: "12+", label: "Years of Experience" },
  { value: "3000+", label: "Successful Surgeries" },
  { value: "5000+", label: "Patients Treated" },
  { value: "MCh", label: "Super-Specialty Qualification" },
  { value: "24/7", label: "Emergency Assistance Available" },
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
    "Currently practising in Chennai, Dr. Aravind manages a wide spectrum of gastrointestinal conditions — from routine gallbladder and hernia surgeries to complex GI cancer resections and hepatobiliary procedures — with the same dedication and thoroughness.",
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
  { icon: "👂", title: "I take time to listen", desc: "To your concerns, fears, and treatment goals — every question matters and no consultation feels rushed." },
  { icon: "🗣️", title: "I explain every option clearly", desc: "In simple, honest language — no medical jargon. You will always understand your diagnosis and your choices." },
  { icon: "📋", title: "I follow evidence-based protocols", desc: "Ensuring the highest international standards of surgical and medical care for every single patient." },
  { icon: "🤝", title: "We make decisions together", desc: "Your preferences and values are at the centre of every care plan — you stay fully in control of your choices." },
  { icon: "❤️", title: "I prioritise your wellbeing", desc: "Emotional, physical, and mental care delivered with respect, compassion, and genuine concern for your recovery." },
  { icon: "🛡️", title: "I protect quality of life", desc: "Minimally invasive approaches and careful planning ensure faster recovery and lasting wellbeing — not just treatment." },
];

// ─── Expertise Cards ─────────────────────────────────────────
export const EXPERTISE_CARDS = [
  {
    image: resolveAssetPath("/images/laparoscopic_surgery.png"),
    title: "Laparoscopic GI Surgery",
    desc: "Minimally invasive keyhole procedures for gallbladder, hernia, intestinal, biliary, and pancreatic conditions — reducing pain, hospital stay, and recovery time significantly.",
    href: "/services/laparoscopic-surgery",
  },
  {
    image: resolveAssetPath("/images/gi_cancer_care.png"),
    title: "GI Cancer Surgery",
    desc: "Precise surgical management of digestive system cancers with curative and palliative intent — working closely with oncology teams for comprehensive, evidence-based treatment.",
    href: "/services/gi-cancer-surgery",
  },
  {
    image: resolveAssetPath("/images/hpb_surgery.png"),
    title: "Hepatobiliary & Pancreatic Surgery",
    desc: "Expert surgical care for liver tumours, bile duct diseases, gallstone complications, and complex pancreatic conditions requiring specialist surgical intervention.",
    href: "/services/liver-surgery",
  },
  {
    image: resolveAssetPath("/images/endoscopy.png"),
    title: "Diagnostic & Therapeutic Endoscopy",
    desc: "Upper GI endoscopy and colonoscopy for early detection, accurate diagnosis, and therapeutic procedures — a cornerstone of modern digestive healthcare.",
    href: "/services/laparoscopic-surgery",
  },
  {
    image: resolveAssetPath("/images/colorectal_surgery.png"),
    title: "Colorectal Surgery",
    desc: "Surgical treatment for colorectal cancers, inflammatory bowel disease, diverticular disease, and anorectal disorders with a focus on sphincter preservation and quality of life.",
    href: "/conditions/colon-cancer",
  },
  {
    image: resolveAssetPath("/images/medical_gastro.png"),
    title: "Medical Gastroenterology",
    desc: "Non-surgical diagnosis and management of chronic digestive conditions — tailored treatment plans for each patient based on thorough investigation and evidence-based guidelines.",
    href: "/about",
  },
];

// ─── Cancers We Treat ────────────────────────────────────────
export const CANCERS = [
  {
    icon: "🫀",
    title: "Gastrointestinal Cancers",
    points: ["Stomach (Gastric) Cancer", "Colorectal Cancer", "Pancreatic & Periampullary Cancer", "Esophageal (Food Pipe) Cancer", "Liver (Hepatic) Cancer", "Biliary / Gallbladder Cancer"],
    href: "/services/gi-cancer-surgery",
    color: "#0e5872",
  },
  {
    icon: "🩺",
    title: "Hepatobiliary Disorders",
    points: ["Gallstones & Cholecystitis", "Bile Duct Diseases", "Liver Tumours", "Obstructive Jaundice", "Biliary Stricture"],
    href: "/services/liver-surgery",
    color: "#de1c21",
  },
  {
    icon: "🫁",
    title: "Hernia & Abdominal Wall",
    points: ["Inguinal Hernia", "Hiatal Hernia", "Incisional Hernia", "Umbilical Hernia", "Ventral Hernia"],
    href: "/conditions/hernia-surgery",
    color: "#0e5872",
  },
  {
    icon: "🍵",
    title: "Acid Reflux & Upper GI",
    points: ["GERD (Gastroesophageal Reflux Disease)", "Chronic Acidity & Dyspepsia", "Barrett's Esophagus", "Swallowing Disorders (Dysphagia)"],
    href: "/conditions/hiatus-hernia",
    color: "#de1c21",
  },
  {
    icon: "⚕️",
    title: "Colorectal & IBD",
    points: ["Inflammatory Bowel Disease (Crohn's & Colitis)", "Colorectal Polyps", "Diverticular Disease"],
    href: "/conditions/colon-cancer",
    color: "#0e5872",
  },
  {
    icon: "🔵",
    title: "Anorectal Disorders",
    points: ["Anal Fissure & Fistula"],
    href: "/about",
    color: "#de1c21",
  },
  {
    icon: "🧬",
    title: "Pancreatic Diseases",
    points: ["Acute & Chronic Pancreatitis", "Pancreatic Cysts & Pseudocysts", "Pancreatic Tumours", "Ampullary & Periampullary Conditions"],
    href: "/services/pancreas-surgery",
    color: "#0e5872",
  },
];

// ─── Services (Dark Band) ────────────────────────────────────
export const SERVICES_BAND = [
  {
    icon: "🔭",
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive keyhole surgery for gallbladder, hernia, intestinal conditions, and GI cancers.",
    href: "/services/laparoscopic-surgery",
  },
  {
    icon: "⚕️",
    title: "GI Cancer Surgery",
    desc: "Precise surgical management of digestive system cancers with curative intent.",
    href: "/services/gi-cancer-surgery",
  },
  {
    icon: "🩺",
    title: "Endoscopy & Colonoscopy",
    desc: "State-of-the-art diagnostic and therapeutic endoscopic procedures for early detection.",
    href: "/about",
  },
  {
    icon: "🧬",
    title: "Hepatobiliary & Pancreatic Surgery",
    desc: "Complex liver, bile duct, and pancreatic surgeries including hepatic resections and Whipple procedure.",
    href: "/services/liver-surgery",
  },
  {
    icon: "🤝",
    title: "Second Opinion Consultation",
    desc: "Expert review of your current diagnosis and treatment plan for clarity and peace of mind.",
    href: "/about",
  },
  {
    icon: "📋",
    title: "Medical Gastroenterology",
    desc: "Non-surgical management of GERD, IBD, hepatobiliary disease, and chronic abdominal pain.",
    href: "/about",
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
    name: "Ritthika Anand",
    location: "Chennai",
    text: "Dr. Aravind Manoharan is an excellent laparoscopic gastro surgeon. He explained my condition clearly and treated me with great care and professionalism. The surgery and follow-up were smooth, and I recovered quickly. Highly recommended.",
  },
  {
    name: "Praveen Pethuraj",
    location: "Chennai",
    text: "I had an emergency laparoscopic appendectomy, and Dr. Aravind handled it with great professionalism. The surgery was quick, the scars are minimal, and recovery was smooth. The doctor and team were very supportive and attentive throughout.",
  },
  {
    name: "Gayathri",
    location: "Chennai",
    text: "Such a wonderful human being. To be a successful doctor, one needs to be a good human — he is one kind. Very polite and easily approachable. Any doubt, anytime, he is just a call away. Thank you Doctor.",
  },
  {
    name: "Suresh Kumar",
    location: "Chennai",
    text: "I came to Dr. Aravind with chronic gallstone pain. After the laparoscopic procedure, I was back home the very next day. His expertise and calm demeanor put me at ease throughout. I would not trust anyone else for such surgeries.",
  },
  {
    name: "Meena Rajendran",
    location: "Chennai",
    text: "Dr. Aravind is not just a skilled surgeon — he is a compassionate doctor who truly listens. He took the time to explain every step of my treatment. My recovery from hernia surgery was faster than expected. Very grateful.",
  },
  {
    name: "Karthikeyan S.",
    location: "Chennai",
    text: "Outstanding doctor. I was diagnosed with a GI condition and was very anxious. Dr. Aravind patiently walked me through all options and chose the least invasive approach. The results were excellent. Truly a specialist in every sense.",
  },
  {
    name: "Priya Sundaram",
    location: "Chennai",
    text: "I had a complex pancreatic issue and was referred to Dr. Aravind. His knowledge and surgical skill are remarkable. He coordinated with other specialists seamlessly and gave me the best possible care. Highly trust him.",
  },
  {
    name: "Anbarasan M.",
    location: "Chennai",
    text: "Had laparoscopic surgery for a digestive issue. Dr. Aravind is extremely thorough — he checked all my reports carefully before deciding on the treatment plan. The surgery was successful and I recovered well. Excellent doctor.",
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
  "services/laparoscopic-surgery": {
    image: resolveAssetPath("/images/laparoscopic_surgery.png"),
    title: "Laparoscopic Surgery",
    breadcrumb: "Services > Laparoscopic Surgery",
    intro: "**WHAT IS LAPAROSCOPIC SURGERY?**\n\nLaparoscopic surgery is a technique where the surgeon inserts a thin, flexible tube called a laparoscope — fitted with a light and high-definition camera — through a small incision in the abdomen. The camera transmits magnified images to a monitor, allowing the surgeon to operate with exceptional precision using small specialised instruments.\n\nDr. Aravind Manoharan is highly trained and experienced in advanced laparoscopic techniques for a wide range of gastrointestinal and hepatobiliary conditions — from routine cholecystectomies to complex cancer resections — consistently achieving excellent surgical and patient outcomes.\n\n**WHY IS TREATMENT NEEDED?**\n\nMany gastrointestinal conditions require surgical intervention. When surgery is indicated, the laparoscopic approach is often the preferred choice because it is less traumatic to the body, carries lower infection risk, and promotes a significantly faster recovery — allowing patients to return home sooner and resume daily activities quickly.\n\nNot all patients or conditions are suitable for laparoscopic surgery. Dr. Aravind evaluates each case individually to determine the safest and most effective surgical approach — always prioritising your outcome and wellbeing.",
    highlights: ["MCh Super-Specialty Trained — The highest qualification in surgical gastroenterology, with dedicated training in advanced laparoscopic and minimally invasive GI techniques.","High-Volume Laparoscopic Surgeon — Extensive experience across thousands of laparoscopic procedures — from routine to highly complex cases — consistently achieving excellent outcomes.","Personalised Surgical Planning — Every patient receives a thorough pre-operative evaluation and an individually tailored surgical plan based on their specific condition, anatomy, and goals.","Compassionate, Patient-Centred Care — Dr. Aravind takes time to explain every aspect of your procedure, risks, and recovery — ensuring you feel informed and confident before your operation."],
    symptoms: ["Patients diagnosed with gallstones, gallbladder disease, or cholecystitis","Individuals with inguinal, hiatal, incisional, or umbilical hernias","Patients requiring bowel resection for colon cancer, IBD, or diverticular disease","Those with early to mid-stage GI cancers suitable for minimally invasive resection","Patients seeking faster recovery and minimal scarring compared to open surgery","Individuals who have been advised surgical treatment for appendicitis, GERD, or biliary disease"],
    treatmentSteps: [{"step":"Laparoscopic Cholecystectomy (Gallbladder Removal)","desc":"The gold-standard treatment for gallstones and gallbladder disease — performed through 3–4 tiny incisions with a very short hospital stay."},{"step":"Hernia Repair (Inguinal, Incisional, Umbilical, Hiatal)","desc":"Minimally invasive repair of all hernia types with mesh reinforcement, significantly reducing recurrence risk and recovery time."},{"step":"Laparoscopic Appendectomy","desc":"Rapid removal of an inflamed appendix with minimal post-operative pain and same-day or next-day discharge in most cases."},{"step":"Laparoscopic Colorectal Surgery","desc":"Bowel resections for colorectal cancer, diverticular disease, and IBD — with sphincter preservation wherever possible."},{"step":"Laparoscopic GI Cancer Surgery","desc":"Minimally invasive resection of stomach, colon, rectal, biliary, and other GI tumours — achieving oncological precision with reduced surgical trauma."},{"step":"Biliary & Pancreatic Laparoscopic Procedures","desc":"Laparoscopic management of bile duct stones, biliary strictures, and selected pancreatic conditions."}],
    faq: [{"q":"*Q: How long does laparoscopic surgery take?","a":"Most laparoscopic procedures take between 30 minutes and 2 hours depending on the complexity of the surgery and the condition being treated."},{"q":"*Q: How soon can I return home after laparoscopic surgery?","a":"Many patients are discharged the same day or within 24–48 hours. More complex procedures may require a short hospital stay of 2–4 days."},{"q":"*Q: Will I have visible scars?","a":"Laparoscopic surgery leaves only 3–4 small puncture marks (typically 5–12mm each), which fade significantly over time and are much less noticeable than open surgery scars."},{"q":"*Q: Is laparoscopic surgery safe?","a":"Yes — laparoscopic surgery is well-established, safe, and performed routinely worldwide. Dr. Aravind Manoharan has extensive experience in laparoscopic techniques for GI conditions."},{"q":"*Q: Does laparoscopic surgery cost more than open surgery?","a":"While the upfront procedural cost may be similar or slightly higher, laparoscopic surgery often results in lower total costs due to shorter hospital stays and faster recovery."}],
  },
  "services/robotic-surgery": {
    image: resolveAssetPath("/images/robotic_surgery_inner.png"),
    title: "Robotic Surgery",
    breadcrumb: "Services > Robotic Surgery",
    intro: "**WHAT IS ROBOTIC SURGERY?**\n\nIn robotic surgery, the surgeon is fully in control — seated at a console a short distance from the operating table, with a magnified 3D view of the surgical field. The robotic arms, which hold the instruments, replicate the surgeon's hand movements with greater precision and without tremor. This is particularly valuable in confined anatomical spaces or when operating around critical structures.\n\nDr. Aravind Manoharan utilises robotic assistance for selected complex GI, colorectal, and hepatobiliary cases where the additional precision and visualisation offer meaningful clinical benefit to the patient.\n\n**WHY IS TREATMENT NEEDED?**\n\nCertain complex gastrointestinal surgeries — particularly deep pelvic colorectal operations, complex hernia repairs, and selected cancer resections — benefit significantly from the enhanced precision and visualisation that robotic surgery provides. It reduces surgical trauma, blood loss, nerve injury risk, and improves recovery time even for technically demanding procedures.\n\nNot every surgical case requires robotic assistance. Dr. Aravind carefully evaluates each patient and recommends the surgical approach — open, laparoscopic, or robotic — that offers the best outcome for their specific condition and anatomy.",
    highlights: ["Advanced Training in Robotic GI Techniques — Trained in robotic-assisted surgical approaches for complex GI and colorectal conditions.","Selective & Evidence-Based Approach — Robotic surgery is recommended only when it offers a genuine clinical advantage — not as a default.","Integrated Cancer Care — All robotic cancer surgeries are planned in coordination with oncology and radiology teams for comprehensive treatment.","Full Informed Consent — Dr. Aravind explains the benefits, limitations, and alternatives to robotic surgery so you can make an informed decision."],
    symptoms: ["Patients requiring complex colorectal or rectal cancer surgery in confined pelvic space","Individuals with recurrent or complex hernias needing precise repair","Patients undergoing gastrectomy or bowel resection for cancer","Those with anatomical complexity where enhanced visualisation improves safety","Patients seeking the most advanced minimally invasive surgical option available"],
    treatmentSteps: [{"step":"Robotic Colorectal Surgery","desc":"Low anterior resection, abdominoperineal resection, and right/left hemicolectomy for colorectal cancers — with improved sphincter preservation in pelvic surgery."},{"step":"Robotic Hernia Repair","desc":"Complex and recurrent hernia repairs where enhanced dexterity and visualisation improve mesh placement and reduce recurrence."},{"step":"Robotic Gastric Surgery","desc":"Subtotal and total gastrectomy for stomach cancer with precise lymph node dissection."},{"step":"Robotic Hepatobiliary Surgery","desc":"Selected liver resections and biliary procedures where robotic precision reduces risk to critical structures."},{"step":"Robotic Rectal Cancer Surgery","desc":"Total mesorectal excision (TME) for rectal cancers — the robotic platform is particularly advantageous in the narrow pelvic space."}],
    faq: [{"q":"*Q: Is the robot performing the surgery?","a":"No. The robot is a precision tool. Dr. Aravind Manoharan is fully in control at all times — the robotic system simply translates his movements with greater accuracy."},{"q":"*Q: Is robotic surgery safer than laparoscopic surgery?","a":"For certain complex procedures, robotic surgery offers enhanced precision and reduced complications. For routine cases, laparoscopic surgery remains equally safe and effective."},{"q":"*Q: How long is the recovery after robotic surgery?","a":"Recovery is similar to laparoscopic surgery — most patients are discharged within 2–5 days and return to normal activities within 2–4 weeks."},{"q":"*Q: Is robotic surgery available in Chennai?","a":"Yes — Dr. Aravind Manoharan offers robotic-assisted surgery in Chennai."}],
  },
  "conditions/gi-cancer-surgery": {
    image: resolveAssetPath("/images/gi_cancer_care.png"),
    title: "GI Cancer Surgery",
    breadcrumb: "Conditions > GI Cancer Surgery",
    intro: "**WHAT IS GI CANCER SURGERY?**\n\nGI cancer surgery involves the precise removal of cancerous tumours and affected tissue from the digestive tract and associated organs — including the stomach, liver, pancreas, colon, rectum, oesophagus, gallbladder, and bile ducts. The goal is to achieve complete tumour removal (clear margins) while preserving as much healthy tissue and organ function as possible.\n\nDr. Aravind works closely with medical oncologists and radiation oncologists to deliver a comprehensive, evidence-based treatment plan — including surgery, chemotherapy coordination, and post-operative care — for each patient.\n\n**WHY IS TREATMENT NEEDED?**\n\nSurgery is often the primary and most effective treatment for gastrointestinal cancers, particularly when detected at an operable stage. Early surgical intervention offers the highest chance of cure, while palliative surgery can significantly improve quality of life and control symptoms in advanced cases.\n\nDr. Aravind Manoharan's expertise spans the full range of GI cancer surgeries — from laparoscopic minimally invasive resections to complex open hepatobiliary and pancreatic procedures — always tailored to the stage and nature of each patient's cancer.",
    highlights: ["MCh-Qualified GI Oncosurgeon — Super-specialty trained in surgical gastroenterology and GI cancer surgery — the highest level of qualification in this field.","Multidisciplinary Approach — Works in close coordination with medical and radiation oncologists, ensuring your cancer treatment is holistic and evidence-based.","Minimally Invasive Options — Where oncologically appropriate, laparoscopic or robotic-assisted cancer surgery is offered for faster recovery.","Honest, Clear Communication — Dr. Aravind explains your diagnosis, surgical options, risks, and expected outcomes in clear, compassionate language."],
    symptoms: ["Anyone newly diagnosed with a gastrointestinal or digestive system cancer","Patients seeking a second surgical opinion before starting cancer treatment","Individuals with abnormal findings on endoscopy, CT scan, MRI, or PET scan","Those experiencing unexplained weight loss, bleeding, jaundice, or persistent abdominal symptoms","Patients who have completed chemotherapy and require surgical resection","Family members of high-risk patients seeking early cancer screening advice"],
    treatmentSteps: [{"step":"Stomach (Gastric) Cancer Surgery","desc":"Subtotal or total gastrectomy with D2 lymph node dissection — the standard curative surgery for resectable gastric cancer."},{"step":"Colon & Rectal Cancer Surgery","desc":"Hemi-colectomy, anterior resection, and abdominoperineal resection for colorectal cancers — including laparoscopic and robotic approaches."},{"step":"Liver Cancer Surgery (Hepatectomy)","desc":"Segmental or lobar liver resection for primary hepatocellular carcinoma (HCC) and resectable liver metastases."},{"step":"Pancreatic Cancer Surgery (Whipple Procedure)","desc":"Pancreaticoduodenectomy (Whipple) and distal pancreatectomy for pancreatic and periampullary cancers."},{"step":"Oesophageal Cancer Surgery (Oesophagectomy)","desc":"Surgical removal of the oesophagus for resectable food pipe cancers, with restoration of continuity."},{"step":"Intestinal Cancer Surgery","desc":"Small and large bowel resections for intestinal tumours and carcinomas."},{"step":"Biliary & Gallbladder Cancer Surgery","desc":"Radical cholecystectomy and bile duct resections for biliary system cancers."}],
    faq: [{"q":"*Q: Is surgery always necessary for GI cancer?","a":"Surgery is often the primary treatment for resectable GI cancers. For some cancers, chemotherapy or radiation may be given before surgery to shrink the tumour. Dr. Aravind will discuss all options with you."},{"q":"*Q: What is the recovery like after GI cancer surgery?","a":"Recovery varies by procedure. Most patients stay in hospital for 5–10 days. Full recovery typically takes 4–8 weeks depending on the type of surgery."},{"q":"*Q: Can GI cancer be cured by surgery?","a":"When detected and operated upon at an early stage, many GI cancers can be cured by surgery. Even in advanced cases, surgery combined with other treatments can significantly improve survival and quality of life."},{"q":"*Q: Will I need chemotherapy after GI cancer surgery?","a":"Depending on the cancer type, stage, and pathology findings, adjuvant (post-operative) chemotherapy may be recommended. Dr. Aravind will coordinate with your oncologist for a complete care plan."}],
  },
  "services/liver-surgery": {
    image: resolveAssetPath("/images/hpb_surgery.png"),
    title: "Liver Surgery",
    breadcrumb: "Services > Liver Surgery",
    intro: "**WHAT IS LIVER SURGERY?**\n\nLiver surgery (hepatic surgery) involves the partial or complete removal of diseased liver tissue — a procedure known as hepatic resection or hepatectomy. The liver has a remarkable capacity to regenerate, making surgery possible even when a significant portion of liver tissue needs to be removed.\n\nDr. Aravind Manoharan performs both open and laparoscopic liver surgeries, selecting the approach that offers the best balance of oncological adequacy and patient safety for each individual case.\n\n**WHY IS TREATMENT NEEDED?**\n\nLiver surgery may be required for primary liver cancers (hepatocellular carcinoma), secondary liver tumours (metastases from colorectal or other cancers), liver cysts, abscesses, benign tumours (haemangiomas, adenomas), and traumatic liver injuries requiring operative repair.\n\nNot all liver conditions require surgery. Dr. Aravind evaluates each patient's liver function, tumour characteristics, and overall fitness to determine whether surgical resection, ablation, or non-surgical management is most appropriate.",
    highlights: ["Hepatobiliary Specialist Training — MCh-trained with specific expertise in liver, bile duct, and pancreatic surgical procedures.","Safe Surgical Selection — Thorough pre-operative assessment of liver function and tumour characteristics to minimise surgical risk.","Multidisciplinary Planning — Liver cancer surgeries are planned in coordination with oncology and radiology teams for comprehensive care.","Laparoscopic First Approach — Minimally invasive liver resection is offered when oncologically and technically appropriate."],
    symptoms: ["Patients diagnosed with hepatocellular carcinoma (HCC / primary liver cancer)","Individuals with resectable liver metastases from colorectal or other cancers","Those with symptomatic or growing liver cysts or benign tumours","Patients with liver abscesses not responding to antibiotics","Individuals with bile duct disease affecting the liver"],
    treatmentSteps: [{"step":"Segmental Hepatectomy","desc":"Removal of one or more liver segments containing a tumour or diseased tissue, preserving maximum healthy liver."},{"step":"Right or Left Hepatectomy","desc":"Removal of the right or left lobe of the liver — performed for larger tumours or extensive disease."},{"step":"Laparoscopic Liver Resection","desc":"Minimally invasive approach for suitable liver lesions — offering less blood loss, faster recovery, and reduced hospital stay."},{"step":"Liver Cyst Surgery","desc":"Surgical deroofing or resection of symptomatic liver cysts — including hydatid cysts."},{"step":"Liver Abscess Drainage","desc":"Surgical or image-guided drainage of pyogenic or amoebic liver abscesses when medical management is insufficient."}],
    faq: [{"q":"*Q: Can the liver regenerate after surgery?","a":"Yes. The liver has an exceptional regenerative capacity. Even after removal of up to 70% of liver tissue, the remaining liver typically regenerates to normal size within weeks to months."},{"q":"*Q: How long does liver surgery take?","a":"Liver surgery typically takes 2–6 hours depending on the extent of resection. More complex procedures take longer."},{"q":"*Q: What is the recovery time after liver surgery?","a":"Most patients stay in hospital for 5–7 days and require 4–8 weeks for full recovery. Laparoscopic liver surgery generally allows faster recovery."},{"q":"*Q: Is liver surgery risky?","a":"All surgery carries some risk. Liver surgery requires specialist expertise. Dr. Aravind carefully selects patients and plans each procedure to minimise risk and achieve the safest outcome."}],
  },
  "services/pancreas-surgery": {
    image: resolveAssetPath("/images/pancreas_surgery_inner.png"),
    title: "Pancreas Surgery",
    breadcrumb: "Services > Pancreas Surgery",
    intro: "**WHAT IS PANCREAS SURGERY?**\n\nThe pancreas is a vital organ that produces digestive enzymes and hormones (including insulin). Pancreatic surgery involves operations on the pancreas and surrounding structures — including the bile duct, duodenum, and blood vessels — to treat tumours, cysts, inflammatory disease, and cancer.\n\nDue to the complexity and proximity to major blood vessels, pancreatic surgery requires a highly skilled specialist surgeon. Dr. Aravind Manoharan is trained in all major pancreatic procedures, including the Whipple operation (pancreaticoduodenectomy), distal pancreatectomy, and central pancreatectomy.\n\n**WHY IS TREATMENT NEEDED?**\n\nPancreatic conditions — including cancer, cysts, and severe pancreatitis — can be life-threatening if not treated appropriately. Surgical intervention is often essential for cure (in cancer), for symptom relief (in chronic pancreatitis), or to prevent malignant transformation (in certain cystic tumours).\n\nEarly diagnosis and timely surgical intervention significantly improve outcomes for pancreatic cancer, which is often diagnosed at a late stage. Dr. Aravind Manoharan emphasises the importance of prompt specialist evaluation for any suspicious pancreatic finding.",
    highlights: ["HPB Super-Specialty Training — MCh-qualified with dedicated training in hepatobiliary and pancreatic (HPB) surgery.","Multidisciplinary Cancer Planning — Pancreatic cancer surgeries are planned with oncologists and radiologists for optimal treatment sequencing — including neoadjuvant chemotherapy when indicated.","Careful Patient Preparation — Thorough nutritional, biliary, and cardiorespiratory optimisation before major pancreatic surgery to minimise complications.","Honest Prognosis Discussion — Dr. Aravind provides honest, compassionate guidance on surgical options, expected outcomes, and quality of life after pancreatic surgery."],
    symptoms: ["Patients diagnosed with pancreatic cancer or periampullary tumours","Individuals with pancreatic cysts showing high-risk features on imaging","Those with pain-dominant chronic pancreatitis failing medical treatment","Patients with insulinoma or other functional pancreatic tumours","Individuals with unexplained jaundice and dilated bile ducts on imaging"],
    treatmentSteps: [{"step":"Whipple Procedure (Pancreaticoduodenectomy)","desc":"The standard surgery for cancers of the pancreatic head, periampullary region, distal bile duct, and duodenum — involves removal of the pancreatic head, duodenum, gallbladder, and part of the bile duct."},{"step":"Distal Pancreatectomy","desc":"Removal of the body and tail of the pancreas for tumours, cysts, or chronic pancreatitis affecting the left side of the pancreas — often performed with spleen removal."},{"step":"Central Pancreatectomy","desc":"A parenchyma-preserving resection for tumours in the neck of the pancreas — minimising impact on pancreatic function."},{"step":"Pancreatic Cyst Surgery","desc":"Surgical resection or drainage of symptomatic or high-risk pancreatic cysts — including mucinous cysts and intraductal papillary mucinous neoplasms (IPMNs)."},{"step":"Surgery for Chronic Pancreatitis","desc":"Drainage procedures (Frey, Puestow) or resections for pain-dominant chronic pancreatitis not responding to medical management."}],
    faq: [{"q":"*Q: What is the Whipple procedure?","a":"The Whipple procedure (pancreaticoduodenectomy) is a major surgery to remove the head of the pancreas, duodenum, part of the bile duct, and gallbladder — performed for cancers of the pancreatic head and periampullary region."},{"q":"*Q: How long is recovery after pancreatic surgery?","a":"Hospital stay is typically 7–10 days. Full recovery takes 6–12 weeks. Patients often require dietary modifications and enzyme supplementation after surgery."},{"q":"*Q: Will I develop diabetes after pancreatic surgery?","a":"Depending on the extent of pancreatic removal, some patients may develop or worsen diabetes after surgery. This is closely monitored and managed post-operatively."},{"q":"*Q: Can pancreatic cancer be cured by surgery?","a":"Surgery offers the only chance of cure for pancreatic cancer. Early-stage, resectable pancreatic cancer treated with surgery followed by chemotherapy has the best survival outcomes."}],
  },
  "conditions/pancreatitis": {
    image: resolveAssetPath("/images/pancreas_surgery_inner.png"),
    title: "Pancreatitis",
    breadcrumb: "Conditions > Pancreatitis",
    intro: "**WHAT IS PANCREATITIS?**\n\nPancreatitis — inflammation of the pancreas — ranges from mild acute episodes to debilitating chronic disease with severe pain and complications.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan provides comprehensive medical and surgical management of pancreatitis, including drainage procedures and resections for chronic pancreatitis that has failed conservative treatment.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Severe upper abdominal pain (often radiating to the back)","Nausea and vomiting","Fever and elevated heart rate (in acute cases)","Chronic abdominal pain and weight loss (chronic pancreatitis)","Fatty or oily stools (steatorrhoea) and diabetes (in chronic cases)"],
    treatmentSteps: [{"step":"Medical management with bowel rest, fluids, pain control, and enzyme support","desc":""},{"step":"Endoscopic drainage of pancreatic duct obstructions","desc":""},{"step":"Surgical drainage procedures — Frey or Puestow procedure for chronic pancreatitis","desc":""},{"step":"Distal pancreatectomy for chronic disease affecting the tail of the pancreas","desc":""},{"step":"Nutritional support and pancreatic enzyme replacement","desc":""}],
    faq: [{"q":"*Q: Can pancreatitis be cured?","a":"Acute pancreatitis usually resolves with medical treatment. Chronic pancreatitis can be managed but not fully cured — surgery can significantly reduce pain and improve quality of life."},{"q":"*Q: What causes pancreatitis?","a":"The most common causes are gallstones (which block the pancreatic duct) and heavy alcohol use. Other causes include high triglycerides, certain medications, and anatomical abnormalities."}],
  },
  "conditions/colon-cancer": {
    image: resolveAssetPath("/images/colorectal_surgery.png"),
    title: "Colon Cancer",
    breadcrumb: "Conditions > Colon Cancer",
    intro: "**WHAT IS COLON CANCER?**\n\nColon cancer (colorectal cancer) is one of the most common GI cancers. When detected early, it is highly treatable.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan offers both laparoscopic and open surgical resection — including right hemicolectomy, left hemicolectomy, and sigmoid colectomy — with meticulous lymph node dissection for accurate staging and cure.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Change in bowel habits — persistent diarrhoea, constipation, or alternating","Blood in stool or rectal bleeding","Unexplained weight loss and fatigue","Abdominal pain, cramping, or bloating","Feeling that the bowel doesn't empty completely"],
    treatmentSteps: [{"step":"Laparoscopic right hemicolectomy for right colon tumours","desc":""},{"step":"Laparoscopic left hemicolectomy or sigmoid colectomy for left colon tumours","desc":""},{"step":"Open surgery for locally advanced or obstructed cases","desc":""},{"step":"Complete mesocolic excision (CME) for oncological completeness","desc":""},{"step":"Adjuvant chemotherapy coordination for stage III/IV disease","desc":""}],
    faq: [{"q":"*Q: Is colon cancer curable?","a":"Yes — when detected at an early stage (Stage I or II), colon cancer has excellent cure rates with surgery alone. Even Stage III disease treated with surgery and chemotherapy has good long-term outcomes."},{"q":"*Q: What is colonoscopy and do I need one?","a":"Colonoscopy is a diagnostic procedure to visualise the entire colon and detect polyps or early cancers. It is recommended for anyone over 45, those with rectal bleeding, or a family history of colorectal cancer."}],
  },
  "conditions/gallstones": {
    image: resolveAssetPath("/images/liver_care_inner.png"),
    title: "Gallstones",
    breadcrumb: "Conditions > Gallstones",
    intro: "**WHAT ARE GALLSTONES?**\n\nGallstones are one of the most common causes of abdominal pain and digestive symptoms.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan performs laparoscopic cholecystectomy — the gold-standard treatment for symptomatic gallstones — through tiny incisions, allowing most patients to go home the same day or within 24 hours and resume normal activities within a week.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Right upper abdominal pain, especially after fatty meals","Nausea and vomiting","Bloating and indigestion","Jaundice if stones block the bile duct","Fever and severe pain (cholecystitis or cholangitis)"],
    treatmentSteps: [{"step":"Laparoscopic cholecystectomy — gallbladder removal through 3–4 tiny cuts","desc":""},{"step":"ERCP for bile duct stones before or after surgery","desc":""},{"step":"Single-incision laparoscopic surgery (SILS) for selected cases","desc":""},{"step":"Emergency surgery for complicated cholecystitis or gallstone pancreatitis","desc":""}],
    faq: [{"q":"*Q: Do I need surgery for gallstones?","a":"Symptomatic gallstones — causing pain, nausea, or complications — are best treated with surgery. Asymptomatic gallstones in some patients may be monitored without immediate surgery."},{"q":"*Q: What happens if gallstones are not treated?","a":"Untreated symptomatic gallstones can lead to cholecystitis (gallbladder infection), cholangitis (bile duct infection), pancreatitis, or rarely gallbladder cancer."}],
  },
  "conditions/hiatus-hernia": {
    image: resolveAssetPath("/images/upper_gi_inner.png"),
    title: "Hiatus Hernia",
    breadcrumb: "Conditions > Hiatus Hernia",
    intro: "**WHAT IS A HIATUS HERNIA?**\n\nA hiatus hernia occurs when part of the stomach pushes through the diaphragm into the chest cavity, causing chronic acid reflux (GERD) and discomfort.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan offers laparoscopic repair of hiatus hernias — including Nissen fundoplication — providing lasting relief from GERD symptoms with minimal recovery time.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Chronic heartburn and acid reflux (especially when lying down)","Regurgitation of acid or food","Difficulty swallowing","Chest pain or discomfort after eating","Chronic cough, hoarseness, or throat clearing"],
    treatmentSteps: [{"step":"Laparoscopic hiatus hernia repair — closing the diaphragmatic defect","desc":""},{"step":"Nissen or Toupet fundoplication — wrapping part of the stomach around the lower oesophagus to prevent reflux","desc":""},{"step":"Medical management with PPIs for mild cases","desc":""},{"step":"Post-operative dietary and lifestyle guidance for sustained symptom control","desc":""}],
    faq: [{"q":"*Q: Do all hiatus hernias need surgery?","a":"Not all hiatus hernias require surgery. Small sliding hiatal hernias causing mild symptoms are often managed with medications. Surgery is recommended for large hernias, those causing severe GERD, or when medical treatment fails."},{"q":"*Q: What is fundoplication?","a":"Fundoplication is a surgical procedure where the upper part of the stomach is wrapped around the lower oesophagus to strengthen the valve and prevent acid reflux."}],
  },
  "conditions/bariatric-surgery": {
    image: resolveAssetPath("/images/upper_gi_inner.png"),
    title: "Bariatric Surgery",
    breadcrumb: "Conditions > Bariatric Surgery",
    intro: "**WHAT IS BARIATRIC SURGERY?**\n\nBariatric surgery is the most effective and long-lasting treatment for severe obesity and obesity-related conditions including Type 2 diabetes, hypertension, sleep apnoea, and joint disease.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan performs laparoscopic bariatric procedures — including sleeve gastrectomy and Roux-en-Y gastric bypass — with comprehensive pre-operative evaluation and long-term post-operative support.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["BMI ≥ 37.5 (Asian criteria) with or without comorbidities","BMI ≥ 32.5 with Type 2 diabetes, hypertension, or sleep apnoea","Failed multiple attempts at sustained weight loss through diet and exercise","Significant impact of obesity on daily function, joints, or mental health"],
    treatmentSteps: [{"step":"Laparoscopic sleeve gastrectomy — removal of 75–80% of the stomach to reduce appetite and food intake","desc":""},{"step":"Roux-en-Y gastric bypass — creating a small stomach pouch and rerouting the intestine for weight loss and metabolic benefit","desc":""},{"step":"Mini gastric bypass (MGB) — a simplified bypass procedure with excellent metabolic outcomes","desc":""},{"step":"Comprehensive pre-operative assessment — cardiac, nutritional, psychological","desc":""},{"step":"Lifelong dietary counselling, supplementation, and follow-up support","desc":""}],
    faq: [{"q":"*Q: Is bariatric surgery permanent?","a":"Bariatric surgery creates lasting anatomical changes that support long-term weight loss. However, maintaining a healthy lifestyle — diet and activity — is essential for sustained results."},{"q":"*Q: Can bariatric surgery cure diabetes?","a":"Yes — bariatric surgery, particularly gastric bypass, often achieves complete remission of Type 2 diabetes even before significant weight loss occurs. It is the most effective treatment for metabolic disease associated with obesity."}],
  },
  "conditions/hernia-surgery": {
    image: resolveAssetPath("/images/hernia_care_inner.png"),
    title: "Hernia Surgery",
    breadcrumb: "Conditions > Hernia Surgery",
    intro: "**WHAT IS A HERNIA?**\n\nA hernia occurs when an organ or tissue pushes through a weakness in the surrounding muscle wall.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan offers expert laparoscopic (keyhole) and open hernia repair for all hernia types — inguinal, incisional, umbilical, femoral, and hiatal — using tension-free mesh techniques that minimise recurrence risk and allow fast recovery.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["A visible bulge in the groin, abdomen, or belly button","Discomfort or pain, especially when bending, coughing, or lifting","A feeling of heaviness or dragging in the groin","Sudden severe pain and inability to push the bulge back (emergency — strangulated hernia)"],
    treatmentSteps: [{"step":"Laparoscopic TEP or TAPP repair for inguinal hernias — fastest recovery, least post-op pain, bilateral hernias treated simultaneously","desc":""},{"step":"Laparoscopic incisional hernia repair with mesh reinforcement","desc":""},{"step":"Open hernia repair for very large or complicated hernias","desc":""},{"step":"Laparoscopic umbilical hernia repair","desc":""},{"step":"Hiatus hernia repair and fundoplication — see Hiatus Hernia page","desc":""}],
    faq: [{"q":"*Q: Do all hernias need surgery?","a":"All symptomatic hernias and those at risk of strangulation require surgical repair. Asymptomatic inguinal hernias in very elderly patients may be monitored with watchful waiting."},{"q":"*Q: Can a hernia come back after surgery?","a":"With modern mesh-based laparoscopic repair, recurrence rates are very low (1–3%). Avoiding heavy lifting during recovery and maintaining a healthy weight reduce the risk further."}],
  },
  "conditions/liver-cancer": {
    image: resolveAssetPath("/images/liver_care_inner.png"),
    title: "Liver Cancer",
    breadcrumb: "Conditions > Liver Cancer",
    intro: "**WHAT IS LIVER CANCER?**\n\nLiver cancer can be primary (originating in the liver — most commonly hepatocellular carcinoma or HCC) or secondary (metastases that have spread to the liver from cancers elsewhere — most often colorectal, breast, or lung cancer). Treatment depends on the type, number, and size of tumours, the patient's liver function, and overall health.\n\nWhen liver cancer is diagnosed at a resectable stage, surgery offers the best chance of cure. For cases not suitable for surgery, Dr. Aravind coordinates with specialists for ablation, targeted therapy, chemoembolisation (TACE), or systemic treatments.\n\n**WHY IS TREATMENT NEEDED?**\n\nLiver cancer detected at an early stage and treated promptly offers significantly better survival outcomes. Surgical resection remains the gold standard for resectable HCC and isolated liver metastases. Delayed treatment allows the cancer to progress, reducing the likelihood of curative surgery.\n\nEven in cases where cure is not possible, surgical and interventional strategies can meaningfully extend survival and improve quality of life. Dr. Aravind Manoharan ensures every patient receives an honest, thorough assessment of their options.",
    highlights: ["GI Oncosurgery Expertise — Super-specialty trained in surgical gastroenterology with specific hepatobiliary surgical expertise.","Multidisciplinary Tumour Board Coordination — Liver cancer management is discussed with oncology, radiology, and pathology teams for the most comprehensive treatment plan.","Minimally Invasive Options — Laparoscopic liver resection offered when technically and oncologically appropriate.","Compassionate Patient Communication — Dr. Aravind provides honest, clear, and sensitive communication about diagnosis, prognosis, and treatment choices."],
    symptoms: [],
    treatmentSteps: [{"step":"Surgical Resection (Hepatectomy)","desc":"Removal of the liver segment or lobe containing the tumour — the primary curative treatment for resectable liver cancer."},{"step":"Laparoscopic Liver Resection","desc":"Minimally invasive liver tumour removal for suitable cases — reducing hospital stay and recovery time."},{"step":"Lymph Node Dissection","desc":"Removal of regional lymph nodes during liver cancer surgery for accurate staging."},{"step":"Multidisciplinary Management","desc":"For borderline or unresectable cases, coordination with oncologists for TACE, ablation, targeted therapy, or immunotherapy."},{"step":"SYMPTOMS THAT WARRANT LIVER CANCER EVALUATION","desc":""},{"step":"Unexplained weight loss and loss of appetite","desc":""},{"step":"Upper abdominal pain or swelling, especially on the right side","desc":""},{"step":"Jaundice (yellowing of skin or eyes) and dark urine","desc":""},{"step":"Known history of liver cirrhosis, chronic hepatitis B or C","desc":""},{"step":"Abnormal liver function tests or elevated AFP (alpha-fetoprotein)","desc":""},{"step":"Incidental liver mass found on ultrasound, CT, or MRI","desc":""}],
    faq: [{"q":"*Q: Can liver cancer be cured?","a":"When detected early and surgically resected completely, liver cancer can be cured. Early-stage HCC and isolated colorectal liver metastases have good surgical outcomes."},{"q":"*Q: What causes liver cancer?","a":"Common risk factors include chronic hepatitis B or C infection, liver cirrhosis, heavy alcohol use, non-alcoholic fatty liver disease (NAFLD), and aflatoxin exposure."},{"q":"*Q: Is liver cancer surgery safe?","a":"In experienced hands and with careful patient selection, liver cancer surgery is safe. Dr. Aravind Manoharan performs thorough pre-operative evaluation to ensure each patient is fit for the planned procedure."},{"q":"*Q: What happens if liver cancer cannot be removed surgically?","a":"Options include ablation (RFA/MWA), transarterial chemoembolisation (TACE), targeted therapy (sorafenib/lenvatinib), or immunotherapy — coordinated by Dr. Aravind with the oncology team."}],
  },
  "conditions/pancreatic-cancer": {
    image: resolveAssetPath("/images/pancreas_surgery_inner.png"),
    title: "Pancreatic Cancer",
    breadcrumb: "Conditions > Pancreatic Cancer",
    intro: "**WHAT IS PANCREATIC CANCER?**\n\nPancreatic cancer is one of the most challenging gastrointestinal cancers, often presenting late.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan offers expert surgical management — including the Whipple procedure (pancreaticoduodenectomy) and distal pancreatectomy — for resectable pancreatic and periampullary cancers, combined with close oncology coordination for chemotherapy before and after surgery.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Upper abdominal pain radiating to the back","Unexplained weight loss and loss of appetite","New-onset diabetes in older adults","Jaundice (yellowing of skin/eyes) and pale stools","Nausea, vomiting, and early satiety"],
    treatmentSteps: [{"step":"Whipple procedure (pancreaticoduodenectomy) for pancreatic head tumours","desc":""},{"step":"Distal pancreatectomy for body and tail tumours","desc":""},{"step":"Neoadjuvant chemotherapy (FOLFIRINOX, Gemcitabine) before surgery","desc":""},{"step":"Adjuvant chemotherapy after surgery for improved survival","desc":""},{"step":"Palliative bypass surgery for symptom control in advanced cases","desc":""}],
    faq: [{"q":"*Q: Is pancreatic cancer always fatal?","a":"Not always — when detected and surgically resected at an early stage, outcomes are significantly better. Surgery combined with chemotherapy offers the best chance of long-term survival."},{"q":"*Q: What are the warning signs of pancreatic cancer?","a":"Painless jaundice, unexplained weight loss, new-onset diabetes, and persistent upper abdominal/back pain are key warning signs that warrant urgent evaluation."}],
  },
  "conditions/oesophageal-cancer": {
    image: resolveAssetPath("/images/upper_gi_inner.png"),
    title: "Oesophageal Cancer",
    breadcrumb: "Conditions > Oesophageal Cancer",
    intro: "**WHAT IS OESOPHAGEAL CANCER?**\n\nOesophageal cancer (cancer of the food pipe) is a serious GI malignancy requiring prompt diagnosis and expert surgical management.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan offers comprehensive treatment — including oesophagectomy and neoadjuvant chemoradiation coordination — for patients with resectable oesophageal cancer, always with a focus on restoring swallowing function and quality of life.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Progressive difficulty swallowing (dysphagia) — solids first, then liquids","Unexplained weight loss","Chest pain or discomfort","Regurgitation of food or liquid","Chronic cough, hoarseness, or hiccups"],
    treatmentSteps: [{"step":"Neoadjuvant chemoradiation before surgery to downstage the tumour","desc":""},{"step":"Oesophagectomy — surgical removal of the oesophagus with gastric pull-up or colonic interposition","desc":""},{"step":"Minimally invasive oesophagectomy (where feasible)","desc":""},{"step":"Palliative stenting or bypass for symptom control in advanced disease","desc":""},{"step":"Nutritional support and feeding tube management during treatment","desc":""}],
    faq: [{"q":"*Q: Is oesophageal cancer treatable?","a":"Oesophageal cancer detected at an early or locally advanced stage is treatable with combined surgery and chemoradiation. Outcomes are significantly better with early diagnosis."},{"q":"*Q: What causes oesophageal cancer?","a":"Risk factors include chronic GERD, Barrett's oesophagus, smoking, heavy alcohol use, achalasia, and diet low in fresh fruits and vegetables."}],
  },
  "conditions/stomach-cancer": {
    image: resolveAssetPath("/images/upper_gi_inner.png"),
    title: "Stomach Cancer",
    breadcrumb: "Conditions > Stomach Cancer",
    intro: "**WHAT IS STOMACH CANCER?**\n\nStomach (gastric) cancer requires early detection and expert surgical management for the best chance of cure.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan performs both subtotal and total gastrectomy with D2 lymph node dissection — the internationally accepted standard for curative gastric cancer surgery — combined with post-operative chemotherapy coordination for Stage II/III disease.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Persistent upper abdominal discomfort or pain","Unexplained weight loss and loss of appetite","Nausea and vomiting","Feeling full quickly after small meals","Black or tarry stools (suggesting stomach bleeding)","Anaemia detected on blood tests"],
    treatmentSteps: [{"step":"Subtotal gastrectomy for distal stomach tumours","desc":""},{"step":"Total gastrectomy for tumours of the mid or upper stomach","desc":""},{"step":"D2 lymphadenectomy for complete lymph node staging and clearance","desc":""},{"step":"Perioperative chemotherapy (FLOT or FOLFOX regimen) for Stage II/III disease","desc":""},{"step":"Laparoscopic gastrectomy for selected early-stage cases","desc":""}],
    faq: [{"q":"*Q: Can you live normally after stomach cancer surgery?","a":"Yes — with dietary adjustments and nutritional support, most patients live well after gastrectomy. Small, frequent meals and vitamin supplementation are key to recovery."},{"q":"*Q: What is H. pylori and does it cause stomach cancer?","a":"Helicobacter pylori is a bacterial infection that significantly increases the risk of stomach cancer. Eradication of H. pylori is an important preventive measure."}],
  },
  "conditions/intestinal-cancer": {
    image: resolveAssetPath("/images/intestinal_care_inner.png"),
    title: "Intestinal Cancer",
    breadcrumb: "Conditions > Intestinal Cancer",
    intro: "**WHAT IS INTESTINAL CANCER?**\n\nIntestinal cancers — including tumours of the small bowel and large intestine — are less common but require prompt diagnosis and specialist surgical management.\n\n**WHY IS TREATMENT NEEDED?**\n\nDr. Aravind Manoharan offers bowel resection with adequate margins and lymph node clearance, combined with oncology coordination for adjuvant treatment when indicated.",
    highlights: ["MCh Super-Specialty Qualification in Surgical Gastroenterology","Minimally invasive (laparoscopic) approach prioritised wherever possible","Multidisciplinary care coordination with oncology, radiology, and anaesthesia teams","Clear, honest communication throughout diagnosis, treatment, and recovery","Compassionate, patient-centred care at every step of the journey"],
    symptoms: ["Abdominal pain or cramping","Unexplained weight loss","Blood in stool or dark stools","Nausea, vomiting, or bowel obstruction","Fatigue and anaemia from chronic bleeding"],
    treatmentSteps: [{"step":"Small bowel resection with primary anastomosis","desc":""},{"step":"Right or left hemicolectomy for large bowel tumours","desc":""},{"step":"Laparoscopic bowel resection where suitable","desc":""},{"step":"Lymph node dissection for oncological staging","desc":""},{"step":"Adjuvant chemotherapy coordination for advanced disease","desc":""}],
    faq: [{"q":"*Q: Is intestinal cancer common?","a":"Small intestinal cancer is relatively rare. Large intestinal (colorectal) cancer is one of the most common GI cancers worldwide. Early detection through colonoscopy significantly improves outcomes."},{"q":"*Q: Can intestinal cancer be treated without surgery?","a":"Surgery is the primary treatment for resectable intestinal cancers. Chemotherapy and radiation may be used before or after surgery but typically cannot replace surgical resection."}],
  },
};

// --- Footer --------------------------------------------------
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Dr. Aravind", href: "/about" },
    { label: "Book Appointment", href: PLACEHOLDERS.APPOINTMENT_LINK },
    { label: "Contact Us", href: "/contact" },
  ],
  expertise: [
    { label: "Laparoscopic Surgery", href: "/services/laparoscopic-surgery" },
    { label: "Robotic Surgery", href: "/services/robotic-surgery" },
    { label: "GI Cancer Surgery", href: "/services/gi-cancer-surgery" },
    { label: "Liver Surgery", href: "/services/liver-surgery" },
    { label: "Pancreas Surgery", href: "/services/pancreas-surgery" },
    { label: "Bariatric Surgery", href: "/conditions/bariatric-surgery" },
    { label: "Hernia Surgery", href: "/conditions/hernia-surgery" },
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

