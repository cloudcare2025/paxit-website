import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "PAXcamX Microscope Cameras",
  description: "PAXcamX - Feature-rich, high-resolution digital microscope cameras with Sony Pregius CMOS sensors and USB 3.1 connectivity.",
};

const cameraModels = [
  {
    model: "PAXcamX3",
    sensor: "Sony Pregius IMX265",
    resolution: "3.2 MP (2064 x 1544)",
    sensorSize: '1/1.8"',
    cMount: "0.5x",
    fpsFull: "65",
    fpsHalf: "166",
    dynamic: "73.56 dB",
    shutter: "0.01\u00B5s \u2013 11s",
    fileSize: "9.6 MB",
    partBase: "PX3-24",
  },
  {
    model: "PAXcamX5",
    sensor: "Sony Pregius IMX264",
    resolution: "5.1 MP (2464 x 2056)",
    sensorSize: '2/3"',
    cMount: "0.67x",
    fpsFull: "55",
    fpsHalf: "100",
    dynamic: "70.53 dB",
    shutter: "0.01\u00B5s \u2013 14s",
    fileSize: "15.2 MB",
    partBase: "PX5-24",
  },
  {
    model: "PAXcamX12",
    sensor: "Sony Pregius IMX304",
    resolution: "12.3 MP (4112 x 3008)",
    sensorSize: '1.1"',
    cMount: "1.0x",
    fpsFull: "35",
    fpsHalf: "70",
    dynamic: "73.22 dB",
    shutter: "0.01\u00B5s \u2013 15s",
    fileSize: "37.1 MB",
    partBase: "PX12-24",
  },
];

const features = [
  "Unique easy-to-use interface with true plug-and-play installation in minutes",
  "Scientific-grade Sony Pregius Series color CMOS sensors",
  "Micron/Scale bar on live and captured images",
  "No additional hardware required \u2014 USB3 direct connection",
  "Time-lapse image capture and AVI video clip capture",
  "Single cable for power, control, and data transfer",
  "Multiple cameras on one computer via USB3 hubs",
  "Standard C-mount \u2014 connects to any microscope brand",
  "Customizable image overlays and video text overlays",
  "Automatic exposure & Auto White Balance with user presets",
];

const applications = [
  "Brightfield microscopy",
  "Polarized light",
  "Reflected & transmitted light",
  "Nomarski DIC",
  "Macro imaging",
  "Quality inspection",
];

export default function MicroscopeCamerasPage() {
  return (
    <>
      <PageHero
        title="PAXcamX Digital Microscope Cameras"
        subtitle="Feature-rich, high-resolution digital microscope cameras with scientific-grade Sony Pregius CMOS sensors. Stunning image acquisition, unrivaled database software, and an attractive price."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact-us" size="lg">
            Request Pricing
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button href="#specs" variant="secondary" size="lg">View Specifications</Button>
        </div>
      </PageHero>

      {/* Camera Models - Visual Cards */}
      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-paxit-blue/[0.06] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-paxit-blue ring-1 ring-paxit-blue/[0.08]">
            Camera Models
          </span>
          <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-slate-900">
            Which Camera is Right for You?
          </h2>
          <p className="mt-4 text-slate-500">
            The main difference between PAXcamX models is the resulting resolution and light sensitivity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cameraModels.map((cam, i) => (
            <div
              key={cam.model}
              className={`relative overflow-hidden rounded-2xl border bg-white transition-all hover:shadow-xl ${
                i === 1 ? "border-paxit-blue/30 ring-1 ring-paxit-blue/10 shadow-lg" : "border-slate-200/70"
              }`}
            >
              {i === 1 && (
                <div className="bg-gradient-to-r from-paxit-blue to-paxit-blue-dark px-4 py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                  Most Popular
                </div>
              )}
              {i !== 1 && <div className="h-1 w-full bg-gradient-to-r from-slate-200 to-slate-300" />}

              {/* Camera visual */}
              <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100/50 py-10">
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg ${
                  i === 1 ? "bg-gradient-to-br from-paxit-blue to-paxit-blue-dark" : "bg-gradient-to-br from-slate-700 to-slate-900"
                }`}>
                  <svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-slate-900">{cam.model}</h3>
                <p className="mt-1 text-[13px] text-paxit-blue font-medium">{cam.sensor}</p>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-500">Resolution</span>
                    <span className="font-medium text-slate-900">{cam.resolution}</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-500">Sensor</span>
                    <span className="font-medium text-slate-900">{cam.sensorSize} CMOS</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-500">FPS (full res)</span>
                    <span className="font-medium text-slate-900">{cam.fpsFull} fps</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-500">FPS (half res)</span>
                    <span className="font-medium text-slate-900">{cam.fpsHalf} fps</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-500">Dynamic Range</span>
                    <span className="font-medium text-slate-900">{cam.dynamic}</span>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex justify-between text-[13px]">
                    <span className="text-slate-500">C-mount</span>
                    <span className="font-medium text-slate-900">{cam.cMount} adapter</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button href="/contact-us" className="w-full" size="sm" variant={i === 1 ? "primary" : "secondary"}>
                    Get Pricing
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper className="bg-slate-50" id="specs">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-paxit-blue/[0.06] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-paxit-blue ring-1 ring-paxit-blue/[0.08]">
              Features
            </span>
            <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight text-slate-900">
              Built for Professional Microscopy
            </h2>
            <ul className="mt-8 space-y-3.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-[14px] text-slate-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-paxit-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-paxit-blue/[0.06] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.15em] text-paxit-blue ring-1 ring-paxit-blue/[0.08]">
              Applications
            </span>
            <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight text-slate-900">
              Versatile Imaging
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {applications.map((app) => (
                <div key={app} className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
                  <div className="h-2 w-2 rounded-full bg-paxit-blue" />
                  {app}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white p-6">
              <h3 className="font-semibold text-slate-900">Common Specifications</h3>
              <div className="mt-4 space-y-3">
                {[
                  ["Interface", "USB 3.1"],
                  ["Pixel Size", "3.45 \u00B5m\u00B2"],
                  ["Output", "8/12-bit"],
                  ["QE", "64% max"],
                  ["Sensitivity", "4.3 DN(nj/cm\u00B2)"],
                  ["Formats", "BMP, JPG, TIF"],
                  ["Mount", "C-mount (standard)"],
                  ["Power", "USB bus powered"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-[13px]">
                    <span className="text-slate-500">{label}</span>
                    <span className="font-medium text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ready to upgrade your microscope camera?"
        subtitle="Contact us for pricing, compatibility questions, or to schedule a live demo. Multiple-camera systems also available."
        buttonText="Get Pricing"
      />
    </>
  );
}
