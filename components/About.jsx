import profile from '@/data/profile';

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
              at KAZAM EV Tech, Bangalore, working on ESP32/ESP-IDF firmware testing and
              automation for EV charging systems.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My day-to-day involves testing OCPP 1.6 protocol compliance, implementing
              production-grade embedded security (Secure Boot, Flash Encryption, BLE AES),
              and building internal automation tools — FAT (Firmware Automation Tool) and
              FATT (Firmware Application Testing Tool) — to streamline the firmware
              testing process.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I also explored V2G / ISO 15119 communication using the RISE-V2G Java stack,
              designed an STM32G030 production test jig, and have done on-site field testing
              at TVS Hosur Plant and TUV SUD regulatory labs.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Outside of firmware, I enjoy building web applications — I've built projects
              with React, Java, and Arduino/IoT during my B.Tech, and have published two
              research papers at international conferences.
            </p>

            {/* Quick facts */}
            <div className="pt-2 flex flex-wrap gap-3">
              {[
                { label: 'Location', value: 'Bangalore, India' },
                { label: 'Degree', value: 'B.Tech ECE – First Class with Distinction' },
                { label: 'Available', value: 'Open to Opportunities' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-sm">
                  <span className="text-slate-500">{label}:</span>
                  <span className="text-slate-300 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {profile.stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-200"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {value}
                </p>
                <p className="text-slate-400 text-sm leading-tight">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
