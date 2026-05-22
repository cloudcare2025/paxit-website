"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function SupportForm() {
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
        <h3 className="mt-4 text-lg font-semibold text-green-900">Support Request Submitted</h3>
        <p className="mt-2 text-sm text-green-700">
          Our support team will review your request and respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="support-name" className="block text-sm font-medium text-slate-700">
            Full Name *
          </label>
          <input
            type="text"
            id="support-name"
            name="name"
            required
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
          />
        </div>
        <div>
          <label htmlFor="support-email" className="block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            type="email"
            id="support-email"
            name="email"
            required
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
          />
        </div>
      </div>
      <div>
        <label htmlFor="support-category" className="block text-sm font-medium text-slate-700">
          Issue Category *
        </label>
        <select
          id="support-category"
          name="category"
          required
          className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
        >
          <option value="">Select a category</option>
          <option value="installation">Installation & Setup</option>
          <option value="camera">Camera / Hardware Issue</option>
          <option value="software">Software Bug / Error</option>
          <option value="licensing">Licensing & Activation</option>
          <option value="feature">Feature Request</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="support-version" className="block text-sm font-medium text-slate-700">
          PAX-it Version
        </label>
        <input
          type="text"
          id="support-version"
          name="version"
          placeholder="e.g., PAX-it 10.2"
          className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
        />
      </div>
      <div>
        <label htmlFor="support-description" className="block text-sm font-medium text-slate-700">
          Description *
        </label>
        <textarea
          id="support-description"
          name="description"
          rows={5}
          required
          placeholder="Please describe your issue in detail..."
          className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-paxit-blue focus:ring-1 focus:ring-paxit-blue"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Submit Support Request
      </Button>
    </form>
  );
}
