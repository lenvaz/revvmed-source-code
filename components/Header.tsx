"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { basePath } from "@/lib/basePath";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change background after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "ABOUT US",
      href: `${basePath}/about-us`,
      children: [
        { label: "Who We Are", href: `${basePath}/about-us/who-we-are` },
        { label: "Our People", href: `${basePath}/about-us/people` },
        { label: "Infrastructure", href: `${basePath}/about-us/infrastructure` },
      ],
    },
    {
      label: "FOR PAYER",
      href: `${basePath}/for-payer`,
      children: [
        { label: "Overview Payer", href: `${basePath}/for-payer` },
        { label: "Record Retrieval", href: `${basePath}/for-payer/record-retrieval` },
        { label: "Medical Record Coding", href: `${basePath}/for-payer/medical-coding` },
        { label: "Medical Record Abstraction", href: `${basePath}/for-payer/abstraction` },
        { label: "Reporting and Analytics", href: `${basePath}/for-payer/analytics` },
        {
          label: "Supplemental Services",
          href: `${basePath}/for-payer/supplemental-services`,
        },
      ],
    },
    {
      label: "FOR PROVIDER/MSO",
      href: `${basePath}/for-provider-mso`,
      children: [
        { label: "Overview Provider", href: `${basePath}/for-provider-mso` },
        {
          label: "Revenue Cycle Management",
          href: `${basePath}/for-provider-mso/revenue-cycle`,
        },
        { label: "Risk Adjustment", href: `${basePath}/for-provider-mso/risk-adjustment` },
        {
          label: "Claims, Analytics and Reporting",
          href: `${basePath}/for-provider-mso/claims-management`,
        },
        { label: "HEDIS Quality Measures", href: `${basePath}/for-provider-mso/hedis` },
        {
          label: "Supplemental Services",
          href: `${basePath}/for-provider-mso/supplemental-services`,
        },
      ],
    },
    {
      label: "FOR DME",
      href: `${basePath}/for-dme`,
      children: [
        { label: "Overview- DME", href: `${basePath}/for-dme` },
        { label: "Order Management", href: `${basePath}/for-dme/order-management` },
        { label: "Authorization Management", href: `${basePath}/for-dme/authorization` },
        { label: "Medical Billing", href: `${basePath}/for-dme/medical-billing` },
        { label: "Customer Support", href: `${basePath}/for-dme/customer-service` },
      ],
    },
    { label: "CONTACT US", href: `${basePath}/contact-us` },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Revvmed</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={`font-medium transition-colors duration-200 bg-transparent ${
                            isScrolled
                              ? "text-foreground hover:text-black hover:bg-accent/10"
                              : "text-foreground hover:text-black hover:bg-white/10"
                          }`}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <NavigationMenuLink
                                key={child.label}
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-black focus:bg-accent/10 focus:text-black"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {child.label}
                                </div>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        className={`font-medium transition-colors duration-200 inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm ${
                          isScrolled
                            ? "text-foreground hover:text-accent hover:bg-accent/10"
                            : "text-foreground hover:text-accent hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact-us">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 transition-colors duration-200">
                BECOME A HERO
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t transition-colors duration-300 ${
              isScrolled
                ? "border-border bg-background"
                : "border-border bg-muted"
            }`}
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block text-foreground hover:text-primary font-medium py-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block text-muted-foreground hover:text-primary text-sm py-1 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact-us">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 transition-colors duration-200">
                    BECOME A HERO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
