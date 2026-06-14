import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { companies as groupCompanies } from "@/data/companies";
import { BrandLogo } from "../components/BrandLogo";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest mb-4"
      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
      {children}
    </span>
  );
}

export function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", subject: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", company: "", message: "" });
    }, 5000);
  };

  const contactItems = [
    { icon: MapPin, label: "Head Office", value: "No. 123, Galle Road, Colombo 03, Sri Lanka", color: "#2a5a94" },
    { icon: Phone, label: "Telephone", value: "+94 11 234 5678", color: "#1a6b3a" },
    { icon: Mail, label: "Email", value: "info@britishwayholdings.lk", color: "#cc2222" },
    { icon: Globe, label: "Website", value: "www.britishwayholdings.lk", color: "#4a1a7a" },
    { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8:00 AM – 5:00 PM\nSat: 8:00 AM – 1:00 PM", color: "#7a5a1e" },
  ];

  const companies = groupCompanies
    .filter((c) => c.phone && c.email)
    .map((c) => ({ name: c.name, phone: c.phone!, email: c.email! }));

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2f4a 0%, #2a4a7a 50%, #4a80b4 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, #f5f9ff)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>CONTACT US</SectionLabel>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Let's Start a Conversation
            </h1>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
              We'd love to hear from you. Reach out for enquiries, partnerships, admissions, or any information about our group companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTACT ── */}
      <section className="py-20" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Info Column */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-5">

              {/* Contact card */}
              <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a3a6b, #0f2548)" }}>
                <div className="p-7">
                  <div className="mb-6">
                    <BrandLogo height={44} />
                    <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
                      Head Office
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {contactItems.map((item) => (
                      <div key={item.label} className="flex gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "rgba(255,255,255,0.1)" }}>
                          <item.icon size={15} color="rgba(255,255,255,0.8)" />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em", marginBottom: "2px" }}>
                            {item.label.toUpperCase()}
                          </div>
                          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social media */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} className="px-7 py-5">
                  <div style={{ fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", marginBottom: "12px" }}>
                    FOLLOW US
                  </div>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, color: "#1877f2" },
                      { icon: Instagram, color: "#e1306c" },
                      { icon: Linkedin, color: "#0077b5" },
                      { icon: Youtube, color: "#ff0000" },
                    ].map(({ icon: Icon, color }, i) => (
                      <a key={i} href="#"
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${color}22`; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                      >
                        <Icon size={14} color="rgba(255,255,255,0.7)" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden relative h-48 bg-[#dde8f4]">
                <iframe
                  title="British Way Holdings location map"
                  src="https://maps.google.com/maps?q=Galle+Road+Colombo+03+Sri+Lanka&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-3">
              <div className="p-8 rounded-3xl bg-white" style={{ border: "1px solid rgba(74,128,180,0.1)", boxShadow: "0 4px 40px rgba(74,128,180,0.08)" }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-5">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                      style={{ background: "rgba(26,107,58,0.1)" }}>
                      <CheckCircle2 size={40} style={{ color: "#1a6b3a" }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "1.4rem", color: "#1a2f4a" }}>Message Sent!</h3>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#5a7898", textAlign: "center", maxWidth: "320px", lineHeight: 1.7 }}>
                      Thank you for reaching out to British Way Holdings. Our team will respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 style={{ fontWeight: 700, fontSize: "1.3rem", color: "#1a2f4a", marginBottom: "6px" }}>Send Us a Message</h3>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#5a7898", marginBottom: "28px" }}>
                      Fill in the form below and we'll get back to you promptly.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { key: "name", label: "Full Name", placeholder: "Dr. John Smith", type: "text" },
                          { key: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
                        ].map((f) => (
                          <div key={f.key}>
                            <label style={{ fontWeight: 600, fontSize: "12px", color: "#1a3a6b", display: "block", marginBottom: "6px" }}>
                              {f.label} *
                            </label>
                            <input required type={f.type} placeholder={f.placeholder}
                              value={form[f.key as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl text-[13px] focus:outline-none transition-all"
                              style={{ border: "1.5px solid rgba(74,128,180,0.18)", background: "#f5f9ff", fontFamily: "'Open Sans', sans-serif", color: "#1a2f4a" }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = "#4a80b4"; e.currentTarget.style.background = "white"; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(74,128,180,0.18)"; e.currentTarget.style.background = "#f5f9ff"; }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label style={{ fontWeight: 600, fontSize: "12px", color: "#1a3a6b", display: "block", marginBottom: "6px" }}>Company / Organisation</label>
                          <input type="text" placeholder="Your Organisation"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-[13px] focus:outline-none transition-all"
                            style={{ border: "1.5px solid rgba(74,128,180,0.18)", background: "#f5f9ff", fontFamily: "'Open Sans', sans-serif", color: "#1a2f4a" }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#4a80b4"; e.currentTarget.style.background = "white"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(74,128,180,0.18)"; e.currentTarget.style.background = "#f5f9ff"; }}
                          />
                        </div>
                        <div>
                          <label style={{ fontWeight: 600, fontSize: "12px", color: "#1a3a6b", display: "block", marginBottom: "6px" }}>Subject *</label>
                          <input required type="text" placeholder="Enquiry about BWEA"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-[13px] focus:outline-none transition-all"
                            style={{ border: "1.5px solid rgba(74,128,180,0.18)", background: "#f5f9ff", fontFamily: "'Open Sans', sans-serif", color: "#1a2f4a" }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#4a80b4"; e.currentTarget.style.background = "white"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(74,128,180,0.18)"; e.currentTarget.style.background = "#f5f9ff"; }}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ fontWeight: 600, fontSize: "12px", color: "#1a3a6b", display: "block", marginBottom: "6px" }}>Message *</label>
                        <textarea required rows={5} placeholder="Please describe your enquiry in detail…"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-[13px] focus:outline-none transition-all resize-none"
                          style={{ border: "1.5px solid rgba(74,128,180,0.18)", background: "#f5f9ff", fontFamily: "'Open Sans', sans-serif", color: "#1a2f4a" }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#4a80b4"; e.currentTarget.style.background = "white"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(74,128,180,0.18)"; e.currentTarget.style.background = "#f5f9ff"; }}
                        />
                      </div>
                      <button type="submit" disabled={loading}
                        className="flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-semibold text-[14px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70"
                        style={{ background: "linear-gradient(135deg, #2a5a94, #4a80b4)", fontFamily: "'Poppins', sans-serif" }}>
                        {loading ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} /> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPANY CONTACTS ── */}
      <section className="py-20" style={{ background: "#eaf2fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>COMPANY CONTACTS</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1a2f4a" }}>
              Contact Our <span style={{ color: "#4a80b4" }}>Subsidiaries</span> Directly
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {groupCompanies.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-white border transition-all hover:shadow-lg cursor-pointer group"
                style={{ borderColor: "rgba(74,128,180,0.1)" }}
                onClick={() => navigate(`/companies/${c.slug}`)}
              >
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1a2f4a", marginBottom: "10px", lineHeight: 1.35 }}>{c.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={12} style={{ color: "#4a80b4" }} />
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#4a6278" }}>{c.phone}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={12} style={{ color: "#4a80b4" }} />
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#4a6278" }}>{c.email}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold group-hover:gap-2 transition-all" style={{ color: "#4a80b4", fontFamily: "'Poppins', sans-serif" }}>
                  View Company <ArrowRight size={11} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
