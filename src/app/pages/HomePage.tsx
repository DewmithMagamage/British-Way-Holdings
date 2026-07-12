import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Users, GraduationCap, Globe, Award, Quote } from "lucide-react";
import { companies } from "@/data/companies";
import { getLatestNews } from "@/data/news";
import { getFeaturedLeaders } from "@/data/leaders";
import { getGalleryPreview } from "@/data/gallery";
import { visionMissionItems } from "@/data/aboutContent";
import { CompanyMarquee } from "../components/CompanyMarquee";
import { BrandLogo } from "../components/BrandLogo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const slides = [
  {
    id: 1,
    image: "/logos/hi001.png",
    mobileImage: "/logos/mi001.png",
    title: "Shaping the Future Through Excellence",
    subtitle: "A diversified corporate group leading education, hospitality, and professional development across Sri Lanka.",
    cta: "Discover Our Story",
    ctaLink: "/about",
  },
  {
    id: 2,
    image: "/logos/hi002.png",
    mobileImage: "/logos/mi002.png",
    title: "Empowering the Leaders of Tomorrow",
    subtitle: "Thousands of students graduate each year from our world-class institutions, ready to lead in a global world.",
    cta: "Our Institutions",
    ctaLink: "/about",
  },
  {
    id: 3,
    image: "/logos/hi003.png",
    mobileImage: "/logos/mi003.png",
    title: "Where Elegance Meets Hospitality",
    subtitle: "The Pharo Hotel — a distinguished destination for world-class accommodation, dining, and events.",
    cta: "Explore The Pharo Hotel",
    ctaLink: "/companies/pharo-hotel",
  },
  {
    id: 4,
    image: "/logos/hi004.png",
    mobileImage: "/logos/mi002.png",
    title: "Professional Excellence Redefined",
    subtitle: "Thames College and British Campus offer internationally recognised qualifications for today's professionals.",
    cta: "View Programmes",
    ctaLink: "/about",
  },
];

const stats = [
  { icon: Users, label: "Companies", value: "8" },
  { icon: GraduationCap, label: "Employees", value: "2000+" },
  { icon: Globe, label: "Partnerships", value: "20+" },
  { icon: Award, label: "Awards", value: "40+" },
];


const newsItems = getLatestNews(3);
const featuredLeaders = getFeaturedLeaders();
const galleryPreview = getGalleryPreview(6);

function SectionLabel({ children }: { children: string }) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest mb-4"
      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}
    >
      {children}
    </span>
  );
}

