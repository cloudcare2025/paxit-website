import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/sections/CTABanner";
import HardwareContent from "./HardwareContent";

export const metadata: Metadata = {
  title: "Microscopes and Imaging Hardware",
  description: "PAXcam microscope cameras and imaging hardware. Complete microscopy solutions including microscopes, cameras, stages, and accessories.",
};

export default function ImagingHardwarePage() {
  return (
    <>
      <PageHero
        title="Microscopes and Imaging Hardware"
        subtitle="PAXcam microscope cameras adapt easily to a multitude of brands and styles of microscopes and macrostands, through standard C-mount couplers provided by MIS."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/imaging-hardware/microscope-cameras" size="lg">PAXcamX Cameras</Button>
          <Button href="/contact-us" variant="secondary" size="lg">Contact Us</Button>
        </div>
      </PageHero>

      <SectionWrapper>
        <div className="mx-auto max-w-3xl mb-12">
          <p className="text-lg text-slate-600 leading-relaxed">
            In addition to our standard PAXcam and software packages, our team is experienced with systems integration for meeting the demanding needs of specialty lab projects. This may include customized optics as the front end for the camera system, specialty lighting, staging, controls, and more.
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Many clients take advantage of our ability to provide the total package of hardware and software, and we will be happy to discuss your particular requirements to provide the perfect integrated system to meet your needs.
          </p>
        </div>
      </SectionWrapper>

      <HardwareContent />

      <CTABanner
        title="Need help choosing the right hardware?"
        subtitle="Contact MIS for more information on putting together a system for you that can include any of the hardware components."
        buttonText="Contact Us"
      />
    </>
  );
}
