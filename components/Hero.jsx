'use client';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-24 left-16 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-10">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Open to Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-slate-200 mb-1">Bola Shankar</span>
          <span className="block bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Velidi
          </span>
        </h1>

        {/* Role divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-500/40" />
          <p className="text-sky-400 text-xs font-semibold tracking-widest uppercase">
            Embedded Systems Engineer · Developer
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-500/40" />
        </div>

        {/* Bio */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-3 leading-relaxed">
          Embedded systems engineer with 18 months of experience in ESP32/ESP-IDF firmware
          testing, OCPP 1.6 compliance, and embedded security. Currently at{' '}
          <span className="text-sky-400 font-medium">KAZAM EV Tech</span>{' '}
          building automation tools for EV charging firmware.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-slate-600 text-sm mb-10">
          <MdLocationOn size={15} />
          Bangalore, India
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-semibold rounded-xl border border-slate-700 hover:border-sky-500/50 transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
          <a
            href="https://www.linkedin.com/in/velidibolashankar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#005e93] text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5"
          >
            <FaLinkedin size={16} />
            LinkedIn Profile
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="https://github.com/BOLASHANKARVELIDI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-200 text-sm transition-colors"
          >
            <FaGithub size={19} />
            GitHub
          </a>
          <span className="text-slate-800">·</span>
          <a
            href="mailto:velidibolashankar@gmail.com"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-200 text-sm transition-colors"
          >
            <MdEmail size={19} />
            Email
          </a>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollTo('about')}
          className="text-slate-700 hover:text-sky-400 transition-colors"
          aria-label="Scroll down"
        >
          <HiArrowDown size={22} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
