import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury event decoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      </div>

      {/* Diagonal Design Element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-red transform skew-x-12 origin-top-right opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="text-brand-gold h-6 w-6 animate-float" />
            <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm">
              Premium Event Management
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-primary-foreground">Creating</span>
            <br />
            <span className="text-brand-gold">Unforgettable</span>
            <br />
            <span className="text-primary-foreground">Moments</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Transform your special occasions into extraordinary experiences with Aryan Events. 
            From elegant weddings to corporate functions, we bring your vision to life with 
            unparalleled expertise and attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-primary font-bold text-lg px-8 py-6 shadow-glow"
              onClick={() => scrollToSection("#contact")}
            >
              Plan Your Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6"
              onClick={() => scrollToSection("#services")}
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            <div className="animate-scale-in">
              <div className="text-4xl font-black text-brand-gold mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80 font-medium">Events Completed</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-black text-brand-gold mb-2">15+</div>
              <div className="text-sm text-primary-foreground/80 font-medium">Years Experience</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-black text-brand-gold mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
