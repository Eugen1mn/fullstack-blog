export interface BlogAuthor {
  name: string;
  avatar: string;
}

export type BlogContentBlock =
  | BlogHeadingBlock
  | BlogParagraphBlock
  | BlogListBlock
  | BlogSpacerBlock
  | BlogImageBlock
  | BlogCtaFormBlock
  | BlogTableBlock;

export type BlogHeadingBlock = {
  type: 'heading';
  level: 2 | 3 | 4;
  text: string;
  anchor?: string;
};

export type BlogParagraphBlock = {
  type: 'paragraph';
  text: string;
};

export type BlogListBlock = {
  type: 'list';
  style: 'bullet' | 'confirm';
  items: string[];
};

export type BlogSpacerBlock = {
  type: 'spacer';
  size: 'sm' | 'md' | 'lg';
};

export type BlogImageBlock = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type BlogCtaFormBlock = {
  type: 'ctaForm';
  title: string;
  buttonText: string;
  variant?: 'dark' | 'light';
};

export type BlogTableBlock = {
  type: 'table';
  caption?: string;
  head: string[];
  rows: string[][];
};

export interface BlogPost {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  author: BlogAuthor;
  date: string;
  readTime: string;
  views: number;
  href: string;
  content: BlogContentBlock[];
}
