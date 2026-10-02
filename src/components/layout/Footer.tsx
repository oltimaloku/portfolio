import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D1D5DB]/50 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl text-[#111827] no-underline hover:text-[#D4AF37] transition-colors"
            >
              <span className="font-bold text-[#DC2626]">Olti</span>
            </Link>
            <p className="text-[#6B7280] text-sm font-[family-name:var(--font-source-serif)]">
              Full Stack Developer passionate about building impactful software.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#111827]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/#projects"
                className="text-[#6B7280] hover:text-[#DC2626] text-sm no-underline transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/articles"
                className="text-[#6B7280] hover:text-[#DC2626] text-sm no-underline transition-colors"
              >
                Articles
              </Link>
              <Link
                href="/#about"
                className="text-[#6B7280] hover:text-[#DC2626] text-sm no-underline transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg text-[#111827]">
              Connect
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/oltimaloku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#DC2626] text-sm no-underline transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/oltimaloku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#DC2626] text-sm no-underline transition-colors"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#D1D5DB]/50">
          <p className="text-center text-[#9CA3AF] text-sm font-[family-name:var(--font-source-serif)]">
            &copy; {currentYear} Olti. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
