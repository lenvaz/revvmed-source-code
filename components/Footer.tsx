export default function Footer() {
  const navigationLinks = [
    { label: "About Us", href: "/about-us/who-we-are" },
    { label: "For Payer", href: "/for-payer" },
    { label: "For Provider/MSO", href: "/for-provider-mso" },
    { label: "For DME", href: "/for-dme" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Our Departments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Departments</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:underline transition-all duration-200 hover:text-primary-foreground/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="hover:text-primary-foreground/70 transition-colors duration-200">
                <a href="tel:+17098962987">+1 (709) 896 2987</a>
              </p>
              <p className="hover:text-primary-foreground/70 transition-colors duration-200">
                <a href="mailto:admin@revvmed.com">admin@revvmed.com</a>
              </p>
              <p className="text-primary-foreground/80">
                4 Kap. Arun Chopra Ave, 60, B...
              </p>
              <p className="text-primary-foreground/80">
                CA - United States, 95134, USA
              </p>
            </div>
          </div>

          {/* Company Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About Revvmed</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Excepteur Sint Occaecat Cupidatat Non Proident, sunt in culpa qui 
              aliquam deserunt mollit anim laborum. Sed ut perspiciatis unde omnis 
              iste aut sit voluptatem sed unde omnis iste natus error sit voluptatem. 
              Healthcare solutions is in our DNA, and we are committed to providing 
              comprehensive healthcare services across all sectors.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Revvmed Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
