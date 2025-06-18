import Link from 'next/link';

import { fetchPortfolioProjects } from '@/app/lib/data';

export default async function PortfolioPage() {
  const projects = await fetchPortfolioProjects();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border-b pb-4">
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              // className={}
            >
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </Link>
            <p>{project.description}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}