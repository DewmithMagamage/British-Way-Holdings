import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Tag, ArrowRight, Search } from "lucide-react";
import { newsItems as news, newsCategories as categories } from "@/data/news";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categoryColors: Record<string, string> = {
  Achievement: "#1a6b3a",
  Event: "#4a1a7a",
  Award: "#7a5a1e",
  Partnership: "#2a5a94",
  Programme: "#7a1a1a",
  Announcement: "#1a4a6b",
};

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest mb-4"
      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
      {children}
    </span>
  );
}

export function NewsPage() {
  const [activecat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = news.filter((n) => {
    const matchCat = activecat === "All" || n.category === activecat;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((n) => n.featured && activecat === "All" && !search);
  const rest = featured ? filtered.filter((n) => n.id !== featured.id) : filtered;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2f4a 0%, #2a4a7a 50%, #4a80b4 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, #f5f9ff)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>NEWS & EVENTS</SectionLabel>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Latest News & Events
            </h1>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
              Stay updated with the latest announcements, achievements, events, and milestones from across the British Way Holdings group.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Search + Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#5a7898" }} />
              <input
                type="text"
                placeholder="Search news and events…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border text-[14px] focus:outline-none transition-colors"
                style={{ background: "white", borderColor: "rgba(74,128,180,0.2)", fontFamily: "'Open Sans', sans-serif", color: "#1a2f4a" }}
                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#4a80b4"; }}
                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,128,180,0.2)"; }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCat(cat)}
                  className="px-4 py-2 rounded-xl text-[12px] font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: activecat === cat ? "#2a5a94" : "white",
                    color: activecat === cat ? "white" : "#2a5a94",
                    border: "1.5px solid",
                    borderColor: activecat === cat ? "#2a5a94" : "rgba(74,128,180,0.2)",
                  }}>
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured story */}
          {featured && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white border mb-12 cursor-pointer hover:shadow-2xl transition-all duration-400"
              style={{ borderColor: "rgba(74,128,180,0.1)" }}>
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <ImageWithFallback src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 50%, rgba(255,255,255,0.05))" }} />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white"
                  style={{ background: categoryColors[featured.category] || "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
                  ⭐ Featured · {featured.category}
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={13} style={{ color: "#5a7898" }} />
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#5a7898" }}>{featured.date}</span>
                </div>
                <h2 style={{ fontWeight: 700, fontSize: "1.4rem", color: "#1a2f4a", lineHeight: 1.35, marginBottom: "14px" }}>{featured.title}</h2>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "14px", color: "#4a6278", lineHeight: 1.8, marginBottom: "20px" }}>{featured.excerpt}</p>
                <button className="flex items-center gap-2 font-semibold text-[13px] hover:gap-3 transition-all"
                  style={{ color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
                  Read Full Story <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* News Grid */}
          {rest.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="group rounded-3xl overflow-hidden bg-white border transition-all duration-400 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                  style={{ borderColor: "rgba(74,128,180,0.1)" }}>
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,47,74,0.55), transparent 55%)" }} />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
                      style={{ background: categoryColors[item.category] || "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={12} style={{ color: "#5a7898" }} />
                      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: "#5a7898" }}>{item.date}</span>
                    </div>
                    <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1a2f4a", lineHeight: 1.45, marginBottom: "10px" }}>{item.title}</h3>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#5a7898", lineHeight: 1.65, marginBottom: "14px" }}>
                      {item.excerpt.substring(0, 100)}…
                    </p>
                    <div className="flex items-center gap-1 font-semibold text-[12px] group-hover:gap-2 transition-all"
                      style={{ color: "#4a80b4", fontFamily: "'Poppins', sans-serif" }}>
                      Read More <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🔍</div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#5a7898", fontSize: "1rem" }}>No results found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
