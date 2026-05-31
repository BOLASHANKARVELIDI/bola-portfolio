import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year}{' '}
          <span className="text-slate-300 font-medium">Bola Shankar Velidi</span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/velidibolashankar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#0077b5] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/BOLASHANKARVELIDI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-200 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:velidibolashankar@gmail.com"
            className="text-slate-600 hover:text-sky-400 transition-colors"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
        </div>

        <p className="text-slate-700 text-xs">
          Built with Next.js & Tailwind CSS · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
