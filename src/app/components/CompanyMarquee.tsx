import { useNavigate } from "react-router";
import { companies, type Company } from "@/data/companies";
import { CompanyLogo } from "./CompanyLogo";

function CompanyCard({ company, onClick }: { company: Company; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center text-center p-6 rounded-3xl bg-white border shrink-0 w-[220px] sm:w-[240px] cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: "rgba(74,128,180,0.1)" }}
    >
      <CompanyLogo
        slug={company.slug}
        short={company.short}
        color={company.color}
        accent={company.accent}
        className="mb-4 group-hover:scale-110 transition-transform duration-300"
      />
      <div style={{ fontWeight: 600, fontSize: "12px", color: "#1a2f4a", lineHeight: 1.35, marginBottom: "4px" }}>
        {company.name}
      </div>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: "#5a7898" }}>{company.cat}</div>
    </button>
  );
}

export function CompanyMarquee() {
  const navigate = useNavigate();
  const items = [...companies, ...companies];

  return (
    <div className="company-marquee group relative mt-2 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20"
        style={{ background: "linear-gradient(to right, #eaf2fb, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20"
        style={{ background: "linear-gradient(to left, #eaf2fb, transparent)" }}
      />

      <div className="company-marquee-track flex w-max gap-4 py-2">
        {items.map((company, index) => (
          <CompanyCard
            key={`${company.slug}-${index}`}
            company={company}
            onClick={() => navigate(`/companies/${company.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}
