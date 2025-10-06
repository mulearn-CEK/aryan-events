import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg-custom" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-primary-foreground hover:text-brand-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="default"
              className="bg-brand-gold hover:bg-brand-gold/90 text-primary font-semibold"
              onClick={() => scrollToSection("#contact")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-primary/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground hover:text-brand-gold transition-colors duration-300 font-medium text-left px-4 py-2 active:bg-primary-foreground/10"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="default"
                className="bg-brand-gold hover:bg-brand-gold/90 text-primary font-semibold mx-4"
                onClick={() => scrollToSection("#contact")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
