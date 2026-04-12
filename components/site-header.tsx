"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { brandName, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center text-lg font-semibold tracking-tight text-white sm:text-xl">
            {brandName}
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button-primary hidden text-sm lg:inline-flex">
            Get a Quote
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-slate-900/95 p-4 text-white shadow-2xl shadow-cyan-950/30 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="button-primary mt-4"
            >
              Get a Quote
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
