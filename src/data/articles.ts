export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "Capabilities" | "How-To" | "21 CFR" | "Case Studies";
  date: string;
}

export const articles: Article[] = [
  {
    slug: "image-management-best-practices",
    title: "Best Practices for Microscopy Image Management",
    excerpt: "Learn how to organize, archive, and retrieve microscopy images efficiently using PAX-it's database management tools.",
    category: "How-To",
    date: "2025-04-15",
  },
  {
    slug: "grain-sizing-astm-e112",
    title: "Automated Grain Sizing with ASTM E112",
    excerpt: "A step-by-step guide to performing automated grain size analysis per ASTM E112 using PAX-it's measurement tools.",
    category: "How-To",
    date: "2025-03-28",
  },
  {
    slug: "21-cfr-part-11-compliance-guide",
    title: "Understanding 21 CFR Part 11 Compliance for Imaging",
    excerpt: "A comprehensive guide to FDA 21 CFR Part 11 requirements and how PAX-it helps pharmaceutical labs achieve compliance.",
    category: "21 CFR",
    date: "2025-03-10",
  },
  {
    slug: "paxcamx-usb3-camera-setup",
    title: "Setting Up Your PAXcamX USB 3.1 Camera",
    excerpt: "Quick start guide for connecting and configuring your new PAXcamX digital microscope camera with PAX-it software.",
    category: "How-To",
    date: "2025-02-20",
  },
  {
    slug: "particle-analysis-capabilities",
    title: "Advanced Particle Analysis with PAX-it",
    excerpt: "Explore PAX-it's particle analysis capabilities including size distribution, shape characterization, and statistical reporting.",
    category: "Capabilities",
    date: "2025-02-05",
  },
  {
    slug: "aerospace-coating-inspection",
    title: "Aerospace Coating Inspection: Meeting Industry Standards",
    excerpt: "How leading aerospace companies use PAX-it for thermal barrier coating analysis and compliance documentation.",
    category: "Case Studies",
    date: "2025-01-18",
  },
  {
    slug: "electronic-signatures-audit-trails",
    title: "Electronic Signatures and Audit Trails in PAX-it",
    excerpt: "Deep dive into PAX-it's electronic signature capabilities and how audit trails support regulatory compliance.",
    category: "21 CFR",
    date: "2025-01-05",
  },
  {
    slug: "network-site-licensing",
    title: "Expanding PAX-it Across Your Organization",
    excerpt: "Guide to deploying PAX-it across multiple workstations with network licensing and shared database configurations.",
    category: "How-To",
    date: "2024-12-15",
  },
  {
    slug: "weld-quality-automotive",
    title: "Weld Quality Analysis in Automotive Manufacturing",
    excerpt: "Case study: How a major automotive supplier reduced weld inspection time by 40% using PAX-it automated measurements.",
    category: "Case Studies",
    date: "2024-11-28",
  },
  {
    slug: "image-analysis-measurement-tools",
    title: "Complete Guide to PAX-it Measurement Tools",
    excerpt: "Overview of all measurement capabilities including linear, area, angular, and automated measurement routines.",
    category: "Capabilities",
    date: "2024-11-10",
  },
  {
    slug: "custom-reporting-templates",
    title: "Creating Custom Report Templates",
    excerpt: "Design professional, branded inspection reports with PAX-it's template editor and automated report generation.",
    category: "How-To",
    date: "2024-10-25",
  },
  {
    slug: "pharmaceutical-image-validation",
    title: "Image System Validation for Pharmaceutical Labs",
    excerpt: "Understanding IQ/OQ/PQ qualification protocols for microscopy imaging systems in GMP environments.",
    category: "21 CFR",
    date: "2024-10-08",
  },
];

export const categories = ["All", "Capabilities", "How-To", "21 CFR", "Case Studies"] as const;
