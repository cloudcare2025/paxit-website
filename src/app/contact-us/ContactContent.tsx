"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInLeft, fadeInRight } from "@/lib/animations";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactContent() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="lg:col-span-3"
          >
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-slate-600">
              Fill out the form below and we&apos;ll get back to you within one business day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-lg font-semibold text-slate-900">Contact Information</h3>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paxit-blue/10 text-paxit-blue">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Midwest Information Systems</p>
                    <p className="mt-1 text-sm text-slate-600">707 N. Iowa Avenue<br />Villa Park, IL 60181</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paxit-blue/10 text-paxit-blue">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <a href="tel:+16302794000" className="mt-1 text-sm text-paxit-blue hover:underline">+1 630-279-4000</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paxit-blue/10 text-paxit-blue">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <a href="mailto:info@paxit.com" className="mt-1 text-sm text-paxit-blue hover:underline">info@paxit.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Business Hours</p>
                <p className="mt-2 text-sm text-slate-700">Monday - Friday: 8:00 AM - 5:00 PM CST</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
