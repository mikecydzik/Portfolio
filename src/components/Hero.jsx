export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

          {/* Left — Text content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-400 font-medium tracking-wide mb-2 text-sm">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#0f2444] leading-tight mb-4">
              Michael Cydzik
            </h1>

            <p className="text-lg font-medium text-blue-600 mb-6">
              Information Systems Graduate&nbsp;&nbsp;|&nbsp;&nbsp;Data Analyst
            </p>

            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              I use data analytics and automation to turn information into insights
              and solve real business problems.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <button
                onClick={() => scrollTo('resume')}
                className="px-6 py-3 bg-[#0f2444] text-white rounded-lg text-sm font-semibold hover:bg-[#1a3a5c] transition-colors"
              >
                View Resume
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 border-2 border-[#0f2444] text-[#0f2444] rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right — Headshot placeholder */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-gray-200 overflow-hidden">
              <img
                src="/headshot.jpg"
                alt="Michael Cydzik"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
