export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "Hardware",
    href: "/imaging-hardware",
    children: [
      { label: "Overview", href: "/imaging-hardware" },
      { label: "Microscope Cameras", href: "/imaging-hardware/microscope-cameras" },
    ],
  },
  {
    label: "Software",
    href: "/imaging-software",
    children: [
      { label: "PAX-it Overview", href: "/imaging-software" },
      { label: "21 CFR Part 11", href: "/imaging-software/21-cfr-part-11" },
    ],
  },
  { label: "Applications", href: "/applications" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];
