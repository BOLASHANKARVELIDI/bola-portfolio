import profile from '@/data/profile';
import { FaGraduationCap } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-slate-700 to-transparent hidden md:block" />

          {profile.education.map((edu) => (
            <div key={edu.id} className="relative md:pl-16 mb-7 last:mb-0">
              {/* Dot */}
              <div className="absolute left-[14px] top-7 hidden md:flex items-center justify-center w-5 h-5 rounded-full border-2 border-indigo-500 bg-slate-950 z-10">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FaGraduationCap className="text-indigo-400 flex-shrink-0" size={18} />
                      <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                    </div>
                    <p className="text-indigo-400 font-semibold">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-slate-500 text-sm flex items-center gap-1 mt-0.5">
                        <MdSchool size={14} />
                        {edu.university}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center justify-end gap-1.5 text-slate-400 text-sm mb-1">
                      <BsCalendar3 size={12} />
                      {edu.period}
                    </div>
                    <span className="text-emerald-400 font-bold text-sm">{edu.score}</span>
                  </div>
                </div>

                {edu.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="text-indigo-500 text-xs">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
