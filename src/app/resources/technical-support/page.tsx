import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SupportForm from "@/components/forms/SupportForm";

export const metadata: Metadata = {
  title: "Technical Support",
  description: "Get technical support for PAX-it software and PAXcam cameras. Submit a support request or contact our team directly.",
};

const supportOptions = [
  {
    title: "Phone Support",
    description: "Call us directly for immediate assistance with your PAX-it or PAXcam products.",
    detail: "+1 630-279-4000",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    title: "Email Support",
    description: "Send us an email and we'll respond within one business day.",
    detail: "support@paxit.com",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    title: "Remote Assistance",
    description: "Our team can connect remotely to help diagnose and resolve technical issues.",
    detail: "By appointment",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function TechnicalSupportPage() {
  return (
    <>
      <PageHero
        title="Technical Support"
        subtitle="Our experienced support team is here to help you get the most out of your PAX-it software and PAXcam cameras."
      />

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {supportOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-slate-200/60 bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-paxit-blue/10 text-paxit-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={option.icon} />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{option.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{option.description}</p>
              <p className="mt-3 text-sm font-semibold text-paxit-blue">{option.detail}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-slate-900">Submit a Support Request</h2>
          <p className="mt-2 text-slate-600">
            Fill out the form below and our support team will review your request and respond within one business day.
          </p>
          <div className="mt-8">
            <SupportForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
