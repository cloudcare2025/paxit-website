export interface Application {
  slug: string;
  title: string;
  description: string;
  icon: string;
  content: string;
}

export const applications: Application[] = [
  {
    slug: "metallurgy",
    title: "Metallurgy",
    description: "Grain sizing, phase analysis, inclusion rating, and microstructure characterization for metals and alloys.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    content: "PAX-it provides comprehensive metallurgical analysis capabilities including grain sizing per ASTM E112, phase analysis, inclusion rating per ASTM E45, and detailed microstructure characterization. Our software supports both manual and automated measurement routines, making it the ideal solution for quality control labs, R&D facilities, and production environments working with metals and alloys.\n\nWith PAX-it, metallurgists can perform nodularity analysis for cast irons, decarburization depth measurements, coating thickness analysis, and weld quality inspections. The software's calibrated measurement tools ensure accurate, repeatable results that meet international standards.\n\nKey capabilities include automated grain boundary detection, statistical analysis of particle distributions, customizable reporting templates for compliance documentation, and seamless integration with PAXcam microscope cameras for consistent image capture.",
  },
  {
    slug: "materials-science",
    title: "Materials Science",
    description: "Characterize polymers, ceramics, composites, and advanced materials with precision imaging tools.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    content: "Materials scientists rely on PAX-it for comprehensive characterization of polymers, ceramics, composites, and advanced materials. The software provides tools for fiber orientation analysis, porosity measurement, layer thickness evaluation, and surface roughness characterization.\n\nPAX-it supports multiple imaging modalities including brightfield, darkfield, polarized light, and fluorescence microscopy, enabling researchers to capture the full picture of their materials. Advanced image processing filters help reveal structures that may not be visible in raw images.\n\nThe database management system allows researchers to organize thousands of images with metadata tags, making it easy to compare samples across experiments, track material properties over time, and build comprehensive material databases for future reference.",
  },
  {
    slug: "quality-control",
    title: "Quality Control & Inspection",
    description: "Standardized measurement routines and compliance documentation for manufacturing QC.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    content: "PAX-it is the backbone of quality control laboratories worldwide, providing standardized measurement routines, automated inspection workflows, and comprehensive compliance documentation. From incoming material inspection to final product verification, PAX-it ensures consistency and traceability.\n\nThe software's 21 CFR Part 11 compliance module provides electronic signatures, audit trails, and access controls required for regulated industries including pharmaceutical, medical device, and aerospace manufacturing. Every measurement, annotation, and report modification is tracked and recorded.\n\nAutomated workflow capabilities allow QC managers to create standardized inspection procedures that technicians can follow step-by-step, ensuring consistent results regardless of operator experience. Results are automatically compiled into professional reports ready for customer delivery or regulatory submission.",
  },
  {
    slug: "aerospace",
    title: "Aerospace",
    description: "Critical component inspection and failure analysis for aerospace materials and coatings.",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    content: "Aerospace manufacturers and MRO facilities use PAX-it for critical component inspection, coating thickness measurement, and failure analysis. The software meets the demanding requirements of AS9100 quality systems and supports compliance with aerospace material specifications from Pratt & Whitney, GE, Rolls-Royce, and others.\n\nPAX-it provides specialized tools for thermal barrier coating analysis, electron beam weld inspection, turbine blade microstructure evaluation, and composite laminate characterization. The software's measurement accuracy and repeatability meet the tight tolerances required for flight-critical components.\n\nWith built-in support for multiple magnification calibrations and automated scale bar detection, PAX-it ensures measurements are accurate across different microscopes and objectives. The audit trail capabilities provide the documentation chain required for aerospace quality systems.",
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical",
    description: "FDA 21 CFR Part 11 compliant imaging for pharmaceutical quality and research.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    content: "PAX-it is trusted by pharmaceutical companies worldwide for FDA 21 CFR Part 11 compliant microscope image management and analysis. The software provides the electronic records, electronic signatures, and audit trail capabilities required by FDA regulations.\n\nPharmaceutical applications include particle size analysis, crystal characterization, foreign particle identification, tablet coating inspection, and raw material verification. PAX-it's measurement tools are validated for GMP environments and support IQ/OQ/PQ qualification protocols.\n\nThe software integrates with existing LIMS and quality management systems, allowing seamless data transfer and reducing the risk of transcription errors. Customizable report templates ensure consistent documentation that meets regulatory requirements for NDA submissions, ANDA filings, and routine batch release testing.",
  },
  {
    slug: "semiconductor",
    title: "Semiconductor & Electronics",
    description: "Wafer inspection, failure analysis, and process control for semiconductor manufacturing.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    content: "Semiconductor and electronics manufacturers rely on PAX-it for wafer inspection, die-level failure analysis, solder joint evaluation, and process control monitoring. The software handles the high-resolution imaging required for microelectronics inspection and provides automated measurement capabilities for critical dimensions.\n\nPAX-it supports various imaging techniques used in semiconductor analysis including brightfield, darkfield, DIC, and fluorescence microscopy. The software's image stitching capabilities allow users to create high-resolution composite images of large areas while maintaining measurement accuracy.\n\nAdvanced image analysis tools enable automated defect detection, pattern recognition, and dimensional measurement of interconnects, vias, and trace widths. Results can be exported to SPC systems for statistical process control monitoring.",
  },
  {
    slug: "forensics",
    title: "Forensics",
    description: "Evidence documentation, comparison microscopy, and chain-of-custody imaging.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    content: "Forensic laboratories use PAX-it for evidence documentation, comparison microscopy, and maintaining chain-of-custody records for microscopy images. The software's security features ensure image integrity and provide tamper-evident storage for digital evidence.\n\nPAX-it supports forensic applications including firearms and toolmark examination, trace evidence analysis, document examination, and controlled substance identification. The software's annotation and measurement tools allow examiners to document observations directly on images.\n\nThe audit trail capabilities track every access, modification, and export of image files, providing the documentation required for court proceedings. Role-based access controls ensure only authorized personnel can view or modify case files.",
  },
  {
    slug: "geology",
    title: "Geology & Petrography",
    description: "Thin section analysis, mineral identification, and petrographic documentation.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    content: "Geologists and petrographers use PAX-it for thin section analysis, mineral identification, and petrographic documentation under polarized light microscopy. The software's image capture capabilities preserve the full color and detail of mineral samples under crossed polars and plane-polarized light.\n\nPAX-it provides tools for grain size analysis, modal mineral analysis (point counting), porosity measurement, and fracture characterization. The software supports both transmitted and reflected light microscopy for ore mineral studies.\n\nResearchers can build comprehensive petrographic databases with detailed metadata including sample location, formation, depth, and mineralogical composition. The reporting tools generate professional petrographic reports with annotated images, measurement data, and mineral identification charts.",
  },
  {
    slug: "coatings-analysis",
    title: "Coatings Analysis",
    description: "Coating thickness, adhesion testing, and cross-section analysis for surface treatments.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    content: "PAX-it provides specialized tools for coating thickness measurement, adhesion testing documentation, and cross-section analysis of surface treatments. The software supports analysis of thermal spray coatings, electroplated layers, anodized surfaces, paint systems, and thin film coatings.\n\nAutomated coating thickness measurement routines allow operators to quickly collect multiple measurements across a sample, with results automatically compiled into statistical summaries. The software supports both single-layer and multi-layer coating analysis.\n\nPAX-it meets the requirements of coating inspection standards including ASTM B487, ASTM B681, and ISO 1463. Customizable reporting templates help laboratories produce professional inspection reports that satisfy customer specifications and industry standards.",
  },
  {
    slug: "weld-measurement",
    title: "Weld Measurement",
    description: "Weld cross-section analysis, HAZ measurement, and defect documentation.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    content: "PAX-it is widely used for weld quality inspection, providing tools for cross-section analysis, heat-affected zone (HAZ) measurement, penetration depth analysis, and defect documentation. The software supports both macro and micro examination of welds per AWS, ASME, and ISO welding standards.\n\nWelding engineers use PAX-it to measure weld geometry including throat thickness, leg length, penetration depth, and reinforcement height. The software's automated measurement tools reduce inspection time while ensuring consistent, accurate results.\n\nPAX-it's reporting capabilities generate professional weld inspection reports with annotated cross-section images, dimensional measurements, and pass/fail criteria based on applicable codes and standards. The database system allows quality teams to track weld quality trends across projects and welders.",
  },
  {
    slug: "education",
    title: "Education",
    description: "Teaching microscopy, student lab documentation, and research image management.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    content: "Educational institutions worldwide use PAX-it for teaching microscopy, managing student lab documentation, and supporting faculty research. The software's intuitive interface makes it easy for students to capture, annotate, and submit microscopy images as part of their coursework.\n\nPAX-it supports multi-user environments with individual student accounts, shared class folders, and instructor review capabilities. Students can build their own image portfolios while instructors maintain oversight of all lab work.\n\nThe software's site licensing model makes it affordable for educational institutions, and the same powerful analysis tools used in industry prepare students for careers in materials science, biology, geology, and quality control. Network licensing allows installation across multiple classroom and lab computers.",
  },
  {
    slug: "clinical-pathology",
    title: "Clinical & Anatomical Pathology",
    description: "Histological imaging, cell counting, and pathology slide documentation.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    content: "Pathology laboratories use PAX-it for histological imaging, cell counting, tissue measurement, and slide documentation. The software provides tools for capturing and annotating images from both routine histology and specialized staining procedures.\n\nPAX-it supports whole-slide scanning workflows, allowing pathologists to capture and review large tissue sections at multiple magnifications. The software's measurement tools enable accurate assessment of tumor margins, invasion depth, and other critical diagnostic parameters.\n\nWith 21 CFR Part 11 compliance capabilities, PAX-it meets the regulatory requirements for clinical laboratories. The software integrates with laboratory information systems (LIS) for seamless case management and result reporting.",
  },
  {
    slug: "automotive",
    title: "Automotive",
    description: "Component inspection, material verification, and failure analysis for automotive manufacturing.",
    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    content: "Automotive manufacturers and suppliers use PAX-it for incoming material inspection, in-process quality control, and failure analysis. The software supports analysis of cast irons, steels, aluminum alloys, and other materials used in automotive components.\n\nPAX-it provides tools for microstructure evaluation, case depth measurement, decarburization analysis, and inclusion rating that meet automotive OEM specifications from Ford, GM, Toyota, and other manufacturers. Automated measurement routines ensure consistent results across shifts and operators.\n\nThe software's database management capabilities allow automotive quality teams to maintain searchable archives of inspection images, track material quality trends, and quickly retrieve historical data for customer inquiries or warranty investigations.",
  },
];
