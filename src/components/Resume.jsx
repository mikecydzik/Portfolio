const EXPERIENCE_BULLETS = [
  "Built Power BI dashboards for operational reporting, inventory tracking, and stakeholder decision support",
  "Developed a Power Apps tracking system for shop rejections and multi-step approval workflows",
  "Automated document generation and operational notifications using Power Automate flows",
  "Managed and structured operational data across SharePoint and Microsoft Lists",
  "Performed SQL-based data validation to ensure accuracy and integrity across systems",
  "Mapped existing workflows and identified process improvement opportunities",
  "Collaborated with cross-functional stakeholders to translate operational needs into technical solutions",
];

const SKILL_GROUPS = [
  { label: "Data & Analytics",    skills: "Power BI, Tableau, SQL, Excel, Alteryx" },
  { label: "Automation & Apps",   skills: "Power Apps, Power Automate, SharePoint, Microsoft Lists" },
  { label: "Programming",         skills: "Python, SQL, C (Basic), Access" },
  { label: "AI & Emerging Tech",  skills: "AI / LLM Concepts, Prompt Engineering" },
  { label: "Process & Ops",       skills: "Workflow Mapping, Process Improvement, Data Validation" },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0f2444] mb-3">Resume</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* Left — Education + Experience (2/3 columns) */}
          <div className="md:col-span-2 space-y-8">

            {/* Education */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Education</p>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-[#0f2444]">Fordham University — Gabelli School of Business</h3>
                    <p className="text-slate-600 text-sm mt-1">B.S. in Information Systems</p>
                    <p className="text-slate-500 text-sm">Minor in Cybersecurity</p>
                  </div>
                  <span className="text-sm text-slate-400 whitespace-nowrap">May 2026</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Experience</p>
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-[#0f2444]">Bank of America</h3>
                    <p className="text-blue-600 text-sm font-medium mt-0.5">Relationship Banker</p>
                    <p className="text-sm text-slate-500 mt-1">Great Neck, NY</p>
                  </div>
                  <span className="text-sm text-slate-400 whitespace-nowrap">August 2026 – Present</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Help clients with consumer banking needs, use Bank of America Life Plan to
                  discuss financial priorities, and partner with specialists to connect clients
                  with relevant products and services.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-semibold text-[#0f2444]">Metropolitan Transportation Authority</h3>
                    <p className="text-blue-600 text-sm font-medium mt-0.5">Data Analyst Intern</p>
                  </div>
                  <span className="text-sm text-slate-400 whitespace-nowrap">June 2025 – May 2026</span>
                </div>
                <ul className="space-y-2.5">
                  {EXPERIENCE_BULLETS.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right — Skills + Buttons (1/3 column) */}
          <div className="space-y-6">

            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Skills</p>
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
                {SKILL_GROUPS.map(({ label, skills }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">{label}</p>
                    <p className="text-sm text-slate-600">{skills}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="/Michael_Cydzik_Resume_.docx"
                download="Michael_Cydzik_Resume_.docx"
                className="flex items-center justify-center w-full px-5 py-3 bg-[#0f2444] text-white rounded-lg text-sm font-semibold hover:bg-[#1a3a5c] transition-colors"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/michael-cydzik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-5 py-3 border-2 border-[#0f2444] text-[#0f2444] rounded-lg text-sm font-semibold hover:bg-white transition-colors"
              >
                View LinkedIn
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
