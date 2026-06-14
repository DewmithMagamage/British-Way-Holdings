import { motion } from "motion/react";
import { Linkedin, Mail, Quote } from "lucide-react";
import { leaders } from "@/data/leaders";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest mb-4"
      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
      {children}
    </span>
  );
}

export function LeadershipPage() {
  const featured = leaders.filter((l) => l.featured);
  const rest = leaders.filter((l) => !l.featured);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2f4a 0%, #2a4a7a 50%, #4a80b4 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, #f5f9ff)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>LEADERSHIP</SectionLabel>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Guided by Visionary Leaders
            </h1>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "580px", margin: "0 auto" }}>
              Our leadership team brings decades of combined expertise, shaping British Way Holdings into the respected group it is today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED LEADERS ── */}
      <section className="py-24" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>SENIOR LEADERSHIP</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#1a2f4a" }}>
              Our <span style={{ color: "#4a80b4" }}>Founders & Principals</span>
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {featured.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-5 gap-10 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Photo side */}
                <div className={`lg:col-span-2 ${i % 2 !== 0 ? "lg:col-start-4" : ""}`}>
                  <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback src={leader.image} alt={leader.name} className="w-full aspect-square object-cover" />
                      <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(to top, rgba(26,47,74,0.5) 0%, transparent 50%)" }} />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div style={{ fontWeight: 700, fontSize: "1rem", color: "white" }}>{leader.name}</div>
                      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>{leader.title}</div>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`lg:col-span-3 ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold mb-4"
                    style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94" }}>
                    {leader.title}
                  </div>
                  <h2 style={{ fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#1a2f4a", marginBottom: "16px" }}>
                    {leader.name}
                  </h2>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "#4a6278", lineHeight: 1.85, marginBottom: "24px" }}>
                    {leader.bio}
                  </p>

                  {leader.message && (
                    <div className="p-6 rounded-2xl relative"
                      style={{ background: "linear-gradient(135deg, #eaf2fb, #dde8f4)", border: "1px solid rgba(74,128,180,0.15)" }}>
                      <Quote size={24} style={{ color: "#4a80b4", opacity: 0.5, marginBottom: "10px" }} />
                      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "#1a3a6b", lineHeight: 1.8, fontStyle: "italic" }}>
                        {leader.message}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
                      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94" }}>
                      <Linkedin size={16} />
                    </button>
                    <button className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
                      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94" }}>
                      <Mail size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER LEADERS ── */}
      <section className="py-24" style={{ background: "#eaf2fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>MANAGEMENT TEAM</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "#1a2f4a" }}>
              The Team Behind the <span style={{ color: "#4a80b4" }}>Excellence</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white border transition-all duration-400 hover:shadow-2xl hover:-translate-y-1"
                style={{ borderColor: "rgba(74,128,180,0.1)" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,47,74,0.65) 0%, transparent 55%)" }} />
                </div>
                <div className="p-5">
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a2f4a" }}>{leader.name}</h3>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#4a80b4", fontWeight: 600, marginBottom: "10px", marginTop: "3px" }}>{leader.title}</p>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#5a7898", lineHeight: 1.65 }}>
                    {leader.bio.substring(0, 90)}…
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button className="p-2 rounded-lg transition-colors hover:scale-110"
                      style={{ background: "rgba(74,128,180,0.08)", color: "#2a5a94" }}>
                      <Linkedin size={13} />
                    </button>
                    <button className="p-2 rounded-lg transition-colors hover:scale-110"
                      style={{ background: "rgba(74,128,180,0.08)", color: "#2a5a94" }}>
                      <Mail size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
