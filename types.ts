
export interface NavItem {
  label: string;
  href: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryItem {
  id: number;
  url: string;
  type: 'image' | 'video';
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
