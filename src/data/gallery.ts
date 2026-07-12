export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  cat: string;
  span?: string;
}

export const galleryCategories = ["All", "Corporate Events", "Educational Activities", "Graduation", "Hospitality", "Community"];

export const galleryPhotos: GalleryPhoto[] = [
  { id: 1, src: "/logos/glry01.jpg", alt: "Mindfulness Session For Educators", cat: "Student workshop and innovation lab", span: "col-span-2 row-span-2" },
  { id: 2, src: "/logos/glry02.jpg", alt: "University campus learning session", cat: "Educational Activities" },
  { id: 3, src: "/logos/glry03.jpg", alt: "Graduation ceremony 2025", cat: "Graduation" },
  { id: 4, src: "/logos/glry04.jpg", alt: "The Pharo Hotel lobby and atrium", cat: "Hospitality" },
  { id: 5, src: "/logos/glry05.jpg", alt: "Student workshop and innovation lab", cat: "Educational Activities" },
  { id: 6, src: "/logos/glry06.jpg", alt: "Leadership summit 2025", cat: "Corporate Events", span: "col-span-2" },
  { id: 7, src: "/logos/glry07.jpg", alt: "The Pharo Hotel fine dining", cat: "Hospitality" },
  { id: 9, src: "/logos/glry08.jpg", alt: "Cambridge results celebration", cat: "Educational Activities" },
  { id: 10, src: "/logos/glry09.jpg", alt: "Community health and wellness programme", cat: "Community" },
  { id: 11, src: "/logos/glry10.jpg", alt: "Graduation portraits 2025", cat: "Graduation" },
  { id: 12, src: "/logos/glry11.jpg", alt: "Business conference and networking", cat: "Corporate Events", span: "col-span-2" },
];

export function getGalleryPreview(count = 6): GalleryPhoto[] {
  return galleryPhotos.slice(0, count);
}
