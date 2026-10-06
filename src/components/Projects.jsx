import React from 'react';
import { useProjects } from '../hooks/useProjects';

const Projects = () => {
  const { currentMode, modeNames, switchMode, currentProjects, loading } = useProjects();

  return (
    <section id="projects" className="responsive-section py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="section-heading text-5xl font-bold">My Projects</h2>
          <div
            role="tablist"
            aria-label="Project categories"
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {modeNames.map((category, mode) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={currentMode === mode}
                aria-controls="project-list"
                onClick={() => switchMode(mode)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  currentMode === mode
                    ? 'bg-pink-500 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div id="project-list" role="tabpanel" className="project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="col-span-3 text-center text-zinc-500 py-12">
              Loading projects...
            </p>
          ) : currentProjects.length === 0 ? (
            <p className="col-span-3 text-center text-zinc-500 py-12">
              No {modeNames} projects yet.
            </p>
          ) : (
            currentProjects.map((project) => (
              <div key={project.id} className="project-card glass rounded-3xl overflow-hidden cursor-pointer">
                <div className="relative">
                  {project.image_url ? (
                    <img 
                      src={project.image_url} 
                      className="w-full h-64 object-cover" 
                      alt={project.title}
                    />
                  ) : (
                    <div className="w-full h-64 bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-600">No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                  <p className="text-zinc-400 line-clamp-3 mb-5">{project.description}</p>
                  {project.technologies && (
                    <div className="text-sm text-pink-400 mb-6">{project.technologies}</div>
                  )}
                  <div className="project-actions">
                  {project.project_url && (
                    <a 
                      href={project.project_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl text-sm font-medium transition"
                    >
                      Live Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                  {project.youtube_url && (
                    <a
                      href={project.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl text-sm font-medium transition"
                    >
                      Watch Video <i className="fa-brands fa-youtube"></i>
                    </a>
                  )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </section>
  );
};

export default Projects;
