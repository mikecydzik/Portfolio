const SKILLS = [
  "Power BI",
  "SQL",
  "Tableau",
  "Alteryx",
  "Excel",
  "Power Apps",
  "Power Automate",
  "SharePoint / Microsoft Lists",
  "Microsoft 365",
  "Access",
  "Python",
  "C (Basic)",
  "Workflow Mapping",
  "Process Improvement",
  "Data Validation",
  "AI / LLM Concepts",
  "Prompt Engineering",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0f2444] mb-3">About</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">

          {/* Bio — 3 of 5 columns */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-slate-600 text-base leading-relaxed">
              I'm a graduating Information Systems student from Fordham University's Gabelli
              School of Business with hands-on experience applying data analytics to real
              operational challenges. Through my internship at the Metropolitan Transportation
              Authority, I built Power BI dashboards, developed Power Apps tracking systems,
              automated workflows with Power Automate, managed data in SharePoint and Microsoft
              Lists, and performed SQL data validation — all in support of improving business
              processes and operational decision-making.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              I'm interested in entry-level roles in data analytics, business intelligence,
              information systems, business analysis, operations analysis, and process automation.
            </p>
          </div>

          {/* Skills — 2 of 5 columns */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Technical Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-600 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
