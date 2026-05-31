import profile from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio text */}
          <div className="space-y-5">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a{' '}
              <span className="text-sky-400 font-semibold">Firmware Test Engineer</span> currently
              at KAZAM EV Tech, where I write C/C++ unit tests for ESP32-based EV charging firmware
              and build serial monitor tooling.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My journey spans from designing IoT systems during my B.Tech at QIS College to building
              full stack web applications with React & Spring Boot, and now working deep in embedded
              firmware. I love bridging the gap between hardware and software.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond firmware, I've built employee management systems, banking applications in Java,
              and several IoT projects including smart agriculture and fish monitoring systems. Each
              project taught me something new about writing clean, testable, and maintainable code.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm passionate about contributing to systems that solve real-world problems — whether
              that's a single ESP32 module or a full-stack web platform.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {value}
                </p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
