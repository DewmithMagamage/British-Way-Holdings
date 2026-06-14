import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { companies } from "@/data/companies";
import { CompanyLogo } from "../components/CompanyLogo";

const values = [
  { emoji: "🏆", title: "Excellence", desc: "We pursue the highest standards in every programme, service, and interaction." },
  { emoji: "🤝", title: "Integrity", desc: "Honesty and transparency are the cornerstones of every relationship we build." },
  { emoji: "💡", title: "Innovation", desc: "We embrace new ideas and forward-thinking approaches to remain ahead." },
  { emoji: "👑", title: "Leadership", desc: "We inspire, develop, and celebrate the leaders of tomorrow." },
  { emoji: "🌿", title: "Sustainability", desc: "Every decision we make considers its long-term impact on people and planet." },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest mb-4"
      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
      {children}
    </span>
  );
}

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2f4a 0%, #2a4a7a 50%, #4a80b4 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, #f5f9ff)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>ABOUT US</SectionLabel>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "20px" }}>
              About British Way Holdings
            </h1>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
              A diversified corporate organisation built on trust, excellence, and a relentless commitment to transforming lives through education and service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="py-24" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel>OUR STORY</SectionLabel>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#1a2f4a", lineHeight: 1.25, marginBottom: "20px" }}>
                A Legacy of Excellence Since 2004
              </h2>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", color: "#4a6278", lineHeight: 1.85, marginBottom: "16px" }}>
                British Way Holdings (Pvt) Ltd was founded with a singular purpose — to elevate the standards of education and professional development in Sri Lanka. Over the past 20 years, we have grown from a single English academy into a diversified holding group spanning eight distinct enterprises.
              </p>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", color: "#4a6278", lineHeight: 1.85, marginBottom: "24px" }}>
                Today, our group serves over 50,000 students annually, employs hundreds of dedicated professionals, and maintains international partnerships with leading universities and institutions across the United Kingdom and beyond.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["ISO-accredited programmes", "International partnerships", "Award-winning faculty", "State-of-the-art facilities", "Online learning platforms", "Industry-aligned curriculum"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} style={{ color: "#4a80b4", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#3a5068" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&h=520&fit=crop&auto=format" alt="British Way Holdings leadership" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5" style={{ border: "1px solid rgba(74,128,180,0.12)" }}>
                <div style={{ fontWeight: 800, fontSize: "2rem", color: "#cc2222", lineHeight: 1 }}>20+</div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#5a7898", marginTop: "2px" }}>Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-20" style={{ background: "#eaf2fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>VISION & MISSION</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#1a2f4a" }}>
              What <span style={{ color: "#4a80b4" }}>Drives Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                emoji: "🎯", title: "Our Vision", bg: "linear-gradient(135deg, #1a3a6b, #0f2548)",
                text: "To be the most respected and trusted corporate group in South Asia, known for transforming lives through world-class education, exceptional hospitality, and professional excellence."
              },
              {
                emoji: "🚀", title: "Our Mission", bg: "linear-gradient(135deg, #cc2222, #8a0f0f)",
                text: "To deliver exceptional value to students, guests, and partners by maintaining the highest standards of quality, innovation, and integrity across all our enterprises."
              }
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="p-8 rounded-3xl text-white" style={{ background: item.bg }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <span style={{ fontSize: "24px" }}>{item.emoji}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.4rem", color: "white", marginBottom: "14px" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>CORE VALUES</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#1a2f4a" }}>
              The Principles That <span style={{ color: "#4a80b4" }}>Guide Us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group text-center p-6 rounded-3xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: "rgba(74,128,180,0.1)" }}>
                <div className="text-3xl mb-4">{v.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a2f4a", marginBottom: "8px" }}>{v.title}</div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#5a7898", lineHeight: 1.65 }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUP COMPANIES ── */}
      <section id="companies" className="py-24" style={{ background: "#eaf2fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>GROUP COMPANIES</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#1a2f4a" }}>
              Our Portfolio of <span style={{ color: "#4a80b4" }}>Excellence</span>
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            {companies.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="rounded-3xl overflow-hidden shadow-xl cursor-pointer" onClick={() => navigate(`/companies/${c.slug}`)}>
                    <ImageWithFallback src={c.img} alt={c.name} className="w-full h-64 object-cover" />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <CompanyLogo slug={c.slug} short={c.short} color={c.color} accent={c.accent} />
                    <div>
                      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: c.color, fontWeight: 600, letterSpacing: "0.08em" }}>{c.cat.toUpperCase()}</div>
                      <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#1a2f4a" }}>{c.name}</div>
                    </div>
                  </div>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "#4a6278", lineHeight: 1.8, marginBottom: "18px" }}>{c.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {c.points.map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                        <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#3a5068" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(`/companies/${c.slug}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-[13px] text-white transition-all duration-300 hover:scale-[1.03]"
                    style={{ background: `linear-gradient(135deg, ${c.color}, ${c.accent})`, fontFamily: "'Poppins', sans-serif" }}
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a3a6b, #4a80b4)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontWeight: 700, fontSize: "2rem", color: "white", marginBottom: "16px" }}>Meet Our Leadership Team</h2>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: "28px" }}>
              Get to know the visionary individuals who guide British Way Holdings towards continued excellence.
            </p>
            <button onClick={() => navigate("/leadership")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[14px] text-white transition-all duration-300 hover:scale-[1.04]"
              style={{ background: "linear-gradient(135deg, #cc2222, #e03333)", fontFamily: "'Poppins', sans-serif" }}>
              Meet the Team <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
