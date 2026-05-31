import profile from '@/data/profile';
import { MdVerified } from 'react-icons/md';
import { HiStar } from 'react-icons/hi';

const TYPE_STYLE = {
  certification: {
    wrapper: 'bg-sky-500/5 border-sky-500/20 hover:border-sky-500/40',
    icon: 'text-sky-400',
    label: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
  achievement: {
    wrapper: 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40',
    icon: 'text-amber-400',
    label: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Awards & Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.certifications.map((cert) => {
            const s = TYPE_STYLE[cert.type] || TYPE_STYLE.certification;
            const Icon = cert.type === 'achievement' ? HiStar : MdVerified;
            return (
              <div
                key={cert.id}
                className={`border rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-200 ${s.wrapper}`}
              >
                <Icon size={26} className={`${s.icon} mb-3`} />
                <h3 className="text-slate-100 font-semibold text-base mb-1">{cert.title}</h3>
                <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-2 py-0.5 border rounded-full font-medium ${s.label}`}
                  >
                    {cert.type === 'achievement' ? 'Achievement' : 'Certified'}
                  </span>
                  <span className="text-slate-600 text-xs">{cert.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
