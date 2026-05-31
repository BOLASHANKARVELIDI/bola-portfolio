import profile from '@/data/profile';

const CURRENT_FOCUS = [
  {
    priority: '01',
    title: 'V2G / ISO 15118-2',
    desc: 'Vehicle-to-Grid energy transfer implementation using RISE-V2G Java stack — main active project.',
    color: 'sky',
  },
  {
    priority: '02',
    title: 'Firmware Data Organization',
    desc: 'Structuring and consolidating the firmware team knowledge base — documentation, scripts, and workflows.',
    color: 'indigo',
  },
  {
    priority: '03',
    title: 'FAT – Firmware Applications Tool',
    desc: 'Building a unified Electron desktop platform housing all daily EV development utilities in one place.',
    color: 'violet',
  },
  {
    priority: '04',
    title: 'CI/CD Pipeline',
    desc: 'Initiating understanding and planning implementation of CI/CD for the firmware development workflow.',
    color: 'emerald',
  },
];

const COLOR = {
  sky:     { border: 'border-sky-500/20',     bg: 'bg-sky-500/5',     badge: 'text-sky-400 bg-sky-500/10',     title: 'text-sky-400' },
  indigo:  { border: 'border-indigo-500/20',  bg: 'bg-indigo-500/5',  badge: 'text-indigo-400 bg-indigo-500/10',  title: 'text-indigo-400' },
  violet:  { border: 'border-violet-500/20',  bg: 'bg-violet-500/5',  badge: 'text-violet-400 bg-violet-500/10',  title: 'text-violet-400' },
  emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', badge: 'text-emerald-400 bg-emerald-500/10', title: 'text-emerald-400' },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Left — Bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-slate-200 text-lg leading-relaxed">
              I'm a{' '}
              <span className="text-sky-400 font-semibold">Junior Embedded Systems Engineer</span>{' '}
              at KAZAM EV Tech, Bangalore — working at the intersection of embedded
              systems, EV charging protocols, and developer tooling.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My current focus is implementing{' '}
              <span className="text-slate-300 font-medium">V2G / ISO 15118-2</span>{' '}
              (Vehicle-to-Grid energy transfer), organizing firmware team data and
              documentation, and building{' '}
              <span className="text-slate-300 font-medium">FAT (Firmware Applications Tool)</span>{' '}
              — a unified Electron desktop platform that brings all EV charging development
              utilities together in one place.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Previously as Firmware Test Engineer, I wrote automation scripts, OCPP compliance
              verification scripts, and development workflows for EV charger firmware across
              multiple product lines. I also implemented production-grade embedded security
              (Secure Boot, Flash Encryption) and designed STM32-based production test jig firmware.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Outside firmware, I've built full stack applications with React and Java, published
              two research papers at international conferences, and hold a B.Tech in ECE
              (First Class with Distinction) from QIS College, JNTU Kakinada.
            </p>

            {/* Quick facts */}
            <div className="pt-2 flex flex-wrap gap-3">
              {[
                { label: 'Location', value: 'Bangalore, India' },
                { label: 'Degree',   value: 'B.Tech ECE – First Class with Distinction' },
                { label: 'Status',   value: 'Open to Opportunities' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-sm"
                >
                  <span className="text-slate-500">{label}:</span>
                  <span className="text-slate-300 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats + Current Focus */}
          <div className="lg:col-span-2 space-y-5">

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {profile.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-sky-500/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent mb-1">
                    {value}
                  </p>
                  <p className="text-slate-500 text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Current Focus
              </p>
              <div className="space-y-3">
                {CURRENT_FOCUS.map(({ priority, title, desc, color }) => {
                  const c = COLOR[color];
                  return (
                    <div key={priority} className={`${c.bg} border ${c.border} rounded-xl p-3 flex items-start gap-3`}>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${c.badge} flex-shrink-0 mt-0.5`}>
                        {priority}
                      </span>
                      <div>
                        <p className={`text-sm font-semibold ${c.title} mb-0.5`}>{title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
