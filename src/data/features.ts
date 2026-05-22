export interface Feature {
  title: string;
  description: string;
  icon: string;
  span?: "col" | "row" | "both";
}

export const features: Feature[] = [
  {
    title: "Manage & Organize Images",
    description: "Store images in organized folders with a nested treeview or intuitive cabinet/folder interface. Auto-sort images as they come in.",
    icon: "folders",
    span: "col",
  },
  {
    title: "Archive & Database",
    description: "Build a powerful, searchable database of your images with metadata tagging and full-text search capabilities.",
    icon: "database",
  },
  {
    title: "Annotate Images",
    description: "Add text, arrows, shapes, and custom annotations to your microscopy images with precision overlay tools.",
    icon: "pencil",
  },
  {
    title: "Process Images",
    description: "Apply filters, adjust contrast, sharpen, and enhance images with a full suite of image processing tools.",
    icon: "sliders",
  },
  {
    title: "Measurements",
    description: "Calibrated linear, area, and angular measurements with automatic scale bar detection and reporting.",
    icon: "ruler",
    span: "col",
  },
  {
    title: "Analyze Images",
    description: "Perform particle analysis, grain sizing, phase analysis, and more with automated measurement routines.",
    icon: "chart",
  },
  {
    title: "Create Reports",
    description: "Generate professional PDF reports with images, measurements, and analysis data in customizable templates.",
    icon: "document",
  },
  {
    title: "Share Images",
    description: "Export images in any format, share via network, or publish directly to your team's shared workspace.",
    icon: "share",
  },
  {
    title: "Secure Your Assets",
    description: "Role-based access control, audit trails, and 21 CFR Part 11 compliance for regulated environments.",
    icon: "shield",
    span: "col",
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive imaging tasks with custom macros and scripted workflows for consistent results.",
    icon: "automation",
  },
  {
    title: "Imaging Hardware",
    description: "PAXcam digital microscope cameras with USB 3.1 connectivity for seamless hardware-software integration.",
    icon: "camera",
  },
  {
    title: "Custom Programming",
    description: "Extend PAX-it with custom modules and integrations tailored to your specific laboratory requirements.",
    icon: "code",
  },
];

export const iconPaths: Record<string, string> = {
  folders: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  database: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  pencil: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  sliders: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  ruler: "M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 00-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 000 1.36l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88 1 .88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.02-.22.03-.44.03-.67z",
  chart: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  share: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  automation: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  camera: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
};
