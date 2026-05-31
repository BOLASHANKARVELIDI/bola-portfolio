import profile from '@/data/profile';
import { HiDocumentText } from 'react-icons/hi';
import { BsCalendar3 } from 'react-icons/bs';
import { MdPeople } from 'react-icons/md';

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label">Research</p>
          <h2 className="section-title">Publications</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {profile.publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HiDocumentText size={22} className="text-violet-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-slate-100 font-bold text-base leading-snug mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-violet-400 text-sm font-medium mb-1">{pub.conference}</p>
                  <p className="text-slate-400 text-sm mb-3">{pub.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <BsCalendar3 size={11} /> {pub.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MdPeople size={13} /> {pub.role}
                    </span>
                    {pub.certificateNo && (
                      <span className="px-2 py-0.5 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full">
                        Cert: {pub.certificateNo}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
