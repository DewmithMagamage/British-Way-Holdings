import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryPhotos as photos, galleryCategories as categories } from "@/data/gallery";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest mb-4"
      style={{ background: "rgba(74,128,180,0.1)", color: "#2a5a94", fontFamily: "'Poppins', sans-serif" }}>
      {children}
    </span>
  );
}

export function GalleryPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCat === "All" ? photos : photos.filter((p) => p.cat === activeCat);

  const openLightbox = (id: number) => {
    const idx = filtered.findIndex((p) => p.id === id);
    if (idx >= 0) setLightboxIdx(idx);
  };

  const lightboxPhoto = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  const prevPhoto = () => {
    if (filtered.length === 0) return;
    setLightboxIdx((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  };

  const nextPhoto = () => {
    if (filtered.length === 0) return;
    setLightboxIdx((i) => (i !== null ? (i + 1) % filtered.length : null));
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCat(cat);
    setLightboxIdx(null);
  };

  useEffect(() => {
    if (lightboxIdx === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIdx(null);
        return;
      }
      if (filtered.length === 0) return;
      if (e.key === "ArrowLeft") {
        setLightboxIdx((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
      }
      if (e.key === "ArrowRight") {
        setLightboxIdx((i) => (i !== null ? (i + 1) % filtered.length : null));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIdx, filtered.length]);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2f4a 0%, #2a4a7a 50%, #4a80b4 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to bottom, transparent, #f5f9ff)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>GALLERY</SectionLabel>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: "20px" }}>
              Moments of Excellence
            </h1>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
              A visual journey through the events, achievements, and milestones that define the British Way Holdings story.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ background: "#f5f9ff" }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Filter */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => handleCategoryChange(cat)}
                className="px-4 py-2.5 rounded-xl text-[12px] font-semibold transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: activeCat === cat ? "#2a5a94" : "white",
                  color: activeCat === cat ? "white" : "#2a5a94",
                  border: "1.5px solid",
                  borderColor: activeCat === cat ? "#2a5a94" : "rgba(74,128,180,0.2)",
                }}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            <AnimatePresence mode="sync">
              {filtered.map((photo) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer h-full min-h-[200px] ${photo.span || ""}`}
                  onClick={() => openLightbox(photo.id)}
                >
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none"
                    style={{ background: "rgba(26,47,74,0.55)" }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}>
                      <ZoomIn size={20} color="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(26,47,74,0.8), transparent)" }}>
                    <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.9)" }}>{photo.alt}</p>
                  </div>
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg text-[9px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ background: "rgba(74,128,180,0.85)", backdropFilter: "blur(4px)", fontFamily: "'Poppins', sans-serif" }}>
                    {photo.cat}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>📷</div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#5a7898" }}>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: "rgba(10,20,40,0.95)", backdropFilter: "blur(12px)" }}
            onClick={() => setLightboxIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              onClick={() => setLightboxIdx(null)}
              aria-label="Close photo viewer"
            >
              <X size={20} color="white" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors z-10"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} color="white" />
            </button>

            <motion.div
              key={lightboxPhoto.id}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.28 }}
              className="max-w-5xl w-full mx-12"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={lightboxPhoto.src.replace("w=800", "w=1200").replace("w=400", "w=800")}
                alt={lightboxPhoto.alt}
                className="w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>{lightboxPhoto.alt}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
                  {lightboxIdx !== null ? lightboxIdx + 1 : ""} / {filtered.length}
                </p>
              </div>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors z-10"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              aria-label="Next photo"
            >
              <ChevronRight size={22} color="white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
