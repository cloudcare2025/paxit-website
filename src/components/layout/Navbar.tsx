"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-light py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/paxit-logo.png"
              alt="PAXIT by MIS"
              width={120}
              height={48}
              className={`h-9 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-200 ${
                    scrolled
                      ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      : "text-white/80 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""} ${scrolled ? "opacity-40" : "opacity-50"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-60 overflow-hidden rounded-xl border border-slate-200/80 bg-white p-1.5 shadow-xl shadow-slate-200/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-[13px] font-medium text-slate-600 transition-all hover:bg-slate-50 hover:text-paxit-blue"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-paxit-blue/40" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/login"
              className={`text-[13px] font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-slate-500 hover:text-slate-900"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Support Login
            </Link>
            <Button href="/contact-us" size="sm">
              Request Demo
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
