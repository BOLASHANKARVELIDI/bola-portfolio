'use client';
import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Publications', href: 'publications' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = NAV_LINKS.map((l) => l.href);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/60 shadow-xl shadow-black/20'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-lg font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Bola Shankar
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                active === href
                  ? 'text-sky-400 bg-sky-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/velidibolashankar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#006396] text-white text-sm font-medium rounded-lg transition-colors"
          >
            <FaLinkedin size={15} />
            Connect
          </a>
          <button
            className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="block w-full text-left px-3 py-3 text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors rounded-lg hover:bg-slate-900"
            >
              {label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/velidibolashankar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2 px-3 py-3 text-[#0077b5] text-sm font-medium"
          >
            <FaLinkedin size={17} />
            LinkedIn Profile
          </a>
        </div>
      )}
    </nav>
  );
}
