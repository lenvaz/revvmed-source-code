import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revvmed | Healthcare Solutions for Everyone",
  description: "Revvmed provides comprehensive healthcare solutions including services for payers, providers, NGOs, and SMEs. Healthcare solutions is in our DNA.",
  openGraph: {
    title: "revvmed | Healthcare Solutions for Everyone",
    description: "Revvmed provides comprehensive healthcare solutions including services for payers, providers, NGOs, and SMEs. Healthcare solutions is in our DNA.",
    url: "https://revvmed.com/",
    siteName: "Revvmed",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 800,
        alt: "Revvmed - Healthcare Solutions for Everyone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revvmed | Healthcare Solutions for Everyone",
    description: "Revvmed provides comprehensive healthcare solutions including services for payers, providers, NGOs, and SMEs. Healthcare solutions is in our DNA.",
    images: ["/logo.jpeg"],
    site: "@revvmed",
  },
  metadataBase: new URL("https://revvmed.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Revvmed" />
        <meta name="keywords" content="healthcare, healthcare solutions, medical services, payer services, provider services, NGO services, SME healthcare, Revvmed" />
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; media-src 'self'; object-src 'none'; frame-src 'self' https://www.google.com; frame-ancestors 'none'; form-action 'self' https://formspree.io; connect-src 'self' https://formspree.io; base-uri 'self'; upgrade-insecure-requests;" 
        />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <link rel="canonical" href="https://revvmed.com/" />
      </head>
      <body
        className={`${raleway.variable} antialiased`}
      >
        <ErrorBoundary>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
