import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20"
      style={{ fontFamily: "'Poppins', sans-serif", background: "#f5f9ff" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: "6rem",
            lineHeight: 1,
            background: "linear-gradient(135deg, #4a80b4, #2a5a94)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          404
        </div>
        <h1 style={{ fontWeight: 700, fontSize: "1.6rem", color: "#1a2f4a", marginBottom: "12px" }}>
          Page Not Found
        </h1>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.95rem",
            color: "#5a7898",
            lineHeight: 1.75,
            marginBottom: "28px",
          }}
        >
          The page you're looking for doesn't exist or may have been moved. Return to the homepage or explore our group companies.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-[14px] text-white transition-all hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, #4a80b4, #2a5a94)", fontFamily: "'Poppins', sans-serif" }}
          >
            <Home size={15} /> Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-[14px] transition-all hover:scale-[1.03]"
            style={{
              background: "white",
              color: "#2a5a94",
              border: "2px solid rgba(74,128,180,0.25)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <ArrowLeft size={15} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
