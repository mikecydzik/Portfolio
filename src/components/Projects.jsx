import { featuredProjects, additionalProjects } from '../data/projects';

const categoryStyles = {
  "Work Project": "bg-blue-50 text-blue-700 border-blue-200",
  "Academic Project": "bg-slate-100 text-slate-600 border-slate-200",
};

function CategoryBadge({ category }) {
  const styles = categoryStyles[category] ?? "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${styles}`}>
      {category}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="mb-3">
        <CategoryBadge category={project.category} />
      </div>
      <h3 className="text-base font-semibold text-[#0f2444] mb-2 leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-2 py-1 bg-gray-50 border border-gray-200 rounded text-slate-500"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.link && project.link !== "#" ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
          >
            View Project <span aria-hidden="true">→</span>
          </a>
        ) : (
          <span className="text-sm text-slate-300 italic">Link coming soon</span>
        )}
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-800 flex items-center gap-1 transition-colors"
          >
            View Website <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-[#0f2444] mb-3">{children}</h2>
      <div className="w-12 h-1 bg-blue-600 rounded-full" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Featured Projects */}
        <SectionHeading>Featured Projects</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional Projects */}
        <SectionHeading>More Projects</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
