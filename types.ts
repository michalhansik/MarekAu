
export type ChatMessage = {
  role: 'user' | 'model';
  content: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type View = 'chat' | 'gallery' | 'map' | 'timeline';
