import postgres from 'postgres';
import { BlogPost, PortfolioProject } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchBlogPosts() {
  try {
    const posts = await sql<BlogPost[]>`
      SELECT *
      FROM blog_posts
      ORDER BY created_at ASC
    `;

    return posts;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all blog posts.');
  }
}

export async function fetchBlogPost(slug: string) {
  console.log({slug})
  try {
    const posts = await sql<BlogPost[]>`
      SELECT *
      FROM blog_posts
      WHERE slug = ${slug}
    `;
    const post = posts[0];

    return post;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all blog posts.');
  }
}

export async function fetchPortfolioProjects() {
  try {
    const projects = await sql<PortfolioProject[]>`
      SELECT *
      FROM portfolio_projects
      ORDER BY id ASC
    `;

    return projects;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all portfolio projects.');
  }
}


export async function fetchPortfolioProject(slug: string) {
  try {
    const projects = await sql<PortfolioProject[]>`
      SELECT *
      FROM portfolio_projects
      WHERE slug = ${slug}
    `;
    const project = projects[0];

    return project;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all portfolio projects.');
  }
}