"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Projects", href: "/#projects" },
    { name: "Articles", href: "/articles" },
    { name: "About", href: "/#about" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#FAF8F5]/50 backdrop-blur-md border-b border-[#D4AF37]/20"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl text-[#111827] no-underline hover:text-[#D4AF37] transition-colors"
        >
          <span className="font-bold text-[#DC2626]">Olti</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-[family-name:var(--font-source-serif)] text-[#374151] hover:text-[#DC2626] transition-colors no-underline"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Using the new Button component */}
        <div className="hidden md:block">
          <Button
            href="https://linkedin.com/in/oltimaloku"
            external
            size="sm"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#374151] hover:text-[#DC2626] transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAF8F5]/98 backdrop-blur-sm border-b border-[#D4AF37]/20 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-[family-name:var(--font-source-serif)] text-[#374151] hover:text-[#DC2626] transition-colors no-underline py-2"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                href="https://linkedin.com/in/oltimaloku"
                external
                size="md"
                className="w-full justify-center"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
