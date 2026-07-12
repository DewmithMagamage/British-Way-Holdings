export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  cat: string;
  span?: string;
}

export const galleryCategories = ["All", "Corporate Events", "Educational Activities", "Graduation", "Hospitality", "Community"];

export const galleryPhotos: GalleryPhoto[] = [
  { id: 1, src: "/logos/gly01", alt: "Mindfulness Session For Educators", cat: "Student workshop and innovation lab", span: "col-span-2 row-span-2" },
  { id: 2, src: "/logos/gly02", alt: "University campus learning session", cat: "Educational Activities" },
  { id: 3, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop&auto=format", alt: "Graduation ceremony 2025", cat: "Graduation" },
  { id: 4, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&auto=format", alt: "The Pharo Hotel lobby and atrium", cat: "Hospitality" },
  { id: 5, src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format", alt: "Student workshop and innovation lab", cat: "Educational Activities" },
  { id: 6, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=300&fit=crop&auto=format", alt: "Leadership summit 2025", cat: "Corporate Events", span: "col-span-2" },
  { id: 7, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&auto=format", alt: "School sports and activities day", cat: "Educational Activities" },
  { id: 8, src: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=400&h=300&fit=crop&auto=format", alt: "The Pharo Hotel fine dining", cat: "Hospitality" },
  { id: 9, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&auto=format", alt: "Cambridge results celebration", cat: "Educational Activities" },
  { id: 10, src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop&auto=format", alt: "Community health and wellness programme", cat: "Community" },
  { id: 11, src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&h=300&fit=crop&auto=format", alt: "Graduation portraits 2025", cat: "Graduation" },
  { id: 12, src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=300&fit=crop&auto=format", alt: "Business conference and networking", cat: "Corporate Events", span: "col-span-2" },
];

export function getGalleryPreview(count = 6): GalleryPhoto[] {
  return galleryPhotos.slice(0, count);
}
