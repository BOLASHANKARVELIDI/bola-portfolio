import profile from '@/data/profile';

const COLORS = {
  Languages:      { tag: 'bg-sky-500/10 text-sky-400 border-sky-500/20',     heading: 'text-sky-400' },
  Frontend:       { tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20', heading: 'text-violet-400' },
  'Backend & DB': { tag: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', heading: 'text-indigo-400' },
  'IoT & Embedded':{ tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', heading: 'text-emerald-400' },
  'Tools & DevOps':{ tag: 'bg-amber-500/10 text-amber-400 border-amber-500/20', heading: 'text-amber-400' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Skills</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(profile.skills).map(([category, skills]) => {
            const c = COLORS[category] || COLORS.Languages;
            return (
              <div
                key={category}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
              >
                <h3 className={`${c.heading} text-xs font-bold uppercase tracking-widest mb-4`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 ${c.tag} border text-sm rounded-lg font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
