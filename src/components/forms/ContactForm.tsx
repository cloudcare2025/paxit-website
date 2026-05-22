"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xdkodwjz", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-900">Message Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for your interest. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
          />
        </div>
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-slate-700">
          Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
        >
          <option value="">Select an option</option>
          <option value="software">PAX-it Software</option>
          <option value="cameras">PAXcam Cameras</option>
          <option value="hardware">Microscopes & Hardware</option>
          <option value="21cfr">21 CFR Part 11 Compliance</option>
          <option value="demo">Product Demo</option>
          <option value="pricing">Pricing Information</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
