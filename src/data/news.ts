export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const newsCategories = ["All", "Achievement", "Event", "Award", "Partnership", "Programme", "Announcement"];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "bwea-iso-certification",
    title: "British Way English Academy Achieves ISO 9001:2015 Certification",
    excerpt: "We are proud to announce that British Way English Academy has received ISO 9001:2015 certification, reaffirming our unwavering commitment to quality education standards.",
    date: "June 2, 2026",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=380&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 2,
    slug: "annual-convocation-2026",
    title: "Annual Convocation 2026 — Celebrating 1,200 Graduates",
    excerpt: "British Way Holdings hosted its grandest convocation ceremony yet, celebrating over 1,200 graduates from across all group companies.",
    date: "May 18, 2026",
    category: "Event",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 3,
    slug: "pharo-hotel-award-2026",
    title: "The Pharo Hotel Wins Best Boutique Hotel 2026",
    excerpt: "The Pharo Hotel has been recognised at the Sri Lanka Tourism Awards as the Best Boutique Hotel of the Year.",
    date: "April 30, 2026",
    category: "Award",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 4,
    slug: "uel-partnership",
    title: "New Partnership with University of East London",
    excerpt: "British Campus has signed a landmark MOU with the University of East London, opening direct pathways for dual degree programmes.",
    date: "April 12, 2026",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 5,
    slug: "thames-digital-marketing",
    title: "Thames College Launches Digital Marketing Diploma",
    excerpt: "Thames College introduces a cutting-edge Professional Diploma in Digital Marketing, developed in collaboration with global industry leaders.",
    date: "March 25, 2026",
    category: "Programme",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 6,
    slug: "bwis-stem-wing",
    title: "British Way International School Opens New STEM Wing",
    excerpt: "BWIS inaugurated its state-of-the-art STEM wing, featuring robotics labs, a design studio, and cutting-edge science facilities.",
    date: "March 10, 2026",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 7,
    slug: "15-years-excellence",
    title: "British Way Holdings Celebrates 15 Years of Excellence",
    excerpt: "On our 15th anniversary, we reflect on a journey of transforming over 50,000 lives and reaffirm our commitment to growth.",
    date: "February 20, 2026",
    category: "Event",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 8,
    slug: "wisdom-cricket-tournament",
    title: "Wisdom Cricket Academy Hosts Inter-School Tournament",
    excerpt: "Over 200 young cricketers competed in the academy's annual inter-school tournament, showcasing emerging talent.",
    date: "February 5, 2026",
    category: "Event",
    image: "https://images.unsplash.com/photo-1531418841129-388b303f0c4a?w=600&h=380&fit=crop&auto=format",
  },
];

export function getLatestNews(count = 3): NewsItem[] {
  return newsItems.slice(0, count);
}
