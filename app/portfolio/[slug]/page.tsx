import Link from 'next/link';

import { fetchPortfolioProject } from '@/app/lib/data';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!slug) {
    return <div>Loading...</div>;
  }

  const project = await fetchPortfolioProject(slug);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-xl font-semibold">{project.name}</h2>
      <p>{project.description}</p>
      <p>Technologies:</p>
      {project.tech_stack.map((tech) => (
        <span key={tech} className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-full mr-2 mb-2">
          {tech}
        </span>
      ))}
      <Link
        key={project.url}
        href={project.url}
        // className={}
        target="_blank"
      >
        <p>{project.url}</p>
      </Link>
      <Link
        key={project.github_url}
        href={project.github_url}
        // className={}
        target="_blank"
      >
        <p>{project.github_url}</p>
      </Link>
    </div>
  );
}