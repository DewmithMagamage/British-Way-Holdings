import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { companies } from "@/data/companies";
import { BrandLogo } from "./BrandLogo";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  { label: "News & Events", to: "/news" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const socials = [
  { icon: Facebook, label: "Facebook", color: "#1877f2", href: "#" },
  { icon: Instagram, label: "Instagram", color: "#e1306c", href: "#" },
  { icon: Linkedin, label: "LinkedIn", color: "#0077b5", href: "#" },
  { icon: Youtube, label: "YouTube", color: "#ff0000", href: "#" },
];

export function Footer() {
  return (
    <footer style={{ fontFamily: "'Poppins', sans-serif", background: "linear-gradient(135deg, #0c1e35 0%, #0f2a4a 60%, #0a1e38 100%)" }}>
      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5" aria-label="British Way Holdings Home">
              <BrandLogo height={48} />
            </Link>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
              A diversified corporate organization leading excellence in education, hospitality, and professional development across Sri Lanka.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${s.color}25`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                >
                  <s.icon size={15} style={{ color: "rgba(255,255,255,0.65)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "12px", color: "white", letterSpacing: "0.1em", marginBottom: "16px" }}>QUICK LINKS</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="flex items-center gap-2 transition-colors group"
                    style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <ChevronRight size={12} style={{ color: "#7aafd4" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "12px", color: "white", letterSpacing: "0.1em", marginBottom: "16px" }}>GROUP COMPANIES</h4>
            <ul className="flex flex-col gap-2.5">
              {companies.map((c) => (
                <li key={c.slug}>
                  <Link to={`/companies/${c.slug}`} className="flex items-center gap-2"
                    style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <ChevronRight size={12} style={{ color: "#7aafd4" }} />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "12px", color: "white", letterSpacing: "0.1em", marginBottom: "16px" }}>CONTACT</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: MapPin, text: "No. 123, Galle Road, Colombo 03, Sri Lanka" },
                { icon: Phone, text: "+94 11 234 5678" },
                { icon: Mail, text: "info@britishwayholdings.lk" },
              ].map((item) => (
                <div key={item.text} className="flex gap-3">
                  <item.icon size={14} style={{ color: "#7aafd4", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} British Way Holdings (Pvt) Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((link) => (
              <a key={link} href="#"
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
