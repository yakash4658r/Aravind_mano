import React, { useState } from "react";
import { PageHero } from "../components/PageHero";
import { PLACEHOLDERS, STATS } from "../data/siteData";
import { CheckCircle, Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  concern: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

const CONCERNS = [
  "Laparoscopic Surgery",
  "GI Cancer Consultation",
  "Gallstones & Biliary Issues",
  "Hernia Repair",
  "Acid Reflux & GERD",
  "Liver & Pancreatic Conditions",
  "Colorectal Issues",
  "Digestive Health Checkup",
  "Second Opinion",
];

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.phone.trim() || !/^[0-9+\- ]{7,15}$/.test(data.phone))
    errors.phone = "Please enter a valid phone number.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.date) errors.date = "Please select a preferred date.";
  if (!data.time) errors.time = "Please select a preferred time slot.";
  if (!data.consent) errors.consent = "You must agree to the terms to proceed.";
  return errors;
};

export const Appointment: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", date: "", time: "",
    concern: "", message: "", consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // ── HOOK: Replace this with your API call / email service ──
    // Example:
    // await fetch('/api/appointment', { method: 'POST', body: JSON.stringify(form) });
    // Or: emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form);
    await new Promise((r) => setTimeout(r, 1200)); // simulate network
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <PageHero title="Appointment Requested" breadcrumb="Appointment" />
        <section className="py-16 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-[#0e5872] mb-4">Thank You, {form.name}!</h2>
            <p className="text-gray-600 mb-3 leading-relaxed">
              Your appointment request has been received. Our team will confirm your slot within 24 hours via phone or email.
            </p>
            <p className="text-gray-500 text-sm mb-8">
              Reference: <span className="font-mono font-semibold text-[#de1c21]">APT-{Date.now().toString().slice(-6)}</span>
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-2 text-sm border border-gray-100 border-l-4 border-[#de1c21]">
              <div className="flex justify-between"><span className="text-gray-400">Name</span><span className="font-medium">{form.name}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Phone</span><span className="font-medium">{form.phone}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Date</span><span className="font-medium">{form.date}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Time</span><span className="font-medium">{form.time}</span></div>
              {form.concern && <div className="flex justify-between"><span className="text-gray-400">Concern</span><span className="font-medium">{form.concern}</span></div>}
            </div>
            <button
              onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",date:"",time:"",concern:"",message:"",consent:false }); }}
              className="inline-flex items-center gap-2 bg-[#0e5872] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#de1c21] transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        </section>
      </main>
    );
  }

  const Field: React.FC<{ name: keyof FormData; label: string; error?: string; children: React.ReactNode }> = ({ name, label, error, children }) => (
    <div>
      <label htmlFor={String(name)} className="block text-sm font-semibold text-[#0e5872] mb-1.5">
        {label} {name !== "message" && name !== "concern" && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> {error}
        </p>
      )}
    </div>
  );

  const inputClass = (err?: string) =>
    `w-full border ${err ? "border-red-300 bg-red-50" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#de1c21] transition-all`;

  const today = new Date().toISOString().split("T")[0];

  return (
    <main>
      <PageHero title="Make An Appointment" breadcrumb="Appointment" subtitle="Book a consultation with our specialist — we'll confirm within 24 hours." />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 border-t-8 border-[#0e5872]">
                <h2 className="text-2xl font-bold text-[#0e5872] mb-2">Request an Appointment</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and our patient care team will contact you to confirm your preferred slot at M R Hospital.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Appointment request form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field name="name" label="Full Name" error={errors.name}>
                      <input
                        id="name" name="name" type="text" value={form.name}
                        onChange={handleChange} placeholder="Your full name"
                        className={inputClass(errors.name)} autoComplete="name"
                      />
                    </Field>
                    <Field name="phone" label="Phone Number" error={errors.phone}>
                      <input
                        id="phone" name="phone" type="tel" value={form.phone}
                        onChange={handleChange} placeholder="+91 98765 43210"
                        className={inputClass(errors.phone)} autoComplete="tel"
                      />
                    </Field>
                  </div>

                  <Field name="email" label="Email Address" error={errors.email}>
                    <input
                      id="email" name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="you@example.com"
                      className={inputClass(errors.email)} autoComplete="email"
                    />
                  </Field>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field name="date" label="Preferred Date" error={errors.date}>
                      <input
                        id="date" name="date" type="date" value={form.date}
                        onChange={handleChange} min={today}
                        className={inputClass(errors.date)}
                      />
                    </Field>
                    <Field name="time" label="Preferred Time" error={errors.time}>
                      <select
                        id="time" name="time" value={form.time}
                        onChange={handleChange} className={inputClass(errors.time)}
                      >
                        <option value="">Select a time slot</option>
                        {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field name="concern" label="Primary Health Concern" error={errors.concern}>
                    <select
                      id="concern" name="concern" value={form.concern}
                      onChange={handleChange} className={inputClass(errors.concern)}
                    >
                      <option value="">Select (optional)</option>
                      {CONCERNS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </Field>

                  <Field name="message" label="Additional Message" error={errors.message}>
                    <textarea
                      id="message" name="message" value={form.message}
                      onChange={handleChange} rows={4}
                      placeholder="Share any relevant medical history, current symptoms, or questions you have…"
                      className={inputClass(errors.message)}
                    />
                  </Field>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        name="consent" type="checkbox" checked={form.consent}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 accent-[#de1c21] flex-shrink-0"
                      />
                      <span className="text-gray-600 text-sm leading-relaxed">
                        I consent to the collection and use of my personal information for the purpose of scheduling and managing my medical appointment. I understand this information will be kept confidential.{" "}
                        <Link to="/privacy" className="text-[#de1c21] hover:underline">Privacy Policy</Link>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#0e5872] to-[#de1c21] text-white font-bold py-4 rounded-full hover:shadow-lg hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting…
                      </>
                    ) : (
                      "Request Appointment"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-[#0e5872] rounded-2xl p-7 text-white border-b-8 border-[#de1c21]">
                <h3 className="font-bold text-lg mb-5">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <a href={`tel:${PLACEHOLDERS.PHONE}`} className="flex items-start gap-3 text-white/70 hover:text-[#ff7680] transition-colors">
                    <Phone className="w-4 h-4 text-[#de1c21] flex-shrink-0 mt-0.5" />
                    {PLACEHOLDERS.PHONE}
                  </a>
                  <a href={`mailto:${PLACEHOLDERS.EMAIL}`} className="flex items-start gap-3 text-white/70 hover:text-[#ff7680] transition-colors">
                    <Mail className="w-4 h-4 text-[#de1c21] flex-shrink-0 mt-0.5" />
                    {PLACEHOLDERS.EMAIL}
                  </a>
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="w-4 h-4 text-[#de1c21] flex-shrink-0 mt-0.5" />
                    {PLACEHOLDERS.ADDRESS}
                  </div>
                  <div className="flex items-start gap-3 text-white/70">
                    <Clock className="w-4 h-4 text-[#de1c21] flex-shrink-0 mt-0.5" />
                    <div>
                      <div>{PLACEHOLDERS.WORKING_HOURS}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0e5872] text-sm mb-4">Why Choose Dr. Aravind?</h3>
                <div className="space-y-3">
                  {STATS.map((s) => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="text-gray-600 text-xs">{s.label}</span>
                      <span className="font-bold text-[#0e5872] text-sm">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp quick */}
              <a
                href={`https://wa.me/${PLACEHOLDERS.WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 rounded-2xl hover:bg-[#1ebe5a] transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
