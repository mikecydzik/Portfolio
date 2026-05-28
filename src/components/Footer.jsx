export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-base font-bold text-[#0f2444]">MC</span>
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Michael Cydzik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
