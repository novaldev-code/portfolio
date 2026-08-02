import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { CertificateCard } from "@/components/shared/certificate-card";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="section-container flex flex-col gap-14">
        <SectionTitle
          eyebrow="Certificates"
          title="Continuous learning, verified"
          description="A selection of courses and certifications I've completed along the way."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.id} delay={index * 0.06}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
