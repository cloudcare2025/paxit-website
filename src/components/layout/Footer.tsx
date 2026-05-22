import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "PAX-it Software", href: "/imaging-software" },
    { label: "PAXcamX Cameras", href: "/imaging-hardware/microscope-cameras" },
    { label: "Imaging Hardware", href: "/imaging-hardware" },
    { label: "21 CFR Part 11", href: "/imaging-software/21-cfr-part-11" },
  ],
  Solutions: [
    { label: "Metallurgy", href: "/applications/metallurgy" },
    { label: "Pharmaceutical", href: "/applications/pharmaceutical" },
    { label: "Aerospace", href: "/applications/aerospace" },
    { label: "All Applications", href: "/applications" },
  ],
  Resources: [
    { label: "Knowledge Hub", href: "/knowledge-hub" },
    { label: "Technical Support", href: "/resources/technical-support" },
    { label: "Support Login", href: "/login" },
    { label: "Press Releases", href: "/press-releases" },
  ],
  Company: [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/paxit-logo.png"
              alt="PAXIT by MIS"
              width={100}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed">
              Midwest Information Systems, makers of PAX-it. Precision imaging
              solutions since 1988.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="text-sm">
            <p>707 N. Iowa Avenue, Villa Park, IL 60181</p>
            <p className="mt-1">
              Phone:{" "}
              <a href="tel:+16302794000" className="hover:text-white">
                +1 630-279-4000
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PAX-it. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
