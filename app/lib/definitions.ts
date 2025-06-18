export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  published_at: string;
};

export type PortfolioProject = {
  id: number;
  slug: string;
  name: string;
  description: string;
  tech_stack: string[];
  url: string;
  github_url: string;
  image_url: string;
};
