import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-3xl font-black tracking-tight text-brand-gold">
                    AE
                  </span>
                </div>
                <div className="flex flex-col -mt-1">
                  <span className="text-sm font-bold text-primary-foreground tracking-wider">
                    ARYAN
                  </span>
                  <div className="h-0.5 bg-brand-red w-full"></div>
                  <span className="text-xs font-semibold text-primary-foreground tracking-wider">
                    EVENTS
                  </span>
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Creating unforgettable moments and extraordinary experiences for over 15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/80 hover:text-brand-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Popular Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Marriage Functions</li>
              <li>Stage Decorations</li>
              <li>Sound & Light Works</li>
              <li>Photography & Videography</li>
              <li>Catering Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm flex items-center">
              © {currentYear} Aryan Events. Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-brand-red fill-current" /> in Kerala
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
