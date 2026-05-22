"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";

const timeline = [
  { year: "1988", title: "Founded", description: "Seth Groteluschen founds Midwest Information Systems with a vision to simplify and accelerate microscope image digitization." },
  { year: "1991", title: "PAX System", description: "MIS introduces the first generation PAX System (Picture, Archival, Transmission), a groundbreaking DOS-based platform for microscope imaging." },
  { year: "1994", title: "PAX-it for Windows", description: "Release of PAXIT for Windows, quickly adopted across industries for its intuitive image management, measurement, and analysis capabilities." },
  { year: "2000s", title: "Industry Leader", description: "PAX-it becomes the most widely used microscopy imaging software, with thousands of installations at Fortune 1000 companies worldwide." },
  { year: "2010s", title: "PAXcam Cameras", description: "Launch of the PAXcam family of digital microscope cameras, providing seamless hardware-software integration for complete imaging solutions." },
  { year: "2025", title: "A New Chapter", description: "MIS enters its next stage of growth with new leadership under Michael Williams, continuing the mission of making imaging software stronger, faster, and more capable." },
];

const clientLogos = [
  "Merck", "Ford", "Exxon", "Honda", "Intel", "NASA",
  "DuPont", "TRW", "Mercedes-Benz", "Rolls-Royce",
];

export default function AboutContent() {
  return (
    <>
      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-paxit-blue">Our Journey</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 md:text-4xl">35+ Years of Innovation</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 md:left-1/2" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={`relative mb-12 flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
                      <span className="text-sm font-bold text-paxit-blue">{item.year}</span>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-paxit-blue text-sm font-bold text-white shadow-lg">
                    {item.year.slice(-2)}
                  </div>
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-paxit-blue">Our Team</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 md:text-4xl">Built by Imaging Experts</h2>
              <p className="mt-4 text-lg text-slate-600">
                The strength of MIS has always come from the people behind it. Our team includes some of the most experienced professionals in microscopy, digital imaging, and software development. With employees who bring many years of experience to the team, we provide our customers with a level of knowledge and support that is rare in the imaging world.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                Even as MIS entered its next chapter in 2025 with new leadership, the core team remained steady. The same engineers, developers, support specialists, and imaging experts who helped build PAXIT and PAXcam continue to refine and improve them today. Our commitment to reliability, innovation, and customer service has not changed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mx-auto max-w-2xl text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-paxit-blue">Our Clients</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 md:text-4xl">Trusted Worldwide</h2>
              <p className="mt-4 text-lg text-slate-600">
                The Fortune 1000 companies shown here are just a few of the many that rely on PAX-it. PAX-it has been a foundational product in microscopy labs for over twenty-five years. More images have been viewed, captured, measured, analyzed, shared, and printed with PAX-it than any other product.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              {clientLogos.map((name) => (
                <div
                  key={name}
                  className="flex h-20 items-center justify-center rounded-xl border border-slate-200/60 bg-slate-50 px-6"
                >
                  <span className="text-lg font-bold tracking-tight text-slate-400">
                    {name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