export function HomePage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [paused, go]);

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ── HERO CAROUSEL ── */}
      <section
        className="relative h-[100svh] min-h-[620px] max-h-[900px] md:h-screen overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              loading="eager"
              className="absolute inset-0 hidden md:block w-full h-full object-cover"
            />
            <ImageWithFallback
              src={slide.mobileImage}
              alt={slide.title}
              loading="eager"
              className="absolute inset-0 md:hidden w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                className="max-w-2xl"
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2.5 rounded-full mb-6"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
                  <BrandLogo height={32} />
                </div>

                <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 5.5vw, 3.8rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "20px" }}>
                  {slide.title}
                </h1>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(0.95rem, 2vw, 1.12rem)", color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: "36px", maxWidth: "540px" }}>
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate(slide.ctaLink)}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-[14px] transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
                    style={{ background: "linear-gradient(135deg, #4a80b4, #2a5a94)", boxShadow: "0 8px 28px rgba(74,128,180,0.5)" }}
                  >
                    {slide.cta} <ArrowRight size={15} />
                  </button>
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-7 py-3.5 rounded-2xl font-semibold text-[14px] text-white border border-white/30 transition-all duration-300 hover:bg-white/15 hover:scale-[1.03]"
                    style={{ backdropFilter: "blur(8px)" }}
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide counter + dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#7aafd4" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
        >
          <ChevronLeft size={20} color="white" />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
        >
          <ChevronRight size={20} color="white" />
        </button>

        {/* Progress bar */}
        {!paused && (
          <motion.div
            key={current}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5.5, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left"
            style={{ background: "linear-gradient(90deg, #7aafd4, #4a80b4)" }}
          />
        )}


      </section>

      {/* ── QUICK STATS BAR ── */}
      <section style={{ background: "linear-gradient(135deg, #1a3a6b, #2a5a94)" }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <s.icon size={20} color="rgba(255,255,255,0.85)" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.4rem", color: "white", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>ABOUT BRITISH WAY HOLDINGS</SectionLabel>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1a2f4a", lineHeight: 1.2, marginBottom: "20px" }}>
                A Legacy Built on <span style={{ color: "#4a80b4" }}>Trust & Excellence</span>
              </h2>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", color: "#4a6278", lineHeight: 1.8, marginBottom: "16px" }}>
                British Way Holdings (Pvt) Ltd is a diversified corporate organisation with a proven track record spanning education, hospitality, and professional development. Founded with a mission to elevate Sri Lanka's educational and service standards, we have grown into one of the country's most respected holding groups.
              </p>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", color: "#4a6278", lineHeight: 1.8, marginBottom: "28px" }}>
                Under the visionary leadership of our Managing Director Dr. Shantha Geethadewa and Chairperson Madam Preni Rajapaksha, we continue to expand our reach and deepen our impact.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-[14px] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #4a80b4, #2a5a94)", fontFamily: "'Poppins', sans-serif" }}
              >
                More About Us <ArrowRight size={15} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/logos/aboutus.png"
                  alt="British Way Holdings"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(to top, rgba(26,58,107,0.35), transparent 55%)" }} />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5"
                style={{ border: "1px solid rgba(74,128,180,0.1)" }}
              >
                <div style={{ fontWeight: 800, fontSize: "2rem", color: "#cc2222", lineHeight: 1 }}>22+</div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#5a7898", marginTop: "2px" }}>Years of Excellence</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-5 -right-5 rounded-2xl shadow-xl p-5 text-white"
                style={{ background: "linear-gradient(135deg, #4a80b4, #2a5a94)" }}
              >
                <div style={{ fontWeight: 800, fontSize: "2rem", lineHeight: 1 }}>{companies.length}</div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.75)", marginTop: "2px" }}>Group Companies</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GROUP COMPANIES ── */}
      <section className="py-20 overflow-hidden" style={{ background: "#eaf2fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionLabel>OUR GROUP</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1a2f4a", lineHeight: 1.2 }}>
              {companies.length} Companies, <span style={{ color: "#4a80b4" }}>One Vision</span>
            </h2>
          </motion.div>
        </div>

        <CompanyMarquee />

        <div className="max-w-6xl mx-auto px-6 text-center mt-10">
          <button
            onClick={() => navigate("/about#companies")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-[14px] transition-all duration-300 hover:scale-[1.03]"
            style={{ background: "white", color: "#2a5a94", border: "2px solid rgba(74,128,180,0.25)", fontFamily: "'Poppins', sans-serif" }}
          >
            Explore All Companies <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-20" style={{ background: "#eaf2fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <SectionLabel>VISION & MISSION</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1a2f4a", lineHeight: 1.2 }}>
              What <span style={{ color: "#4a80b4" }}>Drives Us</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {visionMissionItems.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl text-white"
                style={{ background: item.bg }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <ImageWithFallback src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.4rem", color: "white", marginBottom: "14px" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP PREVIEW ── */}
      <section className="py-24" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between flex-wrap gap-4 mb-12"
          >
            <div>
              <SectionLabel>LEADERSHIP</SectionLabel>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1a2f4a", lineHeight: 1.2 }}>
                Guided by <span style={{ color: "#4a80b4" }}>Visionary Leaders</span>
              </h2>
            </div>
            <button
              onClick={() => navigate("/leadership")}
              className="flex items-center gap-2 font-semibold text-[13px] transition-all hover:gap-3"
              style={{ color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}
            >
              Meet the Team <ArrowRight size={15} />
            </button>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredLeaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden bg-white border flex flex-col sm:flex-row"
                style={{ borderColor: "rgba(74,128,180,0.1)" }}
              >
                <div className="sm:w-44 shrink-0">
                  <ImageWithFallback src={leader.image} alt={leader.name} className="w-full h-48 sm:h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1a2f4a", marginBottom: "4px" }}>{leader.name}</div>
                  <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "#4a80b4", fontWeight: 600, marginBottom: "12px" }}>{leader.title}</div>
                  {leader.message && (
                    <div className="flex gap-2">
                      <Quote size={14} style={{ color: "#cc2222", flexShrink: 0, marginTop: "3px" }} />
                      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "#4a6278", lineHeight: 1.7, fontStyle: "italic" }}>
                        {leader.message}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-20" style={{ background: "#eaf2fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between flex-wrap gap-4 mb-12"
          >
            <div>
              <SectionLabel>GALLERY</SectionLabel>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1a2f4a", lineHeight: 1.2 }}>
                Moments of <span style={{ color: "#4a80b4" }}>Excellence</span>
              </h2>
            </div>
            <button
              onClick={() => navigate("/gallery")}
              className="flex items-center gap-2 font-semibold text-[13px] transition-all hover:gap-3"
              style={{ color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}
            >
              View Gallery <ArrowRight size={15} />
            </button>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                onClick={() => navigate("/gallery")}
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? "h-64 md:h-full min-h-[200px]" : "h-40"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f4a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "white" }}>{photo.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-24" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between flex-wrap gap-4 mb-12"
          >
            <div>
              <SectionLabel>LATEST NEWS</SectionLabel>
              <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1a2f4a", lineHeight: 1.2 }}>
                Stay <span style={{ color: "#4a80b4" }}>Updated</span>
              </h2>
            </div>
            <button
              onClick={() => navigate("/news")}
              className="flex items-center gap-2 font-semibold text-[13px] transition-all hover:gap-3"
              style={{ color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}
            >
              All News <ArrowRight size={15} />
            </button>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white border transition-all duration-400 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                style={{ borderColor: "rgba(74,128,180,0.1)" }}
                onClick={() => navigate("/news")}
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,47,74,0.6), transparent 55%)" }} />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold text-white"
                    style={{ background: "rgba(74,128,180,0.85)", backdropFilter: "blur(6px)", fontFamily: "'Poppins', sans-serif" }}>
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: "#5a7898", marginBottom: "8px" }}>{item.date}</p>
                  <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1a2f4a", lineHeight: 1.45 }}>{item.title}</h3>
                  <div className="flex items-center gap-1 mt-4 font-semibold text-[12px] group-hover:gap-2 transition-all"
                    style={{ color: "#4a80b4", fontFamily: "'Poppins', sans-serif" }}>
                    Read More <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-20 overflow-hidden relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a3a6b 0%, #2a5a94 50%, #4a80b4 100%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2 style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white", lineHeight: 1.2, marginBottom: "16px" }}>
              Ready to Start Your Journey?
            </h2>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "32px" }}>
              Whether you're a prospective student, a business partner, or a guest — we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 rounded-2xl font-semibold text-[14px] text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #cc2222, #e03333)", boxShadow: "0 8px 28px rgba(204,34,34,0.4)", fontFamily: "'Poppins', sans-serif" }}
              >
                Contact Us Now
              </button>
              <button
                onClick={() => navigate("/about")}
                className="px-8 py-4 rounded-2xl font-semibold text-[14px] border border-white/30 text-white hover:bg-white/15 transition-all duration-300 hover:scale-[1.03]"
                style={{ backdropFilter: "blur(8px)", fontFamily: "'Poppins', sans-serif" }}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
