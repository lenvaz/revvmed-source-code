"use client";
import { Button } from "@/components/ui/button";
import { AnimatedStatistics } from "@/components/AnimatedStatistics";
import { AnimatedServices } from "@/components/AnimatedServices";
import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";
import { useRouter } from "next/navigation";
import { APP_NAME } from "@/lib/constants";
import ImageWithBasePath from "@/components/ImageWithBasePath";

export default function Home() {
  const { push } = useRouter();
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center hero-main-bg">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 w-full">
          {/* Content */}
          {/* Add a gradient background to the text */}
          <div className="max-w-2xl mx-auto lg:mx-0 bg-gradient-to-r from-white/100 to-gray-200/0 p-8 rounded-2xl">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-md">
              Healthcare
              <br />
              Solutions
              <br />
              is in{" "}
              <span className="text-primary font-bold">
                Our
                <br />
                DNA
              </span>
            </h1>
            <div className="mt-8">
              <Button
                className="bg-primary hover:bg-primary/70 text-primary-foreground px-8 py-6 text-lg shadow-md transition-colors duration-300"
                onClick={() => push("/contact-us")}
              >
                GET ONBOARD
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-800 mb-4">What We Do</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-5xl font-light text-primary/80 mb-8 leading-tight">
                Empowering
                <br />
                Performance
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                At {APP_NAME}, we provide a comprehensive suite of bespoke
                healthcare solutions, recognizing that every client's needs are
                distinct. With over 25 years of expertise in the healthcare
                sector, we specialize in designing, implementing, and managing
                tailored solutions that yield exceptional outcomes. From day
                one, our vision has been to forge strong partnerships with our
                clients, leveraging their existing initiatives to craft
                cost-effective strategies that align with their specific
                objectives and drive long-term success with optimal investment.
              </p>

              <div className="mt-8">
                {/* Add scroll to top */}
                <Button
                  variant="outline"
                  className="bg-accent hover:bg-accent/70 text-accent-foreground border-accent hover:border-accent/70 transition-colors duration-300"
                  onClick={() => push("/about-us/who-we-are")}
                >
                  Read More
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -top-12 -right-8 w-32 h-32 bg-primary/5 rounded-full" />
              <div className="absolute top-1/2 -left-8 w-24 h-24 bg-primary/10 rounded-full" />
              <div className="absolute -bottom-8 right-12 w-16 h-16 bg-primary/15 rounded-full" />

              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <ImageWithBasePath
                  src="/home_page_1.jpg"
                  alt="Healthcare professionals team"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>

              {/* Decorative Icons */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-md">
                <ImageWithBasePath src="/icons/medical-icon.svg" alt="" className="w-8 h-8" width={32} height={32} />
              </div>
              <div className="absolute bottom-12 -left-6 bg-white p-3 rounded-full shadow-md">
                <ImageWithBasePath src="/icons/dna-icon.svg" alt="" className="w-8 h-8" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AnimatedStatistics />
      <AnimatedServices />
      <AnimatedTestimonials />
    </>
  );
}
