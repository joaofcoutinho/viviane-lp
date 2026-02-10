"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Palestrantes", href: "#palestrantes" },
  { label: "Local", href: "#local" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="font-[family-name:var(--font-heading)] text-white text-lg sm:text-xl font-bold tracking-wide"
          >
            Mulheres Cheias de Graça
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-sand text-sm font-medium tracking-wide transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              className="bg-amber hover:bg-amber-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 uppercase tracking-wider"
            >
              Inscreva-se
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
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
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-white/80 hover:text-sand text-sm font-medium tracking-wide uppercase px-2 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#inscricao"
                onClick={() => setIsMobileOpen(false)}
                className="bg-amber hover:bg-amber-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 uppercase tracking-wider text-center mt-2"
              >
                Inscreva-se
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
