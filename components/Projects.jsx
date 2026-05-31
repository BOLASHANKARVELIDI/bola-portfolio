'use client';
import { useState } from 'react';
import profile from '@/data/profile';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';

const CATEGORIES = ['All', 'Firmware', 'Full Stack', 'Backend', 'IoT'];

const STATUS_STYLE = {
  Ongoing:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Completed: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
};

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? profile.projects
      : profile.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider mb-8" />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all ${
                  filter === cat
                    ? 'bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-500/20'
                    : 'bg-transparent text-slate-400 border-slate-700 hover:border-sky-500/40 hover:text-sky-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center">
                  <MdCode size={20} className="text-sky-400" />
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-300 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-300 transition-colors"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & description */}
              <h3 className="text-slate-100 font-bold text-lg mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Status + category badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${STATUS_STYLE[project.status]}`}
                >
                  {project.status}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  {project.category}
                </span>
                {project.year && (
                  <span className="text-xs text-slate-600 ml-auto">{project.year}</span>
                )}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 bg-slate-800 text-slate-500 rounded-md border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-xs px-2 py-0.5 bg-slate-800 text-slate-600 rounded-md border border-slate-700/50">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
