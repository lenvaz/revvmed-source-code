import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";
import { APP_NAME } from "@/lib/constants";
import ImageWithBasePath from "@/components/ImageWithBasePath";

export const metadata: Metadata = {
  title: `Who We Are | ${APP_NAME}`,
  description: `Learn about our company, vision, mission, and corporate social responsibility initiatives at ${APP_NAME}.`,
};

export default function WhoWeArePage() {
  return (
    <div className="w-full">
      {/* Company Introduction with Background */}
      <div className="w-full relative bg-gradient-to-r from-primary/10 to-accent/10 mb-16">
        <HeroSection
          title="About the Company"
          description={`Founded in 1999, ${APP_NAME} has been at the vanguard of delivering cutting-edge healthcare solutions, transforming the way healthcare organizations optimize their operations and enhance patient outcomes. Our expertise extends across a broad spectrum of healthcare entities, including physicians, independent practitioners, HMOs, ACOs, IPAs, MSOs, DME manufacturers, and payers.`}
          contentClassName="bg-white/60 w-fit rounded-2xl"
        />
      </div>

      {/* Vision & Mission Section */}
      <div className="px-4 mb-8">
        <div className="grid md:grid-cols-2">
          <Card className="p-8 bg-card/50 hover:bg-primary hover:border-primary/20 hover:text-primary-foreground transition-all duration-300 shadow-none border-none hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p>
              Our vision is to redefine healthcare solutions by fostering
              innovation, optimizing operational efficiencies, and delivering
              unparalleled value to healthcare providers and payers. We aspire
              to create a transformative healthcare ecosystem where technology
              and human expertise integrate seamlessly to elevate patient care,
              alleviate administrative burdens, and enhance financial
              performance. By remaining at the forefront of industry
              advancements, we seek to be the trusted partner that reshapes
              healthcare delivery, ensuring sustainable growth for our clients
              and superior health outcomes for all.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 hover:bg-primary hover:border-primary/20 hover:text-primary-foreground transition-all duration-300 shadow-none border-none hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p>
              Our mission is to empower healthcare organizations with pioneering
              solutions that elevate performance, streamline operations, and
              drive exceptional patient care. We are committed to developing
              innovative, data-driven strategies tailored to each client's
              unique needs. Upholding the highest standards of integrity,
              transparency, and excellence, we collaborate closely with our
              partners to optimize workflows, mitigate inefficiencies, and
              advance the overall healthcare experience. Through continuous
              learning, strategic adaptation, and steadfast collaboration, we
              strive to make a meaningful and lasting impact on the healthcare
              industry while cultivating enduring partnerships with our clients.
            </p>
          </Card>
        </div>
      </div>

      {/* CSR Section */}
      <Card className="p-8 bg-card/50 hover:bg-card/80 transition-colors duration-300 shadow-none border-none mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Corporate Social Responsibility
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-card-foreground">
              At {APP_NAME} we believe in making a meaningful impact beyond
              business. Our Corporate Social Responsibility (CSR) initiatives
              are deeply rooted in our commitment to community development,
              sustainability, and ethical responsibility. From supporting
              healthcare accessibility for underserved communities to
              implementing environmentally sustainable practices, we strive to
              create a lasting, positive change. By integrating CSR into our
              core business strategies, we aim to drive social progress while
              maintaining the highest standards of corporate ethics and
              responsibility.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300">
            <ImageWithBasePath
              src="/about_us_1.jpg"
              alt="CSR Initiative"
              className="rounded-2xl object-cover w-full h-full"
              width={500}
              height={300}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
