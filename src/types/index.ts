// types/index.ts

export interface Facility {
  title: string;
  desc: string;
}

export interface Academic {
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface NewsArticle {
  title: string;
  date: string;
}

export interface Slide {
  src: string;
  alt: string;
  caption: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: React.ElementType;
};
