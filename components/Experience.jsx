import profile from '@/data/profile';
import { MdLocationOn } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Work History</p>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/60 via-slate-700 to-transparent hidden md:block" />

          {profile.experience.map((exp) => (
            <div key={exp.id} className="relative md:pl-16 mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-[14px] top-7 hidden md:flex items-center justify-center w-5 h-5 rounded-full border-2 border-sky-500 bg-slate-950 z-10">
                <div className="w-2 h-2 bg-sky-500 rounded-full" />
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-sky-500/30 transition-colors">
                {/* Role header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      {exp.current && (
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sky-400 font-semibold text-lg">{exp.company}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{exp.type}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center justify-end gap-1.5 text-slate-400 text-sm">
                      <BsCalendar3 size={13} />
                      {exp.period}
                    </div>
                    <div className="flex items-center justify-end gap-1.5 text-slate-500 text-sm">
                      <MdLocationOn size={15} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mb-6">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-sky-500 mt-1 flex-shrink-0 text-xs">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
