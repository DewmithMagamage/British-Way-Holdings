import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { companies } from "@/data/companies";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  {
    label: "Group Companies",
    to: "/about#companies",
    children: companies.map((c) => ({ name: c.name, slug: c.slug })),
  },
  { label: "News & Events", to: "/news" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const PASTEL_BG = "rgba(74,128,180,0.08)";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileCompaniesOpen(false);
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  const goToCompany = (slug: string) => {
    navigate(`/companies/${slug}`);
    setDropdown(null);
    setMenuOpen(false);
    setMobileCompaniesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl"
    >
      <div
        className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-white/75 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_rgba(74,128,180,0.2)]"
            : "bg-white/45 backdrop-blur-xl border border-white/50 shadow-[0_4px_24px_rgba(74,128,180,0.12)]"
        }`}
      >
        <button onClick={() => navigate("/")} className="flex items-center group shrink-0" aria-label="British Way Holdings Home">
          <BrandLogo height={42} className="group-hover:opacity-90 transition-opacity duration-200" />
        </button>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button
                  onClick={() => navigate("/about#companies")}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 text-[12.5px] font-medium text-[#1a3a6b]/80 hover:bg-[#4a80b4]/10 hover:text-[#1a3a6b]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {link.label}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl overflow-hidden py-2 max-h-80 overflow-y-auto"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(74,128,180,0.15)",
                        boxShadow: "0 12px 40px rgba(74,128,180,0.18)",
                      }}
                    >
                      {link.children.map((child) => (
                        <button
                          key={child.slug}
                          onClick={() => goToCompany(child.slug)}
                          className="w-full text-left px-4 py-2.5 text-[12.5px] text-[#1a3a6b]/75 hover:bg-[#4a80b4]/8 hover:text-[#1a3a6b] transition-colors"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {child.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl transition-all duration-200 text-[12.5px] font-medium ${
                    isActive
                      ? "bg-[#4a80b4]/12 text-[#1a3a6b]"
                      : "text-[#1a3a6b]/75 hover:bg-[#4a80b4]/8 hover:text-[#1a3a6b]"
                  }`
                }
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-5 py-2 rounded-xl text-white text-[12.5px] font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #cc2222, #e03333)", fontFamily: "'Poppins', sans-serif" }}
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#1a3a6b] transition-colors"
          style={{ background: PASTEL_BG }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="mt-2 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.93)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(74,128,180,0.2)",
              boxShadow: "0 12px 40px rgba(74,128,180,0.16)",
            }}
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileCompaniesOpen(!mobileCompaniesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium text-[#1a3a6b] hover:bg-[#4a80b4]/8 transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileCompaniesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileCompaniesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-2"
                        >
                          <button
                            onClick={() => { navigate("/about#companies"); setMenuOpen(false); }}
                            className="w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-medium text-[#4a80b4] hover:bg-[#4a80b4]/8"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            View All Companies
                          </button>
                          {link.children.map((child) => (
                            <button
                              key={child.slug}
                              onClick={() => goToCompany(child.slug)}
                              className="w-full text-left px-4 py-2.5 rounded-xl text-[13px] text-[#1a3a6b]/80 hover:bg-[#4a80b4]/8"
                              style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                              {child.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.to.includes("#") ? link.to.split("#")[0] : link.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-[14px] font-medium transition-colors ${isActive ? "bg-[#4a80b4]/12 text-[#1a3a6b]" : "text-[#1a3a6b] hover:bg-[#4a80b4]/8"}`
                    }
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <button
                onClick={() => { navigate("/contact"); setMenuOpen(false); }}
                className="mt-2 px-5 py-3 rounded-xl text-white text-[14px] font-semibold"
                style={{ background: "linear-gradient(135deg, #cc2222, #e03333)", fontFamily: "'Poppins', sans-serif" }}
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
