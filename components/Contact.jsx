import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const CONTACTS = [
  {
    Icon: MdEmail,
    label: 'Email',
    value: 'velidibolashankar@gmail.com',
    href: 'mailto:velidibolashankar@gmail.com',
    style: { wrapper: 'bg-sky-500/5 border-sky-500/20 hover:border-sky-500/40', icon: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/velidibolashankar',
    href: 'https://www.linkedin.com/in/velidibolashankar',
    style: { wrapper: 'bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40', icon: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  },
  {
    Icon: FaGithub,
    label: 'GitHub',
    value: 'BOLASHANKARVELIDI',
    href: 'https://github.com/BOLASHANKARVELIDI',
    style: { wrapper: 'bg-slate-700/20 border-slate-700/40 hover:border-slate-600/60', icon: 'text-slate-300 bg-slate-800 border-slate-700' },
  },
  {
    Icon: MdLocationOn,
    label: 'Location',
    value: 'Chinnaganjam, AP, India',
    href: null,
    style: { wrapper: 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40', icon: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-label justify-center flex">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-slate-400 max-w-md mx-auto">
            Currently open to new opportunities and collaborations. Feel free to reach out — I'll
            get back to you as soon as possible.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {CONTACTS.map(({ Icon, label, value, href, style }) => {
            const inner = (
              <div
                className={`border rounded-2xl p-5 flex items-center gap-4 transition-all hover:-translate-y-0.5 ${style.wrapper}`}
              >
                <div
                  className={`w-12 h-12 border rounded-xl flex items-center justify-center flex-shrink-0 ${style.icon}`}
                >
                  <Icon size={21} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                  <p className="text-slate-200 font-medium text-sm truncate">{value}</p>
                </div>
              </div>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/velidibolashankar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0077b5] hover:bg-[#005e93] text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
          >
            <FaLinkedin size={20} />
            View Full LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
