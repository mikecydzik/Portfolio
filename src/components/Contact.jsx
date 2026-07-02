function ContactRow({ icon, label, display, href, isExternal }) {
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
    >
      <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 group-hover:border-blue-300 flex items-center justify-center text-blue-600 font-bold text-sm transition-colors flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-400 font-medium mb-0.5">{label}</p>
        <p className="text-sm font-medium text-[#0f2444]">{display}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0f2444] mb-3">Contact</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="max-w-xl">
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            I'm actively looking for entry-level opportunities in data analytics, business
            intelligence, and information systems.
          </p>

          <div className="space-y-3">

            {/*
              TODO: Replace "your.email@example.com" (in both href and display)
              with your actual email address
            */}
            <ContactRow
              icon="@"
              label="Email"
              display="mikecydzik@gmail.com"
              href="mailto:mikecydzik@gmail.com"
              isExternal={false}
            />

            {/*
              TODO: Replace href with your LinkedIn URL
              Example: href="https://www.linkedin.com/in/michael-cydzik"
              Also update the display text to match your actual URL slug
            */}
            <ContactRow
              icon="in"
              label="LinkedIn"
              display="linkedin.com/in/michael-cydzik"
              href="https://www.linkedin.com/in/michael-cydzik"
              isExternal={true}
            />

            {/*
              TODO: Replace href with your GitHub URL (optional)
              Example: href="https://github.com/michaelcydzik"
              Remove this block entirely if you don't want to show GitHub
            */}
            <ContactRow
              icon="GH"
              label="GitHub"
              display="github.com/mikecydzik"
              href="https://github.com/mikecydzik"
              isExternal={true}
            />

          </div>
        </div>
      </div>
    </section>
  );
}
