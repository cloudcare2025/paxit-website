import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "PAXIT by MIS privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Last updated: January 1, 2025" />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose prose-slate prose-headings:font-heading prose-headings:text-slate-900 prose-a:text-paxit-blue">
          <h2 className="text-2xl font-bold mt-0">Introduction</h2>
          <p className="text-slate-600 leading-relaxed">
            Midwest Information Systems (&quot;MIS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information when you visit our website or use our products and services.
          </p>

          <h2 className="text-2xl font-bold mt-10">Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="text-slate-600 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you fill out forms on our website.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers.</li>
            <li><strong>Communication Data:</strong> Records of correspondence when you contact us for support or inquiries.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10">How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed">We use the information we collect to:</p>
          <ul className="text-slate-600 space-y-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you product information, updates, and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10">Information Sharing</h2>
          <p className="text-slate-600 leading-relaxed">
            We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold mt-10">Data Security</h2>
          <p className="text-slate-600 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold mt-10">Cookies</h2>
          <p className="text-slate-600 leading-relaxed">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold mt-10">Your Rights</h2>
          <p className="text-slate-600 leading-relaxed">
            Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at the information provided below.
          </p>

          <h2 className="text-2xl font-bold mt-10">Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="text-slate-600 leading-relaxed">
            Midwest Information Systems<br />
            707 N. Iowa Avenue<br />
            Villa Park, IL 60181<br />
            Phone: +1 630-279-4000<br />
            Email: info@paxit.com
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
