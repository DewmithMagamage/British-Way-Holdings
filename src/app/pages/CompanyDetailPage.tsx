import { motion } from "motion/react";
import { useNavigate, useParams, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Phone, Mail, Globe } from "lucide-react";
import { getCompanyBySlug } from "@/data/companies";
import { CompanyLogo } from "../components/CompanyLogo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function SectionLabel({ children, color = "#2a5a94" }: { children: string; color?: string }) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest mb-4"
      style={{ background: `${color}18`, color, fontFamily: "'Poppins', sans-serif" }}
    >
      {children}
    </span>
  );
}

export function CompanyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const company = slug ? getCompanyBySlug(slug) : undefined;

  if (!company) {
    return <Navigate to="/about#companies" replace />;
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${company.color} 0%, ${company.accent} 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, #f5f9ff)" }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/about#companies")}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <ArrowLeft size={14} /> Back to Group Companies
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
          >
            <CompanyLogo slug={company.slug} short={company.short} color={company.color} accent={company.accent} size="lg" />
            <div>
              <div
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}
              >
                {company.cat.toUpperCase()}
              </div>
              <h1
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "white",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                }}
              >
                {company.name}
              </h1>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.9)",
                  fontStyle: "italic",
                  marginBottom: "12px",
                }}
              >
                {company.tagline}
              </p>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.75,
                  maxWidth: "540px",
                }}
              >
                {company.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel color={company.color}>ABOUT</SectionLabel>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#1a2f4a",
                  lineHeight: 1.25,
                  marginBottom: "18px",
                }}
              >
                About {company.name}
              </h2>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#4a6278",
                  lineHeight: 1.85,
                  marginBottom: "28px",
                }}
              >
                {company.longDesc}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {company.points.map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} style={{ color: company.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#3a5068" }}>{point}</span>
                  </div>
                ))}
              </div>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[14px] text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${company.color}, ${company.accent})`,
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: "none",
                  boxShadow: `0 8px 28px ${company.color}55`,
                }}
              >
                Visit {company.short} Website <ExternalLink size={15} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback src={company.img} alt={company.name} className="w-full h-80 object-cover" />
              </div>

              {(company.phone || company.email) && (
                <div
                  className="rounded-3xl p-6 bg-white border"
                  style={{ borderColor: "rgba(74,128,180,0.12)" }}
                >
                  <SectionLabel color={company.color}>CONTACT</SectionLabel>
                  <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1a2f4a", marginBottom: "16px" }}>
                    Get in Touch
                  </h3>
                  <div className="flex flex-col gap-4">
                    {company.phone && (
                      <a
                        href={`tel:${company.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 no-underline transition-opacity hover:opacity-80"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${company.color}15` }}
                        >
                          <Phone size={16} style={{ color: company.color }} />
                        </div>
                        <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3a5068" }}>
                          {company.phone}
                        </span>
                      </a>
                    )}
                    {company.email && (
                      <a
                        href={`mailto:${company.email}`}
                        className="flex items-center gap-3 no-underline transition-opacity hover:opacity-80"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${company.color}15` }}
                        >
                          <Mail size={16} style={{ color: company.color }} />
                        </div>
                        <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3a5068" }}>
                          {company.email}
                        </span>
                      </a>
                    )}
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 no-underline transition-opacity hover:opacity-80"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${company.color}15` }}
                      >
                        <Globe size={16} style={{ color: company.color }} />
                      </div>
                      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#3a5068" }}>
                        {company.website.replace(/^https?:\/\/(www\.)?/, "")}
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a3a6b, #4a80b4)" }}
      >
        <div className="relative max-w-xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontWeight: 700, fontSize: "1.6rem", color: "white", marginBottom: "12px" }}>
              Explore More Group Companies
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              Discover the full portfolio of British Way Holdings enterprises.
            </p>
            <button
              onClick={() => navigate("/about#companies")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-[14px] transition-all duration-300 hover:scale-[1.03]"
              style={{ background: "white", color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}
            >
              View All Companies <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
